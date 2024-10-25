import logo from "./logo.svg";
import "./App.css";
import Name from "./components/Name";
import Projects from "./components/Projects";

function App() {
  return (
    <form
      id="login"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target[0].value);
      }}
    >
      Email here: <br />
      <input type="email" placeholder="email here" /> <br />
      Password: <br />
      <input type="password" /> <br />
      <input type="submit" />
    </form>
  );
}

export default App;
