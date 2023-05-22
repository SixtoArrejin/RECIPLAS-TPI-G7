import RegistrarPedido from "./Paginas/RegistarPedido.js";
import { Routes, Route } from "react-router-dom";
import Layout from "./Paginas/Layout.js";

function App() {
  document.title = "dead";

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="registrarpedido" element={<RegistrarPedido />} />
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
