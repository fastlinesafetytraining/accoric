"use client";
import { SiteButton } from "@/Components/UI";
import React from "react";

export default function CallToAction() {
  return (
    <section id="register" className="w-full py-16 flex justify-center items-center">
      <div className="max-w-2xl w-full px-6 py-10 bg-white/80 rounded-2xl shadow-xl flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to get your Accoric DashCard?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Combine all your certifications into one smart card and never miss an expiration again.
        </p>
        <SiteButton type="primary" href="/signup" title="Get Started">Get Started</SiteButton>
      </div>
    </section>
  );
}
