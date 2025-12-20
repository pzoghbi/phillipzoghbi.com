import React, { useState } from 'react';

// --- COMPONENTS ---

// 1. Navigation / Header (Shared across all views)
const Header = ({ goHome }) => (
  <header className="pt-8 pb-4 px-6 max-w-3xl mx-auto w-full">
    <div 
      onClick={goHome} 
      className="cursor-pointer font-cursive text-2xl text-gray-800"
    >
      Phillip Zoghbi
    </div>
  </header>
);

// 2. Home Page View (Updated)
const HomeView = ({ onGetQuote }) => {
  return (
    <div className="space-y-16 pb-8">
      {/* Hero Section */}
      <section className="px-6 max-w-3xl mx-auto mt-4 md:mt-8">
        {/* Left-aligned Header text */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          Interactive & gamified apps<br />
          for businesses — built fast,<br />
          fixed price.
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-16">
          Kiosks, ordering systems, internal tools, and customer-facing apps using Unity.
        </p>
        
        {/* Centered Social Proof & Button */}
        <div className="flex flex-col items-center text-center">
          <p className="text-1xl font-bold text-gray-900 mb-6">
            Delivered 9 Interactive Apps For Retail, Events, And Internal Tools
          </p>
          
          {/* Client Logos as Images */}
          <div className="flex flex-wrap gap-8 justify-center items-center mb-12 opacity-80">
            {/* IMPORTANT: Put these image files (valamar.png, bbt.png, jana.png) 
               inside your project's 'public' folder.
            */}
            <img src="/img/valamar.png" alt="Valamar" className="h-[100px] md:h-[100px] w-auto object-contain" />
            <img src="/img/bbt.png" alt="BBT" className="h-[100px] md:h-[100px] w-auto object-contain" />
            <img src="/img/jana.png" alt="Jana" className="h-[100px] md:h-[100px] w-auto object-contain" />
          </div>

          <button 
            onClick={onGetQuote}
            className="bg-black text-white font-bold py-3 px-8 hover:bg-gray-800 transition-colors"
          >
            Get a quote for your project
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">What I build</h2>
        <div className="space-y-8">
          {[
            { title: "Gamified business apps", desc: "Interactive apps that turn workflows or customer actions into engaging experiences. Used for internal tools, customer onboarding, and promotions." },
            { title: "Kiosk & touch-screen applications", desc: "Custom Unity apps for self-service kiosks, events, and in-store displays. Built for reliability and simple interaction." },
            { title: "Interactive ordering systems", desc: "Touch-driven ordering UIs for food, retail, or custom products. Supports complex customization and logic." },
            { title: "Gamified MVPs", desc: "Playable or interactive prototypes for startups and concepts. Built fast to test ideas with real users." },
            { title: "Custom Unity apps + backend", desc: "Unity applications with logins, data storage, scores, and APIs. Deployed across desktop, mobile, or dedicated hardware." }
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600 max-w-2xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">How it works</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">Scope</h3>
            <p className="text-gray-600">You describe the app. I define the scope, platform, and constraints.<br/>If unclear → paid scoping. No surprises.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Price</h3>
            <p className="text-gray-600">Fixed price or milestone-based. Small projects only. No open-ended builds.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Build</h3>
            <p className="text-gray-600">Unity app + backend if needed.<br/>Weekly progress. Early playable version.</p>
          </div>
           <div>
            <h3 className="font-bold text-lg">Delivery</h3>
            <p className="text-gray-600">Deployed to device/platform.<br/>Handover + optional support.</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center my-16 mb-20">
          <button 
            onClick={onGetQuote}
            className="bg-black text-white font-bold py-3 px-8 hover:bg-gray-800 transition-colors"
          >
            Get a quote for your project
          </button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Promotional Game", desc: "Engaged thousands of restaurant customers over three months on custom hardware.", tooltip: "", bg: "bg-blue-100", img: "/img/examples/bbt_example.jpeg" },
            { title: "Digital Kids' Magazine", desc: "Entertained resort guests and increased family engagement.", tooltip: "Project completed as part of Brojka team.", bg: "bg-purple-100", img: "/img/examples/valamar_example.png" },
            { title: "Gamified Promo App (AR)", desc: "Scannable AR experience on water bottles engaged thousands of users in six months.", tooltip: "Project completed as part of Brojka team.", bg: "bg-green-100", img: "/img/examples/jana_example.jpeg" },
          ].map((project, idx) => (
            <div key={idx} className="bg-[#FDFDFD] pb-4">
              <img alt={project.title} src={project.img} className={`object-cover max-h-[200px] w-full ${project.bg} mb-4 flex items-center justify-center text-gray-400 text-sm `} />
              <div className="px-4">
                <h3 className="font-bold text-sm mb-2">{project.title}</h3>
                <p className="text-[14px] text-gray-700 leading-relaxed mb-4">{project.desc}</p>
                <p className="text-[12px] text-gray-400 leading-relaxed">{project.tooltip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Unity / Footer CTA */}
      <section className="px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Unity</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-12">
          <li>One codebase for desktop, mobile, kiosks, and custom hardware</li>
          <li>Fast iteration for complex UI and interaction logic</li>
          <li>Proven for real-time, touch-driven experiences</li>
          <li>Easy integration with backend services and APIs</li>
        </ul>

        <blockquote className="text-center text-sm italic text-gray-800 mb-12 max-w-3xl mx-auto">
          "The game elevated the installation and attracted new customers consistently over a three-month period." <br/>
          <span className="not-italic font-bold">— Hassan Amer, Swish</span>
        </blockquote>

        <div className="flex justify-center">
            <button 
            onClick={onGetQuote}
            className="bg-black text-white font-bold py-3 px-8 hover:bg-gray-800 transition-colors"
            >
            Request a project quote
            </button>
        </div>
        <div className="h-10"></div> {/* Spacer */}
        <div className="text-center text-xs mt-12 text-gray-500">© 2025 ZM5J</div>
      </section>
    </div>
  );
};

// 3. Form Page View
const QuoteFormView = ({ onSubmit }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  const togglePlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    // Logic: If both are empty. Otherwise, proceed.
    if (!email.trim() && !phone.trim()) {
      setError(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      onSubmit();
    }
  };

  return (
    <div className="px-6 max-w-3xl mx-auto mt-4 pb-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Request a Project Quote</h1>
      
      <form onSubmit={handleValidation} className="space-y-8">
        
        {/* Description */}
        <div>
          <label className="block text-xl font-bold mb-3 text-gray-900">Project description / goal</label>
          <textarea 
            required
            className="w-full h-32 p-3 bg-[#FDFDFD] border-none focus:ring-2 focus:ring-black resize-none"
            placeholder=""
          />
        </div>

        {/* Platform Toggles */}
        <div>
          <label className="block text-xl font-bold mb-3 text-gray-900">Platform / devices</label>
          <div className="flex flex-col space-y-2 items-start">
            {['Desktop', 'Kiosk', 'Mobile', 'Custom hardware'].map((platform) => (
              <button
                key={platform}
                type="button"
                onClick={() => togglePlatform(platform)}
                className={`px-4 py-2 text-sm font-bold text-left transition-colors w-48 ${
                  selectedPlatforms.includes(platform) 
                    ? 'bg-black text-white' 
                    : 'bg-gray-300 text-black hover:bg-gray-400'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Dropdown */}
        <div>
          <label className="block text-xl font-bold mb-2 text-gray-900 tracking-tight">
            Budget range
          </label>
          <p className="text-sm text-gray-700 mb-4">
            Budget is for guidance. Final proposal will be based on project scope and complexity.
          </p>
          <div className="relative w-full md:w-2/3">
            <select 
              required
              className="w-full p-2 bg-white border border-gray-400 text-lg appearance-none focus:ring-2 focus:ring-black outline-none cursor-pointer"
              defaultValue={""}
            >
              <option value="" disabled hidden>Select a range</option>
              <option value="under-1000">&lt; €1000 (very small scope)</option>
              <option value="1000-2000">€1000 - €2000</option>
              <option value="2000-5000">€2000 - €5000</option>
              <option value="5000-10000">€5000 - €10000</option>
              <option value="over-10000">€10000+</option>
            </select>
            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Timeline Dropdown */}
        <div>
          <label className="block text-xl font-bold mb-4 text-gray-900 tracking-tight">
            Timeline
          </label>
          <p className="text-sm text-gray-700 mb-4">
            Timeline is indicative and depends on scope and availability.
          </p>
          <div className="relative w-full md:w-2/3">
            <select 
              required
              className="w-full p-2 bg-white border border-gray-400 text-lg appearance-none focus:ring-2 focus:ring-black outline-none cursor-pointer"
              defaultValue={""}
            >
              <option value="" disabled hidden>Select a timeline</option>
              <option value="under-1-mo">&lt; 1 month</option>
              <option value="1-3-mo">1-3 months</option>
              <option value="3-6-mo">3-6 months</option>
              <option value="6-mo-plus">Flexible / not fixed</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <label className="block text-xl font-bold mb-4 text-gray-900 tracking-tight">
            Contact info
          </label>
          
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center">
                <span className="w-20 font-bold text-sm">Email</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(false); }}
                  className={`flex-1 p-3 bg-white border-2 border-transparent focus:border-black transition-colors`} 
                />
            </div>
            <div className="flex items-center">
                <span className="w-20 font-bold text-sm">Phone</span>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setError(false); }}
                  className={`flex-1 p-3 bg-white border-2 border-transparent focus:border-black transition-colors`} 
                />
            </div>
            
            <p className={`text-sm mb-4 font-medium text-blue-800 italic ${!error && 'opacity-0'}`}>
              Please provide at least one way to reach you (email or phone).
            </p>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-8 flex justify-center">
            <button 
                type="submit"
                className="bg-black text-white font-bold py-3 px-8 hover:bg-gray-800 transition-colors"
            >
                Request Project Quote
            </button>
        </div>
      </form>
      <div className="h-10"></div> {/* Spacer */}
      
      <div className="text-center text-xs mt-12 text-gray-500">© 2025 ZM5J</div>
    </div>
  );
};

// 4. Success View
const SuccessView = () => (
  <div className="px-6 max-w-3xl mx-auto mt-20 text-left animate-fade-in">
    <h1 className="text-5xl font-bold mb-8 text-gray-900">Thank You!</h1>
    <p className="text-xl text-gray-800">We'll review your project and respond within 24–48 hours.</p>
    <div className="fixed bottom-8 left-0 w-full text-center text-xs text-gray-500">
        ZM5J @ 2025
    </div>
  </div>
);

// --- MAIN APP SHELL ---

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'form' | 'success'

  const handleGetQuote = () => {
    window.scrollTo(0, 0);
    setView('form');
  };

  const handleFormSubmit = () => {
    window.scrollTo(0, 0);
    setView('success');
  };

  const goHome = () => {
    window.scrollTo(0, 0);
    setView('home');
  };

  return (
    <div className="min-h-screen bg-[#ECECEC] font-sans text-gray-900 selection:bg-gray-300">
      <Header goHome={goHome} />
      
      <main>
        {view === 'home' && <HomeView onGetQuote={handleGetQuote} />}
        {view === 'form' && <QuoteFormView onSubmit={handleFormSubmit} />}
        {view === 'success' && <SuccessView />}
      </main>
    </div>
  );
}