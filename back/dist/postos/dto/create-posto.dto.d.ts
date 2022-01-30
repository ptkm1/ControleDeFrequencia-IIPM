import { Prisma, TipoPosto } from '@prisma/client';
export declare class CreatePostoDto implements Prisma.PostoCreateInput {
    id?: string;
    email: string;
    nome?: string;
    tipoPosto?: TipoPosto;
    servidores?: Prisma.ServidorCreateNestedManyWithoutPostoInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutPostoInput;
}
