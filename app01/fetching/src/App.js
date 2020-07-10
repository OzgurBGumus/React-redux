import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends React.Component {
  state = {
    users:[],
    isLoading:true
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => users.data)
      .then(users => {
       this.setState({
          isLoading:false,
          users,
        });
    })
  }
  render(){
    const {isLoading} = this.state;
    return(
      <div className="App">
      <h1>Users</h1>
      {isLoading ? 'Loading...' : ''}
      {
        !isLoading ?
        this.state.users.map(user=>
          <div key={user.id}>
              {user.name} - #{user.username}
          </div>) : null
      }
    </div>
    )
  }
}


export default App;
