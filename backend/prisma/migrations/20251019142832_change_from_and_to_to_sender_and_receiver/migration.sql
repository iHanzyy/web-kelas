/*
  Warnings:

  - You are about to drop the column `from` on the `Menfess` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `Menfess` table. All the data in the column will be lost.
  - Added the required column `receiver` to the `Menfess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Menfess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Menfess" DROP COLUMN "from",
DROP COLUMN "to",
ADD COLUMN     "receiver" TEXT NOT NULL,
ADD COLUMN     "sender" TEXT NOT NULL;
