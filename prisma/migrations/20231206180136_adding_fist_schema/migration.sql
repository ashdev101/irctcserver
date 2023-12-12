-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "Pnr" TEXT NOT NULL,
    "bookingDatetime" TEXT NOT NULL,
    "BoardingStation" TEXT NOT NULL,
    "BordingDate" TEXT NOT NULL,
    "BordingTime" TEXT NOT NULL,
    "distance" TEXT NOT NULL,
    "DestinationStation" TEXT NOT NULL,
    "DestinationDate" TEXT NOT NULL,
    "DestinationTime" TEXT NOT NULL,
    "SubTotal" TEXT NOT NULL,

    CONSTRAINT "Reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passenger" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "bookingStatus" TEXT NOT NULL,
    "currentStatus" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Reservations_userId_key" ON "Reservations"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservations_Pnr_key" ON "Reservations"("Pnr");

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
