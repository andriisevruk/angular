const express = require('express')
const { getCars, getCar, addCar, deleteCar, updateCar } = require("../controllers/carsController")

const carRouter = express.Router()
carRouter.get("/", getCars)
carRouter.get("/:id", getCar)
carRouter.post("/", addCar)
carRouter.delete("/:id", deleteCar)
carRouter.put("/:id", updateCar);

module.exports = carRouter