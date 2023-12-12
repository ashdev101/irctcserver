"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const VerifyToken = (req, res) => {
    if (!req.body.token)
        return res.status(400).send("no token provided");
    //@ts-ignore
    jsonwebtoken_1.default.verify(req.body.token, `${process.env.JWT_ACESS_TOKEN}`, (err, data) => {
        if (err) {
            res.status(404).send(err.message);
            return;
        }
        console.log(data);
        res.status(200).send(data);
    });
};
exports.VerifyToken = VerifyToken;
