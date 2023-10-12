import React from "react";

function FieldSet({ children, fontSize="18px" }) {
    return (
        <p style={{width: "100%", fontSize: fontSize, color: "#FFF", fontWeight: "bold", textTransform: "uppercase", borderBottom: "solid #FFF 2px", paddingLeft: 12, marginBottom: 12}}>{children}</p>
    );
};

export default FieldSet;