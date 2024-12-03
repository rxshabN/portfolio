"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const name = formData.get("name");
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Please enter a valid email address",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Message length should be less than 5000 characters",
    };
  }
  if (!validateString(name, 70)) {
    return {
      error: "Name should be less than 70 characters",
    };
  }
  const subject = `Message received from ${name}`;
  await resend.emails.send({
    from: "Portfolio Website <portfolio@rishabnagwani.tech>",
    to: "nagwanirishab@gmail.com",
    subject: subject as string,
    replyTo: senderEmail as string,
    react: React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
      name: name as string,
    }),
  });
};
