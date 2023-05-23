import { Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import TablaCompras from "../../components/TablaCompras";
import Navegacion from "../../components/Navegacion";

function Compras() {
    return (
        <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ width: "100%" }} paddingBottom={3}>

            <Grid item xs={12} marginBottom="20px" marginLeft="10%" marginTop="30px" >
                <Navegacion />
            </Grid>

            <div style={{ marginBottom: "20px", marginLeft: "5%" }} >
                <h1> Lista de Compras </h1>
            </div>


            <Grid container xs={11} direction="row" justifyContent="center" alignItems="center"
            // border="1px solid black" borderRadius={8} padding={2}
            >

                <Grid item xs={12}>
                    <TablaCompras />
                </Grid>
            </Grid>

        </Grid>
    );
}

export default Compras;