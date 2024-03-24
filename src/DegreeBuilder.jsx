import React, { useState } from 'react';
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




function DegreeBuilder({ mode }) {
    const [selectedMajor, setSelectedMajor] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedSemesters, setSelectedSemesters] = useState('');
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [professionalInterests, setProfessionalInterests] = useState('');
    const [personalInterests, setPersonalInterests] = useState('');

    const pageMode = `main-page ${mode}`;

    // Explicitly handle the dropdown change event
    const handleDropdownChange = (setter) => (event) => {
        // Assuming the event contains a 'value' property
        const value = event.value || (event.target && event.target.value);
        setter(value);
    };

    // Explicitly handle the text box change event
    const handleTextBoxChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const majorSelection = <Dropdown items={majors} onChange={handleDropdownChange(setSelectedMajor)} />;
    const yearSelection = <Dropdown items={years} onChange={handleDropdownChange(setSelectedYear)} />;
    const semesterSelection = <Dropdown items={semesters} onChange={handleDropdownChange(setSelectedSemesters)} />;
    const courseSelection = <Dropdown items={courses} onChange={handleDropdownChange(setSelectedCourses)} isMulti />;
    const profInterests = <TextBox onChange={handleTextBoxChange(setProfessionalInterests)} placeholder="Enter your professional interests" />;
    const persIntersts = <TextBox onChange={handleTextBoxChange(setPersonalInterests)} placeholder="Enter your personal interests" />;

    const handleSave = () => {
        // Construct data object with the values
        const data = {
            major: majorSelection.value,
            year: yearSelection.value,
            semesters: semesterSelection.value,
            courses: selectedCourses.value,
            professionalInterests: profInterests.target.value,
            personalInterests: persIntersts.target.value
        };

        // Convert data object to a string
        const text = JSON.stringify(data, null, 2); // Pretty print the JSON

        // Create a blob containing the text
        const blob = new Blob([text], { type: 'text/plain' });

        // Create a temporary anchor element to download the file
        const anchor = document.createElement('a');
        anchor.download = 'degree_data.txt';
        anchor.href = URL.createObjectURL(blob);
        anchor.click();

        // Release the object URL
        URL.revokeObjectURL(anchor.href);
    };

    return (
        <div className={pageMode}>
            {/* Dropdowns and text boxes */}
            <h3>Select your major:</h3>
            {majorSelection}
            <h3>What is your current year?</h3>
            {yearSelection}
            <h3>How many semesters do you have left?</h3>
            {semesterSelection}
            <h3>Select all courses you have taken so far or already have credit for:</h3>
            {courseSelection}
            <h3>Enter your professional interests:</h3>
            {profInterests}
            <h3>Enter your personal interests:</h3>
            {persIntersts}
            <br></br>
            
            {/* Button to save data */}
            <NavButton destination='/email-results' text='Hoo wants a degree?'></NavButton>
        </div>
    );
}

export default DegreeBuilder;
