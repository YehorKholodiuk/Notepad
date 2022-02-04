import React from "react";
import Buttons from "../contacts/Buttons";

const ToDo = (props) => {
    return(


        <li>
            {props.toDoList.name}

            <Buttons buttonName='Update'/>
            <Buttons buttonName='Delete'/>
        </li>
    );
}
export default ToDo;