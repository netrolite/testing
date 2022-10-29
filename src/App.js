import React, { useState } from 'react';
import Forms from "./components/Forms"
import DataDisplay from './components/DataDisplay';

export default function App() {
    const [data, setData] = useState(
        {
            typeOfSchool: "",
            termsOfServiceAgree: false,
            favColor: "red"
        }
    )

    return (
        <main className='main'>
            <DataDisplay
                data={{ data, setData }}
            />
            <div className='forms-wrapper'>
                <Forms 
                    data={{ data, setData }}
                />
            </div>
        </main>
    )
}