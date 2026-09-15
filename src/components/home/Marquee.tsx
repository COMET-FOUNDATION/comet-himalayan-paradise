const messages = [
  "Don’t Just Visit the Himalayas. Become Part of Them.",
  "One Ecosystem. Endless Himalayan Experiences.",
  "Travel Deeper. Live Closer. Belong to the Himalayas.",
  "More Than a Journey — A Community That Feels Like Home.",
  "Explore the Himalayas. Experience the Life. Join the Ecosystem.",
  "From Travellers to Community — This Is CHP.",
  "Discover. Experience. Connect. Contribute.",
  "The Himalayas Are More Than a Destination. They’re a Way of Life.",
  "Your Himalayan Journey Doesn’t End When the Trip Does.",
  "Be Part of Something Bigger — Be Part of the CHP Ecosystem.",
];

export function Marquee() {
  return (
    <div className="relative bg-stone-900 border-b border-stone-700/60">
      {/* Fixed-nav clearance so the ticker sits directly below the navbar */}
      <div className="h-16 lg:h-16" aria-hidden="true" />

      <div className="relative overflow-hidden">
        <div className="marquee-track flex items-center">
          {[...messages, ...messages].map((message, i) => (
            <span
              key={`${message}-${i}`}
              aria-hidden={i >= messages.length}
              className="flex items-center gap-8 shrink-0 whitespace-nowrap px-4 py-3 text-sm text-stone-200/90 tracking-wide"
            >
              <span className="text-amber-500/80 select-none">✦</span>
              {message}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}