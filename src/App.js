import logo from "./logo.svg";
import "./App.css";
import "./styles.css"; // Importing the styles.css file
import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer"; // Importing the Footer component
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
