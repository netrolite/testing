import React from "react"

export default function Box(props) {
    return (
        <div 
            className="box"
            key={props.id}
            color={props.color}
            onMouseOver={ () => props.handleHover(props.id) }
            style={{ backgroundColor: props.color }}
        />
    )
}