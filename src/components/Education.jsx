const education = [
  {
    qualification: "Bachelor of Science in Computer Science",
    institution: "Kenya Methodist University",
    status: "In Progress",
    description:
      "Currently pursuing a degree in Computer Science.",
  },
  {
    qualification: "Diploma in Computer Information Systems",
    institution: "Kenya Methodist University",
    status: "Completed — Certificate Pending",
    year: "2026",
    description:
      "Successfully completed my diploma studies in 2026.",
  },
];

function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold">
          My Education
        </h2>

        <p className="mb-12 text-center opacity-70">
          My academic background and educational journey.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.qualification}
              className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-7 transition hover:border-blue-500"
            >
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500">
                {item.status}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {item.qualification}
              </h3>

              <p className="mt-3 font-medium text-blue-500">
                {item.institution}
              </p>

              {item.year && (
                <p className="mt-2 text-sm opacity-70">
                  Completion Year: {item.year}
                </p>
              )}

              <p className="mt-4 leading-relaxed opacity-75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;