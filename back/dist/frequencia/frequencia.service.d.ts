import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFrequenciaDto } from './dto/create-frequencia.dto';
import { UpdateFrequenciaDto } from './dto/update-frequencia.dto';
export declare class FrequenciaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateFrequenciaDto): import(".prisma/client").Prisma.Prisma__FrequenciaClient<import(".prisma/client").Frequencia>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Frequencia & {
        Servidor: import(".prisma/client").Servidor;
    })[]>;
    findById(id: string): import(".prisma/client").PrismaPromise<(import(".prisma/client").Frequencia & {
        Servidor: import(".prisma/client").Servidor;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FrequenciaClient<import(".prisma/client").Frequencia>;
    update(id: number, data: UpdateFrequenciaDto): import(".prisma/client").Prisma.Prisma__FrequenciaClient<import(".prisma/client").Frequencia>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FrequenciaClient<import(".prisma/client").Frequencia>;
}
