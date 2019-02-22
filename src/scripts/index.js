import '../styles/index.scss';
import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);