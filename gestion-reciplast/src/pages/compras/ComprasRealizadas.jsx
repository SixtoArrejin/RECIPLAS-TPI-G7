import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import TablaCompras from '../../components/TablaCompras';
import { useState } from 'react';
import Navegacion from '../../components/Navegacion';

function Buscador({ searchTerm, onSearchTermChange }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
      placeholder="Buscar proveedor"
    />
  );
}

export default function ComprasRealizadas() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="main-content" style={{ margin: "0", padding: "0", width: "100%" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>



        <div style={{ marginBottom: "20px", marginLeft: "10%", marginTop: "30px" }} >
          <Navegacion />
        </div>


        <div style={{ marginBottom: "20px", marginLeft: "5%" }} >

          <h1> Compras Realizadas </h1>
        </div>

        <div style={{ paddingBottom: '50px', paddingLeft: "15%" }}>
          <Buscador searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "10%" }}>
          <div style={{ width: "72%", }}>
            <TablaCompras />
          </div>
        </div>


      </div>
    </div>




  );
}