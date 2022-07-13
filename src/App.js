import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import NotFoundImg from "./assets/404.svg";
import About from "./components/about/About";
import Description from "./components/about/Description";
import Services from "./components/about/Services";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Buket from "./components/buket/Buket";
import TanamanHias from "./components/tanamanhias/TanamanHias";
import Transaksi from "./components/transaksi/Transaksi";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App-container">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="buket" element={<Buket />} />
            <Route path="tanamanhias" element={<TanamanHias />} />
            <Route path="transaksi/:id" element={<Transaksi />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />}>
              <Route path="description" element={<Description />} />
              <Route path="services" element={<Services />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer className="App-footer" />
    </Router>
  );
}

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        margin: 128,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Cannot find what you are looking for</h2>
      <br />
      <br />
      <img src={NotFoundImg} alt="404" width="480px" />
    </div>
  );
}

export default App;
