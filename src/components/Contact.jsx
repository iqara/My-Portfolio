import React from "react";

function Contact() {
  const contacts = [
    {
      icon: "📧",
      title: "Email",
      description: "Contact me for opportunities and collaborations.",
      link: "mailto:iqraabdullahi412@gmail.com",
      button: "Send Email",
    },
    {
      icon: "💻",
      title: "GitHub",
      description: "Explore my technical projects and source code.",
      link: "https://github.com/iqara",
      button: "View GitHub",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect with me professionally.",
      link: "https://www.linkedin.com/in/YOUR_PROFILE",
      button: "Connect on LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gray-100 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            I'm open to internships, job opportunities,
            freelance projects, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl
                         shadow-lg border border-gray-200
                         dark:border-gray-800 text-center
                         hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-5">{contact.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {contact.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {contact.description}
              </p>

              <a
                href={contact.link}
                target={contact.title === "Email" ? undefined : "_blank"}
                rel={contact.title === "Email" ? undefined : "noopener noreferrer"}
                className="inline-block mt-6 px-6 py-3
                           bg-blue-600 hover:bg-blue-700
                           text-white font-semibold rounded-lg
                           transition-colors"
              >
                {contact.button} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;