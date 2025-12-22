import React, { useState } from "react";

import { Resend } from "resend";

const resend = new Resend("re_3yFQTT9t_63H9v1LHYyYCZRAwMbxD54pz");
// --- COMPONENTS ---
const sendMail = async function () {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["phillip.zoghby@gmail.com"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};

// 1. Navigation / Header (Shared across all views)
const Header = ({ goHome }) => (
  <header className="mx-auto w-full max-w-3xl px-6 pt-8 pb-4">
    <div
      onClick={goHome}
      className="font-cursive cursor-pointer text-2xl text-gray-800"
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
      <section className="mx-auto mt-4 max-w-3xl px-6 md:mt-8">
        {/* Left-aligned Header text */}
        <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
          Interactive & gamified apps
          <br />
          for businesses — built fast,
          <br />
          fixed price.
        </h1>
        <p className="mb-16 max-w-2xl text-xl leading-relaxed text-gray-700">
          Kiosks, ordering systems, internal tools, and customer-facing apps
          using Unity.
        </p>

        {/* Centered Social Proof & Button */}
        <div className="flex flex-col items-center text-center">
          <p className="text-1xl mb-6 font-bold text-gray-900">
            Delivered 9 Interactive Apps For Retail, Events, And Internal Tools
          </p>

          {/* Client Logos as Images */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-8 opacity-80">
            {/* IMPORTANT: Put these image files (valamar.png, bbt.png, jana.png) 
               inside your project's 'public' folder.
            */}
            <img
              src="/img/valamar.png"
              alt="Valamar"
              className="h-[100px] w-auto object-contain md:h-[100px]"
            />
            <img
              src="/img/bbt.png"
              alt="BBT"
              className="h-[100px] w-auto object-contain md:h-[100px]"
            />
            <img
              src="/img/jana.png"
              alt="Jana"
              className="h-[100px] w-auto object-contain md:h-[100px]"
            />
          </div>

          <button
            onClick={onGetQuote}
            className="bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
          >
            Get a quote for your project
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-3xl font-bold">What I build</h2>
        <div className="space-y-8">
          {[
            {
              title: "Gamified business apps",
              desc: "Interactive apps that turn workflows or customer actions into engaging experiences. Used for internal tools, customer onboarding, and promotions.",
            },
            {
              title: "Kiosk & touch-screen applications",
              desc: "Custom Unity apps for self-service kiosks, events, and in-store displays. Built for reliability and simple interaction.",
            },
            {
              title: "Interactive ordering systems",
              desc: "Touch-driven ordering UIs for food, retail, or custom products. Supports complex customization and logic.",
            },
            {
              title: "Gamified MVPs",
              desc: "Playable or interactive prototypes for startups and concepts. Built fast to test ideas with real users.",
            },
            {
              title: "Custom Unity apps + backend",
              desc: "Unity applications with logins, data storage, scores, and APIs. Deployed across desktop, mobile, or dedicated hardware.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
              <p className="max-w-2xl text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-3xl font-bold">How it works</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold">Scope</h3>
            <p className="text-gray-600">
              You describe the app. I define the scope, platform, and
              constraints.
              <br />
              If unclear → paid scoping. No surprises.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Price</h3>
            <p className="text-gray-600">
              Fixed price or milestone-based. Small projects only. No open-ended
              builds.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Build</h3>
            <p className="text-gray-600">
              Unity app + backend if needed.
              <br />
              Weekly progress. Early playable version.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Delivery</h3>
            <p className="text-gray-600">
              Deployed to device/platform.
              <br />
              Handover + optional support.
            </p>
          </div>
        </div>

        <div className="my-16 mb-20 flex flex-col items-center text-center">
          <button
            onClick={onGetQuote}
            className="bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
          >
            Get a quote for your project
          </button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="mx-auto max-w-3xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Promotional Game",
              desc: "Engaged thousands of restaurant customers over three months on custom hardware.",
              tooltip: "",
              bg: "bg-blue-100",
              img: "/img/examples/bbt_example.jpeg",
            },
            {
              title: "Digital Kids' Magazine",
              desc: "Entertained resort guests and increased family engagement.",
              tooltip: "Project completed as part of Brojka team.",
              bg: "bg-purple-100",
              img: "/img/examples/valamar_example.png",
            },
            {
              title: "Gamified Promo App (AR)",
              desc: "Scannable AR experience on water bottles engaged thousands of users in six months.",
              tooltip: "Project completed as part of Brojka team.",
              bg: "bg-green-100",
              img: "/img/examples/jana_example.jpeg",
            },
          ].map((project, idx) => (
            <div key={idx} className="bg-[#FDFDFD] pb-4">
              <img
                alt={project.title}
                src={project.img}
                className={`max-h-[200px] w-full object-cover ${project.bg} mb-4 flex items-center justify-center text-sm text-gray-400`}
              />
              <div className="px-4">
                <h3 className="mb-2 text-sm font-bold">{project.title}</h3>
                <p className="mb-4 text-[14px] leading-relaxed text-gray-700">
                  {project.desc}
                </p>
                <p className="text-[12px] leading-relaxed text-gray-400">
                  {project.tooltip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Unity / Footer CTA */}
      <section className="mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-3xl font-bold">Why Unity</h2>
        <ul className="mb-12 list-inside list-disc space-y-2 text-gray-800">
          <li>One codebase for desktop, mobile, kiosks, and custom hardware</li>
          <li>Fast iteration for complex UI and interaction logic</li>
          <li>Proven for real-time, touch-driven experiences</li>
          <li>Easy integration with backend services and APIs</li>
        </ul>
        <blockquote className="mx-auto mb-12 max-w-3xl text-center text-sm text-gray-800 italic">
          &quot;The game elevated the installation and attracted new customers
          consistently over a three-month period.&quot; <br />
          <span className="font-bold not-italic">— Hassan Amer, Swish</span>
        </blockquote>
        <div className="flex justify-center">
          <button
            onClick={onGetQuote}
            className="bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
          >
            Request a project quote
          </button>
        </div>
        <div className="h-10"></div> {/* Spacer */}
        <div className="mt-12 text-center text-xs text-gray-500">
          © 2025 ZM5J
        </div>
      </section>
    </div>
  );
};

// 3. Form Page View
const QuoteFormView = ({ onSubmit }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const togglePlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleValidation = async (e) => {
    e.preventDefault();
    // Logic: If both are empty. Otherwise, proceed.
    if (!email.trim() && !phone.trim()) {
      setError(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      onSubmit();
    }

    await sendMail();
    console.log("sent");
  };

  return (
    <div className="animate-fade-in mx-auto mt-4 max-w-3xl px-6 pb-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Request a Project Quote
      </h1>
      <form onSubmit={handleValidation} className="space-y-8">
        {/* Description */}
        <div>
          <label className="mb-3 block text-xl font-bold text-gray-900">
            Project description / goal
          </label>
          <textarea
            required
            className="h-32 w-full resize-none border-none bg-[#FDFDFD] p-3 focus:ring-2 focus:ring-black"
            placeholder=""
          />
        </div>

        {/* Platform Toggles */}
        <div>
          <label className="mb-3 block text-xl font-bold text-gray-900">
            Platform / devices
          </label>
          <div className="flex flex-col items-start space-y-2">
            {["Desktop", "Kiosk", "Mobile", "Custom hardware"].map(
              (platform) => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => togglePlatform(platform)}
                  className={`w-48 px-4 py-2 text-left text-sm font-bold transition-colors ${
                    selectedPlatforms.includes(platform)
                      ? "bg-black text-white"
                      : "bg-gray-300 text-black hover:bg-gray-400"
                  }`}
                >
                  {platform}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Budget Dropdown */}
        <div>
          <label className="mb-2 block text-xl font-bold tracking-tight text-gray-900">
            Budget range
          </label>
          <p className="mb-4 text-sm text-gray-700">
            Budget is for guidance. Final proposal will be based on project
            scope and complexity.
          </p>
          <div className="relative w-full md:w-2/3">
            <select
              required
              className="w-full cursor-pointer appearance-none border border-gray-400 bg-white p-2 text-lg outline-none focus:ring-2 focus:ring-black"
              defaultValue={""}
            >
              <option value="" disabled hidden>
                Select a range
              </option>
              <option value="under-1000">&lt; €1000 (very small scope)</option>
              <option value="1000-2000">€1000 - €2000</option>
              <option value="2000-5000">€2000 - €5000</option>
              <option value="5000-10000">€5000 - €10000</option>
              <option value="over-10000">€10000+</option>
            </select>
            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Timeline Dropdown */}
        <div>
          <label className="mb-4 block text-xl font-bold tracking-tight text-gray-900">
            Timeline
          </label>
          <p className="mb-4 text-sm text-gray-700">
            Timeline is indicative and depends on scope and availability.
          </p>
          <div className="relative w-full md:w-2/3">
            <select
              required
              className="w-full cursor-pointer appearance-none border border-gray-400 bg-white p-2 text-lg outline-none focus:ring-2 focus:ring-black"
              defaultValue={""}
            >
              <option value="" disabled hidden>
                Select a timeline
              </option>
              <option value="under-1-mo">&lt; 1 month</option>
              <option value="1-3-mo">1-3 months</option>
              <option value="3-6-mo">3-6 months</option>
              <option value="6-mo-plus">Flexible / not fixed</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <label className="mb-4 block text-xl font-bold tracking-tight text-gray-900">
            Contact info
          </label>

          <div className="max-w-lg space-y-4">
            <div className="flex items-center">
              <span className="w-20 text-sm font-bold">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
                className={`flex-1 border-2 border-transparent bg-white p-3 transition-colors focus:border-black`}
              />
            </div>
            <div className="flex items-center">
              <span className="w-20 text-sm font-bold">Phone</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError(false);
                }}
                className={`flex-1 border-2 border-transparent bg-white p-3 transition-colors focus:border-black`}
              />
            </div>

            <p
              className={`mb-4 text-sm font-medium text-blue-800 italic ${!error && "opacity-0"}`}
            >
              Please provide at least one way to reach you (email or phone).
            </p>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-8">
          <button
            type="submit"
            className="bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
          >
            Request Project Quote
          </button>
        </div>
      </form>
      <div className="h-10"></div> {/* Spacer */}
      <div className="mt-12 text-center text-xs text-gray-500">© 2025 ZM5J</div>
    </div>
  );
};

// 4. Success View
const SuccessView = () => (
  <div className="animate-fade-in mx-auto mt-20 max-w-3xl px-6 text-left">
    <h1 className="mb-8 text-5xl font-bold text-gray-900">Thank You!</h1>
    <p className="text-xl text-gray-800">
      We&apos;ll review your project and respond within 24–48 hours.
    </p>
    <div className="fixed bottom-8 left-0 w-full text-center text-xs text-gray-500">
      ZM5J @ 2025
    </div>
  </div>
);

// --- MAIN APP SHELL ---

export default function App() {
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
        {view === "home" && <HomeView onGetQuote={handleGetQuote} />}
        {view === "form" && <QuoteFormView onSubmit={handleFormSubmit} />}
        {view === "success" && <SuccessView />}
      </main>
    </div>
  );
}
