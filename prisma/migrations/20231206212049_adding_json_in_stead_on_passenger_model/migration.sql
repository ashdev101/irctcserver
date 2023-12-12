/*
  Warnings:

  - You are about to drop the `Passenger` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `passengers` to the `Reservations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Passenger" DROP CONSTRAINT "Passenger_reservationId_fkey";

-- AlterTable
ALTER TABLE "Reservations" ADD COLUMN     "passengers" JSONB NOT NULL;

-- DropTable
DROP TABLE "Passenger";
