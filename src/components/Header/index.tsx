import { NavLink } from 'react-router-dom'


const index = () => {
	return (
		<header>
			<nav>
				<NavLink to={'/formulario'} />
				<NavLink to={'/cadastro'} />
			</nav>
		</header>
	)
}

export default index