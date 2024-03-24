import React from 'react';
import Dropdown from './Dropdown';
import TextBox from './TextBox';
import NavButton from './NavButton';

const majors = [
    { value: 'biomedical engineering', label: 'Biomedical Engineering' },
    { value: 'chemical engineering', label: 'Civil Engineering' },
    { value: 'civil and environmental engineering', label: 'Civil and Environmental Engineering' },
    { value: 'computer engineering', label: 'Computer Engineering' },
    { value: 'computer science', label: 'Computer Science' },
    { value: 'electrical and computer engineering', label: 'Electrical and Computer Engineering' },
    { value: 'engineering and society', label: 'Engineering and Society' },
    { value: 'engineering science', label: 'Engineering Science' },
    { value: 'materials science and engineering', label: 'Materials Science and Engineering' },
    { value: 'mechanical and aerospace engineering', label: 'Mechanical and Aerospace Engineering' },
    { value: 'applied mathematics', label: 'Applied Mathematics' },
];

const years = [
    { value: '1', label: 'Freshman' },
    { value: '2', label: 'Sophomore' },
    { value: '3', label: 'Junior' },
    { value: '4', label: 'Senior' },
];

const semesters = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
];

const courses = [];

function DegreeBuilder(mode) {
    let pageMode = `main-page, ${mode}`;

    return (
        <div class={pageMode}>
            <h3>Select your major:</h3>
            <Dropdown items={majors} />
            <h3>What is your current year?</h3>
            <Dropdown items={years} />
            <h3>How many semesters do you have left?</h3>
            <Dropdown items={semesters} />
            <h3>Select all courses you have taken so far or already have credit for:</h3>
            <Dropdown items={courses} />
            <h3>Enter your professional interests:</h3>
            <TextBox />
            <h3>Enter your personal interests:</h3>
            <TextBox />
            <NavButton destination='./' text='Hoo wants a degree?' />
        </div>
    );
}

export default DegreeBuilder;