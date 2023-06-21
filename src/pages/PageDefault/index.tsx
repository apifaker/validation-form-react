import { Outlet } from 'react-router-dom'

import Header from 'components/Header'

const index = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<footer>
				Meu Rodapé
			</footer>
		</>
	)
}

export default index