import React, { useState } from "react";
import Navigation from './Navigation.js'
import  Login  from "./Login";
import Register from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      <div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
      <Navigation />
    </div>
  );
}

export default App;
