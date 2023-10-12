import React from "react";

function Texto({ children, fontSize="16px", color="#000", textTransform="uppercase" }) {
    return (
        <p style={{fontSize: fontSize, color: color, textTransform: textTransform}}>{children}</p>
    );
}

export default Texto;