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


/*
-------------------------------------NOTES-----------------------------------------------

******************PAGE LAYOUT & NAVBAR WITH FLEXBOX***********************

→ Used to create page layouts and navigation bars using Flexbox.
→ Helps align, position, and distribute elements horizontally or vertically.

flex
→ Enables Flexbox

Other Variations:
flex-row      // Horizontal (default)
flex-col      // Vertical
flex-wrap     // Wrap items to next line
flex-nowrap   // Keep items in one line


items-center
→ Align items vertically in center

Other Variations:
items-start   // Top
items-center  // Center
items-end     // Bottom
items-stretch // Stretch items


justify-between
→ Equal space between items

Other Variations:
justify-start    // Left
justify-center   // Center
justify-end      // Right
justify-between  // Space between
justify-around   // Space around
justify-evenly   // Equal spacing


bg-slate-900
→ Very dark background

Other Variations:
bg-slate-100
bg-slate-200

Examples:
bg-red-500
bg-blue-500


text-white
→ White text

Other Variations:
text-black
text-red-500
text-blue-500
text-green-500
text-yellow-500


px-4
→ Horizontal padding

Other Variations:
p-4   // All sides
px-4  // Left & Right
py-4  // Top & Bottom
pt-4  // Top
pb-4  // Bottom
pl-4  // Left
pr-4  // Right


font-bold
→ Bold text

Other Variations:
font-thin
font-light
font-normal
font-medium
font-semibold
font-bold
font-extrabold


flex-col
→ Arrange items vertically

Other Variations:
flex-row
flex-col


gap-2
→ Space between flex/grid items

Other Variations:
gap-1
gap-2
gap-4
gap-6
gap-8
gap-10




***************************GRID LAYOUT & RESPONSIVE DESIGN******************************

→ Used to create responsive layouts with rows and columns.
→ Automatically adjusts the layout based on different screen sizes (mobile, tablet, desktop).

grid
→ Enables CSS Grid

Other Variations:
grid
inline-grid


grid-cols-1
→ 1 column

Other Variations:
grid-cols-1
grid-cols-5
grid-cols-6
*/


/*
sm:grid-cols-2
→ 2 columns on small screens

Responsive Prefixes:
sm:  // Small Screen
md:  // Medium Screen
lg:  // Large Screen
xl:  // Extra Large
2xl: // Very Large
*/


/*
md:grid-cols-3
→ 3 columns on medium screens

Examples:
md:grid-cols-2
md:grid-cols-3
md:grid-cols-4


p-6
→ Padding

Other Variations:
p-1
p-2
p-4
p-10


text-center
→ Center text

Other Variations:
text-left
text-center
text-right
text-justify


font-semibold
→ Semi-bold text

Other Variations:
font-light
font-normal
font-medium
font-semibold
font-bold


text-2xl
→ Large text

Other Variations:
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl
text-5xl



****************************HOVER EFFECTS, TRANSITIONS & MICRO ANIMATIONS**********************

→ Used to add interactivity and smooth animations to elements.
→ Makes UI more attractive by changing styles when users hover or interact with components.

hover:bg-slate-800
→ Change background on hover

Examples:
hover:bg-red-500
hover:bg-blue-500
hover:bg-green-500
hover:bg-slate-800


hover:scale-105
→ Slightly increase size on hover

Other Variations:
hover:scale-95
hover:scale-110
hover:scale-125


transition-all
→ Smooth transition for all properties

Other Variations:
transition-all
transition-colors
transition-opacity
transition-transform


duration-200
→ Animation speed

Other Variations:
duration-75
duration-100
duration-150
duration-700
duration-1000

*/ 