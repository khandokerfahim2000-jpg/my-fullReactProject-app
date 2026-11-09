import HeroImg from "../assets/banner-stack.png";

export function Hero() {
  return (
    <section className="w-full bg-slate-50 py-6 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex flex-row items-center gap-3 mt-6">
            <button className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-medium px-5 py-3 rounded-xl text-xs sm:text-sm">
              Explore Technologies
            </button>

            <button className="btn bg-white text-slate-700 border border-slate-200 px-5 py-3 rounded-xl text-xs sm:text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={HeroImg}
            alt="Development Stack Illustration"
            className="w-full max-w-xs sm:max-w-md md:max-w-xl object-contain block"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
