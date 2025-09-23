import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Support from "./components/Support";
import Kids from "./components/Kids";
import Students from "./components/Students";
import Parents from "./components/Parents";
import Fun from "./components/Fun";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword";
import Payment from './components/Payment';
import Seniors from "./components/Seniors";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/students" element={<Students />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/seniors" element={<Seniors />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
