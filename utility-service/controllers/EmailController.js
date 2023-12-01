import { sendEmail } from "../utils/emailer.js";
import { mailBody } from "../utils/emailHelper.js";
import { getDataFromExcel, sendEmailToArrayData } from "../utils/helper.js";


export const sendBulkEmail = async ( req , res ) => {
    try{

        const excelData = await getDataFromExcel();
        const response = await sendEmailToArrayData(excelData);
        
        res.status(200).json({message : 'testing'});

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
        const recipients = req.body.recipients;
        const data = {
            html : mailBody,
            subject : 'Testing'
        };

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