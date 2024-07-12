/*
  Warnings:

  - Added the required column `categoryId` to the `positions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "positions" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
