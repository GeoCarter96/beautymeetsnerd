import Image from 'next/image';
import StarLink from './starlink';



export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center pt-16 pb-10 px-4 overflow-hidden">
     <div className="pointer-events-none fixed inset-0 z-30">
        {/* Small, fast flakes (Background) */}
        <div className="grunge-snow absolute inset-0 opacity-20 [animation-duration:8s] [background-size:150px_150px]" />
        {/* Medium flakes (Mid-ground) */}
        <div className="grunge-snow absolute inset-0 opacity-40 [animation-duration:5s] [background-size:250px_250px] [animation-delay:2s]" />
        {/* Large, slow flakes (Foreground) */}
        <div className="grunge-snow absolute inset-0 opacity-10 [animation-duration:12s] [background-size:400px_400px] blur-[1px]" />
      </div>

      {/* 2. Your Existing Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/beauty.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-[0.4] contrast-125 scale-110"
        />
      </div>
            <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.15] mix-blend-screen" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200'..."` }}>
      </div>

      {/* Background Image (Resembles the photo's depth) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/beauty.jpg" // Place your photo in /public
          alt="Background"
          fill
          priority
          className="object-cover brightness-[0.6]  scale-110"
        />
      </div>

  <div className="relative group -rotate-1 mb-12 scale-90 md:scale-100">
  {/* --- DISTORTED BACKGROUND GLOW (Reduced Scale) --- */}
  <div className="absolute inset-0 -z-10 scale-125">
    <div className="absolute inset-0 bg-pink-600/20 blur-[40px] rounded-full animate-pulse" />
    <div className="absolute inset-0 bg-purple-900/30 blur-[30px] rounded-full -translate-x-2 translate-y-1 animate-bounce [animation-duration:8s]" />
  </div>

  {/* JAGGED TORN PAPER BORDERS (Tighter Insets) */}
  {/* Layer 1: The "Ripped" Pink Backing */}
  <div className="absolute -inset-3 bg-pink-900/20 -z-10"
       style={{ clipPath: "polygon(2% 8%, 98% 4%, 92% 95%, 5% 92%, 0% 50%)" }} />
  
  {/* Layer 2: The Main Torn Box */}
  <div className="absolute -inset-1 border-[2px] border-white/20 bg-black/40 backdrop-blur-sm shadow-[5px_5px_0px_rgba(0,0,0,0.5)]"
       style={{ clipPath: "polygon(5% 2%, 95% 5%, 100% 45%, 94% 94%, 50% 100%, 3% 92%, 0% 40%)" }} />

  {/* The Handle (Smaller Font: 4xl to 5xl) */}
  <h1 className="relative z-10 text-4xl md:text-5xl font-black italic uppercase tracking-tighter 
                 bg-gradient-to-r from-pink-500 via-purple-400 to-white 
                 bg-clip-text text-transparent 
                 filter drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]">
    @beautymeetsnerd_
  </h1>

  {/* Glitch Tape/Underline (Thinner) */}
  <div className="absolute -bottom-4 -left-2 w-[105%] h-2.5 bg-pink-600/80 -rotate-1 skew-x-12"
       style={{ clipPath: "polygon(0% 15%, 15% 0%, 85% 15%, 100% 0%, 95% 85%, 80% 100%, 15% 85%, 0% 100%)" }} />
</div>

     

      {/* Star Buttons Container - Added mt-20 to move it lower */}
<div className="flex z-[60] flex-col items-center gap-24 w-full mt-48 pb-20">
  <StarLink href="https://instagram.com/beautymeetsnerd_" label="Instagram" target="_blank" />
  <StarLink href="https://www.tiktok.com/@beautymeetsnerde" label="TikTok" target="_blank" />
  <StarLink href="#" label="TOLLY TOLLY" target="_blank" />
</div>

    </main>
  );
}
