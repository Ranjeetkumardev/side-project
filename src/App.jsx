import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";
import HeroHeader from "./components/HeroHeader";
import WorkWith from "./components/WorkWith";
import GridSection from "./components/GridSection";
import UXAuditSection from "./components/Uiuxsection";
import UXCaseStudyCard from "./components/CaseStudySection";
import UXAuditCallToAction from "./components/IfYouWantSecion";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroHeader />
      <WorkWith />
      <GridSection />
      <UXAuditSection />
      <UXCaseStudyCard />
      <UXAuditCallToAction />
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
