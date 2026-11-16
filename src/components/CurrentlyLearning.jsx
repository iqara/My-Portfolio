const learningTopics = [
  {
    title: "Networking Fundamentals",
    description: "Network protocols, troubleshooting, and infrastructure security.",
  },
  {
    title: "Cisco Networking & Security",
    description: "VLANs, routing, switching, ACLs, and network security configurations.",
  },
  {
    title: "Linux & System Administration",
    description: "Linux commands, permissions, system administration, and security hardening.",
  },
  {
    title: "Data Analytics & Visualization",
    description: "Data analysis, Power BI dashboards, and data-driven decision-making.",
  },
  {
    title: "Cybersecurity & Threat Analysis",
    description: "Network monitoring, packet analysis, vulnerability assessment, and security investigations.",
  },
  {
    title: "Full-Stack Development",
    description: "Building responsive web applications and secure backend systems.",
  },
];

function CurrentlyLearning() {
  return (
    <section id="learning" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold">
          Current Focus Areas
        </h2>

        <p className="mt-4 text-center opacity-70">
          Exploring new technologies, strengthening technical expertise, and gaining practical experience through hands-on projects in cybersecurity, networking, software development, and data analytics.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningTopics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6 transition hover:border-blue-500/60 hover:shadow-lg"
            >
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                In Progress
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                {topic.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed opacity-70">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentlyLearning;