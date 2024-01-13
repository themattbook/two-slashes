import { FaCircleHalfStroke } from 'react-icons/fa6';

function Navbar({ darkMode, toggleDarkMode }) {
	return (
		<div
			className={`navbar fixed top-0 flex w-full p-4 opacity-90 ${
				darkMode ? 'bg-newblack-900 text-white' : 'bg-white text-black'
			}`}
		>
			<div className="mx-auto flex h-full w-5/6 items-center">
				<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-purple-500 shadow-md">
					<h1 className="text-xl font-bold text-white">//</h1>
				</div>
				<div className="ml-auto">
					<ul className="flex items-center text-sm font-bold uppercase">
						<li className="ml-5">About</li>
						<li className="ml-5">Work</li>
						<li className="ml-5">Contact</li>
						<li className="ml-5">Archive</li>
					</ul>
				</div>
				<div className="ml-5">
					<FaCircleHalfStroke
						onClick={toggleDarkMode}
						className="cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
