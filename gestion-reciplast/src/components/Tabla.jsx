import { useState } from 'react';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// Datos de ejemplo
const rows = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Sixto', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  
];

// Componente del buscador
function Buscador({ searchTerm, onSearchTermChange }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
      placeholder="Buscar"
    />
  );
}

// Componente de la tabla
export default function Tabla() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra los datos según el término de búsqueda
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%', padding: '10px' }}>
        <div style={{  paddingBottom: '50px' }} >
         <Buscador searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
        </div>
     

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
