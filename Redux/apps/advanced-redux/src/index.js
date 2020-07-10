import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import reduxPromiseMiddleware from 'redux-promise-middleware'


const initalState={
  fetching: false,
  fetched: false,
  users: [],
  error: null
}
const reducer = (state = initalState, action)=>{
  switch (action.type){
    case 'FETCH_USERS_PENDING':
      return{
        ...state,
        fetching:true
      }
    case 'FETCH_USERS_REJECTED':
      return{
        ...state,
        fetching:false,
        fetched:false,
        error:action.payload
      }
    case 'FETCH_USERS_FULFILLED':
      return{
        ...state,
        fetching:false,
        fetched:true,
        users:action.payload
      }
    default:
      return state;
  }
}

const middleware = applyMiddleware(logger, thunk, reduxPromiseMiddleware);
const store = createStore(reducer, middleware);
/*const process = */store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('https://jsonplaceholder.typicode.com/users/').then(res=>console.log(res.data))
})
/*process.then(response=>{console.log(response)});*/

/*store.dispatch(dispatch =>{
  dispatch({
    type:'FETCH_USERS_START'
  });
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.data)
  .then(response=> dispatch({
    type:'RECEIVE_USERS',
    payload: response
  }))
  .catch(error =>dispatch({
    type:'FETCH_USERS_ERROR',
    payload: error
  }))
});*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
