import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import TablaCompras from '../../components/TablaCompras';

export default function ComprasRealizadas() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width:"100%" }}>
      
      
      <div ><br /> <h1>Compras Realizadas</h1> <br /></div>

      <div style={{ width:"90%" }}>
        <TablaCompras />
      </div>

    </div>
  );
}