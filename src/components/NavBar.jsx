import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import imgLogo from "../assets/white-logo.jpg";
import imgLogin from "../assets/user-login.png";
import imgCadastro from "../assets/user-register.png";


function NavBar({ deslogar }) {
    let navigate = useNavigate();
    const [isActive, setActive] = useState(false);


    return (
        <>
            {/* NAVBAR INTEIRA */}
            <div className="lg:flex w-full h-40 bg-black">

                {/* PARTE ESQUERDA */}
                <div className="max-lg:hidden flex items-center w-2/5">
                    {/* LOGO */}
                    <div>
                        <Link to="/"><img src={imgLogo} className="w-[125px] mx-8 hover:bg-[#544B4B]" /></Link>
                    </div>
                    {/* SLOGAN */}
                    <div className="text-white text-2xl">
                        <p className="font-thin">Sua nova tecnologia</p>
                        <p className="uppercase">FastBank</p>
                    </div>
                </div>

                {/* PARTE DIREITA */}
                <div className="w-3/5">
                    {/* DIV SOMENTE MOBILE */}
                    <div className="max-lg:flex max-lg:flex-col max-lg:pl-4 max-lg:pt-4">
                        {/* ÍCONES */}
                        <div className="flex lg:justify-end h-1/2 lg:pt-4 lg:pr-4">
                            <Link to="/cadastro"><img src={imgCadastro} className="w-[75px] hover:bg-[#544B4B]" /></Link>
                            <Link to="/login"><img src={imgLogin} className="w-[75px] hover:bg-[#544B4B]" /></Link>
                            {localStorage.getItem("TokenAccess") == null? "": <button className="text-white" onClick={deslogar()}>Sair</button>}
                        </div>
                        {/* ARQUITECH SOMENTE MOBILE */}
                        <Link to="/"><p className="lg:hidden text-white text-2xl uppercase pl-3">FastBank</p></Link>
                    </div>

                    {/* NAVEGAÇÃO */}
                    <div className="max-lg:hidden flex flex-col justify-end h-1/2">
                        <ul className="flex justify-evenly text-white pb-4 uppercase">
                            <Link to="/produtos"><li className="hover:text-gray-300">Serviços</li></Link>
                            <Link to="/extrato"><li className="hover:text-gray-300">Extrato</li></Link>
                        </ul>
                    </div>
                </div>
            
                {/* MENU LATERAL */}
                <div className="lg:hidden">
                    {/* 3 BARRINHAS */}
                    <button onClick={() => setActive(!isActive)}>
                        <div className="flex flex-col justify-between absolute z-50 right-8 top-16 h-10">
                            <div className={isActive?"fixed top-16 right-8 rotate-45 h-1 w-14 bg-black":"h-1 w-14 bg-[#333]"}></div>
                            <div className={isActive?"hidden":"h-1 w-14 bg-[#333]"}></div>
                            <div className={isActive?"fixed top-16 right-8 -rotate-45 h-1 w-14 bg-black":"h-1 w-14 bg-[#333]"}></div>
                        </div>
                    </button>

                    {/* MENU LATERAL */}
                    <div className={isActive?"fixed top-0 right-0 w-64 h-screen bg-[#222] drop-shadow-2xl pt-40 z-40":"hidden"}>
                        <ul className="text-white uppercase flex flex-col text-center">
                            <Link to="/produtos"><li className="border-b-2 border-black hover:text-gray-300 py-4"><p>Serviços</p></li></Link>
                            <Link to="/extrato"><li className="border-b-2 border-black hover:text-gray-300 py-4"><p>Extrato</p></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;