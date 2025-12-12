function Header() {
  return (
    <header className="flex items-center gap-10 p-10">
      <div className="flex-1">
        <a href="https://pixontechs.com">
          <img
            className="w-[170px] h-[80px]"
            src="http://pixontechs.com/wp-content/uploads/2025/07/PIXON-TECH-LOGO.png"
            alt="Pixon Tech"
          />
        </a>
      </div>

      <nav className="w-full flex-2">
        <ul className="flex justify-center items-center gap-4">
          <li className="relative">
            <a
              className="transition-all text-gray-300 hover:text-blue-relative inline-block 
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                after:h-[2px] after:w-full after:bg-blue-500 
                after:-translate-x-1/2 after:scale-x-0 
                after:origin-center 
                after:transition after:duration-300
                hover:after:scale-x-100 p-4"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="relative">
            <a
              className="transition-all text-gray-300 hover:text-blue-relative inline-block 
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                after:h-[2px] after:w-full after:bg-blue-500 
                after:-translate-x-1/2 after:scale-x-0 
                after:origin-center 
                after:transition after:duration-300
                hover:after:scale-x-100 p-4"
              href="/about-us"
            >
              About us
            </a>
          </li>
          <li className="relative">
            <a
              className="transition-all text-gray-300 hover:text-blue-relative inline-block 
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                after:h-[2px] after:w-full after:bg-blue-500 
                after:-translate-x-1/2 after:scale-x-0 
                after:origin-center 
                after:transition after:duration-300
                hover:after:scale-x-100 p-4"
              href="/our-solution"
            >
              Our Solution
            </a>
          </li>
          <li>
            <button className="text-white font-semibold px-6 py-3 rounded-4xl border-none bg-[#033d7c85]">
              Led Configurator
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex-1">
        <button className="text-white font-semibold px-6 py-3 rounded-4xl border-none bg-[#033d7c85]">
          Get a free Consultation
        </button>
      </div>
    </header>
  );
}

export default Header;
