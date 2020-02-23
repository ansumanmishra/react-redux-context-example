import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore  } from 'redux';
import { Provider } from 'react-redux'

import TodoReducer from './reducers/TodoReducer';

const store = createStore(TodoReducer);
window.store = store; // Getting store in chrome
// $r.props.store.getState(); Another solution without code change


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
