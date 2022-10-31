import React, { useState, useEffect } from "react";

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
        <div className="window-width">Window width: {windowWidth}px</div>
    )
}