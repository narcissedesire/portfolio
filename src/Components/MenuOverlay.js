"use client";

import React from "react";
import { NavLink } from "./NavLink";
import Link from "next/link";

export default function MenuOverlay() {
  return (
    <u className="flex flex-col py-4 items-center">
      {NavLink.map((link, index) => (
        <span key={index}>
          <li key={index}>
            <Link
              href={link.path}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              {link.title}
            </Link>
          </li>
        </span>
      ))}
    </u>
  );
}
