"use client";

import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { tabdata } from "./NavLink";

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/hero-image.png"
          alt="hero image about"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nulla
            vel ea aperiam cumque, voluptatum dolore tempore deserunt quasi
            obcaecati recusandae dicta tenetur nemo! Laudantium tenetur amet
            aperiam! Animi, eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus quaerat necessitatibus facilis?
          </p>
          <div className="flex justify-start flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tabdata.find((t) => t.id === tab).constent}
          </div>
        </div>
      </div>
    </section>
  );
}
