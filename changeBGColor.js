import React, {useState} from 'react';
import './changeBGColor.css';

const ChangeBackgroundColor = () => {
    const [lit, isLit] = useState(true);
    const brightness = lit ? "lit" : "dark";

    return (
        <div className={`room ${brightness}`}>
            The Room is {lit ? 'lit' : 'dark'}
            <button onClick={ () => {isLit(!lit)}}>Flip</button>
        </div>
    )
}

export default ChangeBackgroundColor