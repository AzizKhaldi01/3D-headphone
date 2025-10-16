import React from "react";
import { Container } from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Comra AI - 3D Room Modeling Platform",
  description: "Learn how Comra AI protects your privacy when using our AI-powered platform to convert room videos into 3D models.",
  openGraph: {
    title: "Privacy Policy | Comra AI - 3D Room Modeling Platform",
    description: "Understand how we handle your data and room videos",
    type: "website",
  },
  alternates: {
    canonical: 'https://comra.ai/privacy',
  },
};

export default function Privacy() {
  

  return (
    <Container>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="text-sm space-y-4">
          <p>
            At Comra.ai, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information.
          </p>
          <h2 className="text-xl font-bold mt-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, use our services, or contact us for support.
          </p>
          <h2 className="text-xl font-bold mt-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to comply with legal
            obligations.
          </p>
          <h2 className="text-xl font-bold mt-4">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect the security of your personal information against
            unauthorized access, disclosure, alteration, and destruction.
          </p>
          {/* Add more sections as needed */}
        </div>
      </div>
    </Container>
  );
}
