import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const FloatingToken = ({ token, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size mapping
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-16 h-16 text-xl',
    lg: 'w-24 h-24 text-3xl',
  };

  const isPositive = token.priceChange >= 0;

  return (
    <div
      className="absolute z-10 flex items-center justify-center transition-all duration-700 ease-out"
      style={{
        top: token.position.top,
        left: token.position.left,
        zIndex: isHovered ? 50 : 10,
        // When hovered, we scale up slightly to emphasize focus
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/*
         TOKEN CONTAINER
         - Default: High blur, low opacity, grayscale (Ambient background mode)
         - Hover: No blur, Full opacity, Color (Focus/Clear mode)
      */}
      <div
        className={`
          relative flex items-center justify-center rounded-full
          transition-all duration-500 cursor-pointer
          ${sizeClasses[token.size]}
          ${
      isHovered
        ? 'opacity-100 blur-0 grayscale-0'
        : 'opacity-20 blur-[3px] grayscale-[80%]'
    }
        `}
        style={{
          backgroundColor: isHovered ? '#131313' : 'transparent',
          // Create the glowing ring effect on hover
          boxShadow: isHovered
            ? `0 0 0 2px #000, 0 0 0 4px ${token.color}40, 0 0 30px ${token.color}60`
            : 'none',
          border: isHovered
            ? `2px solid ${token.color}`
            : '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Token Icon / Letter */}
        <span
          className="font-bold select-none transition-colors duration-300"
          style={{
            color: isHovered ? token.color : 'rgba(255,255,255,0.6)',
            textShadow: isHovered ? `0 0 10px ${token.color}` : 'none'
          }}
        >
          {token.fallbackLetter}
        </span>

        {/*
           HOVER INFO CARD
           Appears to the right of the icon.
        */}
        <div
          className={`
            absolute left-full ml-5 top-1/2 -translate-y-1/2
            bg-[#131313]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[140px]
            transition-all duration-300 origin-left shadow-2xl z-50
            ${
              isHovered
                ? 'opacity-100 translate-x-0 scale-100 visible'
                : 'opacity-0 -translate-x-4 scale-90 invisible'
            }
          `}
        >
          {/* Arrow pointing to token */}
          <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#131313]/90 border-l border-b border-white/10 rotate-45" />

          <div className="flex flex-col gap-1 relative z-10">
            <div className="flex justify-between items-center">
                <span className="text-white font-bold text-base">{token.name}</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-medium">
              <span className="text-gray-400 bg-white/5 px-1.5 py-0.5 rounded uppercase tracking-wider">
                {token.symbol}
              </span>
              <span
                className={`flex items-center gap-0.5 ${
                  isPositive ? 'text-[#41b569]' : 'text-[#fd4a4a]'
                }`}
              >
                {isPositive ? <TrendingUp size={12} strokeWidth={3} /> : <TrendingDown size={12} strokeWidth={3} />}
                {Math.abs(token.priceChange).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};