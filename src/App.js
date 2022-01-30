import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Container from "./contacts/Container";
import'bootstrap/dist/css/bootstrap.css'
function App() {
  const appName = 'Assistant';
  const contactsBlockName = 'Contacts List';
  const contacts = [{
    id: 1,
    name:'John Smith',
    tel: '333-444-555'
  },
    {
      id: 12,
      name:'John Smith',
      tel: '333-444-5895'
    },

    {
      id: 11,
      name:'John Smith',
      tel: '333-444-555'
    },

  ]
  return (
    <div >
  <Header appName={appName}/>
      <Container
          contactsBlockName={contactsBlockName}
      contacts={contacts}/>

    </div>
  );
}

export default App;
