import React from "react";

function Botao({ children, backgroundColor="#222", width="100%", height, onClick, fontSize }) {
    return (
        <button onClick={onClick} style={{width: width, height: height, backgroundColor: backgroundColor}}><p style={{color: "#FFF", textAlign: "center", fontSize: fontSize, textTransform: "uppercase", fontWeight: "bold"}}>{children}</p></button>
    );
};

export default Botao;