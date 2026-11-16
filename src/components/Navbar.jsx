import { configs } from "@eslint/js";

function Navbar({darkMode, setDarkMode}) {
    const links = [
        ["Home", "home"],
        ["About", "about"],
        ["Education", "education"],
        ["Skills", "skills"],
        ["Projects", "projects"],
        ["Cybersecurity", "cybersecurity"],
        ["Certifications", "certifications"],
        ["Contact", "contact"],
    ];

   return (
    <nav className={`sticky top-0 z-50 border-b px-6 py-4 ${
      darkMode
        ? "border-slate-700 bg-slate-900 text-white"
        : "border-gray-200 bg-white text-slate-900"
    }`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-blue-500">
          MyPortfolio
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm hover:text-blue-500"
            >
              {label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg border border-blue-500 px-3 py-2"
            aria-label="Toggle dark and light mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

