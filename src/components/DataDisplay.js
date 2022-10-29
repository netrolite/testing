import React from "react";

export default function DataDisplay(props) {    
    return (
        <div className="data-display">
            <h1 className="data-display-header">Data entered:</h1>
            <ul className="data-display-list">
                {props.data.data.firstName && <li>First name: {props.data.data.firstName}</li>}
                {props.data.data.lastName && <li>Last name: {props.data.data.lastName}</li>}
                {props.data.data.age && <li>Age: {props.data.data.age}</li>}
                {props.data.data.typeOfSchool && <li>School type: {props.data.data.typeOfSchool}</li>}
                {props.data.data.favColor && <li>Favorite color: {props.data.data.favColor}</li>}
                <li>{props.data.data.termsOfServiceAgree ? "Agreed to the terms of service" : "Disagreed with the terms of service"}</li>
            </ul>
            
        </div>
    )
}