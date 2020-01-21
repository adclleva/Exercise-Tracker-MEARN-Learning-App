import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route exact path="/">
            <ExercisesList/>
          </Route>
          <Route path="/edit/:id">
            <EditExercise/>
          </Route>
          <Route path="/create">
            <CreateExercise/>
          </Route>
          <Route  path="/user">
            <CreateUser/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
