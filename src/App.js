import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Home, About, Products, OurServices } from './pages';
import './styles/global.css'

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/services" component={OurServices} />
					<Route exact path="/about" component={About} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
