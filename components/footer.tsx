"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-12 text-lg">
          <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-sm mb-6">CONTACT US</h3>
            <p className="text-gray-400">
              123 Second Street Fifth Avenue, <br />
              Manhattan, New York <br />
              +987 654 3210
            </p>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-l font-sm mb-6">ADDITIONAL LINKS</h3>
            <ul className="space-y-3 text-gray-400">
              <li>About us</li>
              <li>Terms and conditions</li>
              <li>Privacy policy</li>
              <li>News</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-xl font-semibold mb-6">SERVICE</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Data recovery</li>
              <li>Computer repair</li>
              <li>Mobile service</li>
              <li>Network solutions</li>
              <li>Technical support</li>
            </ul>
          </div>

          {/* About Lighten */}
          <div>
            <h3 className="text-xl font-semibold mb-6">ABOUT LIGHTEN</h3>
            <p className="text-gray-400">
              Tincidunt elit magnis nulla facilisis. Dolor sapien nunc amet
              ultrices.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Yellow Bar */}
      <div className="bg-yellow-400 text-center py-4 text-black text-sm">
        Copyright 2019 All Right Reserved By Free html Templates Distributed By
        ThemeWagon
      </div>
    </footer>
  );
}
