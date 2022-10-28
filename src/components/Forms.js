import React, { useState } from "react";

export default function Forms() {
    
    const [data, setData] = useState(
        {
            typeOfSchool: "",
            termsOfServiceAgree: false
        }
    )
    console.log(data);
        
    function handleChange(event) {
        const { type, name, value, checked } = event.target

        setData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    return (
        <div className="forms">
            <input 
                type="checkbox"
                checked={data.termsOfServiceAgree}
                name="termsOfServiceAgree"
                id="termsOfServiceAgree"
                onChange={handleChange}
            />
            <label htmlFor="termsOfServiceAgree">I agree with the terms of service</label>

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
                
            <div className="data-display">

                <h1>Data entered:</h1>
                <ol>
                    <li>{data.termsOfServiceAgree ? "Agreed to the terms of service" : "Disagreed with the terms of service"}</li>
                    {data.typeOfSchool && <li>School type: {data.typeOfSchool}</li>}
                </ol>
                
            </div>
        </div>
    )
}