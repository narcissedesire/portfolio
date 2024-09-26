"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function EmailSection() {
  const [emailSubmit, setEmailSubmit] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.value,
      sujet: e.target.value,
      message: e.target.value,
    };
    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch("api/send", options);
    const resData = await response.json();
    // console.log(resData);
    if (resData.status === 200) {
      console.log("Message envoyer");
      setEmailSubmit(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-10 md:gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nulla vel
          ea aperiam cumque, voluptatum dolore tempore deserunt quasi obcaecati
          recusandae dicta tenetur nemo!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"/"}>
            <Image
              src="/images/hero-image.png"
              alt="Github"
              width={50}
              height={50}
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/images/hero-image.png"
              alt="Github"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Votre e-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="sujet"
              className="text-white block mb-2 text-sm font-medium"
            >
              Votre e-mail
            </label>
            <input
              type="text"
              name="sujet"
              id="sujet"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Dit bonjour"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Votre e-mail
            </label>
            <textarea
              name="message"
              required
              id="message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Votre message ..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-secondary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Envoyer Message
          </button>
          {emailSubmit && (
            <p className="text-green-500 text-sm mt-2">
              Email envoyer avec succée
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
