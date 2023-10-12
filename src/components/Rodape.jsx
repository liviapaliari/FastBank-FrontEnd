import React from "react";
import Texto from "./Texto";

function Rodape() {
    return (
        <>
            <footer style={{width: "100%", backgroundColor: "#000"}}>
                <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:py-10">
                    <div className="flex flex-col my-6">
                        <button><Texto color="#FFF">Contatos</Texto></button>
                    </div>

                    <div className="flex flex-col my-6">
                        <button><Texto color="#FFF">Copyright</Texto></button>
                    </div>

                    <div className="flex flex-col my-6">
                        <button><Texto color="#FFF">Desenvolvedor</Texto></button>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Rodape;