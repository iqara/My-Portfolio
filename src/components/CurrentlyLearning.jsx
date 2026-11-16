const learningTopics = [
  {
    title: "CompTIA Network+",
    description: "Networking concepts, protocols, and troubleshooting.",
  },
  {
    title: "Cisco Networking",
    description: "Network configuration, routing, and switching.",
  },
  {
    title: "Linux Fundamentals",
    description: "Linux commands, file systems, and system administration.",
  },
  {
    title: "Data Analytics",
    description: "Data analysis, visualization, and analytical thinking.",
  },
  {
    title: "Cybersecurity",
    description: "Security fundamentals and practical security labs.",
  },
  {
    title: "Full-Stack Development",
    description: "Building applications using modern web technologies.",
  },
];

function CurrentlyLearning() {
  return (
    <section id="learning" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold">
          Currently Learning
        </h2>

        <p className="mt-4 text-center opacity-70">
          Technologies and professional skills I'm actively developing.
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