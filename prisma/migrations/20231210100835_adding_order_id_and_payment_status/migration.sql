/*
  Warnings:

  - Added the required column `orderId` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment` to the `Reservations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservations" ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "payment" TEXT NOT NULL;
