import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import './App.css';

const initialFormValues = {
name: '',
email: '',
role: ''
};



function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [memberList, setMemberList] = useState([]);
  
const onSubmit = () => {
  setMemberList([formValues, ...memberList]);
  setFormValues({name: '', email: '', role: ''})
}

const onChange = (name, value) => {
  setFormValues({...formValues, [name]: value})
}


  return (
    <div className="App">
      
    <Form 
    value={formValues}
    change={onChange}
    submit={onSubmit}
    />
  {memberList.map((member, idx) => {
    return (
      <div key= {idx}>
        {member.email}, {member.name}, {member.role}
        </div>
    )
  })}
    </div>
  );
}

export default App;
