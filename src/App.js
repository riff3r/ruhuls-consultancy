import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Page/Home/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
