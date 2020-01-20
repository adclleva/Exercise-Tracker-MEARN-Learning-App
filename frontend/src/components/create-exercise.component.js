import React, { useState } from 'react'

/* This component allows us to add data to the database*/
function CreateExercise() {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])


  function onChangeUser(e) {
    const { value } = e.target
    setUsername(value)
  }

  function onChangeDescription(e) {
    const { value } = e.target
    setDescription(value)
  }

  function onChangeDuration(e) {
    const { value } = e.target
    setDuration(value)
  }

  function onChangeDate(date) {
    setDate(date)
  }

  return (
    <div>
      <h1>Create Exercise</h1>
    </div>
  )
}

export default CreateExercise