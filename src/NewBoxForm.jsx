import React from "react";
import './NewBoxForm.css';

function NewBoxForm({ addBox }) {
    const INITIAL_STATE = { color: "", width: "", height: "" };
    const [formData, setFormData] = React.useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text" id="color" name="color" placeholder="Color" value={formData.color} onChange={handleChange} />
                <label htmlFor="width">Width</label>
                <input type="text" id="width" name="width" placeholder="Width" value={formData.width} onChange={handleChange} />
                <label htmlFor="height">Height</label>
                <input type="text" id="height" name="height" placeholder="Height" value={formData.height} onChange={handleChange} />
                <button>Add Box</button>
            </form>

        </>
    );
}

export default NewBoxForm;