import React from "react";
import Subheader from "./Subheader";
import AddingForm from "./AddingForm";
import Contact from "./Contact";
import Buttons from "./Buttons";

const Container = (props) => {
    return(<div>
        <Subheader blockName={props.contactsBlockName}/>
        <AddingForm/>
        <ol>
            {props.contacts.map(el => <Contact contact={el}/>)}
        </ol>
   <Buttons buttonName='More'/>
    </div>)
}
export default Container;