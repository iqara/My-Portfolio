function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          About Me
        </h2>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-blue-500">
            Hello! I'm Iqra Abdullahi Ibrahim
          </h3>

          <p className="mb-4 leading-relaxed opacity-80">
            I am a Computer Science student at Kenya Methodist
            University. I completed my Diploma in Computer
            Information Systems in 2026 and am currently
            pursuing my degree in Computer Science.
          </p>

          <p className="mb-4 leading-relaxed opacity-80">
            My interests include software development,
            cybersecurity, computer networking, Linux,
            and data analytics.
          </p>

          <p className="leading-relaxed opacity-80">
            I enjoy developing practical applications,
            creating interactive Power BI dashboards,
            and continuously improving my technical skills.
            My goal is to build a career in technology
            while contributing to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;