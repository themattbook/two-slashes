import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div
			className={`flex min-h-screen flex-col transition-colors ${
				darkMode ? 'dark' : ''
			}`}
		>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Hero />
			<Skills />
		</div>
	);
}

export default App;
