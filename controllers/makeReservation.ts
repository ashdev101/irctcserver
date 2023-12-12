import { Response, Request } from 'express'
import { Reservations } from "prisma/prisma-client"
import { prisma } from '../model/prismaClient'



export const makeRservation = async (req: Request, res: Response) => {
    // if by nay how 
    if (!req.body.orderId || !req.body.Pnr || !req.body.userId || !req.body.payment) return res.status(400).send("pls provide the orderId and pNR and userId")
    const body = req.body
    console.log(body)

    const userExists = await prisma.user.findUnique({ where: { id: body.userId } })
    if (!userExists) return res.status(404).send("invalid userid user not found ")
    try {
        const updatePaymentOFReservation = await prisma.reservations.update({
            where: {
                orderId: req.body.orderId
            },
            data: {
                payment: req.body.payment,
                Pnr: req.body.Pnr
            },

        })
        res.status(200).json(updatePaymentOFReservation)
    } catch (err) {
        console.log(err)
        res.status(500).send("internal server error")
    }

}