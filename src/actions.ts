"use server";

import { Resend } from "resend";

import type { FormSchemaInput } from "./components/contact-form";
import { db } from "./db";
import { forms } from "./db/schema";

const { RESEND_API_KEY } = process.env;

if (!RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environemt variable.");
}

const resend = new Resend(RESEND_API_KEY);

export const sendMail = async function (values: FormSchemaInput) {
  try {
    const [data] = await db.insert(forms).values(values).returning();

    const resendData = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ["phillip.zoghby@gmail.com"],
      subject: `Project Quote Request: ${data.devices} app ${data.budget} in ${data.timeline}`,
      html: `
        <h1>New Project Quote Request</h1>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Platforms:</strong> ${data.devices.join(", ") || "None selected"}</p>
        <p><strong>Budget Range:</strong> ${data.budget}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <hr />
        <h3>Contact Information:</h3>
        <p><strong>Email:</strong> ${data.email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
      `,
    });

    if (resendData.error) {
      console.error(resendData.error);
      return resendData.error.message;
    }

    return resendData.data;
  } catch (error) {
    console.error(error);
    return "Form failed to submit.";
  }
};
