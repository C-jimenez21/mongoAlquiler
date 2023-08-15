// import {con} from '../DB/connect.js';
import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsDefined, IsString, IsEmail} from 'class-validator';
export class User{
     @Expose({name: 'Cedula'})
     @IsDefined({message: ()=>{ throw {status:422, message: "El parametro  Cedula es obligatorio"}}})
     cc:number;
     
     @Expose({name: 'nombre_usuario'})
     @IsDefined({message: ()=>{ throw {status:422, message: "El parametro nombre_usuario es obligatorio"}}})
     nombre:string;
     
     @Expose({name: 'apellido_usuario'})
     @Transform(({ value }) => { if(value) return value ; else "faker" })
     apellido:string;

     @Expose({name: 'edad_usuario'})
     @IsDefined({message: ()=>{ throw {status:422, message: "El parametro edad_usuario es obligatorio"}}})
     edad:number;
    
    constructor(data:Partial<User>){
        Object.assign(this, data);
        this.cc = 0;
        this.nombre = "Faker";
        this.edad = 0;
    }
}
