import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Rodape from "../components/Rodape";
import axios from "axios";
import Texto from "../components/Texto";

function Produtos({ navBar }) {
    const [resposta, setResposta] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/fastbank/produtos")

        .then((resposta) => {
            setResposta(resposta.data);
            console.log(resposta.data);
        });
    }, []);


    return (
        <>
            {/* NAVBAR */}
            {navBar}

            {/* DIV PRINCIPAL */}
            <div className="w-full flex flex-wrap bg-[#333] justify-center">
                {/* FAZER UM MAP DA API */}
                {resposta.map((produtos) => (
                    <div key={produtos.id} className="flex flex-col w-[80%] min-h-[100px] bg-[#222] text-white m-4 justify-center items-center lg:w-1/4 lg:h-[180px]">
                        <Link to={`/produto/${produtos.id}`}><p>{produtos.nome}</p></Link>
                        <Link  to={`/produto/${produtos.id}`}><p>{produtos.preco == 0?"Valor a consultar":"R$" + produtos.preco}</p></Link>
                    </div>
                ))}

                {/* RODAPÉ */}
                <Rodape />
            </div>
        </>
    );
};

export default Produtos;