import puppeteer from "puppeteer";
import { Request, Response } from "express"
type getDetailsForClass = {
    SourceStationCode: string
    DestinationStationCode: string
    date: string
    trainNumber: string
    Trainclass: string
}
import { Classes } from '../model/dummySample/Classes'
import addMinutes from 'date-fns/addMinutes'
import getTime from 'date-fns/getTime'
import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping'

export const clickAndGet = async (req: Request, res: Response) => {
    const currentTime = new Date()
    const Range1 = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}T23:00:00`)
    const Range2 = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}T10:00:00`)
    if (currentTime > Range1 && currentTime < Range2) return res.status(503).json({ message: "service unavailable between 23:00 and 01:00 try after sometime" })
    const Range3 = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}T08:00:00`)
    const Range4 = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}T09:00:00`)
    if (currentTime > Range3 && currentTime < Range4) return res.status(503).json({ message: "service unavailable between 08:00 and 09:00 try after sometime" })
    const Range5 = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}T01:00:00`)
    const Range6 = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}T02:00:00`)
    if (currentTime > Range5 && currentTime < Range6) return res.status(503).json({ message: "service unavailable between 01:00 and 02:00 try after sometime" })
    const body = req.body
    console.log(body)
    if (!body.SourceStationCode || !body.DestinationStationCode || !body.date || !body.trainNumber || !body.Trainclass) return res.status(400).send("incomplete data pls send all the feilds ")
    // try {
    //     const browser = await puppeteer.launch({ headless: false })
    //     const page = await browser.newPage();
    //     await page.goto(`https://www.ixigo.com/search/result/train/${body.SourceStationCode}/${body.DestinationStationCode}/${body.date}//1/0/0/0/ALL`)
    //     await page.setViewport({ width: 1080, height: 1024 })

    //     await page.waitForSelector(".train-data-wrapper .train-class")

    //     const element = await page.$x(`//div[contains(@class , 'train-data-wrapper') and .//span[text()='${body.trainNumber.toString()}']]//span[text()='${body.Trainclass.toString()}']`)

    //     console.log(element[0])
    //     //@ts-ignore
    //     await element[0].click()

    //     await page.waitForSelector(".train-status-wrapper .train-status-item .avail-probability")
    //     const data = await page.$$eval('.train-status-wrapper', (element) => element.map(e => ({

    //         trainStatus: Array.from(e.querySelectorAll(".train-status-item")).map(item => ({
    //             trainTiming: item.querySelector(".train-timing")?.innerHTML,
    //             currentStatus: item.querySelector(".avail-status.u-text-ellipsis.u-uppercase.red")?.innerHTML,
    //             confirmProbability: item.querySelector(".avail-probability")?.innerHTML
    //         }))

    //     })))

    //     console.log(JSON.stringify(data.flat(), null, 2))
    //     res.status(200).json(data)
    //     await browser.close()
    // } catch (err) {
    //     console.log(err)
    //     res.status(500).send("internal server error")
    // }

    res.json(Classes)

}