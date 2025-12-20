"use server";

import { Resend } from "resend";

const resend = new Resend("re_3yFQTT9t_63H9v1LHYyYCZRAwMbxD54pz");

export const sendMail = async function () {
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
