import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/bouts.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'

const App = () => {
    return (
        <Router>
            <div id="bouts-app">
                <Header />
                <Route exact path="/" component={Home} />
                <Footer />            
            </div>
        </Router>
    )
}

export default App
