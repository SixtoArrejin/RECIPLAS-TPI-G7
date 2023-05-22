import { Modal, Box, Typography, Button } from "@mui/material";

const stylem = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Modal1({ open, handleClose, titulo, parrafo }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={stylem}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {titulo}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {parrafo} <br/>
                    </Typography>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width:"100%", marginTop:"5" }}>
                        
                        <Button onClick={handleClose} variant="contained" color="success">
                            Aceptar
                        </Button>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}