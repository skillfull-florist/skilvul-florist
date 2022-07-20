<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/navbar/ProtectedRoute";
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
import Profil from "./components/profil/Profil";
import Rincian from "./components/transaksi/Rincian";
import TransaksiBerhasil from "./components/transaksi/TransaksiBerhasil";
import Riwayatpesanan from "./components/riwayat/Riwayatpesanan";

=======
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/navbar/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NotFoundImg from './assets/404.svg';
import About from './components/about/About';
import Description from './components/about/Description';
import Services from './components/about/Services';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Buket from './components/buket/Buket';
import TanamanHias from './components/tanamanhias/TanamanHias';
import Transaksi from './components/transaksi/Transaksi';
import Profil from './components/profil/Profil';
import Rincian from './components/transaksi/Rincian';
import TransaksiBerhasil from './components/transaksi/TransaksiBerhasil';
import Riwayatpesanan from './components/riwayat/Riwayatpesanan';
import Keranjang from './components/keranjang/Keranjang';
>>>>>>> 5b71f9e422950d1b8b53bbc62f844b2d65ea4806
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App-container">
        <div className="App-content">
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Home />} />
            <Route path="buket" element={<Buket />} />
            <Route path="buket/:id" element={<Buket />} />
            <Route path="tanamanhias" element={<TanamanHias />} />
=======
            <Route path='/' element={<Home />} />
            <Route path='buket' element={<Buket />} />
            <Route path='buket/:id' element={<Buket />} />
            <Route path='tanamanhias' element={<TanamanHias />} />
            {/* KERANJANG */}
            <Route path='keranjang' element={<Keranjang />} />
>>>>>>> 5b71f9e422950d1b8b53bbc62f844b2d65ea4806
            <Route
              path="transaksi/:type/:id"
              element={
                <ProtectedRoute>
                  <Transaksi />
                </ProtectedRoute>
              }
            />

            <Route
              path="rincian"
              element={
                <ProtectedRoute>
                  <Rincian />
                </ProtectedRoute>
              }
            />
            <Route
              path="berhasil"
              element={
                <ProtectedRoute>
                  <TransaksiBerhasil />
                </ProtectedRoute>
              }
            />
            <Route
              path="riwayat"
              element={
                <ProtectedRoute>
                  <Riwayatpesanan />
                </ProtectedRoute>
              }
            />

            <Route
              path="login"
              element={
                <ProtectedRoute loginOnly={false}>
                  <Login />
                </ProtectedRoute>
              }
            />

            <Route
              path="profil"
              element={
                <ProtectedRoute>
                  <Profil />
                </ProtectedRoute>
              }
            />

            <Route
              path="register"
              element={
                <ProtectedRoute loginOnly={false}>
                  <Register />
                </ProtectedRoute>
              }
            />

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
      <h2>Woah! Halaman tidak ditemukan...</h2>
      <br />
      <br />
      <img src={NotFoundImg} alt="404" width="320px" />
    </div>
  );
}

export default App;
