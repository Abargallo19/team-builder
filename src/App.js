import React, { useState } from 'react';
import Form from './Form';
import './App.css';

const initialFormValues = {
name: '',
email: '',
role: ''
};

const list = [
  {
    name: 'Allesandria',
    age: 29
  },
  {
    name: 'Portia',
    age: 30
  }
]



function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [memberList, setMemberList] = useState([]);
  
  return (
    <div className="App">
      
    <Form />

    </div>
  );
}

export default App;
