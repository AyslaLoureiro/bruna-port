import logo from "./bru.jfif";
import logo1 from "./fisiologo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo1} className="App-logo" alt="logo" />
        </>
        <p>Bru da Fisio!</p>
        <a
          className="App-link"
          href="https://www.instagram.com/bruna.lopesstefani?igsh=cnpqbnB3Y205d2Jl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Insta da Bru!
        </a>
      </header>
    </div>
  );
}

export default App;
