"use client";

import { useState } from "react";

import Home from "@/components/home";
import Header from "../components/header";
import Quote from "../components/quote";
import Success from "../components/success";

export default function HomePage() {
  const [view, setView] = useState("home"); // 'home' | 'form' | 'success'

  const handleGetQuote = () => {
    window.scrollTo(0, 0);
    setView("form");
  };

  const handleFormSubmit = () => {
    window.scrollTo(0, 0);
    setView("success");
  };

  const goHome = () => {
    window.scrollTo(0, 0);
    setView("home");
  };

  return (
    <div className="min-h-screen bg-[#ECECEC] font-sans text-gray-900 selection:bg-gray-300">
      <Header goHome={goHome} />

      <main>
        {view === "home" && <Home onGetQuote={handleGetQuote} />}
        {view === "form" && <Quote onSubmit={handleFormSubmit} />}
        {view === "success" && <Success />}
      </main>
    </div>
  );
}
