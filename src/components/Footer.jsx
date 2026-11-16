function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">

        <h3 className="text-xl font-bold text-white mb-2">
          My Portfolio
        </h3>

        <p className="text-sm mb-4">
          Computer Science | Web Development | Cybersecurity | Networking
        </p>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;