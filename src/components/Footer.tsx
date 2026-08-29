import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Share2, Globe, Video, X } from "lucide-react";

const footerLinks = {
  Explore: [
    { href: "/enclave", label: "CHP Enclave" },
    { href: "/gateways", label: "CHP Gateways" },
    { href: "/camps", label: "Holiday Camps" },
    { href: "/treks", label: "Himalayan Treks" },
    { href: "/accommodation", label: "Accommodation" },
    { href: "/gallery", label: "Gallery" },
  ],
  Offerings: [
    { href: "/second-home", label: "Second Home" },
    { href: "/facilities", label: "Facilities" },
    { href: "/purpose-driven-space", label: "Purpose Driven Space" },
    { href: "/business-investment", label: "Business & Investment" },
    { href: "/growth-partner", label: "CHP Growth Partner" },
  ],
  Popular: [
    { href: "/treks/khaliya-top", label: "Khaliya Top Trek" },
    { href: "/treks/panchachuli-base-camp", label: "Panchachuli Base Camp" },
    { href: "/treks/adi-kailash", label: "Adi Kailash Trek" },
    { href: "/treks/nanda-devi-base-camp", label: "Nanda Devi Base Camp" },
    { href: "/treks/mila-glacier", label: "Mila Glacier Trek" },
  ],
};

const socials = [
  { href: "#", label: "Instagram", Icon: Share2 },
  { href: "#", label: "Facebook", Icon: Globe },
  { href: "#", label: "YouTube", Icon: Video },
  { href: "#", label: "Twitter / X", Icon: X },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block mb-5 transition-transform duration-200 hover:scale-[1.02]"
              aria-label="CHP Himalayan Paradise Home"
            >
              <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl inline-flex items-center shadow-md border border-white/20">
                <Image
                  src="/Logo final 2026.png"
                  alt="CHP Himalayan Paradise"
                  width={200}
                  height={60}
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Immersive Himalayan travel experiences — holiday camps, guided
              treks, wellness retreats, and cultural adventures in the heart of
              the Indian Himalayas.
            </p>

            {/* Contact */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-slate-400">
                   Pithoragarh,
                  <br /> Uttarakhand 262554, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="tel:+9199499 94989"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +91 99499 94989
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="mailto:hello@chphimalayanparadise.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  hello@chphimalayanparadise.com
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-green-900 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} CHP Himalayan Paradise. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
