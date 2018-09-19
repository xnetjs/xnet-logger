const Logger = require('./logger')
const ConsoleTransport = require('./transports/console')
const FileTransport = require('./transports/file')
const Transport = require('./transport')

let logger = new Logger({ objectMode: true })

let consoleTransport = new ConsoleTransport({ objectMode: true })
console.log(consoleTransport instanceof ConsoleTransport)
console.log(consoleTransport instanceof Transport)

logger.add(consoleTransport)
logger.add(new FileTransport({ path: './test.log', objectMode: true }))

logger.log('INFO', 'this is demo')
logger.log('DEBUG', 'this is demo')
logger.log('WARN', 'this is demo')
logger.log('ERROR', 'this is demo')
