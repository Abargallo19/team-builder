import React from 'react';



function Form(props) {
const { values, update, submit } = props;

return (
<form className= 'form-container'>
    <label>Name
        <input
        type= 'text'
        name= 'name'
        
        placeholder= "Type your name..."
        />
    </label>
    <label>Email</label>
    <label>Role
        <select>
            <option value="">--Select a Role</option>
            <option value="backend-engineer">Backend Engineer</option>
            <option value="full-stack">Full Stack Developer</option>
            <option value="designer">Designer</option>
        </select>
    </label>




    <div className='submit'>
        <button>Submit</button>
    </div>
</form>



)};

export default Form;