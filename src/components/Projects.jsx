const projects = [
  {
    title: "Sales Performance Dashboard",
    category: "Data Analytics",
    image: "/dashboards/sales-dashboard.png",
    description:
      "An interactive Power BI dashboard analyzing sales, profits, orders, discounts, payment methods, and sales trends.",
    technologies: ["Power BI", "Data Visualization", "Data Analytics"],
  },
  {
    title: "BrightTech Sales Dashboard",
    category: "Data Analytics",
    image: "/dashboards/brighttech-dashboard.png",
    description:
      "A Power BI dashboard analyzing regional sales, product categories, revenue trends, and product performance.",
    technologies: ["Power BI", "Data Visualization", "Data Analytics"],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-3xl font-bold">
          My Projects
        </h2>

        <p className="mt-4 text-center opacity-70">
          Explore some of the practical projects I have developed.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-500/5 transition hover:border-blue-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-contain bg-white"
              />

              <div className="p-6">
                <span className="text-sm font-semibold text-blue-500">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed opacity-75">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/30 px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  View Dashboard
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;