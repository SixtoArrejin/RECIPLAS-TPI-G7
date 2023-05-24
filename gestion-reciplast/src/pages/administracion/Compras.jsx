import { Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import TablaCompras from "../../components/TablaCompras";
import Navegacion from "../../components/Navegacion";
import CssBaseline from "@mui/material/CssBaseline";
import "../../componentsStyles.css";

function Compras() {
    return (
        <div className="Page">
        <div className="ParteSuperior">
            <div style={{padding:"0px 0px 20px 20px"}}><Navegacion/></div>
          <h1 style={{ margin: "0" }}>LISTADO DE COMPRAS</h1>
        </div>
        <div className="Caja">
          <CssBaseline />
          <TablaCompras />
          </div>
        </div>
        
    );
}

export default Compras;