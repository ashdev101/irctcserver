import express from 'express'
import { Router } from 'express'
import {} from '../controllers/Sample'
const app = express()
const router = Router()
import {getAllTrainDetails} from '../controllers/getAllTrainDETAILS'

export default router.post("/", getAllTrainDetails)