import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT =  process.env.PORT;

process.on('unhandledRejection',(reason , p) => {
    console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});

process.on('uncaughtException',(err) => {
    console.log("Uncaught Exception thrown", err);
});

(async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server is Listening on port ${PORT}`);
        });
    }catch(err){
        console.log(err);
    }
})();