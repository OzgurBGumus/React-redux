import React, {Component} from 'react';
import '../App.css';

import Contacts from './Contacts';

class App extends Component {
  state={
    contacts:[{
        name:'Mehmet',
        phone:'12312313213'
    },
    {
        name:'Ahmet',
        phone:'453345345345'
    }]
  };

  addContact = (contact)=>{
    const {contacts} = this.state;
    contacts.push(contact);
    this.setState({
      contacts
    })
  }
  render(){
    return (
      <div className="App">
        <Contacts 
        addContact={this.addContact}
        contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
