import { Request, Response } from 'express'
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
import jwt from "jsonwebtoken"
import { prisma } from '../model/prismaClient';
import { Reservations } from '@prisma/client';



export const CreateSession = async (req: Request, res: Response) => {
    console.log(req.body)
    const body: Reservations = req.body
    if (!req.body.baseFare || !req.body.orderId) return res.status(400).send("kindly provide orderId and amount")


    const product = await stripe.products.create({
        name: 'Ticket_Service',
        default_price_data: {
            unit_amount: req.body.baseFare * 100,
            currency: 'inr',
            // recurring: {
            //     interval: 'month',
            // },
        },
    })

    //need to conform uptill when is the payment link of the stripe is valid and set the expiry accordingly 
    const token = jwt.sign({
        orderId: req.body.orderId,
    },
        `${process.env.JWT_ACESS_TOKEN}`,
        {
            expiresIn: 60 * 5 //5 minutes
        }
    )
    console.log(token)
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price: product.default_price, // Use the Price ID obtained from Stripe
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/bookinginfo?maxlinearquantam=${token}`,
        cancel_url: `http://localhost:3000/paymentCancell`,
    })

    //store the request in the database 
    const createdReservationPendingPayment = await prisma.reservations.create({
        data: {
            ...req.body
        }
    })
    console.log(createdReservationPendingPayment)
    // console.log(session)

    console.log(product)
    res.status(200).json(session.url)
}

