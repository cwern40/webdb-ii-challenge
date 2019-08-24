const express = require('express')

const db = require('../data/dbConfig')

const router = express.Router();

//Get request for list of cars /api/cars
router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "unable to retrieve cars"
            })
        })
})

//get request to retrieve a singel car /api/cars/:id
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

//Put request to update a car's information /api/car/:id
router.put('/:id', (req, res) => {
    const update = req.body
    const { id } = req.params

    db('cars').where({ id }).update(update)
        .then(update => {
            res.json(update)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "error updating car"
            })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    db('cars').where({ id }).del()
        .then(remove => {
            res.json(remove)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "error deleting car"
            })
        })
})

module.exports = router;