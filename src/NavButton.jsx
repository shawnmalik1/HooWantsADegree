import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavButton({ destination, text }) {
    const nav = useNavigate();

    const onClick = () => {
        nav(destination);
    };

    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

export default NavButton;