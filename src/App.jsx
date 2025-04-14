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
import WordPressWebDevelopment from "./components/WordPressWebDevelopment";
import ECommerceExpertise from "./components/Ecommerce";
import PortfolioSection from "./components/WorkSection";
import HiringProcess from "./components/OutComeSection";
import Review from "./components/Review";
import TechAndTools from "./components/ToolsAndTech";

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
      <WordPressWebDevelopment />
      <ECommerceExpertise />
      <PortfolioSection />
      <HiringProcess />
      <Review />
      <TechAndTools />
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
