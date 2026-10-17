import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Camera, CirclePlay, Heart, Sparkles, Star } from "lucide-react";

const highlights = [
  { title: "Recognition & Rewards", description: "A moment to recognise achievements and celebrate the dedication shown throughout camp.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0dcaf936-433c-4c0f-bf40-22656c8abfe5-chp-recognition-rewards-under-500kb.webp", icon: Star },
  { title: "Best-in-Category Awards", description: "Celebrate standout contributions across the different creative and camp experiences.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/51361d87-5597-44ce-8303-88eec9e28cdd-chp-best-in-category-awards-under-500kb.webp", icon: Sparkles },
  { title: "Celebrating Every Effort", description: "Every attempt, encouraging word, and step outside a comfort zone deserves a cheer.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b63f003d-93bc-491a-91c1-c7198d25be2f-chp-celebrating-every-effort-under-500kb.webp", icon: Heart },
  { title: "Top 3 Reel Stars", description: "A cheerful spotlight on three memorable camp reels and the moments they captured.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/518f4618-e07a-4b19-8128-d38960898a4d-chp-top-3-reel-stars-under-500kb.webp", icon: Camera },
  { title: "Appreciation for Every Participant", description: "Thank every camper for the energy, kindness, and spirit they brought to the group.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/d026e834-0c57-4a66-9648-a2c4f05b22d5-chp-appreciation-every-participant-under-500kb.webp", icon: Heart },
  { title: "Group Memories & Celebrations", description: "Bring everyone together for group photographs, cheerful moments, shared laughter, and a collective celebration of the friendships formed during the camp.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b9506796-3837-474e-b8d1-8fe72641849d-chp-group-memories-celebrations-under-500kb.webp", icon: Camera },
  { title: "Gratitude & Farewell", description: "Close the camp with gratitude for shared experiences and a warm farewell to new friends.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/06e40f52-d164-4519-9c98-116b11829b06-chp-gratitude-and-farewell-under-500kb.webp", icon: Heart },
];

export default function ClosingCeremonyPage() {
  return (
    <main className="bg-[#faf9f5] text-slate-800">
      <section className="relative isolate flex min-h-[610px] items-center overflow-hidden bg-green-950 pt-[72px] sm:min-h-[680px]">
        <Image src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/d2e7810b-a082-49c2-b9f0-4eaccf9acb63-chp-closing-ceremony.webp" alt="Closing ceremony celebration at CHP Holiday Camp" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/70 to-green-950/25" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.24em] text-amber-200">CHP Himalayan Paradise · Holiday Camp</p>
          <h1 className="max-w-5xl text-[28px] font-bold leading-[1.08] tracking-tight text-white sm:text-[40px] md:text-[50px] xl:text-[62px]">CHP Holiday Camp <span className="text-amber-200">–</span><br className="hidden sm:block" /> Closing Ceremony</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">Celebrating Memories, Achievements &amp; the Spirit of Togetherness</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/camps" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-green-950 transition hover:bg-amber-300">Explore Our Holiday Camp <ArrowRight className="h-4 w-4" /></Link>
            <a href="#ceremony-highlights" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Discover the moments <ArrowDown className="h-4 w-4" /></a>
          </div>
        </div>
        <span className="absolute bottom-8 right-8 hidden text-[10px] uppercase tracking-[.28em] text-white/60 md:block">Every camper, every story</span>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 lg:px-12">
          <div className="relative mx-auto w-full max-w-xl lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-green-100 shadow-xl shadow-green-950/10">
              <Image src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/190ef1d0-831e-453c-be60-a6ccbd646f58-chp-closing-ceremony-under-500kb.webp" alt="CHP Holiday Camp participants celebrating together" fill sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover" />
            </div>
            <p className="absolute -bottom-5 left-5 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[.15em] text-green-900 shadow-lg sm:left-10">A moment for everyone</p>
          </div>
          <div className="lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-amber-700">More than a finish line</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-green-950 sm:text-5xl">A Celebration of Every Participant</h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">From exciting traditional Indian games and outdoor challenges to creative activities, team competitions, and unforgettable group moments, every participant brings something unique to the CHP Holiday Camp.</p>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">The Closing Ceremony recognises not just the winners, but everyone who participated enthusiastically, encouraged their teammates, tried something new, and contributed to the vibrant spirit of the camp.</p>
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-green-900 sm:text-sm">
              {["Participation", "Effort", "Teamwork", "Encouragement", "Personal contribution"].map((item) => <span key={item} className="rounded-full border border-green-900/15 bg-white px-3.5 py-2">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="ceremony-highlights" className="scroll-mt-20 bg-[#f0efe7] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[.22em] text-amber-700">The moments that matter</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-green-950 sm:text-5xl">Highlights of the Closing Ceremony</h2></div>
            <p className="max-w-sm pb-1 text-sm leading-6 text-slate-600 sm:text-base">A joyful gathering to honour achievements, appreciate effort, and share one last celebration together.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ title, description, image, icon: Icon }, index) => <article key={title} className={`group overflow-hidden rounded-3xl border border-green-950/[.07] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/10 ${index === highlights.length - 1 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.625rem)] lg:col-span-3 lg:w-[calc(33.333%-0.833rem)]" : ""}`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f4f3ed]"><Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
          <div className="p-6 sm:p-7"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-900"><Icon className="h-4 w-4" /></span><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-amber-700">Moment {String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-4 text-xl font-semibold leading-snug text-green-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12">
          <div><p className="text-xs font-semibold uppercase tracking-[.22em] text-amber-700">Press play, remember together</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-green-950 sm:text-4xl">Video Memories</h2><p className="mt-4 leading-7 text-slate-600">Relive the Closing Ceremony through a highlights video or a compilation of the best camp reels.</p><ul className="mt-5 space-y-2 text-sm font-medium text-green-900"><li className="flex items-center gap-2"><CirclePlay className="h-4 w-4" /> Closing ceremony highlights video</li><li className="flex items-center gap-2"><CirclePlay className="h-4 w-4" /> Compilation of the best camp reels</li></ul></div>
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-green-950/10 bg-[#f4f3ed] shadow-lg"><Image src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a5eb3470-384e-4290-9785-0aaff2feb00b-chp-video-memories-under-500kb.webp" alt="CHP Holiday Camp video memories" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-950 py-20 text-white sm:py-28">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border border-white/[.08]" /><div className="absolute -right-12 -top-16 h-72 w-72 rounded-full border border-white/[.08]" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"><p className="text-xs font-semibold uppercase tracking-[.24em] text-amber-200">Beyond awards · Memories that stay…</p><p className="mx-auto mt-7 max-w-3xl text-xl font-light leading-relaxed text-white/85 sm:text-3xl">The ceremony celebrates more than awards: it celebrates friendships, participation, teamwork, shared experiences, and memories that remain after the camp ends.</p></div>
      </section>

      <section className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-[#203b2d] py-20 text-center text-white sm:min-h-[600px]">
        <Image src="/images/camp-activities/closing-ceremony.webp" alt="A celebration of the friendships and memories formed at camp" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-950/70 to-green-950/90" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8"><p className="text-xs font-semibold uppercase tracking-[.24em] text-amber-200">Until we meet again</p><h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">Take Home the Memories.<br className="hidden sm:block" /> Carry Forward the Spirit…</h2><p className="mt-7 text-lg font-medium text-white/90 sm:text-2xl">One Camp. Every Age. Endless Himalayan Memories.</p><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">The camp may end, but the friendships, laughter, achievements, and memories stay with us.</p></div>
      </section>

      <section className="bg-[#f5f3eb] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-green-950/10 bg-white px-6 py-11 text-center shadow-sm sm:px-12 sm:py-14"><Star aria-hidden="true" className="mx-auto h-8 w-8 fill-amber-300 text-amber-500" /><p className="mt-5 text-xs font-semibold uppercase tracking-[.28em] text-amber-700">CHP Himalayan Paradise Holiday Camp</p><h2 className="mt-4 text-3xl font-bold tracking-[.12em] text-green-950 sm:text-5xl">EVERY CAMPER IS A STAR</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">Every Game Has a Story. Every Achievement Deserves a Cheer. Every Memory Lasts Beyond the Camp.</p><Link href="/camps" className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800">Explore Holiday Camp <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </main>
  );
}
