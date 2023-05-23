import { Grid, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import TablaVentas from "../../components/TablaVentas";
import DeleteIcon from '@mui/icons-material/Delete';
import Navegacion from "../../components/Navegacion";
import Modal from "react-overlays/Modal";
import { useState } from 'react';
import "../../Modal.css";

function Ventas() {

    const [showModal, setShowModal] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);

    var handleSuccess = () => {
        console.log("success");
    };

    return (
        <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ width: "100%" }} paddingBottom={3}>

            <Grid item xs={12} marginBottom="20px" marginLeft="10%" marginTop="30px" >
                <Navegacion />
            </Grid>

            <div style={{ marginBottom: "20px", marginLeft: "5%" }} >
                <h1> Lista de Ventas </h1>
            </div>

            <Grid container xs={11} direction="row" justifyContent="center" alignItems="center"
            // border="1px solid black" borderRadius={8} padding={2}
            >
                <Grid item xs={12}>
                    <TablaVentas />
                </Grid>

                <hr />
                <br />
                <Grid container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Button variant="outlined" onClick={() => setShowModal(true)} >
                        Imprimir
                    </Button>
                </Grid>

                <Modal
                    className="modal"
                    show={showModal}
                    onHide={handleClose}
                    renderBackdrop={renderBackdrop}
                >
                    <div>
                        <div className="modal-header">
                            <div className="modal-title">Imprimir Ventas</div>
                            <div>
                                <span className="close-button" onClick={handleClose}>
                                    x
                                </span>
                            </div>
                        </div>
                        <div className="modal-desc">
                            <p>¿Seguro que desea imprimir?</p>
                        </div>
                        <div className="modal-footer">
                            <button className="secondary-button" onClick={handleClose}>
                                Cancelar
                            </button>
                            <button className="primary-button" onClick={handleSuccess}>
                                Imprimir
                            </button>
                        </div>
                    </div>
                </Modal>

            </Grid>

        </Grid>
    );
};

export default Ventas;