/**
 * * 按文件名生成
 */
import winston from 'winston';

// 用 createLogger 创建了 logger 实例，指定 level、format、tranports
const logger = winston.createLogger({
    // 打印的日志级别
    level: 'debug',

    // 日志格式
    format: winston.format.simple(),

    // 日志的传输方式
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ 
            dirname: 'log',
            filename: 'test.log',

            // maxsize 为 1024 字节，也就是 1kb
            maxsize: 1024
        }),
    ]
})

logger.info('光光光光光光光光光');
logger.error('东东东东东东东东');
logger.debug(66666666);
