import React from "react";
import NavbarWithSolidBackground from "./components/NavbarWithSolidBackground";

function App() {
  return (
    <>
      <NavbarWithSolidBackground />
      <div className="p-6">
        {/* your page content here */}
        <h1 className="text-2xl font-semibold">Hello BODIMA</h1>
      </div>
    </>
  );
}

export default App;
