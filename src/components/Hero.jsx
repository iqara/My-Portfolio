function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 text-center"
    >
      <div className="max-w-4xl">
        <p className="mb-4 text-lg font-semibold text-blue-500">
          Welcome to My Portfolio
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Building My Future in
          <span className="block text-blue-500">
            Technology & Cybersecurity & Networking
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-80">
          I'm an aspiring technology professional passionate about
          software development, cybersecurity, networking,
          Linux, and data analytics.

          I enjoy building practical projects, learning new
          technologies, and improving my technical skills.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-blue-500 px-7 py-3 font-semibold transition hover:bg-blue-500 hover:text-white"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Software Development",
            "Cybersecurity",
            "Networking",
            "Linux",
            "Data Analytics",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-500/40 px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;