import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-8">
      <ContactForm />

      <h1 className="order-first text-4xl leading-tight font-bold peer-first:hidden sm:text-5xl md:text-6xl">
        Request a Project Quote
      </h1>
    </main>
  );
}
