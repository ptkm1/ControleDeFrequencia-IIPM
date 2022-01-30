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
exports.ServidorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ServidorService = class ServidorService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(data) {
        const servidor = this.prismaService.servidor.create({
            data: Object.assign(Object.assign({}, data), { frequencia: {
                    create: {}
                } })
        });
        console.log(servidor);
        return servidor;
    }
    findAll() {
        return this.prismaService.servidor.findMany();
    }
    findFrequency() {
        return this.prismaService.servidor.findMany({
            include: {
                frequencia: true
            },
        });
    }
    findOne(id) {
        return this.prismaService.servidor.findUnique({
            where: { id },
            include: { frequencia: true },
        });
    }
    update(id, data) {
        return this.prismaService.servidor.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prismaService.servidor.delete({ where: { id }, include: { frequencia: true } });
    }
};
ServidorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServidorService);
exports.ServidorService = ServidorService;
//# sourceMappingURL=servidor.service.js.map