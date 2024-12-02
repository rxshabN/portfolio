"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import Submit from "./submit";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.45);
  return (
    <section
      ref={ref}
      id="contact"
      className="relative poppins scroll-mt-28 sm:mb-28 mb-20 w-[min(85%,38rem)] text-center"
    >
      <div className="lg:block hidden bg-[#6f61f3]/[0.3] absolute -z-10 top-[-1rem] left-[-75rem] h-[37rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="lg:block hidden bg-[#0e1d2d]/[0.4] absolute -z-10 top-[-60rem] -right-[0rem] h-[37rem] w-[40rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <h2 className="cursor-default weight sm:text-7xl text-5xl font-medium capitalize mb-8 text-center">
        Contact me
      </h2>
      <p className="text-white -mt-4 cursor-default">
        Feel free to reach out to me directly at{" "}
        <Link
          className="underline text-green-400"
          href="mailto:nagwanirishab@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          nagwanirishab@gmail.com
        </Link>{" "}
        or by filling out this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const result = await sendEmail(formData);
          if (result?.error) {
            toast.error(result.error);
          }
          toast.success("Message sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10 bg-white/90 mb-3 backdrop-blur-[0.5rem] placeholder-black"
          type="text"
          name="name"
          placeholder="Your name"
          required={true}
          maxLength={50}
          style={{ caretColor: "black" }}
        />
        <input
          className="h-14 px-4 rounded-lg border border-black/10 bg-white/90 backdrop-blur-[0.5rem] placeholder-black"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required={true}
          maxLength={500}
          style={{ caretColor: "black" }}
        />
        <textarea
          maxLength={5000}
          name="message"
          id=""
          className="h-52 my-3 rounded-lg border border-black/10 bg-white/90 p-4 backdrop-blur-[0.5rem] placeholder-black"
          placeholder="Type your message here"
          style={{ caretColor: "black" }}
        ></textarea>
        <div className="mx-auto sm:mx-0">
          <Submit />
        </div>
      </form>
    </section>
  );
}
