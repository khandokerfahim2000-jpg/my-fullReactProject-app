import footerLogo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-600 font-sans border-t border-slate-100 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:pr-4">
            <img
              src={footerLogo}
              alt="Dev Stack"
              className="h-7 object-contain"
            />
            <p className="text-xs leading-relaxed text-slate-500 font-normal max-w-xs">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-xs font-semibold text-slate-700">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                GitHub
              </a>
              <span className="text-slate-300">•</span>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Twitter
              </a>
              <span className="text-slate-300">•</span>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block md:text-left">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block md:text-left">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block md:text-left">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-normal text-center sm:text-left">
          <p>© {new Date().getFullYear()} DevStack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
