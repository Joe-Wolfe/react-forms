import React from 'react';
import './Box.css'

function Box({ color, width, height, removeBox }) {
    return (
        <div className="box" style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`
        }}>
            <button className="box-btn" onClick={removeBox}>X</button>
        </div>
    );
}

export default Box;