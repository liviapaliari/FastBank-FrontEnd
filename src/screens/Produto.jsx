import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Botao from "../components/Botao";
import Texto from "../components/Texto";
import Rodape from "../components/Rodape";

import axios from "axios";

function Produto({ navBar }) {
    const [resposta, setResposta] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/fastbank/produtos/${id}`)
        .then((resposta) => {
            setResposta(resposta.data);
            console.log(resposta.data);
        });
    }, []);


    return (
        <>
            {/* NAVBAR */}
            {navBar}

            {/* DIV MOBILE */}
            <div className="lg:hidden w-full h-[580px] flex flex-col items-center justify-center bg-[#333]">
                <div className="flex flex-col w-full h-[50%] bg-[#222] opacity-90 p-4 items-center justify-center">
                    <Texto color="#FFF" textTransform="normal">
                        <b>{resposta.nome}</b><br></br><br></br><br></br>
                        {resposta.descricao}
                    </Texto>

                    <div className="mt-8">
                        <Botao backgroundColor="#000" width={275} height={50} fontSize="18px">
                            {resposta.preco == 0?"Valor a Consultar":"R$ " + resposta.preco}
                        </Botao>
                    </div>
                </div>
            </div>

            {/* DIV WEB */}
            <div className="max-lg:hidden w-full h-[700px] flex items-center justify-center py-6 bg-[#333]">
                <div className="w-1/2 mx-6">

                    {/* LADO ESQUERDO */}
                    <div className="w-full h-[500px] flex flex-col items-center bg-[#222] opacity-100 p-12">
                        <Texto color="#FFF" fontSize="24px" >
                        <b>{resposta.nome}</b><br></br><br></br>
                            {resposta.descricao}<br></br><br></br>
                        </Texto>

                        <div className="flex w-full mt-20 justify-center">
                            <Botao backgroundColor="#000" width="60%" height={55} fontSize={24} onClick={() => alert("Por favor, entre em contato conosco para mais informações.")}>
                                {resposta.preco == 0?"Valor a Consultar":"R$ " + resposta.preco}
                            </Botao>
                        </div>
                    </div>
                </div>
            </div>

            {/* RODAPÉ */}
            <Rodape />
        </>
    );
};

export default Produto;