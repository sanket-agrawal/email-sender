import { sendEmail } from "../utils/emailer.js";



export const TestingMethod = async ( req , res ) => {
    try{
        const mailOptions = {
            from: 'mailsanketagrawal@gmail.com',
            to: 'thesanketagrawal@gmail.com',
            subject: 'Test Email',
            text: 'This is a test email sent from Nodemailer!',
        }
        await sendEmail(mailOptions);
        res.status(200).json({message : 'testing'});
    }catch(error){
        console.log(error?.message);
        res.status(500).json({
            message :"Internal Server Error",
            error : error?.message,
        })
    }
}