/**
 * * 试试 http 的 transport
 * 
 * 需要搭建一个nest服务
 */
import winston from 'winston';
import 'winston-daily-rotate-file';

// 用 createLogger 创建了 logger 实例，指定 level、format、tranports
const logger = winston.createLogger({
    // 打印的日志级别
    level: 'debug',

    // 日志格式
    format: winston.format.simple(),

    // 日志的传输方式
    transports: [
        new winston.transports.Console(),

        new winston.transports.Http({
            host: 'localhost',
            port: '3000',
            path: '/log'
        })
    ]
})

logger.info('光光光光光光光光光');
logger.error('东东东东东东东东');
logger.debug(66666666);
