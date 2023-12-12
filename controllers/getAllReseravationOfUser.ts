import { Request, Response } from "express"
import { prisma } from "../model/prismaClient"

export const getAllReservationByUserId = async (req: Request, res: Response) => {

    const userId = req.query.userId as string
    if (!userId) return res.status(400).send("no userid provided in query")
    try {
        
        const userExists = await prisma.user.findUnique({ where: { id: userId } })

        if (!userExists) return res.status(404).send("invalid userid user not found ")
        const reservationData = await prisma.reservations.findMany({
            where: { userId: userId }
        })

        res.status(200).json(reservationData)
    } catch (err) {
        res.status(500).send("internal server error")
    }


} 