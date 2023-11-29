export const mailBody = (receiver,company) => {

    const body = `
    <html>
    <head>
     
    </head>
    <body>
      <p>Dear ${receiver ? receiver : `Team`},</p>
      <p>
        I hope this email finds you well. My name is Sanket Agrawal, and I am writing to express my interest in the Backend Developer position ${company ? `at ${company}` : "" }.
      </p>
      <p>
        In my current role as a Full Stack Developer at Ataloud Technologies, I have gained valuable experience in Node.js, Express.js, Spring Boot Java, MySQL, MongoDB, and React.js.
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
    
}


export const signature =  () => {
    const sign = `
    <p>
    Best regards,<br>
    Sanket Agrawal<br>
    +91-7387391619<br>
    <a href="mailto:mailsanketagrawal@gmail.com">mailsanketagrawal@gmail.com</a>
  </p>
  `;

  return sign;
}
