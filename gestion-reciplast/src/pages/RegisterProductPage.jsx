import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Typography, Link, Card } from '@mui/material';
//import './RegisterProductPage.css'; // Agrega un archivo CSS para estilos adicionales

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import { MuiFileInput } from 'mui-file-input'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { NavLink } from 'react-router-dom';

function RegisterProductPage() {
    const [productType, setProductType] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleProductTypeChange = (event) => {
        setProductType(event.target.value);
        // Si el usuario selecciona "Materia Prima", se borra el valor de precio
        // y se deshabilita el campo para que no se pueda ingresar un valor.
        if (event.target.value === 'Materia Prima') {
            setProductPrice('');
        }
    };

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductDescriptionChange = (event) => {
        setProductDescription(event.target.value);
    };

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleProductImageChange = (event) => {
        setProductImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos del producto al servidor para registrarlo
        console.log({
            productType,
            productName,
            productDescription,
            productPrice,
            productImage,
        });
    };

    // Aquí se agrega el estilo CSS utilizando template literals
    const styles = `
    input[type="number"]:disabled {
    color: #aaa;
    }
    `;

    const [file, setFile] = React.useState(null)

    const handleChange = (newFile) => {
        setFile(newFile)
    }


    return (
        <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ width: "100%" }}>
            <style>{styles}</style>

            <Grid item xs={12}>
                <p><NavLink to="/home" >Home</NavLink> » Stock » Registrar</p>
            </Grid>

            <Grid container xs={8} direction="row" justifyContent="center" alignItems="center" border="1px solid black" borderRadius={8} padding={2}>
                <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                    <Typography variant="h4" gutterBottom>
                        REGISTRAR PRODUCTO
                    </Typography>
                </Grid>

                <form onSubmit={handleSubmit}>
                    {/* <label>
                    Tipo de producto:
                    <input type="radio" name="productType" value="Materia Prima" checked={productType === 'Materia Prima'} onChange={handleProductTypeChange} />
                    Materia Prima
                </label>
                <label>
                    <input type="radio" name="productType" value="Fabricación" checked={productType === 'Fabricación'} onChange={handleProductTypeChange} />
                    Fabricación
                </label> */}
                    <FormControl>
                        <FormLabel id="demo-form-control-label-placement">Tipo de producto</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                            defaultValue="top"
                        >
                            <FormControlLabel value="Materia Prima" control={<Radio />} label="Materia Prima" onChange={handleProductTypeChange} />
                            <FormControlLabel value="Fabricación" control={<Radio />} label="Fabricación" onChange={handleProductTypeChange} />
                        </RadioGroup>
                    </FormControl>
                    <br /> <br />

                    <Grid container xs={12}
                        justifyContent="flex-start"
                        alignItems="center">
                        <label>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Nombre del producto"
                                multiline
                                maxRows={4}
                            />
                            {/* <input type="text" value={productName} onChange={handleProductNameChange} placeholder="Nombre del producto" /> */}
                        </label>

                        <label style={{ marginLeft: "20%" }}>
                            <Card variant="outlined"><Typography variant="h6" color="gray" >Id: 9999</Typography></Card>
                        </label>
                    </Grid>



                    <br /> <br />
                    <label>
                        <Grid container xs={12} alignItems="center">
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Descripción del producto"
                                multiline
                                maxRows={4}
                                fullWidth={true}
                            />
                        </Grid>

                        {/* <textarea value={productDescription} onChange={handleProductDescriptionChange} /> */}
                    </label>
                    <br />
                    <label>
                        <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Precios"
                            disabled={productType === 'Materia Prima'}
                        />
                        {/* Aquí se agrega la propiedad "disabled" para deshabilitar el campo */}
                        {/* <input type="number" value={productPrice} onChange={handleProductPriceChange} disabled={productType === 'Materia Prima'} /> */}
                    </label>
                    <br /> <br /> <br />
                    <label>
                        <MuiFileInput value={file} onChange={handleChange} placeholder="Imagen del producto" />
                        {/* <input type="file" accept="image/*" onChange={handleProductImageChange} /> */}
                    </label>
                    <br /> <br />

                    <Grid container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center">
                        <Button variant="contained" color="success">
                            Registrar
                        </Button>
                        {/* <button type="submit">Registrar</button> */}
                        <Button variant="outlined">Cancelar</Button>
                        {/* <button type="button">Cancelar</button> */}
                    </Grid>


                </form>
            </Grid>




        </Grid>
    );
}

export default RegisterProductPage;
