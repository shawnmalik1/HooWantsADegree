import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Hoo Wants A Degree?</h1>
        </div>
    );
}

const Course = (name, instructor, credits, description) => {
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
