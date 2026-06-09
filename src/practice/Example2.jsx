// TAILWIND CSS ESSENTIAL UTILITY CLASSES

function Example2() {
  return ( 
  <div>
    <div className="bg-blue-300 mb-10 w-full">
  <p className="text-xl font-semibold text-center text-rose-800">
    Hello World
  </p>
</div>
    </div>
  );
}

export default Example2

// App is a React Functional Component
// Everything that we want to display on the screen
// is returned from the return() statement.


{/* 
        className is used instead of class in React.
        Tailwind CSS classes are written inside className.
        
        bg-blue-200  -> Light blue background color
        mb-10        -> Margin Bottom (2.5rem or 40px)
*/}

{/*
          p = Paragraph tag

          text-xl        -> Extra large text size
          font-semibold  -> Semi-bold font weight
          text-center    -> Align text to center
          text-green-500 -> Green text color
*/}



/*
 TEXT SIZE 

text-xs       // Extra Small Text
text-sm       // Small Text
text-base     // Normal Text
text-lg       // Large Text
text-xl       // Extra Large Text
text-2xl      // Bigger than xl
text-3xl      // Very Large Heading


FONT WEIGHT

font-thin      // Very Thin Text
font-light     // Light Text
font-normal    // Normal Weight
font-medium    // Medium Weight
font-semibold  // Semi Bold
font-bold      // Bold
font-extrabold // Very Bold


TEXT ALIGNMENT

text-left     // Text starts from left side
text-center   // Text stays in center
text-right    // Text stays on right side
text-justify  // Text spreads evenly across line


TEXT COLORS

text-red-500     // Red Text
text-blue-500    // Blue Text
text-green-500   // Green Text
text-yellow-500  // Yellow Text
text-white       // White Text
text-black       // Black Text


BACKGROUND COLORS

bg-red-500      // Red Background
bg-blue-200     // Light Blue Background
bg-green-300    // Light Green Background
bg-black        // Black Background
bg-white        // White Background


MARGIN (SPACE OUTSIDE ELEMENT)

m-5    // Space on all sides
mt-5   // Space at Top
mb-5   // Space at Bottom
ml-5   // Space on Left
mr-5   // Space on Right



Imagine a box.

mt-5
  ↑
Adds space above box

mb-5
  ↓
Adds space below box



PADDING (SPACE INSIDE ELEMENT)

p-5    // Space inside on all sides
pt-5   // Space inside top
pb-5   // Space inside bottom
pl-5   // Space inside left
pr-5   // Space inside right

Padding pushes content away from the border INSIDE the box.


WIDTH

w-full    // Takes full available width
w-1/2     // Takes half width
w-1/3     // Takes one-third width
w-screen  // Takes full screen width


HEIGHT

h-20      // Fixed height
h-full    // Full parent height
h-screen  // Full screen height


BORDERS

border      // Add border
border-2    // Thicker border
border-red-500 // Red border

rounded      // Slightly rounded corners
rounded-lg   // Large rounded corners
rounded-full // Circle shape


FLEXBOX

flex              // Enable Flexbox
justify-start     // Items start from left
justify-center    // Items in center horizontally
justify-end       // Items on right

items-start       // Top alignment
items-center      // Center alignment vertically
items-end         // Bottom alignment


Example:

<div className="flex justify-center items-center h-screen">

Content will be:
✓ Center horizontally
✓ Center vertically

*/
