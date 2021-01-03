import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {
  todos: [],
  loading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        loading: true
      }

    case 'load':
      return {
        ...state,
        todos: action.payload,
        loading: false
      }

    case 'delete':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
