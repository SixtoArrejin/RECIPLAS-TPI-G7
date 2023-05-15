import "../componentsStyles.css";
import Tabla from "../Componentes/Tabla";
import Breadcrumbs from "../Componentes/Breadcrumbs";
import Datos from "../Componentes/Datos"
import Listbox from "../Componentes/Listbox.js";
function Page() {
  return (
    <>
      <div className="Page">
        <div style={{ width: "100%", paddingBottom:"30px"}}>
          <h1 style={{ margin: "0" }}>REGISTRAR PEDIDO</h1>
          <Breadcrumbs />
        </div>
        <div className="Caja">
          <Datos />
        </div>
        <div className="Caja" style={{ margin: "20px" }}>
          <div style={{ display: "flex" }}>
            <Listbox />
            <button className="Button">AGREGAR</button>
          </div>
          <div className="Tabla">
            <Tabla />
          </div>
          <button className="Button">GUARDAR</button>
          <button className="Button">FINALIZAR</button>
        </div>
      </div>
    </>
  );
}

export default Page;
