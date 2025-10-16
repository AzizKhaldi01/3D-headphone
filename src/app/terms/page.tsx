import React from "react";
import { Container } from "@/components/ui/Container";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Terms of Service | Comra AI - 3D Room Modeling Platform",
  description: "Read our terms of service for using Comra AI's AI-powered platform that converts room videos into 3D models.",
  openGraph: {
    title: "Terms of Service | Comra AI - 3D Room Modeling Platform",
    description: "Learn about our terms for using our 3D room modeling service",
    type: "website",
  },
  alternates: {
    canonical: 'https://comra.ai/terms',
  },
};

export default function Terms() {
  return (
    <Container>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms of Service
        </h1>
        <div className="text-sm space-y-4">
          <p>
            Welcome to Comra.ai. By using our service, you agree to comply with
            and be bound by the following terms and conditions of use.
          </p>
          <h2 className="text-xl font-bold mt-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Comra.ai, you agree to be bound by these Terms
            of Service and all applicable laws and regulations. If you do not
            agree with any part of these terms, you may not use our service.
          </p>
          <h2 className="text-xl font-bold mt-4">2. Use of Service</h2>
          <p>
            You agree to use Comra.ai only for lawful purposes and in a way that
            does not infringe the rights of, restrict or inhibit anyone
            else&apos;s use and enjoyment of the website.
          </p>
          <h2 className="text-xl font-bold mt-4">3. Modifications to Terms</h2>
          <p>
            Comra.ai reserves the right to modify these terms at any time. We do
            so by posting and drawing attention to the updated terms on the
            site. Your continued use of the site after changes constitutes your
            acceptance of the new terms.
          </p>
          {/* Add more sections as needed */}
        </div>
      </div>
    </Container>
  );
}
