const router = require('express').Router()
let Exercise = require('../models/exercise.model')

router.route('/').get((req,res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' +err))
})

router.route('/add').post((req, res) => {
  const username = req.body.username
  const description = req.body.desciprtion
  const duration = Number(req.body.duration) // this converts it into a number
  const date = Date.parse(req.body.date) // converting to the date datatype

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  })

  // this allows the data to persists in the data base
  newExercise.new()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err))
}) 

module.exports = router