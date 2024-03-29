#!/usr/bin/env node

const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const { log } = require("console");
const program = require("caporal");
const fs = require("fs");
const { spawn } = require("child_process");
const chalk = require("chalk");

program
  .version("0.0.1")
  .argument("[filename]", "Name of a file to execute")
  .action(async ({ filename }) => {
    const name = filename || "index.js";
    try {
      await fs.promises.access(name);
    } catch (err) {
      throw new Error(`Could not find the file ${name}`);
    }

    let proc;
    const start = debounce(() => {
      if (proc) {
        proc.kill();
      }
      console.log(chalk.blue(">>>> Starting process..."));
      proc = spawn("node", [name], { stdio: "inherit" });
    }, 100);

    const change = debounce(() => {
      if (proc) {
        proc.kill();
      }
      console.log(chalk.blue(">>>> File changed..."));
      proc = spawn("node", [name], { stdio: "inherit" });
    }, 100);

    const deleted = debounce(() => {
      if (proc) {
        proc.kill();
      }
      console.log(chalk.blue(">>>> File deleted..."));
      proc = spawn("node", [name], { stdio: "inherit" });
    }, 100);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", change)
      .on("unlink", deleted);
  });

program.parse(process.argv);
