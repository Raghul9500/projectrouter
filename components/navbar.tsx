"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full">
      {/* Top Social Bar */}
      <div className="w-full bg-yellow-400">
        <div className="max-w-6xl mx-auto h-14 md:h-16 flex items-center justify-between px-4 md:px-6 text-black">
          {/* Icons */}
          <div className="flex space-x-4 md:space-x-6 text-lg md:text-xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaTwitter className="cursor-pointer hover:text-sky-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          </div>

          {/* Hide text in mobile */}
          <h1 className="hidden md:block text-sm md:text-lg font-medium">
            long established fact that a reader will be
          </h1>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white">
        <div className="max-w-6xl mx-auto py-6 flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-6">
          {/* Logo + Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <p className="text-xl md:text-2xl font-bold">
              LIGHTEN <br />
              ONLINE SHOP
            </p>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menu */}
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:items-center gap-6 mt-4 md:mt-0 text-lg font-bold`}
          >
            <li>
              <Link
                href="/Home"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/About"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/Product"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Product
              </Link>
            </li>

            <li>
              <Link
                href="/Blog"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/Contact"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/client"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                client
              </Link>
            </li>

            <li>
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
