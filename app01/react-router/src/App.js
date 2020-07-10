import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch} from 'react-router-dom';
const News = ({match}) =>{
return(<h1>News Page {match.params.id}</h1>)
}
const Profile = () =>{
  return(<h1>Profile Page: Ozgur Boran Gumus</h1>)
  }
const Error = () =>{
  return(<h1>Page is Not Found..</h1>);
}

class App extends Component {
  state={
    loggedIn: false,
  }
  onClickButton = ()=>{
    this.setState(prevState =>({
      loggedIn: !prevState.loggedIn
    }))
  };
	render() {
    return(
      <Router>
        <div className="App">
          <NavLink activeClassName='active' exact to='/'>HomePage</NavLink> <br/>
          <NavLink activeClassName='active' exact to='/contact'>Contact</NavLink> <br/>
          <NavLink activeClassName='active' exact to='/news/3'>News</NavLink> <br/>
          <NavLink activeClassName='active' exact to='/profile'>profile</NavLink> <br/> <br/>
          <input
          type="button"
          onClick ={this.onClickButton}
          value={this.state.loggedIn ? 'Logout' : 'Login'}/>
          <Switch>
            <Route path='/' exact render={
              ()=>{
                return(<h1>HomePAGE</h1>);
              }
            }/>
            <Route path='/news/:id' exact strict component={News}/>
            <Route path='/contact' exact strict render={
              ()=>{
                return(<h1>Contact</h1>);
              }
            }/>
            <Route path='/profile' exact strict render={ ()=>{
              return(
                this.state.loggedIn ? (<Profile/>) : (<Redirect to="/"/>)
              )
            }}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
