import express from 'express';
import dotenv from 'dotenv';
import appCampus from './routers/campus.js';
const appExpress = express();
dotenv.config()

appExpress.use(express.json());
appExpress.use('/campus', appCampus);

let config = JSON.parse(process.env.MY_SERVER);

appExpress.listen(config, ()=>{
    console.log(`Servidor activo en http://${config.hostname}:${config.port}`);
});