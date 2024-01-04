function Navbar() {
	return (
		<div className="fixed bottom-0 flex w-full bg-white px-2 py-4 text-black dark:bg-black dark:text-white">
			<div className="mx-auto flex w-5/6 items-center">
				<div>
					<h1 className="text-xl font-bold">// twoslashes</h1>
				</div>
				<div className="ml-auto">
					<ul className="flex items-center text-xs font-medium uppercase">
						<li className="ml-5">About</li>
						<li className="ml-5">Work</li>
						<li className="ml-5">Contact</li>
						<li className="ml-5">Archive</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
