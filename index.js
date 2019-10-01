/**
 * A console logger that can only log \"Hello World\".
 */
const helloWorldLogger = {
    /**
     * Logs "Hello World" to the console.
     */
    logHelloWorld: () => console.log('Hello World'),
};

module.exports = helloWorldLogger;
