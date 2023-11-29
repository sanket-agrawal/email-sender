import { fileToBase64 } from "../utils/fileHelper.js";

export const uploadResume = async (req, res) => {
    try{
        const resume = req.files.file;
        if(resume){
            fileToBase64(resume);
        }else{
            console.log('No File Found');
            return res.status(204).json({
                message : 'Resume Missing!',
            })
        }
        return res.status(200).json({
            message :"Done",
        })
    }catch(error){
        console.log(error?.message);
        res.status(500).json({
            message :"Internal Server Error",
            error : error?.message,
        })
    }
}

export const uploadExcel = async ( req , res) => {
    try{
        const excel = req.files.file;
        if(excel){
            
        }else{
            console.log('No Excel File Found');
            return res.status(204).json({
                message : 'Excel Missing!',
            })
        }
        return res.status(200).json({
            message :"Done",
        })
    }catch(error){
        console.log(error?.message);
        res.status(500).json({
            message :"Internal Server Error",
            error : error?.message,
        })
    }
}