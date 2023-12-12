/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `Reservations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reservations_orderId_key" ON "Reservations"("orderId");
