import { Footer, Header, Main } from "./Componants";


function App() {

  return (
    <div className="h-screen flex flex-col max-h-full bg-slate-300">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;