var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class cliente {
    constructor(data) {
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
__decorate([
    Expose({ name: 'cliente' }),
    IsDefined({ message: () => { throw { status: 402, message: "El parametro cliente es obligatorio y debe ser un numero entero (int)" }; } }),
    __metadata("design:type", Number)
], cliente.prototype, "cliente", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 402, message: "El parametro nombre es obligatorio y debe ser un string" }; } }),
    __metadata("design:type", String)
], cliente.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'apellido' }),
    IsDefined({ message: () => { throw { status: 402, message: "El parametro apellido es obligatorio y debe ser un string" }; } }),
    __metadata("design:type", String)
], cliente.prototype, "apellido", void 0);
__decorate([
    Expose({ name: 'documento' }),
    IsDefined({ message: () => { throw { status: 402, message: "El parametro documento es obligatorio y debe ser un string" }; } }),
    __metadata("design:type", String)
], cliente.prototype, "documento", void 0);
__decorate([
    Expose({ name: 'direccion' }),
    IsDefined({ message: () => { throw { status: 402, message: "El parametro direccion es obligatoria y debe ser un string" }; } }),
    __metadata("design:type", String)
], cliente.prototype, "direccion", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: () => { throw { status: 402, message: "El parametro telefono es obligatorio y debe ser un string" }; } }),
    __metadata("design:type", String)
], cliente.prototype, "numero", void 0);
__decorate([
    Expose({ name: 'Email' }),
    IsDefined({ message: () => { throw { status: 402, message: "El parametro Email es obligatorio y debe ser un string" }; } }),
    __metadata("design:type", String)
], cliente.prototype, "Email", void 0);
