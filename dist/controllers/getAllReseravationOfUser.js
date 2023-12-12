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
exports.getAllReservationByUserId = void 0;
const prismaClient_1 = require("../model/prismaClient");
const getAllReservationByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.userId;
    if (!userId)
        return res.status(400).send("no userid provided in query");
    try {
        const userExists = yield prismaClient_1.prisma.user.findUnique({ where: { id: userId } });
        if (!userExists)
            return res.status(404).send("invalid userid user not found ");
        const reservationData = yield prismaClient_1.prisma.reservations.findMany({
            where: { userId: userId }
        });
        res.status(200).json(reservationData);
    }
    catch (err) {
        res.status(500).send("internal server error");
    }
});
exports.getAllReservationByUserId = getAllReservationByUserId;
