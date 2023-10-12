import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Botao from "../components/Botao";
import FieldSet from "../components/FieldSet";
import imgClose from "../assets/close-icon.png";
import imgCadastro from "../assets/user-register.png";

import axios from "axios";

/*
    LÓGICA DE LOGOUT - IMPLEMENTAR NO MOBILE
    - Quando for fazer qualquer função dentro do Banco.
    - Verificar se o Token ainda é válido (AUTH/JWT/VERIFY).
    - Se não estiver, pega o Token de Refresh (verifica se ele ainda é válido) e pega um novo Token de Access (AUTH/JWT/REFRESH).
    - Se o Token de Refresh não for válido.
    - Redireciona para o Login.
    - Substitui o Token de Access no LocalStorage.
*/

function Cadastro() {
    const navigate = useNavigate();

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [nomeRazao, setNomeRazao] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dtNascAbertura, setDtNascAbertura] = useState("");
    const [rg, setRg] = useState("");

    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [senha, setSenha] = useState("");
    const [foto, setFoto] = useState("");

    // REQUISIÇÃO CADASTRAR NOVO USUÁRIO
    const cadastrarUser = () => {
        axios.post("http://127.0.0.1:8000/auth/users/", {
            cpf: cpfCnpj,
            nome_razao: nomeRazao,
            email: email,
            telefone: telefone,
            dt_nasc_abertura: dtNascAbertura,
            rg: rg,
            foto: foto,
            password: senha,
        })
        .then(function(response) {
            console.log(response);
            criarTokens();
        })
        .catch(function(error) {
            alert("Verifique se seus dados estão corretos.");
            console.log(error);
        })
    };
    
    // REQUISIÇÃO CRIAR TOKENS JWT
    const criarTokens = () => {
        axios.post("http://127.0.0.1:8000/auth/jwt/create", {
            cpf: cpfCnpj,
            password: senha,
        })
        .then(function(response) {
            // SALVANDO OS TOKENS JWT NO LOCAL STORAGE
            console.log(response);
            localStorage.setItem("TokenAccess", JSON.stringify(response.data.access));
            localStorage.setItem("TokenRefresh", JSON.stringify(response.data.refresh));
            cadastrarEndereco(response.data.access);
        })
        .catch(function(error) {
            console.log(error);
            alert("Não foi possível cadastrar o cliente.");
        })
    };

    // REQUISIÇÃO CADASTRAR ENDEREÇO
    const cadastrarEndereco = (tokenAccess) => {
        axios.post("http://127.0.0.1:8000/fastbank/enderecos/", {
            logradouro: logradouro,
            numero: numero,
            bairro: bairro,
            complemento: complemento,
            cidade: cidade,
            uf: estado,
            cep: cep
        },
        {
            headers: { Authorization: "JWT " + tokenAccess }
        })
        .then(function(response) {
            console.log(response);
            localStorage.clear();
            alert("Usuário cadastrado com sucesso.");
            navigate("/login");
        })
        .catch(function(error) {
            console.log(error);
            alert("Não foi possível cadastrar o endereço. Tente novamente!");
            navigate("/");
        })
    };


    return (
        <>
            {/* DIV PRINCIPAL */}
            <div className="flex flex-col items-center justify-center bg-[#333]">

                {/* ÍCONE VOLTAR */}
                <div className="flex self-start absolute top-0">
                    <Link to="/"><img src={imgClose} className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]" /></Link>
                </div>

                {/* DIV LARANJA */}
                <div className="flex flex-col items-center bg-black w-full h-[920px] lg:w-2/5 lg:h-[1000px] my-28 rounded-lg">
                <img src={imgCadastro} className="w-[100px] h-[100px] my-8 lg:w-[130px] lg:h-[130px]"/>
                    <div className="w-[90%] flex flex-col mb-8">

                        {/* DADOS PESSOAIS */}
                        <div className="mb-4">
                            <FieldSet>Dados Pessoais</FieldSet>
                            <input type="text" maxLength={100} placeholder="Nome Completo" className="w-full h-[30px] px-4" onChange={(e) => setNomeRazao(e.target.value)} />
                            <input type="text" maxLength={9} placeholder="RG" className="w-full h-[30px] px-4 mt-2" onChange={(e) => setRg(e.target.value)} />
                            <div className="flex justify-between mt-2">
                                <input type="date" className="w-[185px] :w-1/2 h-[30px] text-gray-400 px-4" onChange={(e) => setDtNascAbertura(e.target.value)} />
                                <input type="text" maxLength={11} placeholder="CPF" className="w-[185px] h-[30px] px-4" onChange={(e) => setCpfCnpj(e.target.value)} />
                            </div>
                            <input type="text" maxLength={11} placeholder="Celular" className="w-full h-[30px] px-4 mt-2" onChange={(e) => setTelefone(e.target.value)} />
                            <input type="file" accept="image/*" capture="user" style={{marginTop: 20, marginBottom: 20}} onChange={(e) => setFoto(e.target.files)} />
                        </div>

                        {/* ENDEREÇO */}
                        <div className="my-4">
                            <FieldSet>Endereço</FieldSet>
                            <div className="flex justify-between mb-2">
                                <input type="text" maxLength={8} placeholder="CEP" className="w-[195px] h-[30px] px-4" onChange={(e) => setCep(e.target.value)} />
                                <input type="text" maxLength={50} placeholder="Complemento" className="w-[175px] h-[30px] px-4" onChange={(e) => setComplemento(e.target.value)} />
                            </div>

                            <input type="text" maxLength={150} placeholder="Logradouro" className="w-full h-[30px] px-4" onChange={(e) => setLogradouro(e.target.value)} />
                            <div className="flex justify-between mt-2">
                                <input type="text" maxLength={50} placeholder="Bairro" className="w-[245px] h-[30px] px-4" onChange={(e) => setBairro(e.target.value)} />
                                <input type="number" maxLength={10} placeholder="Número" className="w-[125px] h-[30px] px-4" onChange={(e) => setNumero(e.target.value)} />
                            </div>
                            
                            <div className="flex justify-between mt-2">
                                <input type="text" maxLength={50} placeholder="Cidade" className="w-[245px] h-[30px] px-4" onChange={(e) => setCidade(e.target.value)} />
                                <input type="text" maxLength={2} placeholder="Estado" className="w-[125px] h-[30px] px-4" onChange={(e) => setEstado(e.target.value)} />
                            </div>
                        </div>

                        {/* CADASTRO */}
                        <div className="my-4">
                            <FieldSet>Cadastro</FieldSet>
                            <input type="email" placeholder="E-mail" className="w-full h-[30px] px-4 mb-2" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Senha" className="w-full h-[30px] px-4 mb-2" onChange={(e) => setSenha(e.target.value)} />
                        </div>
                    </div>
                    <Botao width="60%" height="40px" onClick={cadastrarUser}>Cadastrar</Botao>
                </div>
            </div>
        </>
    );
};

export default Cadastro;