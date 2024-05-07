/**
 * * 日志可以通过 format 指定格式
 */
import winston from 'winston';

// 用 createLogger 创建了 logger 实例，指定 level、format、tranports
const logger = winston.createLogger({
    // 打印的日志级别
    level: 'debug',



    // 日志格式
    // format: winston.format.simple(),
    // format: winston.format.json(),
    // format: winston.format.prettyPrint(),

    // 用 combine 组合 timestamp 和 json
    // format: winston.format.combine(
    //     winston.format.label({label: '标签'}),
    //     winston.format.timestamp(),
    //     winston.format.json()
    // ),

    // 彩色
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),



    // 日志的传输方式
    transports: [
        new winston.transports.Console(),
    ]
})

logger.info('光光光光光光光光光');
logger.error('东东东东东东东东');
logger.debug(66666666);

