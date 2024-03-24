import React from 'react';

function Footer({mode}) {
    let footerMode = `footer, ${mode}`;

    return (
        <footer className={footerMode}>
            Designed by Sean Bamfo, Eva Cullen, Shawn Malik, and Smyan Sengupta for HooHacks 2024
        </footer>
    );
}

export default Footer;