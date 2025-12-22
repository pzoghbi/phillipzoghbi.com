"use server";

import { Resend } from "resend";

const resend = new Resend("re_3yFQTT9t_63H9v1LHYyYCZRAwMbxD54pz");

// Define the interface for the data we are receiving
interface QuoteData {
  description: string;
  platforms: string[];
  budget: string;
  timeline: string;
  email: string;
  phone: string;
}

export const sendMail = async function (formData: QuoteData) {
  const { description, platforms, budget, timeline, email, phone } = formData;

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["phillip.zoghby@gmail.com"],
    subject: `Project Quote Request: ${platforms} app ${budget} in ${timeline}`,
    html: `
      <h1>New Project Quote Request</h1>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Platforms:</strong> ${platforms.join(", ") || "None selected"}</p>
      <p><strong>Budget Range:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <hr />
      <h3>Contact Information:</h3>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    `,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};