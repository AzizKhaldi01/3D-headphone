'use client'
import { Canvas } from "@react-three/fiber";
import Model from "../ScenePs5";
import Image from "next/image";

const testimonialData = [
  {
    name: "John Doe",
    username: "@Johndoe10",
    rating: 5.0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, sed do eiusmod tempor incididunt ut labore.",
    platform: "google",
    avatar: "/avatar.jpg"
  },
  {
    name: "John Doe",
    username: "@Johndoe10",
    rating: 5.0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, sed do eiusmod tempor incididunt ut labore.",
    platform: "google",
    avatar: "/avatar.jpg"
  },
  {
    name: "John Doe",
    username: "@Johndoe10",
    rating: 5.0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, sed do eiusmod tempor incididunt ut labore.",
    platform: "google",
    avatar: "/avatar.jpg"
  },
  {
    name: "John Doe",
    username: "@Johndoe10",
    rating: 5.0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, sed do eiusmod tempor incididunt ut labore.",
    platform: "twitter",
    avatar: "/avatar.jpg"
  },
  {
    name: "John Doe",
    username: "@Johndoe10",
    rating: 5.0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, sed do eiusmod tempor incididunt ut labore.",
    platform: "google",
    avatar: "/avatar.jpg"
  }
];

export const TestimonialCard = ({ 
  name, 
  username, 
  rating, 
  text, 
  platform, 
  avatar,
  className = ''
}: { 
  name: string; 
  username?: string; 
  rating: number; 
  text: string; 
  platform: string;
  avatar: string;
  className?: string;
}) => {
  return (
    <div className={`bg-[#111111] rounded-2xl p-6 flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-4">
        <Image 
          src={avatar} 
          alt={name} 
          width={48} 
          height={48} 
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-white font-medium">{name}</h3>
          {platform === 'twitter' && (
            <span className="text-[#1DA1F2]">{username}</span>
          )}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white">{rating}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
      <div className="mt-auto">
        {platform === 'google' ? (
          <Image src="/google.svg" alt="Google" width={24} height={24} />
        ) : (
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
        )}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-20 bg-black min-h-screen relative">
      {/* Header Content */}
      <div className="text-center mb-20">
        <h2 className="text-white text-6xl font-medium mb-6">Testimonials</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
          enim ad minim veniam.
        </p>
        <button className="px-8 py-3 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors">
          SEE ALL TESTIMONIALS
        </button>
      </div>

      {/* 3D Model Container */}
      <div className="relative w-full h-[400px] mb-20">
        <Image
          src="/controller.png" // Make sure to add your controller image
          alt="PlayStation Controller"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-[30%]">
            <TestimonialCard {...testimonialData[0]} />
            <TestimonialCard {...testimonialData[1]} />
          </div>
          
          {/* Center Column */}
          <div className="w-[40%] h-full">
            <div className="h-full">
              <TestimonialCard 
                {...testimonialData[2]} 
                className="h-full"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-6 w-[30%]">
            <TestimonialCard {...testimonialData[3]} />
            <TestimonialCard {...testimonialData[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}; 