// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header/header.component";
import Welcome from "./components/welcome/welcome.component";

function App() {
  return (
    <Router>
      <Header />
      <Welcome />
    </Router>
  );
}

export default App;
