import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { ServidorService } from './servidor.service';
export declare class ServidorController {
    private readonly servidorService;
    constructor(servidorService: ServidorService);
    create(createServidorDto: CreateServidorDto): import(".prisma/client").Prisma.Prisma__ServidorClient<import(".prisma/client").Servidor>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Servidor[]>;
    findFrequency(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Servidor & {
        frequencia: import(".prisma/client").Frequencia[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ServidorClient<import(".prisma/client").Servidor & {
        frequencia: import(".prisma/client").Frequencia[];
    }>;
    update(id: string, updateServidorDto: UpdateServidorDto): import(".prisma/client").Prisma.Prisma__ServidorClient<import(".prisma/client").Servidor>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ServidorClient<import(".prisma/client").Servidor & {
        frequencia: import(".prisma/client").Frequencia[];
    }>;
}
