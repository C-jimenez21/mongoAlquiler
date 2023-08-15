import 'reflect-metadata'
import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { Router } from "express";
import {cliente} from '../routers/storage/cliente.js'
import {con} from '../db/atlas.js'
import {validate} from 'class-validator'
import { tablaJWT } from '../helpers/clases.js';

const appMiddlewareCampusVerify = Router();
const appDTOData = Router();

let db = await con();
let usuario = db.collection('user');


appMiddlewareCampusVerify.use('/', async(req, res, next) => {
    let classs = tablaJWT[req.path.split('/')[1]]
    if(!req.rateLimit) return;
    let {payload} = req.data;
    const {iat, exp, ...newPayload} = payload; 
    payload = newPayload
    //delete payload.iat;
    //delete payload.exp;
   
    let clone = JSON.stringify(classToPlain(plainToClass(classs, {}, {ignoreDecorators:true})));
    console.log(clone);
    console.log(JSON.stringify(payload));
    let verify = clone === JSON.stringify(payload);
    (!verify) ? res.status(406).send({status:406, message: "No Autorizado"}): next()
  /**   
    try {
        let instanceData = plainToInstance(User, (req.method == 'POST' || req.method == 'PUT') ? req.body : {}, { excludeExtraneousValues: true });
        (req.method == 'POST') ? await validate(instanceData): await validate(instanceData, { skipMissingProperties: true });
        req.instanceData = instanceData;

        next();
    } catch (err) {
        res.status(err.status).json({error: err.message})
    }
    */
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

});

appDTOData.use( async(req,res,next) => {
    try {
        let classs = tablaJWT[req.path.split('/')[1]] // Nombre de la clase como string
        console.log(classs);
        let data = plainToClass(classs, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    appMiddlewareCampusVerify,
    appDTOData
};
