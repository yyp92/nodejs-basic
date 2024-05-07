/**
 * * 不同的 transport 要指定不同的格式
 */
import winston from 'winston';

// 用 createLogger 创建了 logger 实例，指定 level、format、tranports
const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            ),
        }),
        
        new winston.transports.File({ 
            dirname: 'log3',
            filename: 'test.log',
            format: winston.format.json()
        }),
    ]
})

logger.info('光光光光光光光光光');
logger.error('东东东东东东东东');
logger.debug(66666666);

