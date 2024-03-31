import React from 'react';
import './Box.css'

function Box({ color, width, height }) {
    return (
        <div className="box" style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`
        }}>

        </div>
    );
}

export default Box;