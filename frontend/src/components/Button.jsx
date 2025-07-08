// Button.jsx
import React from 'react';
import './Button.css'; // Custom styling for the button
import '../styles/Components.css';

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="custom-button">
            {children}
        </button>
    );
}

export default Button;
