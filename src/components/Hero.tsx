function Hero() {
	return (
		<main className="flex h-screen">
			<div className="mx-auto flex h-full w-5/6 items-center">
				<div className="half left flex h-full w-1/2 flex-col justify-center p-4">
					<div className="w-full">
						<h1 className="text-5xl font-bold">
							Hello, world! I&apos;m
						</h1>
						<h1 className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
							Matthew Sweet
						</h1>
						<h1 className="text-5xl font-bold">
							FullStack Developer
						</h1>
						<div className="w-5/6 pt-5">
							<h3 className="text-lg font-medium">
								Crafting innovative solutions for design
								challenges, sculpting intelligent user
								interfaces with meaningful interactions, and
								bringing to life dynamic web applications that
								offer seamless digital journeys.
							</h3>
						</div>
						<button className="mt-5 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 px-5 py-2 text-lg font-bold text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
							Learn more {`>`}
						</button>
					</div>
				</div>
				<div className="half right flex h-full w-1/2 items-center p-4">
					<img src="/computer.svg" alt="computer mx-auto" />
				</div>
			</div>
		</main>
	);
}

export default Hero;
