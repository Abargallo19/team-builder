import React, { useState } from 'react';
import Form from './Form';
import './App.css';

const initialFormValues = {

}



function App() {

  const [formValues, setFormValues] = useState(null)

  return (
    <div className="App">
      
    <Form />

    </div>
  );
}

export default App;
