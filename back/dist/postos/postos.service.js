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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostosService = class PostosService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(data) {
        return this.prismaService.posto.create({ data });
    }
    findAll() {
        return this.prismaService.posto.findMany({
            include: {
                servidores: true,
            },
        });
    }
    findOne(id) {
        return this.prismaService.posto.findUnique({
            where: { id },
            include: {
                servidores: true,
            },
        });
    }
    async findByTipoPosto(tipoPosto) {
        const posto = await this.prismaService.posto.findMany({
            where: { tipoPosto },
            include: {
                servidores: true,
            },
        });
        const postoComCoordenadores = await posto.map((posto) => {
            var _a;
            const coordenador = (_a = posto.servidores[0]) === null || _a === void 0 ? void 0 : _a.nome;
            const newobj = Object.assign(Object.assign({}, posto), { coordenador });
            return newobj;
        });
        return postoComCoordenadores;
    }
    update(id, updatePostoDto) {
        return this.prismaService.posto.update({
            where: { id },
            data: Object.assign({}, updatePostoDto),
            include: {
                servidores: true,
            },
        });
    }
    remove(id) {
        return this.prismaService.posto.delete({ where: { id } });
    }
};
PostosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostosService);
exports.PostosService = PostosService;
//# sourceMappingURL=postos.service.js.map