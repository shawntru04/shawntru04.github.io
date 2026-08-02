const projects = [
  {
    title: "Autonomous Guided Parafoil",
    description:
      "An STM32-based autonomous recovery system using GPS, IMU sensor fusion, and servo-actuated brake lines.",
    technologies: "C, Python, STM32, FreeRTOS",
  },
  {
    title: "Autonomous Robot Laser Tag",
    description:
      "A multi-robot ROS 2 system featuring custom infrared communication hardware and real-time hit detection.",
    technologies: "C++, Python, ROS 2, Raspberry Pi",
  },
  {
    title: "Steel Slab Optimization",
    description:
      "A production optimization system that identified compatible slab-width transitions across daily casting schedules.",
    technologies: "C, JavaScript, SQL",
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <section className="flex min-h-[70vh] flex-col justify-center">
        <p className="mb-4 text-lg text-blue-600">
          Embedded Systems · Robotics · Software
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Shawn Trujillo
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-600">
          Computer science and electrical engineering graduate student at the
          University of Michigan building embedded, autonomous, and industrial
          software systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-black px-5 py-3 font-medium text-white"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium"
          >
            Resume
          </a>

          <a
            href="https://github.com/shawntru04"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold">Featured Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 leading-7 text-gray-600">
                {project.description}
              </p>

              <p className="mt-5 text-sm font-medium text-blue-600">
                {project.technologies}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}