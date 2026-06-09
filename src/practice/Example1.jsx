function Example2() {
  return ( 
  <div>
    <p>
        HELLO WORLD
    </p>
  </div>
  );
}

/*
=========================================
HOW TO RUN THIS FILE
=========================================

1. Create file:
   src/practice/Example1.jsx

2. Component name should match:

   function Example1() {
     return (...)
   }

   export default Example1

3. Open App.jsx

4. Import this file:

   import Example1 from "./practice/Example1";

5. Render this component:

   function App() {
     return <Example1 />;
   }

   export default App;

6. Save all files (Ctrl + S)

7. To run another lesson:
   - Create Example2.jsx
   - Change import to Example2
   - Change return <Example1 /> to <Example2 />

NOTE:
React only displays what is returned from App.jsx.
=========================================
*/