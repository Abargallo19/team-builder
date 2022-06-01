import React from 'react';



function Form(props) {
    const onChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
        };

return (
<form onSubmit={handleSubmit} >
    <label>Name
        <input
        type= 'text'
        name= 'name'
        onChange= {onChange}
        placeholder= "Type your name..."
        value={props.value.name}
 
        />
    </label>
    <label>Email
    <input
        type= 'text'
        name= 'email'
        onChange= {onChange}
        placeholder= "Type your email..."
        value={props.value.email}
        
        />
    </label>
    <label>Role
        <input
        placeholder="Enter your role"
        value= {props.value.role}
        name="role"
        onChange= {onChange}
        />
    </label>




    <div className='submit'>
        <input type="submit" value="add member" />
       
  </div>
</form>



)};

export default Form;