
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./Styles/register.scss";
import MockRegister from "./Pages/Register/MockRegister";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Instructions from "./Pages/Instructions";

function App() {
  return (
    <>
      <div className='container py-5 cst_container'>
        <Router>
          <Routes>
            <Route path="/register" element={<MockRegister />} />
            <Route path="/" exact element={<Instructions />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/home" exact element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;