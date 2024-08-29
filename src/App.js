import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/HomeComp";
import OrderSummary from "./Components/OrderSummary";
import ApplyPromo from "./Components/ApplyPromo";
import ActivatePlan from "./Components/ActivatePlan";
import Acknowledge from "./Components/Acknowledge";

function App() {
  return (
    <main
      className="w-screen h-screen sm:p-4"
      style={{ backgroundColor: "#677281" }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="/apply-promocode" element={<ApplyPromo />}></Route>
        <Route path="/Activate-plan" element={<ActivatePlan />}></Route>
        <Route path="/Payment-sucess" element={<Acknowledge />}></Route>
      </Routes>
    </main>
  );
}

export default App;
