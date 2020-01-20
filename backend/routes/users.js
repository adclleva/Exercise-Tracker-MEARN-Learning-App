const router = require('express').Router()
let User = require('../models/user.model') // we need to required the mongoose model

// this handles the first endpoint of the coming http 'get' request on the /users url path
router.route('/').get((req, res) => {
  /* this is a mongoose method that will give us a list of all the users 
   from the mongooseDB database
  */
  User.find() 
    .then(users => res.json(users)) // this will return the users in json format
    .catch(err => res.status(400).json('Error: ' + err)) 
})

/** this gets incoming post requests
 *  then we create a new instance of User with the username into newUser
 */
router.route('/add').post((req, res) => {
  const username = req.body.username
  const newUser = new User({username})

  // then we save the newUser to the database
  newUser.save()
    .then(() => res.json('User added!')) // if save successful, it will display this
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router