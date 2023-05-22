import Tabla from "./components/Tabla";
import BarraLateral from "./components/BarraLateral";
import { Login, WidthFull } from "@mui/icons-material";
import Navegacion from "./components/Navegacion";
import TablaCompleta from "./components/TablaCompleta";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter,  Navigate } from 'react-router-dom';
import  Layout  from "./pages/Layout";
import  Home  from "./pages/Home";
import ListadoMP from "./pages/ListadoMP";
import ProductosFabricados from "./pages/ProductosFabricados";
import Pedidos from "./pages/Pedidos";
import Registro from "./pages/Registro";
import AgregarMateriaPrima from "./pages/AgregarMateriaPrima";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Regsitro2 from "./pages/Registro2";
import { useState, useEffect } from "react";
import Compras from "./pages/administracion/Compras";
import NuevoUsuario from "./pages/administracion/NuevoUsuario";
import Ventas from "./pages/administracion/Ventas";
import Clientes from "./pages/administracion/Clientes";
import Proveedores from "./pages/administracion/Proveedores";
import ClientesDeudores from "./pages/administracion/ClientesDeudores";
import DetalleCompra from "./pages/administracion/DetalleCompra"
import DetalleVenta from "./pages/administracion/DetalleVenta";



const areasData = {
    produccion: [{ nombre: 'Home', link: "/", sub: true, icon: <HomeOutlinedIcon /> },
              { nombre: 'Materias Primas', link: "materias-primas/agregar", sub: false, icon: <HomeOutlinedIcon />, submenus: [ {nombre: "Ver Stock", link: "materias-primas/listado" }, {nombre: "Agregar", link: "materias-primas/agregar" } ]} ,
              { nombre: 'Productos Fabricados', link: "productos-fabricados", sub: true, icon: <HomeOutlinedIcon /> },
              { nombre: 'Pedidos', link: "pedidos", sub: true, icon: <HomeOutlinedIcon /> }] , 
			  
	administracion: [{  nombre: 'Home', link: "/", sub: true, icon: <HomeOutlinedIcon /> },
              { nombre: 'Materia Prima', link: "materias-primas/listado", sub: true, icon: <HomeOutlinedIcon /> },
			  { nombre: 'Productos fabricados', link: "productos-fabricados", sub: true, icon: <HomeOutlinedIcon />, submenus: [ {nombre: "Ver Stock", link: "stock" }, 
			  																									{nombre: "Agregar", link: "registrar-producto" } ]},
			  { nombre: 'Compras', link: "compras", sub: true, icon: <HomeOutlinedIcon /> },
			  { nombre: 'Ventas', link: "ventas", sub: true, icon: <HomeOutlinedIcon /> },
			  { nombre: 'Usuarios', link: "productos-fabricados", sub: false, icon: <HomeOutlinedIcon />, submenus: [ {nombre: "Ver Usuario", link: "listado-usuario" }, 
			  																													{nombre: "Agregar", link: "nuevo-usuario" } ]},
			{ nombre: 'Clientes', link: "clientes", sub: false, icon: <HomeOutlinedIcon />, submenus: [ {nombre: "Ver Clientes", link: "clientes" }, 
			{nombre: "Deudores", link: "deudores" } ] },
			{ nombre: 'Proveedores', link: "proveedores", sub: true, icon: <HomeOutlinedIcon /> },]
			  
}
  


const usuarios= [ {nombre: "Pepe", area: "administracion"}, {nombre: "Luis", area: "produccion"} ]




function App() {
	document.title = 'dead';



	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
		return storedLoggedInStatus === 'true';
	  });
	
	  useEffect(() => {
		localStorage.setItem('isLoggedIn', isLoggedIn.toString());
	  }, [isLoggedIn]);
	
	  const handleLogin = () => {
		setIsLoggedIn(true);
	  };

	const [areaEmpresa, setAreaEmpresa] = useState(() => {
		const storedArea = localStorage.getItem('areaEmpresa');
		return storedArea || '';
	  });


	  useEffect(() => {
		localStorage.setItem('areaEmpresa', areaEmpresa);
	  }, [areaEmpresa]);


	const handleArea = (usuarioArea) => {
		setAreaEmpresa(usuarioArea);
	  };


const datosArea = areasData[areaEmpresa] || [];


	return (
		<div>
		  <Routes>
			{!isLoggedIn && <Route path="/" element={<Navigate to="/login" replace />} />}
			
			<Route path="login" element={<Registro accion={handleLogin}  usuarios= {usuarios} handleArea={handleArea} />} />

			<Route path="/" element={<Layout area={areaEmpresa} data={datosArea} accion={setIsLoggedIn} />}>
			  {/* Rutas protegidas */}
			  <Route path="materias-primas/listado" element={<ListadoMP />} />
			  <Route path="materias-primas/agregar" element={<AgregarMateriaPrima />} />
			  <Route path="productos-fabricados" element={<ProductosFabricados />} />
			  <Route path="pedidos" element={<Pedidos />} />
			  <Route path="/" element={<Home />} />
			  <Route path="registrar-producto" element={<ProductosFabricados/>} />
			  <Route path="compras" element={<Compras /> } />
			  <Route path="nuevo-usuario" element={<NuevoUsuario /> } />
			  <Route path="ventas" element={<Ventas /> } />
			  <Route path="clientes" element={<Clientes /> } />
			  <Route path="proveedores" element={<Proveedores /> } />
			  <Route path="deudores" element={<ClientesDeudores /> } />
			  <Route path="detalle-compra" element={<DetalleCompra /> } />
			  <Route path="detalle-venta" element={<DetalleVenta /> } />
			</Route>
		  </Routes>
		</div>
	  );
	}
	
	export default App;