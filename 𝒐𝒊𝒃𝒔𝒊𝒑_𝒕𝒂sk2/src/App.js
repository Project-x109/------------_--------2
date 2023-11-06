import "./App.css";
import AppRouter from "./components/AppRoutes";
import Header from "./components/Header/Header";
import Header2 from "./components/Header/Header2";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header2 />
      <Header />
      <div className="App-header">
        <AppRouter />
      </div>

      <Footer />
    </div>
  );
}

export default App;
