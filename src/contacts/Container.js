import React from "react";
import Subheader from "./Subheader";
import AddingForm from "./AddingForm";
import Contact from "./Contact";
import Buttons from "./Buttons";

const Container = (props) => {
    return(<div  className='container'>
        <Subheader blockName={props.contactsBlockName}/>
        <AddingForm placeHolder={props.placeHolderContact}/>
        <ol>
            {props.contacts.map(el => <Contact contact={el}/>)}
        </ol>
   <Buttons buttonName='More'/>
    </div>)
}
export default Container;