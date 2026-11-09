import { use, useState } from "react";
import type ICard from "./Type";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetApi = async (): Promise<ICard[]> => {
  const res = await fetch("/api.json");
  const data: ICard[] = await res.json();
  return data;
};

const apiPromise = GetApi();

export default function Api() {
  const technologies = use(apiPromise);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Add Technology
  const handleButtondisable = (id: number) => {
    setSelectedIds((prev) => [...prev, id]);
    toast.success("Technology successfully added!");
  };

  // Delete Single Technology
  const handleDelete = (id: number) => {
    setSelectedIds((prev) => prev.filter((item) => item !== id));
    toast.error("Technology removed successfully!");
  };

  // Remove All Technologies
  const handleRemoveAll = () => {
    setSelectedIds([]);
    toast.info("All technologies removed!");
  };

  // Selected Technologies
  const selectedTechnologies = technologies.filter((tech) =>
    selectedIds.includes(tech.id),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-slate-50">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        newestOnTop
      />

      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Technology Cards */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="border border-slate-200/80 rounded-2xl p-6 flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Icon and Badge */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full border border-emerald-100/60">
                    {tech.badge}
                  </span>
                </div>

                {/* Technology Name */}
                <h3 className="font-bold text-xl text-slate-900 mt-4">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {tech.description}
                </p>

                {/* Difficulty and Rating */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium text-slate-600">
                    {tech.difficulty}
                  </span>
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <span className="text-amber-400">⭐</span>
                    {tech.rating}
                  </span>
                </div>

                {/* Add Button */}
                <button
                  onClick={() => handleButtondisable(tech.id)}
                  disabled={selectedIds.includes(tech.id)}
                  className="w-full mt-4 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-400 text-white font-medium text-sm rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed shadow-sm"
                >
                  {selectedIds.includes(tech.id) ? "Selected" : "Add to Stack"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Your Stack */}
        <div className="w-full lg:w-80 shrink-0 sticky top-6">
          <div className="border border-slate-200/80 rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-900">Your Stack</h3>

            <p className="text-xs text-slate-400 mt-1">
              {selectedIds.length} Technology Selected
            </p>

            <div className="mt-4 space-y-3">
              {selectedTechnologies.length === 0 ? (
                <div className="border border-dashed border-slate-200 rounded-xl p-6 text-center">
                  <p className="text-xs text-slate-400">Your stack is empty.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                    {selectedTechnologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex items-center justify-between gap-3 p-3 border border-slate-100 rounded-xl bg-slate-50/50"
                      >
                        {/* Technology Info */}
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-8 h-8 object-contain shrink-0"
                          />

                          <div className="min-w-0">
                            <h4 className="font-semibold text-xs text-slate-900 truncate">
                              {tech.name}
                            </h4>
                            <p className="text-[10px] text-slate-400 truncate">
                              {tech.badge}
                            </p>
                          </div>
                        </div>

                        {/* Delete Single Item */}
                        <button
                          onClick={() => handleDelete(tech.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Remove All Button */}
                  <button
                    onClick={handleRemoveAll}
                    className="w-full mt-4 py-2 text-xs font-semibold text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-100 transition-colors cursor-pointer"
                  >
                    Remove All
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
