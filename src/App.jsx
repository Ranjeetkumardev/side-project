import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";
import HeroHeader from "./components/HeroHeader";
import WorkWith from "./components/WorkWith";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroHeader />
      <WorkWith />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
