import { Footer, Header, Main } from "./Componants";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;