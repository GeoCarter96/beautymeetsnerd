// ./beautymeetsnerd/app/starlink.tsx
import { Star } from 'lucide-react';

interface StarLinkProps {
  href: string;
  label: string;
  target?: string;
}

export default function StarLink({ href, label, target }: StarLinkProps) {
  return (
    <a 
      href={href} 
      target={target} 
      rel="noopener noreferrer"
      className="group relative flex flex-row items-center gap-8 transition-all duration-500 hover:translate-x-2"
    >
      {/* Distorted Floating Star (Now on the Left) */}
      <div className="relative animate-[bounce_6s_infinite_ease-in-out] shrink-0">
        {/* Layer 1: Harsh Color Offset */}
        <div className="absolute -inset-1 bg-pink-600 opacity-0 blur-sm group-hover:opacity-40 group-hover:animate-pulse transition-opacity" />
        
        {/* Layer 2: The Star */}
        <div className="relative">
          <Star 
            size={64} // Slightly reduced size to fit better in a row
            strokeWidth={1.5} 
            className="text-black fill-current drop-shadow-[6px_6px_0px_rgba(236,72,153,0.9)] 
                       filter contrast-125 saturate-150
                       group-hover:rotate-[-12deg] transition-all"
            style={{ fill: "url(#grungeGradient)" }}
          />
        </div>

        {/* SVG Gradient Definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="grungeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="70%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Label (Now to the Right of the Star) */}
      <span className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter
                       bg-gradient-to-b from-pink-400 via-purple-500 to-white 
                       bg-clip-text text-transparent 
                       drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]
                       group-hover:animate-[skew_0.2s_infinite] transition-all">
        {label}
      </span>
    </a>
  );
}
