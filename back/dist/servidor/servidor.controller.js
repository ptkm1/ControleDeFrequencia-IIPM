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
exports.ServidorController = void 0;
const common_1 = require("@nestjs/common");
const create_servidor_dto_1 = require("./dto/create-servidor.dto");
const update_servidor_dto_1 = require("./dto/update-servidor.dto");
const servidor_service_1 = require("./servidor.service");
let ServidorController = class ServidorController {
    constructor(servidorService) {
        this.servidorService = servidorService;
    }
    create(createServidorDto) {
        return this.servidorService.create(createServidorDto);
    }
    findAll() {
        return this.servidorService.findAll();
    }
    findFrequency() {
        return this.servidorService.findFrequency();
    }
    findOne(id) {
        return this.servidorService.findOne(id);
    }
    update(id, updateServidorDto) {
        return this.servidorService.update(id, updateServidorDto);
    }
    remove(id) {
        return this.servidorService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servidor_dto_1.CreateServidorDto]),
    __metadata("design:returntype", void 0)
], ServidorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServidorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/frequencia'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServidorController.prototype, "findFrequency", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServidorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_servidor_dto_1.UpdateServidorDto]),
    __metadata("design:returntype", void 0)
], ServidorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServidorController.prototype, "remove", null);
ServidorController = __decorate([
    (0, common_1.Controller)('servidor'),
    __metadata("design:paramtypes", [servidor_service_1.ServidorService])
], ServidorController);
exports.ServidorController = ServidorController;
//# sourceMappingURL=servidor.controller.js.map