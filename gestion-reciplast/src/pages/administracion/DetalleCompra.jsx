
import TablaDetalle from "../../components/TablaDetalle";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';

function FechaInput(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label={props.nombre} defaultValue={dayjs('2022-04-17')} />
      </DemoContainer>
    </LocalizationProvider>
  );
}

function DatosPedido() {
  return (
    <React.Fragment>
      <div >
        
          <Grid
            container
            spacing={1}
            xs={12}
            justifyContent="flex-start"
          >
            <Grid item xs={6} >
              <FechaInput
                nombre="Fecha de compra"
                id="FechaPedido"
                disabled
                defaultValue="05/02/2022"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                id="DNICliente"
                label="ID"
                defaultValue="32000"
              />
            </Grid>
          </Grid>
          <br /><br />
          <Grid
            container
            spacing={1}
            xs={12}
            justifyContent="flex-start"
          >
            
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                id="DNICliente"
                label="Proveedor"
                defaultValue="Mario Bros"
              />
            </Grid>
          </Grid>
      </div>
      <div></div>
    </React.Fragment>
  );
}

function DetalleCompra() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <div style={{ width: "100%", paddingBottom: "30px" }}>
          <h1 style={{ margin: "0" }}>DETALLES DE COMPRA</h1>
        </div>
        <div>
          <DatosPedido />
        </div>

        {/* Aca va la tabla */}
        <div className="Caja">
          <TablaDetalle />
          <div style={{ justifyContent: "right", width: "100%", padding: "20px", display: "flex" }}>
            <p style={{ paddingRight: "5px" }}>TOTAL ($):</p>
            <TextField
              disabled
              defaultValue="1900 "
            />
          </div>
        </div>
        <div style={{ textAlign: "center", width: "90%" }}>
          {" "}
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Imprimir
          </Button>
        </div>
      </Grid>
    </>
  );
}

export default DetalleCompra;