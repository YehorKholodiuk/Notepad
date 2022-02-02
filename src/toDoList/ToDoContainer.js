import React from "react";
import Subheader from "../contacts/Subheader";
import AddingForm from "../contacts/AddingForm";
const ToDoContainer = (props) => {
    return (
        <div>
            <Subheader blockName={props.toDoListBlockName}/>
            <AddingForm/>
        </div>
    )
}
export default ToDoContainer;