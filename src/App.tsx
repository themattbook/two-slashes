import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-white text-newblack-900 dark:bg-newblack-900 dark:text-white">
			<Navbar />
			<Hero />
			<Skills />
		</div>
	);
}

export default App;
