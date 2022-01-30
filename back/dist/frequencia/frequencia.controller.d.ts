import { FrequenciaService } from './frequencia.service';
import { CreateFrequenciaDto } from './dto/create-frequencia.dto';
import { UpdateFrequenciaDto } from './dto/update-frequencia.dto';
export declare class FrequenciaController {
    private readonly frequenciaService;
    constructor(frequenciaService: FrequenciaService);
    create(createFrequenciaDto: CreateFrequenciaDto): import(".prisma/client").Prisma.Prisma__FrequenciaClient<import(".prisma/client").Frequencia>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Frequencia & {
        Servidor: import(".prisma/client").Servidor;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FrequenciaClient<import(".prisma/client").Frequencia>;
    findById(id: string): import(".prisma/client").PrismaPromise<(import(".prisma/client").Frequencia & {
        Servidor: import(".prisma/client").Servidor;
    })[]>;
    update(id: number, updateFrequenciaDto: UpdateFrequenciaDto): import(".prisma/client").Prisma.Prisma__FrequenciaClient<import(".prisma/client").Frequencia>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FrequenciaClient<import(".prisma/client").Frequencia>;
}
