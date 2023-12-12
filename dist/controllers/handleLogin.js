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
exports.handleLogin = void 0;
const prismaClient_1 = require("../model/prismaClient");
const bcrypt_1 = __importDefault(require("bcrypt"));
const handleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.username || !body.password)
        return res.status(400).send("pls provide username and password");
    try {
        const checkForUser = yield prismaClient_1.prisma.user.findUnique({
            where: { username: body.username }
        });
        if (!checkForUser)
            return res.status(401).send("invalid credentails");
        const isPasswordCorrect = yield bcrypt_1.default.compare(body.password.toString(), checkForUser.password);
        if (!isPasswordCorrect)
            res.status(403).send("wrong password");
        const { id, username, email } = checkForUser;
        const userInfo = { id, username, email };
        res.status(200).json(userInfo);
    }
    catch (err) {
        res.status(500).send("internal server error");
    }
});
exports.handleLogin = handleLogin;
