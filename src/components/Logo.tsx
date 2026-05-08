import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center">
        <span className="font-montserrat font-bold text-3xl tracking-tight leading-none flex items-center">
          <span className="text-[#007AFF]">Blue</span>
          <span className="text-white">phoeni</span>
          {/* The Stylized X / Phoenix Icon which acts as the 'x' */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 ml-0.5"
          >
            <defs>
              <linearGradient id="blueLegGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A3FF" />
                <stop offset="100%" stopColor="#0057FF" />
              </linearGradient>
            </defs>
            {/* White leg (left leaning) */}
            <path
              d="M75 80L35 30"
              stroke="white"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Blue leg (right leaning) with Phoenix Head */}
            <path
              d="M25 80L65 20"
              stroke="url(#blueLegGradient)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Phoenix Head Detail at the top of the blue leg */}
            <path
              d="M65 20C70 15 85 10 90 18C95 25 85 35 75 35C65 35 60 25 65 20Z"
              fill="url(#blueLegGradient)"
            />
            {/* Eye */}
            <circle cx="82" cy="18" r="2.5" fill="white" />
          </svg>
        </span>
      </div>
      <div className="text-[#4DA3FF] text-[10px] font-bold tracking-[0.6em] uppercase leading-none mt-1.5 pl-1">
        Consulting LTD
      </div>
    </div>
  );
};
