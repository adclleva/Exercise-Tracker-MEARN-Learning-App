import React, { useState} from 'react'

function CreateUser() {
  const [username, setUsername] = useState('')

  function onChangeUsername(e) {
    const { value } = e.target
    setUsername(value)
  }

  function onSubmit(e) {
    e.preventDefault()

    const newUser = {
      username: username
    }

    console.log(newUser)

    setUsername('')
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input 
            type="submit" 
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateUser