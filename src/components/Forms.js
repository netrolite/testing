import React from "react";

export default function Forms(props) {        
    function handleChange(event) {
        const { type, name, value, checked } = event.target

        props.data.setData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    // intentionally crashes
    const age = props.data.data.age
    const gender = props.data.data.gender
    if((age > 10 && age <= 12) || gender === "female") {
        console.log(age)
        handleChange();
    } 

    console.log(props.data.data);


    return (
        <div className="form">
            <h2 className="form-header">Form:</h2>

            <div className="question">
                <div className="input-wrapper">
                    <label htmlFor="firstName">First name:</label>
                    <input 
                        type="text"
                        id="firstName"
                        className="input"
                        name="firstName"
                        onChange={handleChange}
                        value={props.data.data.firstName}
                    />
                </div>
            </div>

            <div className="question">
                <label htmlFor="lastName">Last name:</label>
                <input 
                    type="text"
                    id="lastName"
                    className="input"
                    name="lastName"
                    onChange={handleChange}
                    value={props.data.data.lastName}
                />
            </div>

            <div className="question">
                <label htmlFor="age">Age:</label>
                <input 
                    type="number"
                    className="input"
                    name="age"
                    id="age"
                    onChange={handleChange}
                    value={props.data.data.age}
                    min="0"
                    max="27"
                />
            </div>

            <div className="question">
                <input 
                    type="radio"
                    className="input"
                    name="gender"
                    id="gender-option1"
                    value="male"
                    onChange={handleChange}
                />
                <label htmlFor="gender-option1">Male</label>
                <input 
                    type="radio"
                    className="input"
                    name="gender"
                    id="gender-option2"
                    value="female"
                    onChange={handleChange}
                />
                <label htmlFor="gender-option2">Female</label>
            </div>

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
                    className="select"
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

            <a href="https://www.youtube.com/watch?v=4KvZDKVZVP0">
                <button className="secret-btn"></button>
            </a>
        </div>
        
    )
}