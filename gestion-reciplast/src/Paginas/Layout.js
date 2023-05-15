import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../Componentes/Header.js";
import Sidebar from "../Componentes/Sidebar.js";


const data = {
  home: "/",
  listado: "listado",
};



function Layout() {
    return (

      <div>
          <Header/> 
          <div className="app-container" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Sidebar rutas = {data} />
          
            
            <Outlet/>
          </div>
      </div>
    );
  }
  export default Layout;