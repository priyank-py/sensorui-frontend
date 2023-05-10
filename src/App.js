import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import { AuthProvider } from './context/AuthContext';
import Login from './util/Login';
import PrivateRoute from './routes/PrivateRoute';
import Home from './Home';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<PrivateRoute Component={Home} />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
