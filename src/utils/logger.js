import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
        ),
    
    transports: [
        new transports.File({
            maxSize: 5120000,
            maxFiles:5,
            filename: `src/logs/log_api.txt`
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
});

logger.on('error', (error) => {
    console.error('Error en el logger:', error);
});


export default logger; // Cambiado el nombre aquí
