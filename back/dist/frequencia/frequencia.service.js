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
exports.FrequenciaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FrequenciaService = class FrequenciaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(data) {
        return this.prismaService.frequencia.create({ data });
    }
    findAll() {
        return this.prismaService.frequencia.findMany({
            include: {
                Servidor: true
            },
        });
    }
    findById(id) {
        return this.prismaService.frequencia.findMany({
            where: {
                servidorId: id,
            },
            include: {
                Servidor: true
            },
        });
    }
    findOne(id) {
        return this.prismaService.frequencia.findFirst({ where: { id } });
    }
    update(id, data) {
        return this.prismaService.frequencia.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prismaService.frequencia.delete({ where: { id } });
    }
};
FrequenciaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FrequenciaService);
exports.FrequenciaService = FrequenciaService;
//# sourceMappingURL=frequencia.service.js.map