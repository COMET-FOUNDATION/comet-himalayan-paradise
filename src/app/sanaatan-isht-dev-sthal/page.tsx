import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    BookOpen,
    Leaf,
    CheckCircle,
    Sunrise,
} from "lucide-react";
import {
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABanner } from "@/components/home/CTABanner";
import { DonationQRCode } from "@/components/social-impact/DonationQRCode";

export const metadata: Metadata = {
    title: "Sanaatan Isht Dev Sthal",
    description:
        "A sacred initiative to reconnect generations with their Isht-Devas, Sanatan traditions and Uttarakhand's rich spiritual heritage. One Place. Divine Unity. A Temple for Every Heart.",
    alternates: {
        canonical:
            "https://comet-himalayan-paradise.vercel.app/sanaatan-isht-dev-sthal",
    },
};

const visionPoints = [
    "Creating a comprehensive list of deities worshipped across Uttarakhand",
    "Documenting the original/native sites associated with each Isht-Devta",
    "Inviting individuals, business leaders and community members to voluntarily support the establishment of individual shrines",
    "Developing the shrines through the Trust to maintain consistency and coordinated execution",
];

const projectContributions = [
    "Preserving Uttarakhand's identity as Devbhoomi",
    "Connecting younger generations with spiritual and cultural traditions",
    "Promoting tourism in remote areas",
    "Creating opportunities for local communities and villagers",
];

const spiritualSpaces = [
    {
        title: "Isht-Devta Shrines",
        description:
            "Individual small shrines, or Thaan, dedicated to revered Isht-Devas, accompanied by stone inscriptions describing the deity and acknowledging the contributing devotee/sponsor. Each unit is planned with a small shrine and a space for devotees to sit, reflect and pray.",
        icon: "🕉️",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "Chaar Dhaam Bhavan — India",
        description:
            "A dedicated representation of Badrinath, Dwarka, Puri and Rameshwaram, introducing visitors to the four major pilgrimage traditions of India's Char Dham through pictures, paintings, sculptures and descriptions.",
        icon: "🗺️",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "Chaar Dhaam Bhavan — Uttarakhand",
        description:
            "A dedicated space representing Yamunotri, Gangotri, Kedarnath and Badrinath, allowing visitors to explore the four Char Dham pilgrimage sites of Uttarakhand in one place.",
        icon: "⛰️",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "12 Jyotirlingas Premise",
        description:
            "A dedicated space presenting the 12 Jyotirlingas, with names and brief descriptions displayed through stone inscriptions or visual representations.",
        icon: "🔱",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "51 Shakti Peeth Premise",
        description:
            "A space dedicated to the 51 Shakti Peethas, presenting their names and brief descriptions through inscriptions or visual displays to help visitors learn about these sacred traditions.",
        icon: "🌸",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "Nav Durga Bhavan",
        description:
            "A dedicated space celebrating the nine forms of Goddess Durga, represented through images, idols and descriptions.",
        icon: "✨",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "Krishna Leela Bhavan",
        description:
            "A thematic space depicting important events from Lord Krishna's life through pictures, sculptures and proposed light-and-sound presentations.",
        icon: "🪈",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "Ram Leela Bhavan",
        description:
            "A space dedicated to the life and ideals of Lord Shri Ram, presenting important events through pictures, sculptures and light-and-sound effects, with an emphasis on inspiration from his life and values.",
        icon: "🏹",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "Shiv Mahima Premise",
        description:
            "A dedicated complex exploring the glory and different manifestations of Lord Shiva, using paintings, sculptures and descriptions to introduce their spiritual, cultural and philosophical significance.",
        icon: "🌙",
        color: "bg-orange-50 border-orange-100",
    },
    {
        title: "Lord Vishnu Leela Bhavan",
        description:
            "A dedicated space presenting the Dashavatara and divine manifestations of Lord Vishnu through paintings, sculptures, audio-visual presentations and descriptions.",
        icon: "🌀",
        color: "bg-orange-50 border-orange-100",
    },
];

const moreThanWorship = [
    {
        icon: Sunrise,
        title: "Yoga & Meditation Centre",
        description:
            "A dedicated centre for yoga, pranayama, meditation and spiritual practices, designed around the purification and balance of body, mind and soul.",
    },
    {
        icon: BookOpen,
        title: "Educational & Cultural Visits",
        description:
            "The initiative proposes collaboration with schools so that students can visit the complex, explore the temple chain and participate in interactive sessions around Sanatan Vedic traditions and Uttarakhand's religious heritage.",
    },
];

const selfSustainability = [
    "Informative booklets about Isht-Devtas",
    "Yoga and meditation programmes",
    "Health retreat and medical-tourism related programmes",
    "Volunteer participation",
];

const callsToAction = [
    {
        label: "Explore Isht Dev Sthal",
        href: "/contact",
        style: "bg-amber-600 hover:bg-amber-700 text-white",
    },
    {
        label: "Support a Shrine",
        href: "/contact",
        style:
            "bg-white hover:bg-amber-50 text-amber-800 border border-amber-300",
    },
    {
        label: "Become a Volunteer",
        href: "/contact",
        style:
            "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300",
    },
    {
        label: "Partner With Us",
        href: "/contact",
        style: "bg-green-900 hover:bg-green-800 text-white",
    },
];

export default function SanaatanIshtDevSthalPage() {
    return (
        <main className="min-h-screen bg-stone-50 text-slate-800">

            {/* ── Hero ── */}
            <section className="relative w-full overflow-hidden bg-amber-950 pt-16">
                <div className="relative aspect-[1000/333] w-full overflow-hidden">
                    {/* Header Background Image */}
                    <Image
                        src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/comet-gaushala/075cabe3-34b8-45d5-a44e-9a7d84dbed07-chp-isht-dev-sthal.png"
                        alt="Sanaatan Isht Dev Sthal – sacred shrine complex in the Himalayas"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[center_20%]"
                    />
                    {/* Very light dark theme overlay — keeps the image bright and clearly visible */}
                    <div className="absolute inset-0 bg-black/10" />

                </div>
            </section>

            {/* ── The Vision ── */}
            <section
                id="vision"
                className="bg-white py-10 sm:py-12"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">

                        <ScrollReveal direction="left">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-amber-500" />

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                                    The Vision
                                </p>
                            </div>

                            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
                                A Harmonious Spiritual Corridor
                            </h2>

                            <p className="mb-6 text-justify leading-relaxed text-slate-600">
                                The initiative seeks to create a{" "}
                                <strong className="font-bold text-amber-700">
                                    harmonious cluster of Isht-Devta
                                </strong>{" "}
                                (preferred deities) within a single spiritual
                                corridor — a place for pilgrims, devotees,
                                families, students and the next generation to
                                discover, experience and connect with India&apos;s
                                diverse spiritual traditions.
                            </p>

                            <p className="mb-6 text-justify leading-relaxed text-slate-600">
                                The campus is envisioned not simply as a temple
                                complex, but as a place for{" "}
                                <strong className="font-bold text-green-900">
                                    faith, cultural learning, reflection
                                </strong>{" "}
                                and spiritual experience.
                            </p>

                            <p className="text-justify leading-relaxed text-slate-600">
                                This makes Isht Dev Sthal potentially relevant
                                not only to devotees, but also to students,
                                families, cultural explorers, pilgrims and
                                visitors interested in{" "}
                                <strong className="font-bold text-amber-700">
                                    Uttarakhand&apos;s spiritual heritage
                                </strong>
                                .
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-8 text-slate-800 shadow-sm">

                                <div className="mb-6 flex items-center gap-3">
                                    <MapPin className="h-6 w-6 text-amber-700" />

                                    <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
                                        Located in Devbhoomi
                                    </p>
                                </div>

                                <p className="mb-6 text-justify leading-relaxed text-slate-700">
                                    Located in Uttarakhand — widely associated
                                    with the idea of{" "}
                                    <strong className="font-bold text-amber-800">
                                        Devbhoomi, the Land of the Gods
                                    </strong>{" "}
                                    — the initiative aims to provide a dedicated
                                    space where different Isht-Dev traditions
                                    can be experienced together.
                                </p>

                                <p className="mb-6 text-sm font-semibold text-amber-800">
                                    This project is intended to contribute to:
                                </p>

                                <ul className="space-y-3">
                                    {projectContributions.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                                            <span className="text-sm text-slate-700">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>

            {/* ── A Community-Supported Initiative ── */}
            <section
                id="community"
                className="bg-amber-950/5 py-10 sm:py-12"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        eyebrow="A Community-Supported Initiative"
                        title="The Isht Dev Sthal Trust"
                        subtitle="The Isht Dev Sthal Trust is the spiritual wing operating within the CHP framework and the driving force behind the initiative. The Trust proposes to develop a dedicated space where Hindu deities are represented along with their names and glory through stone inscriptions."
                    />

                    <div className="mt-10">
                        <p className="mb-6 text-center text-lg font-semibold text-slate-700">
                            The Proposed Implementation Model Includes:
                        </p>

                        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
                            {visionPoints.map((point, i) => (
                                <ScrollReveal
                                    key={i}
                                    delay={i * 0.08}
                                    direction="up"
                                >
                                    <div className="flex items-start gap-4 rounded-2xl border border-amber-200/70 bg-amber-50/60 p-6 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50">

                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                                            {i + 1}
                                        </span>

                                        <p className="text-justify text-sm leading-relaxed text-slate-600">
                                            {point}
                                        </p>

                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── A Journey Through India's Spiritual Heritage ── */}
            <section
                id="spiritual-spaces"
                className="bg-stone-50 py-10 sm:py-12"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        eyebrow="A Journey Through India's Spiritual Heritage"
                        title="The Proposed Campus Brings Together Several Themed Spiritual Spaces"
                        subtitle="Experience India's diverse spiritual and cultural heritage, all within one sacred destination in the heart of Uttarakhand."
                    />

                    <StaggerContainer
                        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        staggerDelay={0.06}
                    >
                        {spiritualSpaces.map((space, i) => (
                            <StaggerItem key={i}>
                                <div
                                    className={`h-full rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-md ${space.color}`}
                                >
                                    <span className="mb-4 block text-4xl">
                                        {space.icon}
                                    </span>

                                    <h3 className="mb-3 text-lg font-bold text-slate-800">
                                        {space.title}
                                    </h3>

                                    <p className="text-justify text-sm leading-relaxed text-slate-600">
                                        {space.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                </div>
            </section>

            {/* ── More Than a Place of Worship ── */}
            <section
                id="more-than-worship"
                className="border-y border-stone-200 bg-stone-50 py-12 text-slate-800"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <ScrollReveal direction="up">
                        <div className="mb-4 flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-amber-500" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                                More Than a Place of Worship
                            </p>

                            <span className="h-px w-8 bg-amber-500" />
                        </div>

                        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800 sm:text-4xl">
                            A Destination Combining Devotion, Cultural Education,
                            <br className="hidden sm:block" />
                            Wellness &amp; Community
                        </h2>

                        <p className="mx-auto mb-10 max-w-2xl text-justify text-slate-600 sm:text-center">
                            The proposed Isht Dev Sthal is envisioned as a{" "}
                            <strong className="font-bold text-amber-800">
                                complete destination for devotees, students,
                                families and visitors
                            </strong>{" "}
                            alike.
                        </p>
                    </ScrollReveal>

                    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {moreThanWorship.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <ScrollReveal
                                    key={i}
                                    delay={i * 0.1}
                                    direction="up"
                                >
                                    <div className="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-6 shadow-sm sm:p-8">

                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-200/60">
                                            <Icon className="h-6 w-6 text-amber-800" />
                                        </div>

                                        <h3 className="mb-3 text-xl font-bold text-slate-800">
                                            {item.title}
                                        </h3>

                                        <p className="text-justify text-sm leading-relaxed text-slate-600">
                                            {item.description}
                                        </p>

                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    {/* Self-Sustaining Model */}
                    <ScrollReveal direction="up">
                        <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm sm:p-8">

                            <div className="mb-6 flex items-center gap-3">
                                <Leaf className="h-6 w-6 text-amber-700" />

                                <h3 className="text-xl font-bold text-slate-800">
                                    Building a Self-Sustaining Spiritual Initiative
                                </h3>
                            </div>

                            <p className="mb-6 text-justify text-sm leading-relaxed text-slate-600">
                                The initiative proposes a{" "}
                                <strong className="font-bold text-amber-800">
                                    self-sustainability model
                                </strong>{" "}
                                that includes:
                            </p>

                            <ul className="space-y-3">
                                {selfSustainability.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                                        <span className="text-sm text-slate-700">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </ScrollReveal>

                </div>
            </section>

            {/* ── Sponsor & Participation ── */}
            <section
                id="sponsor"
                className="bg-white py-10 sm:py-12"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-3xl">

                        <ScrollReveal direction="up">
                            <div className="mb-4 flex items-center justify-center gap-3">
                                <span className="h-px w-8 bg-amber-500" />

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                                    Sponsor &amp; Participation Opportunity
                                </p>

                                <span className="h-px w-8 bg-amber-500" />
                            </div>

                            <h2 className="mb-6 text-center text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
                                Be Part of the Sacred Journey
                            </h2>

                            <p className="mb-4 text-center text-justify leading-relaxed text-slate-600 sm:text-center">
                                The proposed model allows devotees and supporters
                                to contribute towards individual{" "}
                                <strong className="font-bold text-amber-700">
                                    Isht-Devta shrines
                                </strong>
                                . The sponsor&apos;s name is proposed to be
                                displayed alongside the deity&apos;s inscription,
                                with a dedicated stone-wall board recognizing
                                contributing sponsors.
                            </p>

                            <p className="mb-8 text-center text-justify text-sm text-slate-500 sm:text-center">
                                The initiative also mentions issuance of{" "}
                                <strong className="font-bold text-slate-700">
                                    tax-exemption receipts under applicable
                                    12A/80G provisions
                                </strong>
                                .
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <div className="mb-6 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/80 p-8 text-center text-slate-800 shadow-md sm:p-10">

                                <span className="mb-6 block text-5xl">
                                    🪔
                                </span>

                                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-800">
                                    Faith. Service. Action.
                                </p>

                                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                                    Support a shrine. Preserve a tradition.
                                    Connect generations.
                                </h3>

                                <p className="mb-8 text-sm leading-relaxed text-slate-600">
                                    Reconnect with Your Isht-Devta.
                                    <br />
                                    A sacred journey of faith, heritage and
                                    discovery in the Himalayas.
                                </p>

                                <div className="flex flex-wrap justify-center gap-3">
                                    {callsToAction.map((cta) => (
                                        <a
                                            key={cta.label}
                                            href={cta.href}
                                            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${cta.style}`}
                                        >
                                            {cta.label}
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>
<DonationQRCode />
{/* BOTTOM NAV CAPTION */}
      <section className="py-8 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link
            href="/#social-impact"
            className="inline-block rounded-full bg-green-900 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md hover:bg-green-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            Home 
          </Link>
        </div>
      </section>
            
        </main>
    );
}