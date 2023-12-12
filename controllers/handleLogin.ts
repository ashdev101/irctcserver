import { Response, Request } from 'express'
import { prisma } from '../model/prismaClient'
import { User } from '@prisma/client'
import bcrypt from "bcrypt"

export const handleLogin = async (req: Request, res: Response) => {
    const body: User = req.body
    if (!body.username || !body.password) return res.status(400).send("pls provide username and password")

    try {
        const checkForUser = await prisma.user.findUnique({
            where: { username: body.username }
        })
        
        if (!checkForUser) return res.status(401).send("invalid credentails")
        const isPasswordCorrect = await bcrypt.compare(body.password.toString(), checkForUser.password)
        if (!isPasswordCorrect) res.status(403).send("wrong password")
        const { id, username, email } = checkForUser;
        const userInfo = { id, username, email }
        res.status(200).json(userInfo)
    } catch (err) {
        res.status(500).send("internal server error")
    }
}