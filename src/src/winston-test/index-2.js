/**
 * * 按日期生成文件
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

        // 按日期生成文件
        new winston.transports.DailyRotateFile({
            level: 'info',
            dirname: 'log2',
            filename: 'test-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH-mm',
            maxSize: '1k'
        })
    ]
})

logger.info('光光光光光光光光光');
logger.error('东东东东东东东东');
logger.debug(66666666);
