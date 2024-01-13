import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiVuedotjs,
	SiNodedotjs,
	SiCss3,
	SiSass,
	SiHtml5,
	SiVisualstudiocode,
	SiGit,
	SiBootstrap,
	SiTailwindcss,
	SiPython,
} from 'react-icons/si';
function Skills() {
	return (
		<section className="skills flex h-screen flex-col items-center justify-center">
			<div className="mb-24 flex w-1/3 flex-col items-center justify-center">
				<h1 className="text-sm uppercase">
					Every challenge is an opportunity to showcase your
					excellence.
				</h1>
				<h1 className="mt-5 bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-center text-6xl font-bold text-transparent">
					Proficiencies & Experience
				</h1>
				<p className="mt-5 text-center text-lg font-medium">
					I specialize in crafting user-friendly web applications
					using HTML, CSS, and JS. My expertise lies in developing
					interactive layouts with Vue and React, integrating custom
					plugins and features. With a focus on clean and efficient
					code, I bring full-stack development experience to the
					table.
				</p>
			</div>
			<div className="flex w-1/3 flex-col opacity-80">
				<div className="flex w-full flex-wrap justify-between">
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiJavascript className="text-4xl" />
						<p className="mt-1">Javascript</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiTypescript className="text-4xl" />
						<p className="mt-1">TypeScript</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiPython className="text-4xl" />
						<p className="mt-1">Python</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiReact className="text-4xl" />
						<p className="mt-1">React</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiVuedotjs className="text-4xl" />
						<p className="mt-1">Vue</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiNodedotjs className="text-4xl" />
						<p className="mt-1">Nodejs</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiHtml5 className="text-4xl" />
						<p className="mt-1">HTML</p>
					</div>
				</div>
				<div className="flex w-full flex-wrap justify-between">
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiCss3 className="text-5xl" />
						<p className="mt-1">CSS</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiSass className="text-5xl" />
						<p className="mt-1">Sass</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiTailwindcss className="text-5xl" />
						<p className="mt-1">Tailwindcss</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiBootstrap className="text-5xl" />
						<p className="mt-1">Boostrap</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiGit className="text-5xl" />
						<p className="mt-1">Git</p>
					</div>
					<div className="flex flex-col items-center justify-center p-3 font-medium">
						<SiVisualstudiocode className="text-5xl" />
						<p className="mt-1">VS Code</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
