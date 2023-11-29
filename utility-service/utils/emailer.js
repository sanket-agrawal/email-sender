import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.PERSONAL_EMAIL,
        pass : process.env.EMAIL_PASSWORD,
    },
});



export const sendEmail = async (mailOptions) => {
    try{        
        await transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error);
            }else{
                console.log('Email Sent :::::'+info.response)
            }
        })
    }catch(error){
        console.log(error?.message);
        throw error;
        
    }
}