import React from "react";
import AboutMe from "./components/About";
import Like from "./components/Like";

const App = () => {
  const me = 'Armbel Bernal';
  return (
    <div>
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="display-2">Hello World!</h1>
          <h3 className="display-6">{me}</h3>
        </div>
      </div>
      <AboutMe />
      <Like />
    </div>
  );
};

export default App;
