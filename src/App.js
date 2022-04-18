import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Page/Home/Home";
import Login from "./components/Page/Login/Login";
import SignUp from "./components/Page/SignUp/SignUp";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
