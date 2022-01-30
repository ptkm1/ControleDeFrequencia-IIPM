"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrequenciaController = void 0;
const common_1 = require("@nestjs/common");
const frequencia_service_1 = require("./frequencia.service");
const create_frequencia_dto_1 = require("./dto/create-frequencia.dto");
const update_frequencia_dto_1 = require("./dto/update-frequencia.dto");
let FrequenciaController = class FrequenciaController {
    constructor(frequenciaService) {
        this.frequenciaService = frequenciaService;
    }
    create(createFrequenciaDto) {
        return this.frequenciaService.create(createFrequenciaDto);
    }
    findAll() {
        return this.frequenciaService.findAll();
    }
    findOne(id) {
        return this.frequenciaService.findOne(id);
    }
    findById(id) {
        return this.frequenciaService.findById(id);
    }
    update(id, updateFrequenciaDto) {
        return this.frequenciaService.update(Number(id), updateFrequenciaDto);
    }
    remove(id) {
        return this.frequenciaService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_frequencia_dto_1.CreateFrequenciaDto]),
    __metadata("design:returntype", void 0)
], FrequenciaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FrequenciaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FrequenciaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('servidor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FrequenciaController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_frequencia_dto_1.UpdateFrequenciaDto]),
    __metadata("design:returntype", void 0)
], FrequenciaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FrequenciaController.prototype, "remove", null);
FrequenciaController = __decorate([
    (0, common_1.Controller)('frequencia'),
    __metadata("design:paramtypes", [frequencia_service_1.FrequenciaService])
], FrequenciaController);
exports.FrequenciaController = FrequenciaController;
//# sourceMappingURL=frequencia.controller.js.map