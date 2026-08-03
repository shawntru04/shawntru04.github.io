import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Shawn Trujillo",
    };
  }

  return {
    title: `${project.title} | Shawn Trujillo`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <header className="glass sticky top-0 z-50">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-slate-950 transition hover:text-blue-700"
          >
            Shawn Trujillo
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/#projects"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-700"
            >
              All Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold !text-white transition hover:bg-slate-800"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <article>
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              <span aria-hidden="true">←</span>
              Back to projects
            </Link>

            <p className="section-label mt-12 text-sm font-bold text-blue-700">
              {project.category}
            </p>

            <div className="mt-4 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
                  {project.summary}
                </p>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                {project.date}
              </p>
            </div>

            <div className="relative mt-14 aspect-[16/8] overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1152px"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[0.7fr_0.3fr] lg:px-8">
          <div>
            <p className="section-label text-sm font-bold text-blue-700">
              Project overview
            </p>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="card h-fit rounded-2xl p-6">
            <h2 className="font-bold text-slate-950">Technologies</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600"
                >
                  {technology}
                </span>
              ))}
            </div>

            {(project.github || project.video) && (
              <div className="mt-7 border-t border-slate-200 pt-6">
                <h2 className="font-bold text-slate-950">Project links</h2>

                <div className="mt-4 flex flex-col gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-blue-700 hover:text-blue-900"
                    >
                      View source code ↗
                    </a>
                  )}

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-blue-700 hover:text-blue-900"
                    >
                      Watch demonstration ↗
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>
        </section>

        <section className="border-y border-slate-200 bg-white/70">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <p className="section-label text-sm font-bold text-blue-700">
              Key accomplishments
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="card flex gap-4 rounded-2xl p-6"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                  <p className="leading-7 text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="space-y-24">
            {project.sections.map((section) => (
              <section
                key={section.title}
                className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr]"
              >
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                    {section.title}
                  </h2>
                </div>

                <div>
                  {section.paragraphs && (
                    <div className="space-y-5 text-lg leading-8 text-slate-600">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="mt-6 space-y-4">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-4 leading-7 text-slate-700"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.image && (
                    <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-slate-200">
                      <Image
                        src={section.image}
                        alt={section.imageAlt ?? section.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 750px"
                      />
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="border-t border-slate-200 bg-white/70">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Explore another project
            </h2>

            <Link
              href="/#projects"
              className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold !text-white transition hover:bg-blue-700"
            >
              View all projects
            </Link>
          </div>
        </section>
      </article>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Shawn Trujillo</p>

          <Link href="/" className="font-semibold hover:text-blue-700">
            Return home
          </Link>
        </div>
      </footer>
    </main>
  );
}