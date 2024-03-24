import React, { useState } from 'react';
import './index.css';

function TextBox() {
    const [text, setText] = useState('');

    const changeText = (updatedText) => {
        setText(updatedText.target.value);
    }

    return (
        <div>
            <input
                type='text'
                value={text}
                onChange={changeText}
                placeholder=''
            />
        </div>
    );
}

export default TextBox;