import React from "react";

const AddingForm = (props) =>{
    const addButtonHandler = () => {
        console.log('Add Button')
    }

    return (
        <div>
            <input type='text'  placeholder={props.placeHolder}/>
            <button onClick={addButtonHandler}>Add</button>
        </div>)
}
export default AddingForm;
