import { Prisma } from '@prisma/client';

export class CreateFrequenciaDto implements Prisma.FrequenciaCreateInput {
  janeiro?: string;
  fevereiro?: string;
  marco?: string;
  abril?: string;
  maio?: string;
  junho?: string;
  julho?: string;
  agosto?: string;
  setembro?: string;
  outubro?: string;
  novembro?: string;
  dezembro?: string;
  periodo?: string;
  status?: string;
  observacao?: string;
  Servidor?: Prisma.ServidorCreateNestedOneWithoutFrequenciaInput;
}
