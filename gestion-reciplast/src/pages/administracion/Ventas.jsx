import AccessibleTable from "../../components/AccessibleTable";
import { Grid } from "@mui/material";

function Ventas() {

    return (
        <Grid container xs={12} justifyContent="center">
            <Grid container xs={10}>
                <AccessibleTable />
            </Grid>
        </Grid>
    );
};

export default Ventas;
