import { useState } from "react";

function Example4() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {/* Navbar */}
            <div className="flex items-center justify-between bg-slate-900 text-white px-4">
                <div className="font-bold">Logo</div>

                {/* DESKTOP NAV */}
                <div className=" hidden sm:flex gap-2">
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>

                <button className="text-xl cursor-pointer sm:hidden"
                    onClick={() => setOpen(!open)}
                >
                    ≡
                </button>

            </div>

            {/* MOBILE NAV */}
            {open && (
                <div className="flex flex-col items-center gap-2 bg-slate-900 text-white p-4 sm:hidden ">
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
            )}


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
                <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature One</div>
                <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Two</div>
                <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Three</div>
                <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Four</div>
                <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Five</div>
                <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-200">Feature Six</div>
            </div>
        </div>
    );
}

export default Example4;


/*
****************************REACT STATE & MOBILE NAVBAR****************************

import { useState } from "react";

→ Imports the useState Hook from React.
→ Used to store and update data in a component.

Example:
const [count, setCount] = useState(0);

Other Examples:
useState(false)
useState(true)
useState("")
useState([])
useState({})


const [open, setOpen] = useState(false);

→ Creates a state variable.

open      = Current value
setOpen   = Function to update value
false     = Initial value

Examples:

const [open, setOpen] = useState(false);
const [count, setCount] = useState(0);
const [name, setName] = useState("");


hidden

→ Completely hides an element.

Other Variations:
hidden      // Hide element
block       // Show as block
inline      // Show as inline
inline-block
flex
grid


sm:flex

→ Apply flex from small screens and above.

Responsive Variations:
sm:flex
md:flex
lg:flex
xl:flex
2xl:flex


sm:hidden

→ Hide element on small screens and above.

Examples:
sm:hidden
md:hidden
lg:hidden


cursor-pointer

→ Changes mouse cursor to hand pointer.

Other Variations:
cursor-pointer
cursor-default
cursor-wait
cursor-not-allowed
cursor-move


onClick

→ Executes a function when clicked.

Example:
onClick={() => alert("Hello")}

Other Examples:
onClick={() => setOpen(true)}
onClick={() => setOpen(false)}
onClick={() => console.log("Clicked")}


****************************TOGGLE MENU LOGIC****************************

onClick={() => setOpen(!open)}

→ Toggles the state.

If open = false
Then open becomes true

If open = true
Then open becomes false

Examples:

setOpen(true)   // Open menu
setOpen(false)  // Close menu
setOpen(!open)  // Toggle menu


!

→ Logical NOT operator

Examples:

!true  = false
!false = true

Used for toggling values.


****************************CONDITIONAL RENDERING****************************

{open && (...)}

→ Show content only when open is true.

Meaning:

If open = true
Show Mobile Navbar

If open = false
Hide Mobile Navbar

Examples:

{isLogin && <Dashboard />}

{showModal && <Modal />}

{open && <Menu />}


&&

→ AND Operator

Returns second value only if first value is true.

Examples:

true && "Hello"
Output: Hello

false && "Hello"
Output: Nothing



****************************MOBILE NAVIGATION MENU****************************

flex flex-col items-center

→ Creates a vertical menu.

Examples:

Home
About
Contact

Instead of:

Home About Contact


p-4

→ Padding on all sides.

Other Variations:

p-1
p-2
p-4
p-6


bg-slate-900

→ Dark background color for mobile menu.


text-white

→ White text color.
*/