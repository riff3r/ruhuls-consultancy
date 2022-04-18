import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Page/Home/Home";
import Login from "./components/Page/Login/Login";
import SignUp from "./components/Page/SignUp/SignUp";
import ServicePage from "./components/Page/ServicePage/ServicePage";
import Blog from "./components/Page/Blog/Blog";
import Checkout from "./components/Page/Checkout/Checkout";
import About from "./components/Page/About/About";
import RequireAuth from "./components/Auth/RequireAuth";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route
          path="/service/:id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
