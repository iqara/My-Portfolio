import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      "React",
      "Django",
      "Tailwind CSS",
      "REST APIs",
      "Git & GitHub",
    ],
  },
  {
    title: "Networking",
    icon: "🌍",
    skills: [
      "Cisco Packet Tracer",
      "Network Topology Design",
      "TCP/IP",
      "VLAN Configuration",
      "Inter-VLAN Routing",
      "DHCP",
      "NAT/PAT",
      "Static Routing",
    ],
  },
  {
    title: "Cybersecurity",
    icon: "🔐",
    skills: [
      "Network Segmentation",
      "Access Control Lists (ACLs)",
      "SSH Configuration",
      "Switch Port Security",
      "DHCP Snooping Configuration",
      "Network Security Testing",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      "SQL",
      "Database Design",
      "Django ORM",
    ],
  },
  {
    title: "Linux & Tools",
    icon: "🐧",
    skills: [
      "Linux Fundamentals",
      "Kali Linux",
      "Oracle VirtualBox",
      "VS Code",
      "Git",
    ],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    skills: [
      "Power BI",
      "Data Visualization",
      "Dashboard Development",
      "Data Analysis",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Technical Skills
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Technologies, tools, and practical skills developed
            through academic work and hands-on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                bg-white dark:bg-gray-900
                p-7 rounded-2xl
                shadow-lg
                border border-gray-200 dark:border-gray-800
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              <div className="text-4xl mb-5">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-2
                      text-sm font-medium
                      rounded-lg
                      bg-blue-100 text-blue-700
                      dark:bg-blue-900/30 dark:text-blue-400
                      hover:bg-blue-600 hover:text-white
                      transition-colors duration-300
                    "
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
  );
}

export default Skills;