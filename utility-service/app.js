import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';

import testingRoutes from './routes/TestingRoutes.js';
import uploadRoutes from './routes/UploadRoute.js';
import emailRoutes from './routes/EmailRoute.js'

const app = express();

app.use(cors());

app.use(fileUpload());

app.use(express.json({limit : '10mb'}));

app.use(express.urlencoded({extended : true , limit : '10mb'}));

app.use('/testing',testingRoutes);
app.use('/upload',uploadRoutes);
app.use('/email',emailRoutes);

app.all('*',(req, res) => {
    res.status(404).json({
        status :'fail',
        message : `Can't find ${req.originalUrl} on this server`,
    });
});

export default app;