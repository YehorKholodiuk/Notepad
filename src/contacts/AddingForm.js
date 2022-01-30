import React from "react";

const AddingForm = (props) =>{
const AddButtonHandler = () => {
    console.log('Add Button')
}

    return (<div>
 <input type='text'  placeholder='contact name'/>
        <button onClick={AddButtonHandler}>Add</button>
    </div>)
}
export default AddingForm;

