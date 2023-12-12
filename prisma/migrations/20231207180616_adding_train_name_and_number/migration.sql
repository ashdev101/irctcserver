/*
  Warnings:

  - Added the required column `trainName` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainNumber` to the `Reservations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservations" ADD COLUMN     "trainName" TEXT NOT NULL,
ADD COLUMN     "trainNumber" TEXT NOT NULL;
