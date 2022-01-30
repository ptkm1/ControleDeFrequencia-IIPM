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
exports.PostosController = void 0;
const common_1 = require("@nestjs/common");
const postos_service_1 = require("./postos.service");
const create_posto_dto_1 = require("./dto/create-posto.dto");
const update_posto_dto_1 = require("./dto/update-posto.dto");
const client_1 = require("@prisma/client");
let PostosController = class PostosController {
    constructor(postosService) {
        this.postosService = postosService;
    }
    create(createPostoDto) {
        return this.postosService.create(createPostoDto);
    }
    findAll() {
        return this.postosService.findAll();
    }
    findOne(id) {
        return this.postosService.findOne(id);
    }
    findByName(tipoposto) {
        return this.postosService.findByTipoPosto(tipoposto);
    }
    update(id, updatePostoDto) {
        return this.postosService.update(id, updatePostoDto);
    }
    remove(id) {
        return this.postosService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_posto_dto_1.CreatePostoDto]),
    __metadata("design:returntype", void 0)
], PostosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('tipoposto/:tipoposto'),
    __param(0, (0, common_1.Param)('tipoposto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostosController.prototype, "findByName", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_posto_dto_1.UpdatePostoDto]),
    __metadata("design:returntype", void 0)
], PostosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostosController.prototype, "remove", null);
PostosController = __decorate([
    (0, common_1.Controller)('postos'),
    __metadata("design:paramtypes", [postos_service_1.PostosService])
], PostosController);
exports.PostosController = PostosController;
//# sourceMappingURL=postos.controller.js.map