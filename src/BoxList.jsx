import React from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

import './BoxList.css';

function BoxList() {

    const [boxes, setBoxes] = React.useState([]);

    const addBox = (box) => {
        setBoxes(boxes => [...boxes, box]);
        console.log(boxes)
    }

    return (
        <>
            <NewBoxForm addBox={addBox} />
            <span>
                {boxes.map((box, i) => (
                    <Box key={i} color={box.color} width={box.width} height={box.height} />
                ))}
            </span>

        </>
    );
}

export default BoxList;