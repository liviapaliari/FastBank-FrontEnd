import React, { useState } from "react";
import { Link } from "react-router-dom";

import Botao from "../components/Botao";
import imgLogin from "../assets/user-login.png";
import imgClose from "../assets/close-icon.png";


function Login({ logar }) {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    
    return (
        <>
            {/* CONTAINER */}
            <div className="h-screen flex flex-col justify-center items-center bg-[#333]">
            
                {/* ÍCONE VOLTAR */}
                <div className="flex self-start absolute top-0">
                    <Link to="/"><img src={imgClose} className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]" /></Link>
                </div>

                {/* DIV LARANJA */}
                <div className="flex flex-col items-center w-5/6 h-[400px] bg-black rounded-[50px] opacity-90 lg:w-2/3 lg:h-[600px]">
                    <img src={imgLogin} className="w-[100px] h-[100px] my-8 lg:w-[130px] lg:h-[130px]" />
                    {/* DIV MOBILE */}
                    <div className="lg:hidden flex flex-col justify-center items-center ">
                        <input maxLength={11} className="w-[270px] h-[40px] px-4 my-4" onChange={(e) => setCpf(e.target.value)} placeholder="CPF" type="email" />
                        <input className="w-[270px] h-[40px] px-4 mb-6" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" type="password" />
                        <Botao onClick={() => logar(cpf, senha)} width="270px" height="40px" fontSize="18px">Login</Botao>
                    </div>

                    {/* DIV WEB */}
                    <div className="max-lg:hidden flex flex-col justify-center items-center mb-24">
                        <input maxLength={11} className="w-[420px] h-[45px] px-4 my-4" onChange={(e) => setCpf(e.target.value)} placeholder="CPF" type="email" />
                        <input className="w-[420px] h-[45px] px-4 mb-24" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" type="password" />
                        <Botao onClick={() => logar(cpf, senha)} width="420px" height="45px" fontSize="20px">Login</Botao>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;