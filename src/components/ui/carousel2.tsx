import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

type Slide = {
  image: string;
  logo: string;
  caption?: string;
  title?: string;
  description?: string;
};

type CarouselProps = {
  slides: Slide[];
  interval?: number;
};

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [currentIndex, isPlaying]);

  return (
    <div className="relative w-full h-full overflow-hidden" {...handlers}>
      {slides.map((slide, idx) => {
        const isActive = currentIndex === idx;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlayed text content */}
            {isActive && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                {slide.logo && (
                    <div className=" flex items-center justify-center">
                        <img
                            src={slide.logo || "/default-logo.png"}
                            alt="Slide Logo"
                            className="h-24 w-auto rounded-full shadow-lg backdrop-blur bg-white/20 p-2 transition-opacity duration-1000 "
                            />
                    </div>
                )}
                {slide.title && (
                  <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-fade-in-up">
                    {slide.title}
                  </h1>
                )}
                {slide.description && (
                  <p className="mt-4 text-lg md:text-xl text-white animate-fade-in-up delay-300">
                    {slide.description}
                  </p>
                )}
              </div>
            )}

           

            {/* Caption */}
            {slide.caption && (
              <div className="absolute bottom-10 w-full text-center">
                <p
                  className={`text-xl md:text-2xl font-semibold text-white transition-opacity duration-1000 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {slide.caption}
                </p>
              </div>
            )}
          </div>
        );
      })}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        aria-label="Previous slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        aria-label="Next slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
