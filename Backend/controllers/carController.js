const Car = require('../Model/Car');

const addCar = async (req, res) => {
    const { image, title, description, price, color, mileage } = req.body;
    try {
        const car = new Car({ dealerId: req.user.id, image, title, description, price, color, mileage });
        await car.save();
        res.status(201).json({ message: 'Car added successfully', car });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add car', details: error.message });
    }
};

const getCars = async (req, res) => {
    try {
        const cars = await Car.find({ dealerId: req.user.id });
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cars', details: error.message });
    }
};

const deleteCars = async (req, res) => {
    try {
        const { ids } = req.body;
        await Car.deleteMany({ _id: { $in: ids } });
        res.status(200).json({ message: 'Cars deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete cars', details: error.message });
    }
};

const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const car = await Car.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update car', details: error.message });
    }
};

module.exports = { addCar, getCars, deleteCars, updateCar };
