import RegistrarPedido from "./Paginas/RegistarPedido.js";
import { Routes, Route } from "react-router-dom";
import Layout from "./Paginas/Layout.js";
import ListadoCli from "./Paginas/ListadoClientes.js"

function App() {
  document.title = "RECIPLAST";

  return (
    <div>
      <Routes>
        <Route key = "layout" path="/" element={<Layout />}>

        {/*Departamento de ventas */}
        <Route key = "registrarpedido" path="/registrarpedido" element={<RegistrarPedido />} />
        <Route key = "listadoCliente" path="/listadoCli" element={<ListadoCli />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/* import SideBar from "./Sidebar";
import Tabla from "./Tabla";
import "./componentsStyles.css";
import Input from "./InputMUI.js";
import Page from "./Paginas/Page";
import Header from "./Header"

function App() {
  return (
    <>
      {" "}
      <Header/>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar style={{ display: "flex", flexDirection: "row" }} />
        <Page />
      </div>
    </>
  );
}

export default App; */
