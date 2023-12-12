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
exports.getAllTrainDetails = void 0;
const AllTrains_1 = require("../model/dummySample/AllTrains");
const getAllTrainDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.SourceStationCode || !body.DestinationStationCode || !body.date)
        return res.status(400).json("incomplete data received");
    // try {
    //     const browser = await puppeteer.launch({ headless: false })
    //     const page = await browser.newPage()
    //     // console.log(`https://www.ixigo.com/search/result/train/${body.SourceStationCode}/${body.DestinationStationCode}/${body.date}//1/0/0/0/ALL`)
    //     await page.goto(`https://www.ixigo.com/search/result/train/${body.SourceStationCode}/${body.DestinationStationCode}/${body.date}//1/0/0/0/ALL`);
    //     await page.setViewport({ width: 1080, height: 1024 });
    //     await page.waitForSelector(".train-data-wrapper ")
    //     const data = await page.$$eval('.train-data-wrapper', (element) => element.map(e => ({
    //         trainNumber: e.querySelector(".name-number a .train-number")?.innerHTML,
    //         trainName: e.querySelector(".name-number a .train-name")?.innerHTML,
    //         trainRunsOn: e.querySelector('.running-status-days.u-fb .day')?.innerHTML,
    //         trainType: e.querySelector(".running-status-days.u-fb .train-type")?.innerHTML,
    //         trainSourceRunningStatus: {
    //             trainSource: e.querySelector(".train-duration a .left-wing.u-ib .running-status")?.innerHTML,
    //             trainSourceTime: e.querySelector(".train-duration a .left-wing.u-ib .time")?.innerHTML,
    //             trainSourceDate: e.querySelector(".train-duration a .left-wing.u-ib .date")?.innerHTML,
    //         },
    //         journeyDuration: e.querySelector(".c-timeline-wrapper.horizontal .label.tl ")?.innerHTML,
    //         trainDestinationRunningStatus: {
    //             trainDestination: e.querySelector(".train-duration a .right-wing.u-ib .running-status")?.innerHTML,
    //             trainDestinationTime: e.querySelector(".train-duration a .right-wing.u-ib .time")?.innerHTML,
    //             trainSourceDate: e.querySelector(".train-duration a .right-wing.u-ib .date")?.innerHTML,
    //         },
    //         trainClassandPrice: Array.from(e.querySelectorAll(".train-class-item")).map(item => ({
    //             class: item.querySelector(".train-class")?.innerHTML,
    //             price: item.querySelector(".c-price-display.u-text-ellipsis")?.lastElementChild?.innerHTML,
    //             status: item.querySelector(".train-fare-item-row.u-fb.u-uppercase .red")?.innerHTML,
    //             cnfProbability: item.querySelector(".train-fare-item-row.u-fb.u-uppercase .avail-probability")?.innerHTML,
    //         })),
    //     })))
    //     console.log(JSON.stringify(data, null, 2))
    //     res.status(200).json(data)
    //     // res.send("ok")
    //     await browser.close()
    // } catch (err) {
    //     console.log(err)
    //     res.status(500).json("internal server error")
    // }
    res.json(AllTrains_1.AllTrain);
});
exports.getAllTrainDetails = getAllTrainDetails;
