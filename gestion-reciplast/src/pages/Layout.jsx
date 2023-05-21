import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import BarraLateral from "../components/BarraLateral";
import BarraSuperior from "../components/BarraSuperior";


function Layout() {
    return (

      <div>
          <BarraSuperior /> 
          <div className="app-container" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <BarraLateral />
            
            
            <Outlet />
          </div>
      </div>
    );
  }
  export default Layout;






  
  <ul>

  <li>
      <Link to= "/" >  Home </Link>
  </li>

  <li>
      <Link to= "listado" >  Listado </Link>
  </li>
</ul>