import nodemailer from 'nodemailer'
import { google } from 'googleapis'

export default async function handler(req, res) {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        res.status(400).json({ data: 'invalid name' });
        return;
    }

    if (!phoneRegex.test(phoneNumber)) {
        res.status(400).json({ data: 'invalid phone number' });
        return;
    }

    if (!emailRegex.test(email)) {
        res.status(400).json({ data: 'invalid email' });
        return;
    }

    if (!message) {
        res.status(400).json({ data: 'please add a description of your project' });
        return;
    }

    const config = {
        GOOGLE_CLIENT_ID: "765479094034-qnek9s445ral9gbjtek5lgsu8j1mr64k.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",
        GOOGLE_OAUTH2_REFRESH_TOKEN: "1//04nn14MrmtO30CgYIARAAGAQSNwF-L9IrNhvH37G1BUbB39sC3v1AEcsDx2CGos3No51C98MPzoOCiWf0rGfjh1foTwOJp9cgXAA",
        APP_EMAIL: "fesslerpainting@gmail.com"
    };

    const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_OAUTH2_REFRESH_TOKEN, APP_EMAIL } = config;
 
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );
    oauth2Client.setCredentials({ refresh_token: GOOGLE_OAUTH2_REFRESH_TOKEN });
    const accessToken  = await oauth2Client.getAccessToken();
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: APP_EMAIL,
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            refreshToken: GOOGLE_OAUTH2_REFRESH_TOKEN,
            accessToken
        }
    });

    const mailOptions = {
        from: APP_EMAIL,
        to: APP_EMAIL,
        subject: `New contact form submission from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nPhone number: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ data: 'error' });
        } else {
            res.status(200).json({ data: 'success' });
        }
    });
}