import express from "express"
import Trainhandler from "./view/getAllTrains"
import Classhandler from "./view/getClassDetails"
import { handleRegister } from "./controllers/handleRegister"
import { handleLogin } from "./controllers/handleLogin"
import { makeRservation } from "./controllers/makeReservation"
import { getAllReservationByUserId } from "./controllers/getAllReseravationOfUser"
import cors from 'cors'
import { CreateSession } from "./controllers/stripe"
import { VerifyToken } from "./controllers/verifyToken"
import { corsOptions } from "./config/corsOptions"

const app = express()

//middlewares
app.use(express.json())
app.use(cors(corsOptions))

//broder-routes
app.use("/getAllTrains", Trainhandler)
app.use("/getClassDetails", Classhandler)

//direct-routes
app.post("/register", handleRegister)
app.post("/login", handleLogin)
app.post("/reservation", makeRservation)
app.get("/reservation", getAllReservationByUserId)
app.post('/create-checkout-session', CreateSession)
app.post("/verifytoken", VerifyToken)

app.listen(`${process.env.port}`, () => {
    console.log(`lisning on port ${process.env.port} `)
})
