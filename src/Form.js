import React from 'react';



function Form(props) {
const { values } = props;

return (
<form className= 'form-container'>
    <label>Name</label>
    <label>Email</label>
    <label>Role</label>




    <div className='submit'>
        <button>Submit</button>
    </div>
</form>



)};

export default Form;