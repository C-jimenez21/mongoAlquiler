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
export class alquiler {
    constructor(data) {
        this.alquiler = 0;
        this.cliente = 0;
        this.automovil = 0;
        this.inicio = "YYYY-MM-DD";
        this.fin = "YYYY-MM-DD";
        this.costo = 0;
        this.estado = "Faker";
    }
}
__decorate([
    Expose({ name: 'ID_Alquiler' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro ID_Alquiler es obligatorio y debe ser un numero entero (int).` }; } }),
    __metadata("design:type", Number)
], alquiler.prototype, "alquiler", void 0);
__decorate([
    Expose({ name: 'ID_Cliente_id' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro ID_Cliente_id es obligatorio y debe ser un numero entero (int).` }; } }),
    __metadata("design:type", Number)
], alquiler.prototype, "cliente", void 0);
__decorate([
    Expose({ name: 'ID_Automovil_id' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro ID_Automovil_id es obligatorio y debe ser un numero entero (int).` }; } }),
    __metadata("design:type", Number)
], alquiler.prototype, "automovil", void 0);
__decorate([
    Expose({ name: 'Fecha_Inicio' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Fecha_Inicio es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], alquiler.prototype, "inicio", void 0);
__decorate([
    Expose({ name: 'Fecha_Fin' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Fecha_Fin es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], alquiler.prototype, "fin", void 0);
__decorate([
    Expose({ name: 'Costo_Total' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Costo_Total es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", Number)
], alquiler.prototype, "costo", void 0);
__decorate([
    Expose({ name: 'Estado_Alquiler' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Estado_Alquiler es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], alquiler.prototype, "estado", void 0);
