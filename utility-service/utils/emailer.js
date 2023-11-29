import nodemailer from 'nodemailer';
import { decodeBase64 } from './fileHelper.js';
import dotenv from 'dotenv';
dotenv.config();

const from = process.env.PERSONAL_EMAIL;

const smtpConfig = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : from,
        pass : process.env.EMAIL_PASSWORD,
    },
});



export const sendEmail = async (data,recipients) => {
    try {

        const pdfBuffer = decodeBase64();

        const msg = {
            from : from,
            subject : data.subject,
            html : data.html,
            attachments: [
                {
                  filename: 'resume.pdf',
                  content: pdfBuffer,
                  encoding: 'base64',
                },
              ],
        };

        for(let i = 0; i < recipients.length ; i++){

            msg.to = recipients[i];

            await smtpConfig.sendMail(msg)
            .then((res)=>{
                console.log("RESPONSE RECIEVED");
            }).catch((err) => {
                console.log({err});
            })
        }

        
    } catch (error) {
        console.log(error?.message);
        throw error;
    }
};
