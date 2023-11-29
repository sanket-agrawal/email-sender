import { sendEmail } from "../utils/emailer.js";
import { mailBody } from "../utils/emailHelper.js";


export const sendBulkEmail = async ( req , res ) => {
    try{
        const recipients = req.body.recipients;
        const data = {
            html : mailBody,
            subject : 'Testing'
        };

        await sendEmail(data,recipients);

    }catch(error){
        console.log(error?.message);
        res.status(500).json({
            message :"Internal Server Error",
            error : error?.message,
        })
    }
}


export const TestingMethod = async ( req , res ) => {
    try{
        const recipients = ['thesanketagrawal@gmail.com'];
        const data = {
            subject : 'Testing',
            html : mailBody(),
        }
        await sendEmail(data,recipients);

        res.status(200).json({message : 'testing'});
    }catch(error){
        console.log(error?.message);
        res.status(500).json({
            message :"Internal Server Error",
            error : error?.message,
        })
    }
}