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
    const [returnedData] = await db.insert(forms).values(values).returning();

    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ["leonardo.yakub@gmail.com"],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    if (error) {
      console.error(error);
      return error.message;
    }

    return data;
  } catch (error) {
    console.error(error);
    return "Form failed to submit.";
  }
};
