import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
export declare class ServidorService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateServidorDto): import(".prisma/client").Prisma.Prisma__ServidorClient<import(".prisma/client").Servidor>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Servidor[]>;
    findFrequency(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Servidor & {
        frequencia: import(".prisma/client").Frequencia[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ServidorClient<import(".prisma/client").Servidor & {
        frequencia: import(".prisma/client").Frequencia[];
    }>;
    update(id: string, data: UpdateServidorDto): import(".prisma/client").Prisma.Prisma__ServidorClient<import(".prisma/client").Servidor>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ServidorClient<import(".prisma/client").Servidor & {
        frequencia: import(".prisma/client").Frequencia[];
    }>;
}
