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
export class empleado {
    constructor(data) {
        Object.assign(this, data);
        this.empleado = 0;
        this.nombre = "Faker";
        this.apellido = "Faker";
        this.documento = "Faker";
        this.direccion = "Faker";
        this.numero = "Faker";
        this.cargo = "Asistente";
    }
}
__decorate([
    Expose({ name: 'ID_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro ID_Empleado es obligatorio y debe ser un numero entero (int).` }; } }),
    __metadata("design:type", Number)
], empleado.prototype, "empleado", void 0);
__decorate([
    Expose({ name: 'Nombre_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Nombre_Empleado es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], empleado.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'Apellido_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Apellido_Empleado es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], empleado.prototype, "apellido", void 0);
__decorate([
    Expose({ name: 'DNI' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro DNI es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], empleado.prototype, "documento", void 0);
__decorate([
    Expose({ name: 'Direccion_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Direccion_Empleado es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], empleado.prototype, "direccion", void 0);
__decorate([
    Expose({ name: 'Telefono_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Telefono_Empleado es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], empleado.prototype, "numero", void 0);
__decorate([
    Expose({ name: 'Cargo_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Cargo_Empleado es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], empleado.prototype, "cargo", void 0);
