"use server";

import { Resend } from "resend";

import type { FormSchemaInput } from "./components/contact-form";

const { RESEND_API_KEY } = process.env;

if (!RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environemt variable.");
}

const resend = new Resend(RESEND_API_KEY);

export const sendMail = async function (values: FormSchemaInput) {
  // const { data, error } = await resend.emails.send({
  //   from: "Acme <onboarding@resend.dev>",
  //   to: ["phillip.zoghby@gmail.com"],
  //   subject: "Hello World",
  //   html: "<strong>It works!</strong>",
  // });
  // if (error) {
  //   return error.message;
  // }
  // return data;
};
