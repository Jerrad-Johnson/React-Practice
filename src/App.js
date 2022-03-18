import './css/styles.css';
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import ArrayDetails from "./ArrayDetails";


function App() {

  return (
      <Router>
    <div className="App">
        <Navbar />
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Create">
                    <Create />
                </Route>
                <Route exact path="/ArrayDetails/:id">
                    <ArrayDetails />
                </Route>
            </Switch>
        </div>
    </div>
      </Router>
  );
}

export default App;