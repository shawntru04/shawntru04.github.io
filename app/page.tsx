import Image from "next/image";

const contact = {
  github: "https://github.com/shawntru04",
  linkedin: "https://www.linkedin.com/in/shawn-trujillo-921004269",
  email: "shawntru@umich.edu",
};

const projects = [
  {
    title: "Autonomous Guided Parafoil",
    category: "Embedded Systems · Autonomous Flight",
    image: "/parafoil.jpg",
    description:
      "A low-cost autonomous parafoil system designed to recover high-altitude payloads through GPS and IMU-based navigation, real-time state estimation, and servo-actuated brake control.",
    technologies: [
      "C",
      "Python",
      "STM32",
      "FreeRTOS",
      "GPS",
      "IMU",
      "EKF",
      "XBee",
    ],
    highlights: [
      "Designed and built an STM32-based airborne guidance unit",
      "Implemented a custom Extended Kalman Filter for GPS and IMU fusion",
      "Built a Python ground control station for live telemetry and tracking",
    ],
  },
  {
    title: "Autonomous Robot Laser Tag",
    category: "Robotics · Communication Systems",
    image: "/laser-tag.jpg",
    description:
      "A multi-robot laser-tag platform using ROS 2, Raspberry Pi computers, custom infrared hardware, autonomous navigation, and real-time hit detection.",
    technologies: [
      "C++",
      "Python",
      "ROS 2",
      "Raspberry Pi",
      "KiCad",
      "LiDAR",
    ],
    highlights: [
      "Designed a custom PCB with IR transmitters, receivers, and status LEDs",
      "Created a 38 kHz communication protocol with checksum validation",
      "Integrated communication hardware with ROS 2 navigation software",
    ],
  },
  {
    title: "Steel Slab Optimization",
    category: "Industrial Software · Optimization",
    image: "/steel-casting.jpg",
    description:
      "A production optimization system that analyzed daily casting schedules and identified compatible slab-width transitions to reduce waste and preserve customer orders.",
    technologies: ["C", "JavaScript", "SQL", "Optimization", "Manufacturing"],
    highlights: [
      "Reduced monthly scrap by 60 tons",
      "Prevented 220 tons per month from being downgraded",
      "Kept 1,100 tons per month on original prime orders",
    ],
  },
  {
    title: "Autonomous Balloon Turret",
    category: "Computer Vision · Embedded Control",
    image: "/balloon-turret.jpg",
    description:
      "An autonomous targeting system combining computer vision, an STM32 controller, FPGA display hardware, and motor control to identify and engage balloon targets.",
    technologies: [
      "C",
      "Python",
      "Verilog",
      "OpenCV",
      "STM32",
      "FPGA",
    ],
    highlights: [
      "Used OpenCV to detect targets by HSV color classification",
      "Developed custom FPGA VGA and LCD display drivers",
      "Implemented PWM-based servo and stepper motor control",
    ],
  },
];

const experience = [
  {
    company: "Cleveland-Cliffs",
    role: "Process Control Intern",
    date: "Summers 2024–2026",
    location: "Dearborn, Michigan",
    bullets: [
      "Developed industrial software supporting steel production, inventory tracking, safety reporting, and manufacturing optimization.",
      "Built six web applications for crane and railcar safety audits with digital signatures, photo capture, checklists, offline storage, and automatic synchronization.",
      "Developed a background application that continuously tracked steel plate locations through production, transfer, and shipping operations.",
    ],
  },
  {
    company: "University of Michigan Undergraduate Recruitment",
    role: "Senior Tour Guide",
    date: "January 2024–Present",
    location: "Ann Arbor, Michigan",
    bullets: [
      "Lead campus tours for groups of up to 30 prospective students and families.",
      "Mentor and train new tour guides while ensuring accurate and consistent university information.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["C", "C++", "C#", "Python", "Java", "JavaScript", "SQL", "Verilog"],
  },
  {
    title: "Embedded & Hardware",
    skills: [
      "STM32",
      "FreeRTOS",
      "Raspberry Pi",
      "ESP32",
      "KiCad",
      "UART",
      "SPI",
      "I²C",
      "PWM",
    ],
  },
  {
    title: "Robotics & Software",
    skills: [
      "ROS 2",
      "OpenCV",
      "Git",
      "Linux",
      "Next.js",
      "React",
      "HTML/CSS",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Sensor Fusion",
      "Extended Kalman Filters",
      "Control Systems",
      "Computer Vision",
      "PCB Design",
      "Optimization",
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="glass sticky top-0 z-50">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-slate-950"
          >
            Shawn Trujillo
          </a>

          <div className="hidden items-center gap-2 text-sm font-medium text-slate-600 md:flex">
            <a
              className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-slate-200 hover:text-slate-900"
              href="#about"
            >
              About
            </a>

            <a
              className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-slate-200 hover:text-slate-900"
              href="#projects"
            >
              Projects
            </a>

            <a
              className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-slate-200 hover:text-slate-900"
              href="#experience"
            >
              Experience
            </a>

            <a
              className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-slate-200 hover:text-slate-900"
              href="#skills"
            >
              Skills
            </a>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-blue-700 hover:!text-white"
          >
            Resume
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="grid-pattern relative overflow-hidden border-b border-slate-200"
      >
        <div className="mx-auto grid min-h-[780px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
          <div>
            <p className="section-label mb-5 text-sm font-bold text-blue-700">
              Embedded Systems · Robotics · Software
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-7xl">
              I build systems that connect{" "}
              <span className="text-gradient">software with the physical world.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              I&apos;m Shawn Trujillo, an Electrical and Computer Engineering
              graduate student at the University of Michigan focused on embedded
              systems, autonomous robotics, industrial software, and hardware
              design.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore my work
                <ArrowIcon />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-700"
              >
                View resume
                <ExternalLinkIcon />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-500">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-700"
              >
                GitHub ↗
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-700"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="transition hover:text-blue-700"
              >
                Email ↗
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-200 to-cyan-100 blur-2xl" />

            <div className="card overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-200">
                <Image
                  src="/profile.jpg"
                  alt="Shawn Trujillo"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>

            <div className="card absolute -bottom-7 -left-5 rounded-2xl p-5 sm:-left-12">
              <p className="text-sm font-semibold text-slate-500">
                Current focus
              </p>
              <p className="mt-1 font-bold text-slate-950">
                Embedded Autonomous Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-label text-sm font-bold text-blue-700">
              About me
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Engineering from circuit board to application.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              My work sits at the intersection of embedded software, electronics,
              robotics, and industrial systems. I enjoy projects where software
              must interact reliably with sensors, actuators, communication
              hardware, and real manufacturing processes.
            </p>

            <p>
              I have developed autonomous flight hardware, multi-robot systems,
              custom PCBs, computer-vision applications, and production software
              used in a steel manufacturing environment.
            </p>

            <p>
              I am pursuing a Master of Engineering in Electrical and Computer
              Engineering with a focus on embedded systems after completing my
              Bachelor of Science in Computer Science and minor in Electrical
              Engineering at the University of Michigan.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label text-sm font-bold text-blue-700">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Projects built to solve real engineering problems.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A selection of embedded, robotic, autonomous, and industrial
              software projects.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card card overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

                  <p className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">
                    {project.category}
                  </p>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-500">
            Industrial project details are intentionally limited to
            non-confidential information and high-level outcomes.
          </p>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
          <p className="section-label text-sm font-bold text-blue-300">
            Manufacturing impact
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Optimization with measurable production results.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                The slab-width optimization identified compatibility between
                orders across an entire daily casting schedule, helping reduce
                waste and retain material on its intended customer orders.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-bold text-blue-300">60</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tons of monthly scrap avoided
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-bold text-blue-300">220</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tons per month prevented from going secondary
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-bold text-blue-300">1,100</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tons per month retained on prime orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-slate-200 bg-white/70"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="section-label text-sm font-bold text-blue-700">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
            Professional experience
          </h2>

          <div className="mt-12 space-y-6">
            {experience.map((job) => (
              <article
                key={job.company}
                className="card grid gap-7 rounded-3xl p-7 md:grid-cols-[0.38fr_0.62fr] md:p-9"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {job.company}
                  </h3>
                  <p className="mt-1 font-semibold text-blue-700">{job.role}</p>
                  <p className="mt-3 text-sm text-slate-500">{job.date}</p>
                  <p className="text-sm text-slate-500">{job.location}</p>
                </div>

                <ul className="space-y-4">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-4 leading-7 text-slate-600"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="section-label text-sm font-bold text-blue-700">
              Technical skills
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Tools used to build complete systems.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="card rounded-2xl p-6">
                <h3 className="font-bold text-slate-950">{group.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="section-label text-sm font-bold text-blue-700">
            Education
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card rounded-2xl p-7">
              <p className="text-sm font-semibold text-blue-700">
                August 2026–May 2027
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Master of Engineering
              </h3>
              <p className="mt-1 text-slate-600">
                Electrical and Computer Engineering — Embedded Systems
              </p>
              <p className="mt-4 font-semibold text-slate-800">
                University of Michigan
              </p>
            </div>

            <div className="card rounded-2xl p-7">
              <p className="text-sm font-semibold text-blue-700">
                August 2022–May 2026
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Bachelor of Science
              </h3>
              <p className="mt-1 text-slate-600">
                Computer Science, Minor in Electrical Engineering
              </p>
              <p className="mt-4 font-semibold text-slate-800">
                University of Michigan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-sky-600 px-8 py-16 text-center text-white sm:px-16">
          <p className="section-label text-sm font-bold text-blue-100">
            Get in touch
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Interested in embedded systems, robotics, or industrial software?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">
            I&apos;m interested in opportunities where I can build reliable
            software and hardware systems that solve real engineering problems.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Contact me
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Shawn Trujillo. Built with React and Next.js.</p>

          <div className="flex gap-5 font-semibold">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              LinkedIn
            </a>
            <a href="#home" className="hover:text-blue-700">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}