import React from "react";
import { useNavigate } from "react-router-dom";

import Botao from "../components/Botao";
import Texto from "../components/Texto";
import Rodape from "../components/Rodape";

// ROTAS
function Home({ navBar }) {
    let navigate = useNavigate();
    return (
        <>
            {/* Container */}
            <div className="bg-gray-200">

                {/* NAVBAR */}
                {navBar}

                {/* DIV IMAGEM */}
                <div className="flex justify-center items-end bg-img-1 bg-no-repeat bg-cover w-full min-h-[380px] lg:h-screen">
                    {/* FRAME WEB */}
                    <div className="max-lg:hidden flex flex-col items-center absolute left-16 bottom-24 w-2/5 h-52 bg-black opacity-80 p-6 rounded-bg-[#333] rounded-3xl">
                        <div className="w-full h-36 opacity-100">
                            <Texto color="#FFF"><b>Garanta já seu cartão de crédito</b></Texto>
                            <br></br>
                            <Texto color="#FFF">Sem anuidade</Texto>
                            <Texto color="#FFF">Sem taxa de manutenção</Texto>
                            <Texto color="#FFF">Função débito e crédito</Texto>
                            <Texto color="#FFF">Descontos ao adiantar parcelas</Texto>
                        </div>
                    </div>

                    {/* BOTÃO MOBILE */}
                    <div className="lg:hidden">
                        <Botao backgroundColor="#000" width={250} height={50} onClick={() => navigate("/produto")} fontSize="18px">
                            Peça já seu cartão
                        </Botao>
                    </div>
                </div>

                {/* NOSSOS PROJETOS */}
                <div className="m-8">
                    <div className="my-4">
                        <Botao height={50} fontSize="18px" backgroundColor="#000">
                            Sua vida financeira mais prática
                        </Botao>
                    </div>
                    {/* DIV IMAGEM */}
                    <div className="flex justify-end z-20 lg:justify-start bg-img-2 bg-no-repeat bg-cover w-full min-h-[550px] lg:h-screen">

                        {/* FRAME MOBILE */}
                        <div className="w-[320px] h-[340px] z-20 lg:w-[550px] lg:h-[500px] bg-[#000] opacity-90 p-4 lg:m-8 rounded-lg">

                            {/* TEXTO MOBILE */}
                            <div className="lg:hidden z-20">
                                <Texto color="#FFF">
                                    <b>Crie uma conta gratuita</b><br></br><br></br>
                                    - Empréstimo<br></br>
                                    - Ajuste de Limite<br></br>
                                    - Cashback e descontos<br></br>
                                    - Cartões internacionais<br></br>
                                    - Parcelamento de fatura<br></br>
                                    - Seu dinheiro rende até 105% CDI<br></br><br></br>
                                </Texto>
                            </div>

                            {/* TEXTO WEB */}
                            <div className="max-lg:hidden z-20">
                                <Texto color="#FFF" textTransform="uppercase" fontSize="24px">
                                <b>Crie uma conta gratuita</b><br></br><br></br>
                                    - Empréstimo<br></br>
                                    - Ajuste de Limite<br></br>
                                    - Cashback e descontos<br></br>
                                    - Cartões internacionais<br></br>
                                    - Parcelamento de fatura<br></br>
                                    - Seu dinheiro rende até 105% CDI<br></br><br></br>                           
                                </Texto>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RODAPÉ */}
                <Rodape />
            </div>
        </>
    );
};

export default Home;