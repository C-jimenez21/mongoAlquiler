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
export class automovil {
    constructor(data) {
        this.automovil = 0,
            this.marca = "Faker",
            this.modelo = "Faker",
            this.anio = 0,
            this.tipo = "Faker",
            this.capacidad = 0,
            this.precio_diaro = 0;
    }
}
__decorate([
    Expose({ name: 'ID_Automovil' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro ID_Automovil es obligatorio y debe ser un numero entero (int).` }; } }),
    __metadata("design:type", Number)
], automovil.prototype, "automovil", void 0);
__decorate([
    Expose({ name: 'Marca_Auto' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Marca_Auto es obligatorio y debe ser un string` }; } }),
    __metadata("design:type", String)
], automovil.prototype, "marca", void 0);
__decorate([
    Expose({ name: 'Modelo_Auto' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Modelo_Auto es obligatorio y debe ser un string.` }; } }),
    __metadata("design:type", String)
], automovil.prototype, "modelo", void 0);
__decorate([
    Expose({ name: 'Anio_Auto' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Anio_Auto es obligatorio y debe ser un numero entero (int).` }; } }),
    __metadata("design:type", Number)
], automovil.prototype, "anio", void 0);
__decorate([
    Expose({ name: 'Tipo_Auto' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Tipo_Auto es obligatorio y debe ser un string.` }; } }),
    __metadata("design:type", String)
], automovil.prototype, "tipo", void 0);
__decorate([
    Expose({ name: 'Capacidad_Auto' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Capacidad_Auto es obligatorio y debe ser un numero entero (int).` }; } }),
    __metadata("design:type", Number)
], automovil.prototype, "capacidad", void 0);
__decorate([
    Expose({ name: 'Precio_Por_Dia' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Precio_Por_Dia es obligatorio y debe ser un numero entero (int).` }; } }),
    __metadata("design:type", Number)
], automovil.prototype, "precio_diaro", void 0);
