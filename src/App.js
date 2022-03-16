import './css/styles.css';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {

    let title = "I hate you";
  return (
    <div className="App">
        <Navbar />
        <div className="content">
            <Home />
        </div>
    </div>
  );
}

export default App;