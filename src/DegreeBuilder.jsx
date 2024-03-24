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
    { value: '1', label: 'First year' },
    { value: '2', label: 'Second year' },
    { value: '3', label: 'Third year' },
    { value: '4', label: 'Fourth year' },
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

const courses = []; // Assuming this is meant to be populated dynamically

function DegreeBuilder({ mode }) {
    const [selectedMajor, setSelectedMajor] = useState(''); // !
    const [selectedYear, setSelectedYear] = useState(''); // !
    const [selectedSemesters, setSelectedSemesters] = useState(''); // !
    const [selectedCourses, setSelectedCourses] = useState([]); // !
    const [professionalInterests, setProfessionalInterests] = useState(''); // !
    const [personalInterests, setPersonalInterests] = useState(''); // !

    const pageMode = `main-page ${mode}`; // !

    const handleDropdownChange = (setter) => (event) => {
        const value = event.value || (event.target && event.target.value);
        setter(value);
    };

    const handleTextBoxChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const majorSelection = <Dropdown items={majors} onChange={handleDropdownChange(setSelectedMajor)} />;
    const yearSelection = <Dropdown items={years} onChange={handleDropdownChange(setSelectedYear)} />;
    const semesterSelection = <Dropdown items={semesters} onChange={handleDropdownChange(setSelectedSemesters)} />;
    const courseSelection = <Dropdown items={courses} onChange={handleDropdownChange(setSelectedCourses)} isMulti />;
    const profInterests = <TextBox onChange={handleTextBoxChange(setProfessionalInterests)} placeholder="Enter your professional interests" />;
    const persInterests = <TextBox onChange={handleTextBoxChange(setPersonalInterests)} placeholder="Enter your personal interests" />; // !

    const handleSave = async () => { // !
        const data = { // !
            major: selectedMajor, // !
            year: selectedYear, // !
            semesters: selectedSemesters, // !
            courses: selectedCourses, // !
            professionalInterests: professionalInterests, // !
            personalInterests: personalInterests // !
        };

        try {
            const response = await fetch('http://localhost:3001/submit-degree-data', { // !
                method: 'POST', // !
                headers: { // !
                    'Content-Type': 'application/json', // !
                }, // !
                body: JSON.stringify(data), // !
            }); // !

            if (response.ok) { // !
                console.log('Data sent to Node.js successfully'); // !
                // Handle success response
            } else { // !
                console.error('Failed to send data to Node.js'); // !
                // Handle error response
            } // !
        } catch (error) { // !
            console.error('Error sending data to Node.js:', error); // !
            // Handle request error
        } // !
    }; // !

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
            {persInterests}
            <br></br>
            
            {/* Button to save data */}
            <button onClick={handleSave}>Save Degree Plan</button> {/* Changed from NavButton to a regular button to trigger handleSave */} // !
        </div>
    );
}

export default DegreeBuilder;
