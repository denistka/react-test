import React from 'react'
import { Switch, Route } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TagsCloud from '../containers/TagsCloud'
import TagDescription from '../containers/TagDescription'

const App = () => (
    <div className="app-wrapper">
        <div className="app-content">
            <Header/>
            <Switch>
                <Route exact path="/" component={ TagsCloud }/>
                <Route path="/:id" component={ TagDescription }/>
            </Switch>
        </div>
        <Footer/>
    </div>
);

export default App;
