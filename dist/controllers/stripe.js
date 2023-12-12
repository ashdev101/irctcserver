"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSession = void 0;
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prismaClient_1 = require("../model/prismaClient");
const CreateSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const body = req.body;
    if (!req.body.baseFare || !req.body.orderId)
        return res.status(400).send("kindly provide orderId and amount");
    const product = yield stripe.products.create({
        name: 'Ticket_Service',
        default_price_data: {
            unit_amount: req.body.baseFare * 100,
            currency: 'inr',
            // recurring: {
            //     interval: 'month',
            // },
        },
    });
    //need to conform uptill when is the payment link of the stripe is valid and set the expiry accordingly 
    const token = jsonwebtoken_1.default.sign({
        orderId: req.body.orderId,
    }, `${process.env.JWT_ACESS_TOKEN}`, {
        expiresIn: 60 * 5 //5 minutes
    });
    console.log(token);
    const session = yield stripe.checkout.sessions.create({
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
    });
    //store the request in the database 
    const createdReservationPendingPayment = yield prismaClient_1.prisma.reservations.create({
        data: Object.assign({}, req.body)
    });
    console.log(createdReservationPendingPayment);
    // console.log(session)
    console.log(product);
    res.status(200).json(session.url);
});
exports.CreateSession = CreateSession;
