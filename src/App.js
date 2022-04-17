import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Page/Home/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </Fragment>
  );
}

export default App;
