import { TipoPosto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostoDto } from './dto/create-posto.dto';
import { UpdatePostoDto } from './dto/update-posto.dto';
export declare class PostosService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreatePostoDto): import(".prisma/client").Prisma.Prisma__PostoClient<import(".prisma/client").Posto>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Posto & {
        servidores: import(".prisma/client").Servidor[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PostoClient<import(".prisma/client").Posto & {
        servidores: import(".prisma/client").Servidor[];
    }>;
    findByTipoPosto(tipoPosto: TipoPosto): Promise<{
        coordenador: string;
        id: string;
        email: string;
        nome: string;
        telefone: string;
        telefone2: string;
        telefone3: string;
        tipoPosto: TipoPosto;
        servidores: import(".prisma/client").Servidor[];
    }[]>;
    update(id: string, updatePostoDto: UpdatePostoDto): import(".prisma/client").Prisma.Prisma__PostoClient<import(".prisma/client").Posto & {
        servidores: import(".prisma/client").Servidor[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PostoClient<import(".prisma/client").Posto>;
}
