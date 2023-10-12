import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Extrato from "./screens/Extrato";
import Produto from "./screens/Produto";
import NavBar from "./components/NavBar";
import Cadastro from "./screens/Cadastro";
import Produtos from "./screens/Produtos";

import axios from "axios";


function App() {
  const navigate = useNavigate();

  // FUNÇÃO LOGAR
  const logar = (cpf, senha) => {
    axios.post("http://127.0.0.1:8000/auth/jwt/create", {
        cpf: cpf,
        password: senha,
      })
      .then(function(response) {
        localStorage.setItem("TokenAccess", JSON.stringify(response.data.access));
        localStorage.setItem("TokenRefresh", JSON.stringify(response.data.refresh));
        navigate("/");
      })
      .catch(function(error) {
        console.log(error);
        alert("Usuário e/ou senha incorretos.");
      })
  };

  // FUNÇÃO DESLOGAR
  const deslogar = () => {
    localStorage.removeItem("TokenAccess");
    localStorage.removeItem("TokenRefresh");
    alert("Você saiu da sua conta. Faça Login para entrar novamente!");
    navigate("/login");
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home navBar={<NavBar deslogar={() => deslogar} />} />} />
        <Route path="/login" element={<Login logar={logar} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/extrato" element={<Extrato navBar={<NavBar deslogar={() => deslogar} />} />} />
        <Route path="/produto/:id" element={<Produto navBar={<NavBar deslogar={() => deslogar} />} />} />
        <Route path="/produtos" element={<Produtos navBar={<NavBar deslogar={() => deslogar} />} />} />
      </Routes>
    </div>
  )
};

export default App;