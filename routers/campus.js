import {limitGet} from '../limit/config.js';
import { Router } from 'express';
import appMiddlewareCampusVerify from '../middlewares/campus.middleware.js';

const appCampus = Router();

appCampus.get('/', limitGet(), async(req, res) => {
    // if(!req.rateLimit)return;
    // let {id} = req.body;
    // let db = await con();
    // let user = db.collection('user');
    // let result = await user.find({_id: new ObjectId(id)}).toArray();
    // res.send(result);
res.send("entre a GET campus");

});

appCampus.post('/', limitGet(), appMiddlewareCampusVerify, async(req, res) => {

    
    res.send("Entre al POST");
});



export default appCampus;