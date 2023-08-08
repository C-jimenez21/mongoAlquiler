import { Router } from "express";
import {con} from '../db/atlas.js'
import {User} from '../routers/storage/usuario.js'
import 'reflect-metadata'
import { classToPlain, plainToClass } from "class-transformer";
const appMiddlewareCampusVerify = Router();
let db = await con();
let usuario = db.collection('user');


appMiddlewareCampusVerify.use('/', async(req, res, next) => {
    if(!req.rateLimit) return;
    let {payload} = req.data;
    delete payload.iat;
    delete payload.exp;

    let clone = JSON.stringify(classToPlain(plainToClass(User, {}, {ignoreDecorators:true})));
    console.log(clone);
    console.log(JSON.stringify(payload));
    let verify = clone === JSON.stringify(payload);
    if(!verify) res.status(406).send({status:406, message: "No Autorizado"})
    
    
    
    
//     try {
//             let result = await user.insertOne(req.body);
//             console.log(result);
//             res.send(result);
//         } catch (error) {
//             error.errInfo.details.schemaRulesNotSatisfied.forEach(element => {
//                console.log(element); 
//                res.send("Something went wrong")
//             });
// }
next();

});

export default appMiddlewareCampusVerify;