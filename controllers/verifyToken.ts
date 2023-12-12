import { Request, Response } from "express"
import jwt from 'jsonwebtoken'


export const VerifyToken = (req: Request, res: Response) => {
    if (!req.body.token) return res.status(400).send("no token provided")

    //@ts-ignore
    jwt.verify(req.body.token, `${process.env.JWT_ACESS_TOKEN}`, (err, data) => {
        if (err) {
            res.status(404).send(err.message)
            return
        }
        console.log(data)
        res.status(200).send(data)
    })

}