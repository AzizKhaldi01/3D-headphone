import { Navbar } from "./Navbar";
import { IntroScene } from "../IntroModel";

export const Intro = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen z-40 bg-[#E5E5E5]">
        <div className="container mx-auto z-30 px-8 pt-10">
          {/* Main content */}
          <div className="relative">
            {/* Left side content */}
            <div className="max-w-2xl z-40">
              <h1 className="text-[4rem]  font-semibold leading-none tracking-tight text-[#333333]">
                Reimagined
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            {/* Right side floating content */}
            <div className="absolute right-0 top-0">
              <div className="text-right">
                <h2 className="text-3xl font-medium text-[#333333]">Model CS</h2>
                <p className="mt-2 tracking-[0.2em] text-[#666666]">PERFORM</p>
              </div>
            </div>

            {/* 3D Model Container */}
            <div className=" -z-10">
              <IntroScene />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
