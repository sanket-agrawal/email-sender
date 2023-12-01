import dotenv from 'dotenv';
dotenv.config();

const CANDIDATE = process.env.CANDIDATE_NAME;
const SKILLS =  process.env.SKILLS;
const DEFAULT_POS = process.env.DEFAULT_POSITION;


export const mailBody = (receiver, company, position) => {

  const body = `
    <html>
    <head>
     
    </head>
    <body>
      <p>Dear ${receiver ? receiver : "Team"},</p>
      <p>
        I hope this email finds you well. My name is ${CANDIDATE}, and I am writing to express my interest in the ${position ? `<span style="font-weight: bold;">${position}</span>` : `<span style="font-weight: bold;">${DEFAULT_POS} position</span>`}
        ${company ? `<span style="font-weight: normal;">at</span> <span style="font-weight: bold;">${company}</span>` : "" }.
      </p>
      <p>
        In my current role as a Full Stack Developer at Ataloud Technologies, I have gained valuable experience in 
        <span style="font-weight: bold;">${SKILLS}</span>.
      </p>
      <p>
        Attached is my resume that provides further details about my professional background.
      </p>
      <p>
        Thank you for considering my application.
      </p>
      ${signature()}
    </body>
    </html>
  `;

  return body;
};



export const signature =  () => {
    const sign = `
    <p>
    Best regards,<br>
    ${CANDIDATE}<br>
    +91-7387391619<br>
    <a href="mailto:mailsanketagrawal@gmail.com">mailsanketagrawal@gmail.com</a>
  </p>
  `;

  return sign;
}
