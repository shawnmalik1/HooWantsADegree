import React, { useState } from 'react';
import './index.css';
import TextFile from './TextFile';

function EmailResults({mode}) {
    let pageMode = `main-page, ${mode}`;

    const downloadPDF = () => {
        const pdf = '/Users/smyansengupta/Documents/GitHub/HooWantsADegree/src/schedule.pdf';
        const pdfLink = document.createElement('a');
        pdfLink.href = pdf;
        pdfLink.download = 'degree-plan.pdf';
        document.body.appendChild(pdfLink);
        pdfLink.click();
        document.body.removeChild(pdfLink);
    };

    const displaySchedule = () => {
        document.getElementById('compEngSchedule.txt')
        .addEventListener('change', function() {
            let reader = new FileReader();
            reader.onload = function() {
                document.getElementById('output').textContent = reader.result;
            }
            reader.readAsText(this.files[0]);
        });
    }

    return (
        <div class={pageMode}>
            <h1>Your Results</h1>
            <img src='Screenshot 2024-03-24 at 11.12.57 AM.png'></img>
            <br></br>
            <button onClick={downloadPDF}>
                Download PDF
            </button>
        </div>
    );
}

export default EmailResults;