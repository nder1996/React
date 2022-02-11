import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Prueba_1 from './components/Prueba_1';

function App() {
  return (
    <Router>
      <Route path="/Prueba_1" component={Prueba_1} />
    </Router>
  );
}

export default App;
