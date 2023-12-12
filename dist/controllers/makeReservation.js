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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRservation = void 0;
const prismaClient_1 = require("../model/prismaClient");
const makeRservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // if by nay how 
    if (!req.body.orderId || !req.body.Pnr || !req.body.userId || !req.body.payment)
        return res.status(400).send("pls provide the orderId and pNR and userId");
    const body = req.body;
    console.log(body);
    const userExists = yield prismaClient_1.prisma.user.findUnique({ where: { id: body.userId } });
    if (!userExists)
        return res.status(404).send("invalid userid user not found ");
    try {
        const updatePaymentOFReservation = yield prismaClient_1.prisma.reservations.update({
            where: {
                orderId: req.body.orderId
            },
            data: {
                payment: req.body.payment,
                Pnr: req.body.Pnr
            },
        });
        res.status(200).json(updatePaymentOFReservation);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("internal server error");
    }
});
exports.makeRservation = makeRservation;
