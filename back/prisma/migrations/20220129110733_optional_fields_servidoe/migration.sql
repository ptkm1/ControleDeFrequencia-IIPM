-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_postoId_fkey";

-- AlterTable
ALTER TABLE "Servidor" ALTER COLUMN "telefone" DROP NOT NULL,
ALTER COLUMN "rg" DROP NOT NULL,
ALTER COLUMN "endereco" DROP NOT NULL,
ALTER COLUMN "cargo" DROP NOT NULL,
ALTER COLUMN "data_de_nascimento" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_postoId_fkey" FOREIGN KEY ("postoId") REFERENCES "Posto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Posto.email_unique" RENAME TO "Posto_email_key";

-- RenameIndex
ALTER INDEX "Profile.postoId_unique" RENAME TO "Profile_postoId_key";
