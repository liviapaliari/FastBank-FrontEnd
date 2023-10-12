import React, { useEffect, useState } from "react";

import Texto from "../components/Texto";
import Rodape from "../components/Rodape";

import axios from "axios";


function Produto({ navBar}) {
    const [resposta, setResposta] = useState([]);

    // REQUISIÇÃO PARA GET TRANSFERÊNCIAS
    useEffect(() => {       
        let tokenAccess = JSON.parse(localStorage.getItem("TokenAccess"));
        axios.get("http://127.0.0.1:8000/fastbank/transacoes/", {
            headers: { Authorization: "JWT " + tokenAccess }
        })
        .then(function(response) {
            console.log(response);
            setResposta(response.data);
        })
        .catch(error => {
            console.log(error);
            alert("Faça login para acessar o extrato.");
        })
    },[]);


    return (
        <>
            {/* NAVBAR */}
            {navBar}

            {/* DIV MOBILE */}
                <div className="lg:hidden w-full h-[580px] flex flex-col items-center justify-center bg-[#333]">
                    <div className="flex flex-col w-full min-h-[400px] bg-[#222] opacity-90 p-4 items-center justify-center">
                        <Texto color="#FFF" fontSize={28}>Extrato</Texto>
                        {resposta.map((transacao) => (
                        <div className="w-full my-4 border-b">
                            <Texto color="#FFF" textTransform="normal">
                                {transacao.tipo}<br></br>
                                Destinatário: {transacao.nome_destinatario}<br></br>
                                Descrição: {transacao.descricao}<br></br>
                                Valor: R$ {transacao.valor}
                            </Texto>
                        </div>
                        ))}
                    </div>
                </div>

            {/* DIV WEB */}
            <div className="max-lg:hidden w-full flex items-center justify-center py-6 bg-[#333]">
                <div className="w-1/2 mx-6">

                    {/* DIV EXTRATO */}
                    <div className="w-full min-h-[620px] flex flex-col items-center bg-[#222] opacity-100 p-12">
                        <Texto color="#FFF" fontSize={32}>Extrato</Texto>
                        {resposta.map((transacao) => (
                        <div className="w-full my-4 border-b">
                            <Texto color="#FFF" fontSize="18px" textTransform="normal">
                            {transacao.tipo}<br></br>
                            Destinatário: {transacao.nome_destinatario}<br></br>
                            Descrição: {transacao.descricao}<br></br>
                            Valor: R$ {transacao.valor}
                            </Texto>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RODAPÉ */}
            <Rodape />
        </>
    );
}

export default Produto;