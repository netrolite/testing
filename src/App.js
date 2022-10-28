import React, { useState } from 'react';
import data from "./data"
import Box from "./Box"

export default function App() {
    const [boxes, setBoxes] = useState(data)

    function handleHover(id) {
        setBoxes(prevState => {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
            if(prevState[id].color) prevState[id].color = undefined;
            else prevState[id].color = randomColor;
            return [...prevState]   
        })
    }

    const boxesElems = boxes.map(item => (
        <Box
            key={item.id} 
            id={item.id}    
            color={item.color}
            handleHover={handleHover}
        />
    ))

    function handleChange() {
        console.log("Hi")
    }

    return (
        <main className='main'>
            <h1>{boxesElems}</h1>
            <input type="text" className='input' onChange={handleChange} />
            <span>hi</span>
        </main>
    )
}