import React from "react";

export default function Forms(props) {
    
    
    console.log(props.data.data);
        
    function handleChange(event) {
        const { type, name, value, checked } = event.target

        props.data.setData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    return (
        <div className="form">
            <h2 className="form-header">Form:</h2>

            <div className="question">
                <fieldset className="field-set">
                    <legend>Type of school you attend:</legend>

                    <div className="input-wrapper">
                        <input 
                            type="radio"
                            name="typeOfSchool"
                            id="option1"
                            onChange={handleChange}
                            value="private"
                        />
                        <label htmlFor="option1">Private</label>
                    </div>

                    <div className="input-wrapper">
                            <input 
                            type="radio"
                            name="typeOfSchool"
                            id="option2"
                            onChange={handleChange}
                            value="public"
                        />
                        <label htmlFor="option2">Public</label>
                    </div>
                </fieldset>
            </div>

            <div className="question">
                <label htmlFor="favColor">Your favorite color:</label>
                <select
                    id="favColor"
                    name="favColor"
                    value={props.data.data.favColor}
                    onChange={handleChange}
                >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="darkblue">Darkblue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                </select>
            </div>
            
            <div className="question">
                <input 
                    type="checkbox"
                    checked={props.data.data.termsOfServiceAgree}
                    value={props.data.data.termsOfServiceAgree}
                    name="termsOfServiceAgree"
                    id="termsOfServiceAgree"
                    onChange={handleChange}
                />
                <label htmlFor="termsOfServiceAgree">I agree with the terms of service</label>
            </div>


            
        </div>
    )
}