import Table from '../Componentes/TablaCli';
import data from "../Data/Clientes.json"

function ListadoClientes() {
    const getHeadings = () => {
        return Object.keys(data[0]);
    }

    return (
    <div className="container">
        <Table theadData={getHeadings()} tbodyData={data}/>
    </div>
);
}
export default ListadoClientes;