import { Response, Request } from 'express'
import { User } from "@prisma/client"
import { prisma } from '../model/prismaClient'
import bcrypt from "bcrypt"

export const handleRegister = async (req: Request, res: Response) => {
    const body: User = req.body
    if (!body.email || !body.username || !body.password) return res.status(403).send("incomplete data")

    try {
        const checkUser = await prisma.user.findUnique({ where: { username: body.username } })
        if (checkUser) return res.status(401).send("already registered")

        const hash = bcrypt.hashSync(body.password, 10)

        const newUser = await prisma.user.create({
            data: {
                username: body.username,
                password: hash,
                email: body.email,
            }
        })

        res.status(200).json(newUser)
    } catch (err) {
        res.status(500).send("internal server error")
    }
}