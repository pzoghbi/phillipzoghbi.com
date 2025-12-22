import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const processes = [
  {
    title: "Scope",
    desc: [
      "You describe the app. I define the scope, platform, and constraints.",
      "If unclear → paid scoping. No surprises.",
    ],
  },
  {
    title: "Price",
    desc: [
      "Fixed price or milestone-based. Small projects only. No open-ended builds.",
    ],
  },
  {
    title: "Build",
    desc: [
      "Unity app + backend if needed.",
      "Weekly progress. Early playable version.",
    ],
  },
  {
    title: "Delivery",
    desc: ["Deployed to device/platform.", "Handover + optional support."],
  },
];

const portfolios = [
  {
    title: "Promotional Game",
    desc: "Engaged thousands of restaurant customers over three months on custom hardware.",
    tooltip: "",
    img: bbt_example,
  },
  {
    title: "Digital Kids' Magazine",
    desc: "Entertained resort guests and increased family engagement.",
    tooltip: "Project completed as part of Brojka team.",
    img: valamar_example,
  },
  {
    title: "Gamified Promo App (AR)",
    desc: "Scannable AR experience on water bottles engaged thousands of users in six months.",
    tooltip: "Project completed as part of Brojka team.",
    img: jana_example,
  },
];

export default function HomePage() {
  return (
    <main className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col gap-16">
        {/* Left-aligned Header text */}
        <div className="space-y-5">
          <h1 className="max-w-4xl text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
            Interactive & gamified apps for businesses — built fast, fixed
            price.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed sm:text-xl md:text-2xl">
            Kiosks, ordering systems, internal tools, and customer-facing apps
            using Unity.
          </p>
        </div>

        {/* Centered Social Proof & Button */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xl font-bold">
            Delivered 9 Interactive Apps For Retail, Events, And Internal Tools
          </p>

          {/* Client Logos as Images */}
          <div className="flex flex-col items-center justify-center gap-8 opacity-80 sm:flex-row">
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
        </div>
        <Button asChild className="self-center font-bold">
          <Link href="/contact">Get a quote for your project</Link>
        </Button>
      </section>

      {/* Services Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">What I build</h2>
        <div className="space-y-6">
          {services.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="max-w-prose text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">How it works</h2>
        <div className="space-y-6">
          {processes.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="flex flex-col text-gray-600">
                {item.desc.map((item, idx) => (
                  <span key={idx} className="max-w-prose">
                    {item}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <Button asChild className="self-center font-bold">
          <Link href="/contact">Get a quote for your project</Link>
        </Button>
      </section>

      {/* Portfolio Grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {portfolios.map((project, idx) => (
          <Card key={idx} className="pt-0 pb-4">
            <Image
              alt={project.title}
              src={project.img}
              className="max-h-50 object-cover"
            />
            <CardHeader className="px-4">
              <CardTitle className="font-bold">{project.title}</CardTitle>
              <CardDescription className="text-foreground">
                {project.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4">
              <p className="text-foreground/40 text-sm">{project.tooltip}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Why Unity / Footer CTA */}
      <section className="flex flex-col gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Unity</h2>
          <ul className="list-inside list-disc space-y-2 text-gray-800">
            <li>
              One codebase for desktop, mobile, kiosks, and custom hardware
            </li>
            <li>Fast iteration for complex UI and interaction logic</li>
            <li>Proven for real-time, touch-driven experiences</li>
            <li>Easy integration with backend services and APIs</li>
          </ul>
        </div>

        <blockquote className="max-w-3xl self-center text-center text-sm text-gray-800 italic">
          &quot;The game elevated the installation and attracted new customers
          consistently over a three-month period.&quot;
          <br />
          <span className="font-bold not-italic">— Hassan Amer, Swish</span>
        </blockquote>

        <Button asChild className="self-center font-bold">
          <Link href="/contact">Request a project quote</Link>
        </Button>
      </section>
    </main>
  );
}
