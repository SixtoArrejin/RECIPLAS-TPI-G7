import { Grid, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import TablaClientes from "../../components/TablaClientes";

function Clientes() {

    return (
        <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ width: "100%" }} paddingBottom={3}>

            <Grid item xs={12}>
                <p><NavLink to="/home" >Home</NavLink> » Ventas </p>
            </Grid>

            <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom>
                    LISTA DE CLIENTES
                </Typography>
            </Grid>

            <Grid container xs={10} direction="row" justifyContent="center" alignItems="center"
            // border="1px solid black" borderRadius={8} padding={2}
            >
                <Grid item xs={12}>
                    <TablaClientes />
                </Grid>

                <hr /> 
                <br />
                <Grid container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Imprimir
                    </Button>
                </Grid>

            </Grid>

        </Grid>
    );
};

export default Clientes;