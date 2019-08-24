const express = require('express')

const db = require('../data/dbConfig')

const router = express.Router();

//Get request for list of cars /api/cars
router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars[0])
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to retrieve cars"
            })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    db('cars').where({ id }).first()
        .then(car => {
            res.json(car)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to retrieve car"
            })
        })
})

//post request to create a new car entry /api/cars
router.post('/', (req, res) => {
    const newCar = req.body

    db('cars').insert(newCar)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "error creating new car"
            })
        })
})

module.exports = router;