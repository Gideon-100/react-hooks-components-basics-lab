import React from "react";

//  Navbar component
function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

//  Home component
function Home() {
  return (
    <div id="home">
      <h2>Welcome to my site!</h2>
    </div>
  );
}

//  About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// App component with all children
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
