const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
        // user: 'xxxxx@qq.com',
        // pass: '你的授权码'
        user: '892973319@qq.com',
        pass: 'oghhoyhlsaqbbdjh'
    },
});

async function main() {
    const info = await transporter.sendMail({
        from: '"guang" <892973319@qq.com>',
        to: "892973319@qq.com",
        subject: "Hello 111", 
        text: "xxxxx"
    });

    console.log("邮件发送成功：", info.messageId);
}

main().catch(console.error);
