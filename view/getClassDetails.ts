import express from "express"
import Router from "express"

const router = Router()
const app = express()
import {clickAndGet} from '../controllers/getDetailsForClass'

export default router.post("/",clickAndGet)