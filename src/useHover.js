import { useState } from "react";

export function useHover() {
    const [menuStyles, setMenuStyles] = useState({
        left: "0px",
        top: "30px",
        width: "6px",
        height: "6px",
        opacity: "0",
        visibility: "hidden",
    });

    const handleMouseEnter = (event) => {
        const { left, top, width, height } = event.target.getBoundingClientRect();
        setMenuStyles({
            ...menuStyles,
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`,
            opacity: "1",
            visibility: "visible",
        });
    };

    const handleMouseLeave = () => {
        setMenuStyles({
            ...menuStyles,
            opacity: "0",
            visibility: "hidden",
        });
    };

    return {
        menuStyles, handleMouseEnter, handleMouseLeave
    }
}