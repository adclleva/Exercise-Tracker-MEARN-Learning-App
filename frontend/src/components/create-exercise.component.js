import React, { useState } from 'react'

/* This component allows us to add data to the database*/
function CreateExercise() {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])

  return (
    <div>
      <h1>Create Exercise</h1>
    </div>
  )
}

export default CreateExercise