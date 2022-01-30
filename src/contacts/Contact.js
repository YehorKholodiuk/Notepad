import React from 'react';
import Buttons from "./Buttons";

const Contact = (props) =>{
    console.log(props)
    return(
        <li>
            {props.contact.name}
            {' '}
            Phone Number:{props.contact.tel}
            <Buttons buttonName='Update'/>
            <Buttons buttonName='Delete'/>
        </li>
    );
};

export default Contact;
