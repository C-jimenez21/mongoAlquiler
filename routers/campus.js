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

export default appCampus;