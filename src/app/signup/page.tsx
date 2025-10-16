import { Metadata } from "next";
import { SignupForm } from "./SignupForm"; 
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Sign Up | Comra AI - 3D Room Modeling Platform",
  description: "Create your Comra AI account to start converting your room videos into detailed 3D models using AI technology.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Join Comra AI - 3D Room Modeling Platform",
    description: "Start creating 3D models from your room videos instantly with AI",
    type: "website",
  },
  alternates: {
    canonical: 'https://comra.ai/signup',
  },
};

export default function SignUp() {
  return (
    <Container>
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
        <SignupForm />
      </div>
    </Container>
  );
}
