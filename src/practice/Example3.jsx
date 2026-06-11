function Example3() {
  return (
    // PAGE LAYOUT & NAVBAR WITH FLEXBOX
    <div>
      <div className="flex items-center justify-between bg-slate-900 text-white px-4">
        <div className="font-bold">Logo</div>
        <div className="flex flex-col gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>


   {/*  GRID LAYOUT AND RESPONSIVE DESIGN */}
   {/* HOVER EFFECTS TRANSITIONS & MICRO-ANIMATION */ }
      <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
        <div className = "bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature One</div>
        <div className = "bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Two</div>
        <div className = "bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Three</div>
        <div className = "bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Four</div>
        <div className = "bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Five</div>
        <div className = "bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Six</div>
      </div>
    </div>
  );
}

export default Example3;


