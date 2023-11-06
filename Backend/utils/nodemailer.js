const nodemailer = require("nodemailer");
const ErorrHandler = require("./ErrorHandler");

exports.sendmail = (req, res, next, url) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        post: 465,
        auth: {
            user: process.env.MAIL_EMAIL_ADDRESS,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: "Master Private Limited",
        to: req.body.email,
        subject: "Password Reset OTP",
        // "text": "Do not share this link to anyone",
        html: `<h1>Password rest OTP</h1>
        <h3>${url}</h3>`,
    };

    transport.sendMail(mailOptions, (err, info) => {
        if (err) return next(new ErorrHandler(err, 500));
        console.log(info);

        return res.status(200).json({
            message: "mail sent successfully",
            url,
        });
    });
};