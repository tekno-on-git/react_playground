import logo from "./logo.svg";
import "./App.css";
import Name from "./components/Name";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Name />
        <Projects />
      </header>
    </div>
  );
}

export default App;
