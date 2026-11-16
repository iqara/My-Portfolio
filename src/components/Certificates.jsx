const certificates = [
  {
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy / NDG",
    institution: "Kenya Methodist University",
    date: "21 July 2025",
    file: "/certificates/Linux_Essentials.pdf",
  },
  {
    title: "Fundamentals of Designing and Deploying Computer Networks",
    issuer: "Internet Society Learning",
    date: "Completed",
    file: "/certificates/Computer_Networks.pdf",
  },
];

function Certificates() {
  return (
    <section id="certifications" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-3xl font-bold">
          My Certifications
        </h2>

        <p className="mt-4 text-center opacity-70">
          Certificates and professional training I have completed.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-7 transition hover:border-blue-500"
            >
              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-500">
                Completed
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {certificate.title}
              </h3>

              <p className="mt-3 text-blue-500">
                {certificate.issuer}
              </p>

              {certificate.institution && (
                <p className="mt-2 opacity-75">
                  {certificate.institution}
                </p>
              )}

              <p className="mt-3 text-sm opacity-70">
                {certificate.date}
              </p>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;