import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJops from "./pages/add-jops";
import JopList from "./pages/jop-list";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<JopList />} />
          <Route path="/add-jops" element={<AddJops />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
