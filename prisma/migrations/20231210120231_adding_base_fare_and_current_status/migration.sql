/*
  Warnings:

  - Added the required column `baseFare` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentStatus` to the `Reservations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservations" ADD COLUMN     "baseFare" TEXT NOT NULL,
ADD COLUMN     "currentStatus" TEXT NOT NULL;
