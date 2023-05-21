import RegisterProductPage from "./pages/administracion/RegisterProductPage";
// import RegProductos from "./administracion/RegProductos";
import BarraLateral from "./components/BarraLateral";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Compras from "./pages/administracion/Compras";
import NuevoUsuario from "./pages/administracion/NuevoUsuario";
import Ventas from "./pages/administracion/Ventas";
// import ResponsiveAppBar from "./Components/ResponsiveAppBar";
//import './App.css'; // Agregar archivo de estilos CSS

function App() {
	document.title = 'dead';

	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="registrar-producto" element={<RegisterProductPage />} />
					<Route path="home" element={<div>Home</div>} />
					<Route path="compras" element={<Compras /> } />
					<Route path="nuevo-usuario" element={<NuevoUsuario /> } />
					<Route path="ventas" element={<Ventas /> } />
				</Route>
			</Routes>
		</div>
	);
}

export default App;