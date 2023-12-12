"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllTrains_1 = __importDefault(require("./view/getAllTrains"));
const getClassDetails_1 = __importDefault(require("./view/getClassDetails"));
const handleRegister_1 = require("./controllers/handleRegister");
const handleLogin_1 = require("./controllers/handleLogin");
const makeReservation_1 = require("./controllers/makeReservation");
const getAllReseravationOfUser_1 = require("./controllers/getAllReseravationOfUser");
const cors_1 = __importDefault(require("cors"));
const stripe_1 = require("./controllers/stripe");
const verifyToken_1 = require("./controllers/verifyToken");
const corsOptions_1 = require("./config/corsOptions");
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
//broder-routes
app.use("/getAllTrains", getAllTrains_1.default);
app.use("/getClassDetails", getClassDetails_1.default);
//direct-routes
app.post("/register", handleRegister_1.handleRegister);
app.post("/login", handleLogin_1.handleLogin);
app.post("/reservation", makeReservation_1.makeRservation);
app.get("/reservation", getAllReseravationOfUser_1.getAllReservationByUserId);
app.post('/create-checkout-session', stripe_1.CreateSession);
app.post("/verifytoken", verifyToken_1.VerifyToken);
app.listen(`${process.env.port}`, () => {
    console.log(`lisning on port ${process.env.port} `);
});
