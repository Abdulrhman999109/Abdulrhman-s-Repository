const express = require('express')
const Workout = require('../modules/workoutModel')

const router = express.Router()

router.get('/', (req,res) =>{
    res.json({msg:'GET all workouts'})
})


router.get('/:id', (req,res) =>{
    res.json({msg:'GET a single workout'})
})

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
})

router.delete('/:id' , (req , res) =>{
    res.json({msg:'DELETE a workout'})
})

router.patch('/:id' , (req , res) =>{
    res.json({msg:'Update a workout'})
})

module.exports = router