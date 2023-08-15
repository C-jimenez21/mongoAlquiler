import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import {Router} from 'express';
import { SignJWT, jwtVerify } from 'jose';
import {cliente} from '../routers/storage/cliente.js';
import {alquiler} from '../routers/storage/alquiler.js';
import {login} from '../routers/storage/usuario.js';
import { tablaJWT } from '../helpers/clases.js';

dotenv.config("../");

const appToken = Router();
const appVerify = Router();
// https://jwt.io/
// https://github.com/panva/jose

appToken.use("/:collection", async(req,res)=>{
    let inst;
   try {
       //  // https://github.com/panva/jose/blob/main/docs/classes/jwt_sign.SignJWT.md
       //  let json = {
           //     id: req.params.id,
           //     nombre: req.params.nombre
           // }
        
        let inst = plainToClass((tablaJWT.hasOwnProperty(req.params.collection)) ? tablaJWT[req.params.collection] : error, {}, {ignoreDecorators: true});
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.data=jwt
        res.status(201).send({message: jwt});
   } catch (error) {
    res.status(404).send({message: "Error al generar el token"})
   }
})



appVerify.use("/", async(req,res, next)=>{
    // https://github.com/panva/jose/blob/main/docs/functions/jwt_verify.jwtVerify.md
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 401, token: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        //console.log(jwtData);
        next();
    } catch (error) {
        res.status(404).send({status: 404, token: "Token solicitado no valido"});
    }
})

export {
    appToken,
    appVerify
}