import xlsx from 'xlsx';
import { sendEmail } from './emailer.js';
import dotenv from 'dotenv';
import { mailBody } from './emailHelper.js';
dotenv.config();

const CANDIDATE = process.env.CANDIDATE_NAME;
const SUBJECT = process.env.EMAIL_SUBJECT;
const DEFAULT_POS = process.env.DEFAULT_POSITION;

export const getDataFromExcel = async () => {
    try{
        var workbook =  xlsx.readFile(`./assets/testing_excel.xlsx`);

        const sheet_name_list = workbook.SheetNames;

        const emailData = [];

      let jsonData = xlsx.utils.sheet_to_json(
        workbook.Sheets[sheet_name_list[0]]
      );

        
      for(let i = 0 ; i < jsonData.length; i++){
        const name = upperCase(jsonData[i].Name);
        const company = upperCase(jsonData[i].Company);
        const position = jsonData[i].Position;
        const data = {
            name,
            email : jsonData[i].Email,
            company,
            position
        }
        emailData.push(data);
      }        
        return emailData;
    }catch(error){
        console.log(error?.message);
    }
}

export const sendEmailToArrayData =  async (emailData) => {
  try{
    let counter = 0;

    console.log('TOTAL EMAILS ::::::::::',emailData.length);

    for(let i = 0; i<emailData.length ; i++){   
    
      const recipient = emailData[i]["email"].trim();
      
      const data = {
        subject : `${SUBJECT} ${emailData[i].position ? emailData[i].position : `${DEFAULT_POS}` } - ${CANDIDATE}`,
        html : mailBody(emailData[i].name,emailData[i].company,emailData[i].position),
      }
      await sendEmail(data,recipient);
      counter++;
      console.log("COUNTER :::",counter);
      let remaining = emailData.length - counter;
      console.log("REMAINING :::",remaining);
      
    }
  }catch(error){

  }
}

export const getNameFromFullName = (fullName) => {
    if (fullName) {
        var name = fullName.split(' ');
        return name[0];
    } else {
        console.log('Error: fullName is undefined or null.');
        return '';
    }
};

export const getCompanyName = (comp) => {
  if(comp){
    var company = comp.split(' ');
    return company[0];
  }else{
    console.log('Error: Company Name is undefined or null.');
        return '';
  }
}

export const upperCase = (name) => {
  if(name){
    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return capitalizedName.trim();
  }else{
    console.log('No Name provided');
  }
}


