import { FLOATING_TOKENS } from "../constants/constants";
import { FloatingToken } from "./FloatingToken";

// export const BackgroundEffect: React.FC = () => {
export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/*
        Background Color Layer
        Using a very dark grey/black base
      */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/*
         Ambient Blobs
         Large blurred shapes to create the nebula effect.
         pointer-events-none ensures they don't block clicks.
      */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[150px]" />
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-pink-900/20 rounded-full blur-[100px] opacity-60" />

      {/*
         Floating Tokens Layer
         We use pointer-events-auto on a wrapper div to allow interaction with tokens
         even though the parent is pointer-events-none.
      */}
      <div className="absolute inset-0 filter blur-[3px] pointer-events-none">
        {FLOATING_TOKENS.map((token) => (
          <FloatingToken key={token.id} token={token} className="pointer-events-auto" />
        ))}
      </div>

      {/* Vignette Overlay for focus */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505]/80 pointer-events-none" />
    </div>
  );
};
