import logo from "./logo.svg";
import "./App.css";
import "./styles.css"; // Importing the styles.css file
import Header from "./components/Header"; // Importing the Header component
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <footer>
        <p className="footer">Footer content here</p>
      </footer>
    </div>
  );
}

export default App;
