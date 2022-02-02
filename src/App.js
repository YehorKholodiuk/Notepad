import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Container from "./contacts/Container";
import 'bootstrap/dist/css/bootstrap.css'
import ToDoContainer from "./toDoList/ToDoContainer";

function App() {
    const appName = 'Assistant';
    const contactsBlockName = 'Contacts List';
    const placeHolderContact = 'add Contact';
    const contacts = [{
        id: 1,
        name: 'John Smith',
        tel: '333-444-555'
    },
        {
            id: 12,
            name: 'John Smith',
            tel: '333-444-5895'
        },

        {
            id: 11,
            name: 'John Smith',
            tel: '333-444-555'
        },

    ]
    const toDoListBlockName = 'To do List';
    const toDoList = [{
        id: 16,
        name: 'Shopping',

    },
        {
            id: 123,
            name: 'Lunch',

        },

        {
            id: 116,
            name: 'Movie',

        },

    ]
    const placeHolderList = 'Add Task'
    return (
        <div>
            <Header appName={appName}/>
            <Container
                placeHolderContact={placeHolderContact}
                contactsBlockName={contactsBlockName}
                contacts={contacts}

            />
            <ToDoContainer
                placeHolderList={placeHolderList}
                toDoListBlockName={toDoListBlockName}
                toDoList={toDoList}
            />
        </div>
    );
}

export default App;
