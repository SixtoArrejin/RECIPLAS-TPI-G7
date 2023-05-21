import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import BarraLateral from "../components/BarraLateral";
import BarraSuperior from "../components/BarraSuperior";

function Layout( {data, accion } ) {
    return (

      <div>
          <BarraSuperior accion= {accion} /> 
          <div className="app-container" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <BarraLateral campos = {data} />
          
            
            <Outlet />
          </div>
      </div>
    );
  }
  export default Layout;




  
