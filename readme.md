# Hotstar Ad Muter

Welcome to Hotstar Ad Muter! This Chrome extension automatically mutes ads on Hotstar and unmutes when the ad stops. Enjoy uninterrupted viewing experience without the annoyance of ads!

## Features

- **Ad Muting**: Automatically mutes video ads on Hotstar.
- **Unmute After Ads**: Restores sound when ads are over.
- **Easy Control**: Simple user interface for starting and stopping ad muting.

## Installation

Follow these steps to install Hotstar Ad Muter:

1. **Clone the Repository**: Clone or download this repository to your local machine.

    ```sh
    git clone https://github.com/chiragbadhe/Hotstar-Ad-Muter.git
    ```

2. **Compile TypeScript**: If you're using TypeScript, compile the TypeScript code to JavaScript. Refer to the [Compilation](#compilation) section below for instructions.

3. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch in the top right corner.
   - Click **Load unpacked** and select the `hotstar-ad-muter` directory.

4. **Enjoy Ad-Free Viewing**: Navigate to Hotstar, click on the Hotstar Ad Muter extension icon, and start enjoying ad-free entertainment!

## Compilation

If you're using TypeScript, you need to compile the TypeScript code to JavaScript before loading the extension into Chrome. Here's how you can do it:

### Using TypeScript Compiler (`tsc`)

1. Install TypeScript globally:

    ```sh
    npm install -g typescript
    ```

2. Run the TypeScript compiler (`tsc`) in the project directory:

    ```sh
    tsc
    ```

### Using Webpack

1. Install Webpack and TypeScript dependencies:

    ```sh
    npm install webpack webpack-cli ts-loader typescript --save-dev
    ```

2. Run Webpack to compile the TypeScript code:

    ```sh
    npx webpack
    ```

## Usage

1. **Navigate to Hotstar**: Open your favorite TV show or movie on Hotstar.

2. **Control Ad Muting**: Click on the Hotstar Ad Muter extension icon in the Chrome toolbar.
   - Click **Start** to begin muting ads.
   - Click **Stop** to disable ad muting.

## Contributing

Contributions are welcome! If you'd like to contribute to Hotstar Ad Muter, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Enjoy uninterrupted entertainment on Hotstar with Hotstar Ad Muter!** 🎉
