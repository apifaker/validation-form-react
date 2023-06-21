import { Route, Routes } from "react-router-dom"

import PageDefault from 'pages/PageDefault'
import Formulario from "pages/Formulario"
import Cadastro from "pages/Cadastro"

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<PageDefault />}>
				<Route
					path="formulario"
					element={<Formulario />}
				/>
				<Route
					path="cadastro"
					element={<Cadastro />}
				/>
			</Route>
		</Routes>
	)
}

export default AppRoutes