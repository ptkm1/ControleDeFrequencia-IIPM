/*
  Warnings:

  - You are about to drop the column `observacao` on the `Frequencia` table. All the data in the column will be lost.
  - You are about to drop the column `periodo` on the `Frequencia` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Frequencia` table. All the data in the column will be lost.
  - Added the required column `abril` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `agosto` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dezembro` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fevereiro` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `janeiro` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `julho` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `junho` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maio` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marco` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `novembro` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outubro` to the `Frequencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setembro` to the `Frequencia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Frequencia" DROP COLUMN "observacao",
DROP COLUMN "periodo",
DROP COLUMN "status",
ADD COLUMN     "abril" TEXT NOT NULL,
ADD COLUMN     "agosto" TEXT NOT NULL,
ADD COLUMN     "dezembro" TEXT NOT NULL,
ADD COLUMN     "fevereiro" TEXT NOT NULL,
ADD COLUMN     "janeiro" TEXT NOT NULL,
ADD COLUMN     "julho" TEXT NOT NULL,
ADD COLUMN     "junho" TEXT NOT NULL,
ADD COLUMN     "maio" TEXT NOT NULL,
ADD COLUMN     "marco" TEXT NOT NULL,
ADD COLUMN     "novembro" TEXT NOT NULL,
ADD COLUMN     "outubro" TEXT NOT NULL,
ADD COLUMN     "setembro" TEXT NOT NULL;

-- RenameIndex
ALTER INDEX "Profile_postoId_unique" RENAME TO "Profile.postoId_unique";
