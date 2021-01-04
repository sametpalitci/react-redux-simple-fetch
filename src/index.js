import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers,applyMiddleware } from 'redux';

import { Provider } from 'react-redux'

import todoReducers from './reducers/todoReducers'

import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  todos: todoReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
