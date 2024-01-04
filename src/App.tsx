import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<Hero />
		</div>
	);
}

export default App;
