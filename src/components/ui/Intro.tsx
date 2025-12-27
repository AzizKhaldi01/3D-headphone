import { Navbar } from "./Navbar";
import { IntroScene } from "../IntroModel";

export const Intro = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen z-40 bg-[#E5E5E5] pt-20">
        <div className="container mx-auto z-30 px-6 md:px-8 pt-10">
          {/* Main content */}
          <div className="relative flex flex-col md:block">
            {/* Left side content */}
            <div className="max-w-2xl z-40 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-[4rem] lg:text-[6rem] font-semibold leading-none tracking-tight text-[#333333]">
                Reimagined
              </h1>
              <p className="mt-4 max-w-lg text-base md:text-lg leading-relaxed text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            {/* Right side floating content */}
            <div className="relative md:absolute md:right-0 md:top-0 text-left md:text-right mt-6 md:mt-0">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-[#333333]">Model CS</h2>
                <p className="mt-2 tracking-[0.2em] text-[#666666]">PERFORM</p>
              </div>
            </div>

            {/* 3D Model Container */}
            <div id="model-section" className=" -z-10 mt-10 md:mt-0">
              <IntroScene />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
