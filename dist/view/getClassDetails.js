"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("express"));
const router = (0, express_2.default)();
const app = (0, express_1.default)();
const getDetailsForClass_1 = require("../controllers/getDetailsForClass");
exports.default = router.post("/", getDetailsForClass_1.clickAndGet);
