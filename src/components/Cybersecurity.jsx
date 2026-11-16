import React from "react";

const cybersecurityProjects = [
  {
    id: 1,
    title: "Secure Smart Home Network",

    category: "Network Security & Engineering",

    description:
      "Designed and implemented a segmented smart home network using Cisco Packet Tracer. Configured VLANs, inter-VLAN routing, DHCP, NAT/PAT, extended ACLs, SSH, port security, and DHCP Snooping.",

    image: "/projects/Network_topology.png",

    technologies: [
      "Cisco Packet Tracer",
      "VLANs",
      "Inter-VLAN Routing",
      "NAT/PAT",
      "Extended ACLs",
      "SSH",
      "Port Security",
      "DHCP Snooping",
    ],

    github: "https://github.com/iqara/Secure-Smart-Home-Network",
  },
];

function Cybersecurity() {
  return (
    <section
      id="cybersecurity"
      className="py-20 px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Cybersecurity Projects
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Practical networking and cybersecurity projects
            demonstrating hands-on technical experience.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {cybersecurityProjects.map((project) => (
            <div
              key={project.id}
              className="
                bg-gray-50 dark:bg-gray-900
                rounded-2xl
                overflow-hidden
                border border-gray-200 dark:border-gray-800
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* Project Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800"
                />
              </div>

              {/* Project Information */}
              <div className="p-7">

                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-3 mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        text-xs font-medium
                        rounded-full
                        bg-blue-100 text-blue-700
                        dark:bg-blue-900/30 dark:text-blue-400
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* GitHub Button */}
                <div className="mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center
                      px-6 py-3
                      bg-blue-600 hover:bg-blue-700
                      text-white font-semibold
                      rounded-lg
                      transition-colors duration-300
                    "
                  >
                    View Project on GitHub →
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Cybersecurity;