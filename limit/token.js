import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import {Router} from 'express';
import { SignJWT, jwtVerify } from 'jose';
import {User} from '../routers/storage/usuario.js';

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
        let inst = plainToClass(eval(req.params.collection), {}, {ignoreDecorators: true});
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("5m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.data=jwt
        res.status(201).send({message: jwt});
   } catch (error) {
    res.status(404).send({message: "Token Solicitado no valido"})
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