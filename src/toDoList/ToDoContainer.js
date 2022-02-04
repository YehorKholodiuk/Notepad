import React from "react";
import Subheader from "../contacts/Subheader";
import AddingForm from "../contacts/AddingForm";
import Buttons from "../contacts/Buttons";
import ToDo from "./ToDo";
const ToDoContainer = (props) => {
    return (
        <div>
            <Subheader blockName={props.toDoListBlockName}/>
            <AddingForm placeholder={props.placeHolderList}/>
            <ol>
            {props.toDoList.map(el => <ToDo toDoList={el}/>)}
        </ol>

            <Buttons buttonName='All tasks'/>
        </div>
    )
}
export default ToDoContainer;