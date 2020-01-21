import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

/* This component allows us to add data to the database*/
function CreateExercise() {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(['test user', 'test user2'])
    setUsername("test user")
  },[])

  const inputRef = useRef() // this is a hook for ref's

  function onChangeUsername(e) {
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

  function onSubmit(e) {
    e.preventDefault()

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }


    window.location = '/' // this will go back to the list of exercises
    console.log(exercise)

  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select 
            ref={inputRef}
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {
              users.map((user) => {
                return (
                  <option
                    key={user}
                    value={user}
                  >
                    {user}
                  </option>
                )
              })
            }
          </select>
        </div>
        <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={description}
              onChange={onChangeDescription}
            />
          </div>

        <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              required
              className="form-control"
              value={duration}
              onChange={onChangeDuration}
            />
          </div>

        <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={date}
                onChange={onChangeDate}
              />
            </div>
        </div>
        
        <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
        </div>
      </form>
      {

      }
    </div>
  )
}

export default CreateExercise