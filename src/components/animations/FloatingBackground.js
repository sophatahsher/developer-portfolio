import React from "react";
import "./FloatingBackground.css"; // We'll define animations here

const tokens = [
  // {id: 1, symbol: "BTC", name: "Bitcoin", color: "#f7931a"},
  // {id: 2, symbol: "ETH", name: "Ethereum", color: "#627eea"},
  // {id: 3, symbol: "DOGE", name: "Dogecoin", color: "#c2a633"},
  // {id: 4, symbol: "UNI", name: "Uniswap", color: "#ff007a"},
  // {id: 5, symbol: "SOL", name: "Solana", color: "#00ffa3"},
  // {id: 6, symbol: "ADA", name: "Cardano", color: "#0033ad"}
  {id: 1, symbol: "PHP", name: "PHP", color: "#8892be"},
  {id: 2, symbol: "React", name: "React", color: "#58C4DC"},
  {id: 3, symbol: "PYTHON", name: "Python", color: "#4584B6"},
  {id: 4, symbol: "Next.js", name: "Next.js", color: "#000000"},
  {id: 5, symbol: "Vue.js", name: "Vue.js", color: "#42B883"},
  {id: 6, symbol: "Spring Boot", name: "Spring Boot", color: "#6DB33F"},
  {id: 7, symbol: "JS", name: "JS", color: "#F0DB4F"},

  // add more tokens if needed
];

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {tokens.map((token, index) => {
        const top = Math.random() * 90 + "%"; // random top position
        const left = Math.random() * 90 + "%"; // random left position
        const size = 50 + Math.random() * 60; // random size 40px - 100px
        const delay = Math.random() * 5; // animation delay for floating
        return (
          <div
            key={token.id}
            className="floating-token "
            style={{
              top,
              left,
              width: size,
              height: size,
              backgroundColor: token.color + "55", // semi-transparent
              animationDelay: `${delay}s`,
              "--token-color": token.color // CSS variable for border
            }}
          >
            <span className="token-symbol">{token.symbol}</span>
            <div className="token-tooltip">{token.name}</div>
          </div>
        );
      })}
    </div>
  );
}
