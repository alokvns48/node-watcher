# Node-watcher

Node Watcher is a command-line tool similar to nodemon, designed to track changes in files and display their output. It provides an efficient way for developers to monitor their files during development, making it easier to debug and test changes.

## Installation

To use Node Watcher, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/node-watcher.git
    ```

2. Navigate into the project directory:
    ```sh
    cd node-watcher
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Link the package globally:
    ```sh
    npm link
    ```

## Usage

Once installed, you can use Node Watcher by executing the following command:

```sh
watcher filename
```

Replace filename with the name of the file you want to track.


To see usage information and details about the tool, you can use the -h flag:

```sh
watcher -h
```

## Dependencies

Node Watcher relies on the following npm packages:

- [Chokidar](https://www.npmjs.com/package/chokidar): A file-watcher library for Node.js.
- [Caporal](https://www.npmjs.com/package/caporal): A full-featured framework for building command-line applications.

In addition to npm packages, Node Watcher utilizes Node.js standard libraries such as `fs` (File System) and `child_process`.

## Contributing

Contributions are welcome! If you have suggestions, feature requests, or bug reports, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
