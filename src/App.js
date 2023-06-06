import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import requireAuth from './router/middleware.js';

function App() {
	const [logged, setLogged] = useState(false);
	const [register, setRegister] = useState(false);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	
	useEffect(() => {
		requireAuth(register, pathname, navigate);
  	}, [logged, navigate, pathname]);

	return 	(
			<div className="App">
				<Outlet context={{setLogged, setRegister}}></Outlet>
			</div>
			);
};

export default App;
