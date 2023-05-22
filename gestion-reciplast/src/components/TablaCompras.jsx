import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid, TextField, Button, Modal } from '@mui/material';
import Modal1 from './Modal1';

function createData(proveedor, id, fecha, total, descripcion) {
  return {
    proveedor,
    id,
    fecha,
    total,
    descripcion,
    history: [
      {
        name: 'Botella',
        pu: 35,
        cantidad: 3,
        descripcion: "Buen producto"
      },
      {
        name: 'Bolsas',
        pu: 5,
        cantidad: 1,
        descripcion: "Buenisimo"
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.fecha}</TableCell>
        <TableCell align="right">{row.proveedor}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>

            {/* Detalle de cada fila */}
            <Box sx={{ margin: 1 }}>
              <Typography variant="h5" gutterBottom component="div">
                Detalle de compra
              </Typography>
              <Typography variant="h6" color="initial">Descripcion: {row.descripcion}</Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Producto</TableCell>
                    <TableCell align="center">Descripcion</TableCell>
                    <TableCell align="center">P/U</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                    <TableCell align="center">Total ($)</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.name}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.descripcion}
                      </TableCell>
                      <TableCell align="center">{historyRow.pu}</TableCell>
                      <TableCell align="center">{historyRow.cantidad}</TableCell>
                      <TableCell align="center">
                        {Math.round(historyRow.cantidad * historyRow.pu * 100) / 100}
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <br />
              <Grid container
                direction="row"
                justifyContent="flex-end"
                alignItems="center">
                <Button onClick={handleOpenM} variant="outlined">Imprimir</Button>
                <Modal1 open={openM} handleClose={handleCloseM} titulo="Se imprimio con exito" parrafo="Aceptar o cancelar para volver a la pagina" />
              </Grid>

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const rows = [
  createData('Juliancito', 9999, "02/03/2023", 2400, "Plasticos varios"),
  createData('El confiable Mario', 237, "15/03/2023", 37, "Compras para administación"),
  createData('Super Plastic', 3465, "15/03/2023", 37, "Utiles para comercialización"),
  createData('Don Moncho', 235677, "15/03/2023", 37, "Papeleria"),
  createData('PepeGrillo', 6587, "15/03/2023", 37, "Articulos de limpieza"),
  createData('Plasticos del Sur', 95238, "15/03/2023", 37, "Plasticos varios"),
];

export default function TablaCompras() {
  return (
    <Grid>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell ><Typography variant="h6" color="initial">ID</Typography></TableCell>
              <TableCell align="right"><Typography variant="h6" color="initial">Fecha</Typography></TableCell>
              <TableCell align="right"><Typography variant="h6" color="initial">Proveedor</Typography></TableCell>
              <TableCell align="right"><Typography variant="h6" color="initial">Total</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Detalles</Typography></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}