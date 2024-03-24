import logo from './logo.svg';
import './App.css';
import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import DegreeBuilder from './DegreeBuilder';
import NavButton from './NavButton'
import TextBox from './TextBox';
import EmailResults from './EmailResults';

const mode = "light-mode"

function App() {
    return (
        <div>
            <Header mode={mode} />
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage mode={mode} />} />
                    <Route path="/degree-builder" element={<DegreeBuilder mode={mode} />} />
                    <Route path="/email-results" element={<EmailResults mode={mode} />} />
                </Routes>
            </Router>
            {/* <Footer /> */}
        </div>
    );
}

function Course(name, instructor, credits, description) {
    return (
        <div className='course'>
            <h2>{name}</h2>
            <h3>Instructor: {instructor}</h3>
            <h3>{credits} credits</h3>
            <p>{description}</p>
        </div>
    );
}

export default App;
