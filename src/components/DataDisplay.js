import React from "react";

export default function DataDisplay(props) {    
    return (
        <div className="data-display">
            <h1 className="data-display-header">Data entered:</h1>
            <ol className="data-display-list">
                <li>{props.data.data.termsOfServiceAgree ? "Agreed to the terms of service" : "Disagreed with the terms of service"}</li>
                {props.data.data.typeOfSchool && <li>School type: {props.data.data.typeOfSchool}</li>}
                {props.data.data.favColor && <li>Favorite color: {props.data.data.favColor}</li>}
            </ol>
            
        </div>
    )
}