import React, { useEffect, useState } from "react";

export default function WindowWidthTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return () => {
            console.log("cleaning up...");
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return(
        <h1>Window width: {windowWidth}px</h1>
    )
}