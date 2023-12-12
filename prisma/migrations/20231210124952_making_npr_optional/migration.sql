/*
  Warnings:

  - You are about to drop the column `bookingDatetime` on the `Reservations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservations" DROP COLUMN "bookingDatetime",
ALTER COLUMN "Pnr" DROP NOT NULL;
