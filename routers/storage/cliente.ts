
import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsDefined, IsString, IsEmail } from 'class-validator';

export class cliente {
    @Expose({ name: 'cliente' })
    @IsDefined({ message: () => { throw { status: 402, message: "El parametro cliente es obligatorio y debe ser un numero entero (int)" } } })
    cliente: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: () => { throw { status: 402, message: "El parametro nombre es obligatorio y debe ser un string" } } })
    nombre: string;

    @Expose({ name: 'apellido' })
    @IsDefined({ message: () => { throw { status: 402, message: "El parametro apellido es obligatorio y debe ser un string" } } })
    apellido: string;

    @Expose({ name: 'documento' })
    @IsDefined({ message: () => { throw { status: 402, message: "El parametro documento es obligatorio y debe ser un string" } } })
    documento: string;

    @Expose({ name: 'direccion' })
    @IsDefined({ message: () => { throw { status: 402, message: "El parametro direccion es obligatoria y debe ser un string" } } })
    direccion: string;

    @Expose({ name: 'telefono' })
    @IsDefined({ message: () => { throw { status: 402, message: "El parametro telefono es obligatorio y debe ser un string" } } })
    numero: string;

    @Expose({ name: 'Email' })
    @IsDefined({ message: () => { throw { status: 402, message: "El parametro Email es obligatorio y debe ser un string" } } })
    Email: string;

    constructor(data: Partial<cliente>) {
        Object.assign(this, data);
        this.cliente = 0;
        this.nombre = "Faker";
        this.apellido = "Faker";
        this.documento = "Faker";
        this.direccion = "Faker";
        this.numero = "Faker";
        this.Email = "example@correo.com";
    }
}
