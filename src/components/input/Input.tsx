import React from 'react';
import './input.css';

interface InputI {
    label?: string,
    placeholder: string,
    style: React.CSSProperties,
}

const Input: React.FC<InputI> = ({ label, placeholder, style }) => {
    return(
        <div className='input-container' style={style}>
            { label && <p>{label}</p>}
            <input placeholder={placeholder} />
        </div>
    )
};

export default Input;