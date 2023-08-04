import { ObjectId } from 'mongodb';
import { con } from '../db/mongodb.js';
import {limitGet} from '../limit/config.js';
import { Router } from 'express';
const appCampus = Router();

appCampus.get('/', limitGet(),async(req, res) => {
    if(!req.rateLimit)return;
    let {id} = req.body;
    let db = await con();
    let user = db.collection('user');
    let result = await user.find({_id: new ObjectId(id)}).toArray();
    res.send(result);
});

appCampus.post('/', limitGet(),async(req, res) => {
    if(!req.rateLimit)return;
    let db = await con();
    let user = db.collection('user');
    try {
        let result = await user.insertOne(req.body);
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send("Something went wrong")
    }
});



export default appCampus;