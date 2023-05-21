import { Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CollapsibleTable from "../../components/CollapsibleTable";

function Compras() {
    return (
        <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ width: "100%" }}>

            <Grid item xs={12}>
                <p><NavLink to="/home" >Home</NavLink> » Compras </p>
            </Grid>

            <Grid container xs={9} direction="row" justifyContent="center" alignItems="center" border="1px solid black" borderRadius={8} padding={2}>
                <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                    <Typography variant="h4" gutterBottom>
                        COMPRAS
                    </Typography>
                </Grid>
                <Grid item>
                    <CollapsibleTable />
                </Grid>
            </Grid>

        </Grid>
    );
}

export default Compras;