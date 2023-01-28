
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
import PaymentSuccess from "./Pages/Payment/PaymentSuccess";
import PaymentFailure from "./Pages/Payment/PaymentFailure";

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
            <Route path="/paymentSuccess" exact element={<PaymentSuccess />} />
            <Route path="/paymentfailure" exact element={<PaymentFailure />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;