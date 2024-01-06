import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-white text-newblack-900 dark:bg-newblack-900 dark:text-white">
			<Navbar />
			<Hero />
		</div>
	);
}

export default App;
