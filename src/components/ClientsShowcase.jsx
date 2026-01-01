import { useState, useEffect, useRef } from 'react';

const cards = [
  {
    text: "24k Goldn",
    CPM: "$0.059",
    views: "5M+",
    budget:"$300",
    image: "./src/assets/tech/reactjs.jpg",
    backInfo: "Ran a campaign for 24K Goldn on Instagram for his Latest Release (Icarus II) with meme style content reposting using his official Instagram Audio that fit the vibe and lyrics of the song. Every element was optimised for conversion thus resulting in 5000+ streams within 72hours."
  },
  {
    text: "AURA AI",
    CPM:"$0.22",
    budget:" $5600",
    views: "25M+",
    image: "./src/assets/tech/nodejs.png",
    backInfo: "A simple meme style campaign powered by over hundreds of active clippers in our community that promoted AURA Ai and generated them over 25 million organic views and tons of conversions"
  },
  {
    text: "Wesley Hunt Campaign",
    CPM: "$0.40",
    budget: "$1,000",
    views: "2.5M+",
    image: "./src/assets/tech/javascript.png",
    backInfo: "We ran a Wesley Hunt Campaign political campaign which had clippers edit and reposting all over tiktok with over 50% USA audience. This campaign generated 2.5mil+ views with a CPM of just $0.4 (i.e. 17-20x cheaper than meta)"
  },
  {
    text: "Larzishs Music Clipping Campaign",
    CPM : "$0.053",
    budget: "$250",
    views: "2.5M+",
    image: "./src/assets/tech/IMGLaz.png",
   
    backInfo: "Ran a music clipping campaign that resulted in the total streams increase by 12k+ on this promoted song through official audio clipping done on Instagram."
  },
  {
    text: "eromify",
    CPM: "$0.67",
    views:"1.5 million ",
    budget: "$1000",
    image: "./src/assets/tech/IMGE.png",
    backInfo: "Leveraging 3-5 sec Instagram and TikTok clip reposting we generated over 1.5M views in total resulting in huge organic reach and conversions."
  },
 
];

const Card = ({ text, image, backInfo, budget, CPM, views, streams }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex gap-6">
      {/* Front of card - Always visible */}
      <div className="flex-1 bg-gradient-to-br from-[#0a1628] to-[#0d1b2a] p-8 rounded-2xl border border-[#1e3a5f]/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center min-h-[280px]">
        <div className="mb-6">
          <img
            src={image}
            alt={text}
            className="w-32 h-32 object-contain"
          />
        </div>
        <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-4">
          {text}
        </h3>
        
        {/* Campaign Stats */}
        <div className="w-full space-y-2">
          {budget && (
            <div className="flex justify-between items-center px-4 py-2 bg-[#1e3a5f]/30 rounded-lg">
              <span className="text-gray-400 text-sm">Budget:</span>
              <span className="text-white font-semibold">{budget}</span>
            </div>
          )}
          {CPM && (
            <div className="flex justify-between items-center px-4 py-2 bg-[#1e3a5f]/30 rounded-lg">
              <span className="text-gray-400 text-sm">CPM:</span>
              <span className="text-green-400 font-semibold">{CPM}</span>
            </div>
          )}
          {views && (
            <div className="flex justify-between items-center px-4 py-2 bg-[#1e3a5f]/30 rounded-lg">
              <span className="text-gray-400 text-sm">Views:</span>
              <span className="text-blue-400 font-semibold">{views}</span>
            </div>
          )}
          {streams && (
            <div className="flex justify-between items-center px-4 py-2 bg-[#1e3a5f]/30 rounded-lg">
              <span className="text-gray-400 text-sm">Streams:</span>
              <span className="text-purple-400 font-semibold">{streams}</span>
            </div>
          )}
        </div>
        
        <button 
          onClick={() => setIsFlipped(!isFlipped)}
          className="mt-4 text-blue-400 text-sm hover:text-blue-300"
        >
          {isFlipped ? 'Hide Info' : 'Show More'}
        </button>
      </div>

      {/* Back info - Slides in from the right */}
      <div className={`flex-1 bg-gradient-to-br from-[#1e3a5f] to-[#0d1b2a] p-8 rounded-2xl border border-[#2d4a6f]/50 shadow-xl flex flex-col items-center justify-center min-h-[280px] transition-all duration-500 ${
        isFlipped ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <p className="text-white text-lg text-center leading-relaxed">
          {backInfo}
        </p>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef();
  const SWITCH_INTERVAL = 4000; // 4 seconds
  const CARDS_PER_PAGE = 3; // Number of cards visible at once

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

  // Auto-switch
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, SWITCH_INTERVAL);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, totalPages]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, SWITCH_INTERVAL);
    }
  };

  const handleNext = () => {
    const next = (currentPage + 1) % totalPages;
    handlePageClick(next);
  };

  const handlePrev = () => {
    const prev = currentPage === 0 ? totalPages - 1 : currentPage - 1;
    handlePageClick(prev);
  };

  // Get cards for current page
  const startIndex = currentPage * CARDS_PER_PAGE;
  const visibleCards = cards.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0118] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Cards Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 gap-6 min-h-[320px]">
            {visibleCards.map((card, index) => (
              <div
                key={startIndex + index}
                className="animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handlePrev}
            className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          {/* Counter */}
          <div className="text-white text-lg font-semibold">
            Page {currentPage + 1} / {totalPages}
          </div>

          <button
            onClick={handleNext}
            className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            Next
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className="group relative"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-[#1e3a5f] scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Carousel;