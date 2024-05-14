const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
        user: 'xxxxx@qq.com',
        pass: '你的授权码'
    },
});

async function main() {
    const info = await transporter.sendMail({
        from: '"guang" <xxxxx@qq.com>',
        to: "xxxxx@qq.com",
        subject: "Hello 111", 
        text: "xxxxx"
    });

    console.log("邮件发送成功：", info.messageId);
}

main().catch(console.error);
