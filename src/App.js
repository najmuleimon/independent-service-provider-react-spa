import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Blogs from './pages/Blogs/Blogs';
import AboutMe from './pages/AboutMe/AboutMe';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/checkout/:serviceId" element={
            <RequireAuth>
              <Checkout/>
            </RequireAuth>
          }></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/about" element={<AboutMe/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
