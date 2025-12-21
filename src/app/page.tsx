import Image from "next/image";
import Link from "next/link";

import bbt from "@public/img/bbt.png";
import bbt_example from "@public/img/examples/bbt_example.jpeg";
import jana_example from "@public/img/examples/jana_example.jpeg";
import valamar_example from "@public/img/examples/valamar_example.png";
import jana from "@public/img/jana.png";
import valamar from "@public/img/valamar.png";

const services = [
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
];

const portfolios = [
  {
    title: "Promotional Game",
    desc: "Engaged thousands of restaurant customers over three months on custom hardware.",
    tooltip: "",
    bg: "bg-blue-100",
    img: bbt_example,
  },
  {
    title: "Digital Kids' Magazine",
    desc: "Entertained resort guests and increased family engagement.",
    tooltip: "Project completed as part of Brojka team.",
    bg: "bg-purple-100",
    img: valamar_example,
  },
  {
    title: "Gamified Promo App (AR)",
    desc: "Scannable AR experience on water bottles engaged thousands of users in six months.",
    tooltip: "Project completed as part of Brojka team.",
    bg: "bg-green-100",
    img: jana_example,
  },
];

export default function HomePage() {
  return (
    <main className="space-y-16 pb-8">
      {/* Hero Section */}
      <section className="mx-auto mt-4 max-w-3xl px-6 md:mt-8">
        {/* Left-aligned Header text */}
        <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
          Interactive & gamified apps
          <br />
          for businesses — built fast,
          <br />
          fixed price.
        </h1>
        <p className="mb-16 max-w-2xl text-xl leading-relaxed">
          Kiosks, ordering systems, internal tools, and customer-facing apps
          using Unity.
        </p>

        {/* Centered Social Proof & Button */}
        <div className="flex flex-col items-center text-center">
          <p className="text-1xl mb-6 font-bold">
            Delivered 9 Interactive Apps For Retail, Events, And Internal Tools
          </p>

          {/* Client Logos as Images */}
          <div className="mb-12 flex flex-col items-center justify-center gap-8 opacity-80 sm:flex-row">
            <Image
              src={valamar}
              alt="Valamar"
              className="h-25 w-auto object-contain"
            />
            <Image src={bbt} alt="BBT" className="h-25 w-auto object-contain" />
            <Image
              src={jana}
              alt="Jana"
              className="h-25 w-auto object-contain"
            />
          </div>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
          >
            Get a quote for your project
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-3xl font-bold">What I build</h2>
        <div className="space-y-8">
          {services.map((item, idx) => (
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
          <Link
            href="/contact"
            className="bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
          >
            Get a quote for your project
          </Link>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="mx-auto max-w-3xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {portfolios.map((project, idx) => (
            <div key={idx} className="bg-[#FDFDFD] pb-4">
              <Image
                alt={project.title}
                src={project.img}
                className="mb-4 flex max-h-50 w-full items-center justify-center object-cover text-sm text-gray-400"
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
          <Link
            href="/contact"
            className="bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
          >
            Request a project quote
          </Link>
        </div>
      </section>
    </main>
  );
}
