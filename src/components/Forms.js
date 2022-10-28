import React, { useState } from "react";

export default function Forms() {
    const [data, setData] = useState(
        {
            headsOrTails: "",
            termsOfServiceAgree: false
        }
    )
    
    function handleChange(event) {
        const { type, name, value, checked } = event.target

        setData(prevState => {
            console.log(prevState);
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div className="forms">
            <div className="input-wrapper">
                <input 
                    type="checkbox"
                    checked={data.termsOfServiceAgree}
                    name="termsOfServiceAgree"
                    id="termsOfServiceAgree"
                    onChange={handleChange}
                />
                <label htmlFor="termsOfServiceAgree">I agree with the terms of service</label>
            </div>    

            {data.termsOfServiceAgree ? "Agreed to the terms of service" : "Disagreed with the terms of service"}
        </div>
    )
}