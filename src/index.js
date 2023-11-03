// I import my scrip app where I do the routing and server configurations
import app from './app.js';
import logger from './utils/logger.js';
// Through a blocking async function I make the call to listen on port 3000 and print in the console
async function main() {
    await app.listen(3000);
    logger.info('server running on port 3000');
}
// I call my main() method
main();
