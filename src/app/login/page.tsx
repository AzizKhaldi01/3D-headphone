import { Metadata } from "next";
import { LoginForm } from "./LoginForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Login | Comra AI - 3D Room Modeling Platform",
  description: "Sign in to your Comra AI account to convert your room videos into detailed 3D models using AI technology.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Login to Comra AI - 3D Room Modeling Platform",
    description: "Access your 3D room models and continue creating virtual spaces from videos",
    type: "website",
  },
  alternates: {
    canonical: 'https://comra.ai/login',
  },
};

export default function Login() {
  return (
    <Container>
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        <LoginForm />
      </div>
    </Container>
  );
}
