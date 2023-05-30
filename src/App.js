import React from "react";

const HelloWorld = () => {
  const me = "Armbel Bernal";
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-2">Hello World!</h1>
        <h3 className="display-6">{me}</h3>
      </div>
    </div>
  );
};

export default HelloWorld;