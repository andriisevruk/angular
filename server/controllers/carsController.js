const Car = require("../models/car")

// actions
exports.getCars = async (req, res) => {
  const products = await Car.find({})
  res.send(products)
}

exports.getCar = async (req, res) => {
    const id = req.params.id;
    const car = await Car.findById(id);
    res.send(car)
}

exports.addCar= async (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    };
    const newCar = await Car.create({
        name: req.body.name,
        model: req.body.model,
        price: req.body.price
    });

  res.send(newCar)
}

exports.deleteCar = async (req, res) => {
    const id = req.params.id;
    const deletedcar = await Car.findByIdAndDelete(id);
    res.send(deletedcar);
}

exports.updateCar = async (req, res) => {
    const id = req.params.id;
    const { name, model, price } = req.body;
    try {
        const updatedCar = await Car.findByIdAndUpdate(id, { name, model, price }, { new: true });
        if (!updatedCar) {
            return res.status(404).send("Car not found");
        }
        res.status(200).send(updatedCar);
    } catch (err) {
        res.status(500).send("Update error: " + err);
    }
}

