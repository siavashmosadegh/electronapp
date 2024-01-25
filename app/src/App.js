import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Layout from './Components/Layout/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          berinam maaaaaaaaaan
        </a>
      </header>
      {/* <BrowserRouter>
        <Router>
          <Route
            path='/'
            element={<Layout />}
          />
        </Router>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
