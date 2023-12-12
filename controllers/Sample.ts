import { Router, Request, Response } from 'express';


export const  sample = async(req :Request , res : Response)=>{
    const body  = req.body
    console.log(body)
    res.send("Hellow")
}