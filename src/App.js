import logo from "./logo.svg";
import "./App.css";
import "./styles.css"; // Importing the styles.css file
import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer"; // Importing the Footer component
import MoviesGrid from "./components/MoviesGrid";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
