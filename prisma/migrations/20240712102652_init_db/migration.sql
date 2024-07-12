-- CreateEnum
CREATE TYPE "Units" AS ENUM ('PIECE', 'PAIR');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Action" AS ENUM ('TOOK', 'RETURNED');

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "positions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "comment" TEXT,
    "lastUpdateUser" "Role" NOT NULL DEFAULT 'USER',
    "units" "Units" NOT NULL DEFAULT 'PIECE',
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "history" (
    "id" UUID NOT NULL,
    "action" "Action" NOT NULL DEFAULT 'TOOK',
    "lastUpdateUser" "Role" NOT NULL DEFAULT 'USER',
    "positionId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "positions_name_key" ON "positions"("name");

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
