import fs from 'fs'
import path from 'path'

// Function responsible to log the message into log.txt file 
function logMessage(message) {
    const log = `${new Date().toISOString()} - ${message}\n`;
    const logPath = path.join('log.txt');

    fs.appendFileSync(logPath, log);
    console.log('Message logged in log.txt file successfully!');
}


// Function responsible to execute the functionality `logMessage` with command line
const args = process.argv.slice(2);
if (args.length > 0) {
    logMessage(args.join(' '));
} else {
    console.log('Please provide a message to log.');
}