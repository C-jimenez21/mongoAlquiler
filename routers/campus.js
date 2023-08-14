import { Router } from 'express';
import {limitGet} from '../limit/config.js';
import {appMiddlewareCampusVerify, appDTOData} from '../middlewares/campus.middleware.js';


const appCampus = Router();

appCampus.get('/', limitGet(), async(req, res) => {
    if(!req.rateLimit)return;
    let db = await con();
    let user = db.collection('user');
    let result = await user.find({}).toArray();
    res.send(result);
    

});

appCampus.post('/', limitGet(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await usuario.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        resul = JSON.parse(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description);
        res.status(resul.status).send(resul);
    }
});



export default appCampus;