import { FaBars } from "react-icons/fa";
import logo from "../assets/logo-text.png";

export default function Nav() {
  return (
    <header className="w-full bg-slate-50 border-b border-slate-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Mobile Hamburger Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-700 text-xl cursor-pointer">
            <FaBars />
          </button>

          <div className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-8 object-contain"
            />
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
            <li>
              <a
                href="#"
                className="text-[#DB2777] font-semibold transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#DB2777] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Sign in & Sign up Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="bg-[#DB2777] hover:bg-[#be185d] text-white text-sm font-medium px-5 py-2 rounded-xl shadow-sm transition-colors cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
