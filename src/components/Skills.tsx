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
		<div className="flex h-screen flex-col items-center justify-center">
			<div className="mb-24 flex w-1/2 flex-col items-center justify-center">
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
			<div className="flex w-5/12 flex-wrap justify-between text-newblack-900">
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiJavascript className="text-7xl" />
					<p className="mt-1">Javascript</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiTypescript className="text-7xl" />
					<p className="mt-1">TypeScript</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiPython className="text-7xl" />
					<p className="mt-1">Python</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiReact className="text-7xl" />
					<p className="mt-1">React</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiVuedotjs className="text-7xl" />
					<p className="mt-1">Vue</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiNodedotjs className="text-7xl" />
					<p className="mt-1">Nodejs</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiHtml5 className="text-7xl" />
					<p className="mt-1">HTML</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiCss3 className="text-7xl" />
					<p className="mt-1">CSS</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiSass className="text-7xl" />
					<p className="mt-1">Sass</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiTailwindcss className="text-7xl" />
					<p className="mt-1">Tailwindcss</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiBootstrap className="text-7xl" />
					<p className="mt-1">Boostrap</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiGit className="text-7xl" />
					<p className="mt-1">Git</p>
				</div>
				<div className="flex flex-col items-center justify-center p-3 font-medium">
					<SiVisualstudiocode className="text-7xl" />
					<p className="mt-1">VS Code</p>
				</div>
			</div>
		</div>
	);
}

export default Skills;
