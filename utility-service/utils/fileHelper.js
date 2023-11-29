import fs from 'fs';
import key from '../assets/resume.json' assert {type : 'json'}


export const fileToBase64 = (file) => {
     const base64EncodedResume = file.data.toString('base64');
    saveToJSON(base64EncodedResume);    
}

export const saveToJSON =  (encoded) => {
    
    const encodeFile = {
        encodedResume : encoded,
    }

    const resumeJson = JSON.stringify(encodeFile);

 const filePath = '../utility-service/assets/resume.json';

    fs.writeFile(filePath, resumeJson, 'utf8', (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log('JSON file has been saved:', filePath);
    }
    });
}

export const decodeBase64 = () => {

    const pdfBuffer = Buffer.from(key.encodedResume, 'base64');

    return pdfBuffer;
}
