import React, { useState } from 'react';
import './index.css';
import TextBox from './TextBox';
// import FileViewer from 'react-file-viewer';

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

    return (
        <div class={pageMode}>
            <h1>Your Results</h1>
            {/* <FileViewer
                fileType='pdf'
                filePath='/Users/smyansengupta/Documents/GitHub/HooWantsADegree/src/schedule.pdf'
            /> */}
            <br></br>
            <button onClick={downloadPDF}>
                Download PDF
            </button>
        </div>
    );
}

export default EmailResults;