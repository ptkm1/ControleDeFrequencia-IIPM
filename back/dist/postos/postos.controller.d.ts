import { PostosService } from './postos.service';
import { CreatePostoDto } from './dto/create-posto.dto';
import { UpdatePostoDto } from './dto/update-posto.dto';
import { TipoPosto } from '@prisma/client';
export declare class PostosController {
    private readonly postosService;
    constructor(postosService: PostosService);
    create(createPostoDto: CreatePostoDto): import(".prisma/client").Prisma.Prisma__PostoClient<import(".prisma/client").Posto>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Posto & {
        servidores: import(".prisma/client").Servidor[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PostoClient<import(".prisma/client").Posto & {
        servidores: import(".prisma/client").Servidor[];
    }>;
    findByName(tipoposto: TipoPosto): Promise<{
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
