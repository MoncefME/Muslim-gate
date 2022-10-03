import './App.css';
import AppContainer from './Componants/AppBody/AppContainer';
import Footer from './Componants/Footer';
import Header from './Componants/Header';

function App() {
  return (
    <div className="App flex flex-col justify-center relative h-screen">
      <Header />
      <AppContainer />
      <Footer />
    </div>
  );
}

export default App;
