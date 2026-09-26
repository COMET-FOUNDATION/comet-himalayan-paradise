"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    ExternalLink,
    Home,
    Sparkles,
    Moon,
    Building2,
    BookOpen,
    UtensilsCrossed,
    Compass,
    Heart,
    GraduationCap,
    Film,
    Leaf,
    HeartHandshake,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const businessOpportunities = [
    {
        icon: Home,
        title: "CHP Himalayan Paradise Enclave",
        subItems: [],
        proposalUrl:
            "https://drive.google.com/file/d/1mXsGLcjSbzOMMpYKMF6oebXCP81H3YAN/view?usp=sharing",
    },
    {
        icon: Sparkles,
        title: "CHP Himalayan Personalized Dream Space",
        subItems: [
            "Himalayan Friends Only Enclave",
            "Himalayan Floral Paradise",
            "Himalayan Fruit Orchard",
            "Himalayan Vineyard Commune",
            "Himalayan Bonsai World",
            "Himalayan Rare Gems",
            "Uttarakhand Heritage Retreat",
        ],
        proposalUrl:
            "https://drive.google.com/file/d/1UxsLb0v74GSFPDqIAo371n9e1dE_QeP9/view?usp=sharing",
    },
    {
        icon: Moon,
        title: "Mystical Himalayan Retreat",
        subItems: [
            "CHP Pyramid Living Space",
            "CHP Cosmic Viewpoint",
            "Floral Escape Maze",
            "Himalayan Sky Nest Retreat",
        ],
        proposalUrl:
            "https://drive.google.com/file/d/1ikwiTTxzrWMa6rbLrdwMJq8VLtnRkDPv/view?usp=sharing",
    },
    {
        icon: Building2,
        title: "Himalayan Enclaves for Companies & Societies",
        subItems: [
            "Himalayan Corporate Guest House",
            "Himalayan Mind Space (Remote Work Setup)",
            "Himalayan Housing Society Guest House",
        ],
        proposalUrl:
            "https://drive.google.com/file/d/1XJ_E724jn1DnkU8RGt-2QZ4GNLQdSXAH/view?usp=sharing",
    },
    {
        icon: BookOpen,
        title: "Himalayan Creative Learning and Discovery Campus",
        subItems: [
            "Himalayan Holiday Camp – Summer Camp Setup",
            "Himalayan Wellness Camp",
            "CHP Stem Lab",
            "CHP Creative Mind Studio",
            "CHP Sport 360 Arena",
        ],
        proposalUrl:
            "https://drive.google.com/file/d/1vt_WFP9PEUEbnJGZAm6CdkWQ5tIroag0/view?usp=sharing",
    },
    {
        icon: UtensilsCrossed,
        title: "Food Court and Himalayan Cliff Edge Restaurant",
        subItems: ["CHP Food Court", "Himalayan Cliff Edge Restaurant"],
        proposalUrl:
            "https://drive.google.com/file/d/1iAp_dnuWWLkIbmrC7X3Ia6iRxuYjBUM5/view?usp=sharing",
    },
    {
        icon: Compass,
        title: "CHP Himalayan Adventure World",
        subItems: ["Himalayan Adventure Sports Club", "Himalayan River Camp"],
        proposalUrl:
            "https://drive.google.com/file/d/1dep38BkukmkLK93iM51wFNjDXoKWb_wF/view?usp=sharing",
    },
    {
        icon: Heart,
        title: "CHP Himalayan Destination Wedding",
        subItems: [],
        proposalUrl:
            "https://drive.google.com/file/d/1ESMLcz61HhJVOVCZK6PruBh21LwXFZ6I/view?usp=sharing",
    },
    {
        icon: GraduationCap,
        title: "Himalayan Residential School",
        subItems: [],
        proposalUrl:
            "https://drive.google.com/file/d/1ESMLcz61HhJVOVCZK6PruBh21LwXFZ6I/view?usp=sharing",
    },
    {
        icon: Film,
        title: "CHP Himalayan Film Studio",
        subItems: [],
        proposalUrl:
            "https://drive.google.com/file/d/1v0bIv7VYlBnYpZSa5-AqflviMeChnlrT/view?usp=sharing",
    },
    {
        icon: Leaf,
        title: "CHP Himalayan Eco-Agri Business Community",
        subItems: [],
        proposalUrl:
            "https://drive.google.com/file/d/1ESMLcz61HhJVOVCZK6PruBh21LwXFZ6I/view?usp=sharing",
    },
    {
        icon: HeartHandshake,
        title: "Purpose Driven Space",
        subItems: ["Comet Educational Services", "Comet Gaushala", "Isht Dev Sthal Development"],
        proposalUrl: null, // TODO: no proposal link provided yet
    },
];

export default function PartnershipProposalsPage() {
    return (
        <main className="min-h-screen bg-white pt-16">
            {/* ── Hero ── */}
            <section className="border-b border-stone-200 py-16 lg:py-24 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
                    >
                        Partnership Proposals
                    </motion.h1>
                    <p className="mt-5 text-slate-600 text-base max-w-3xl mx-auto leading-relaxed">
                        CHP Himalayan Paradise is being developed as an integrated ecosystem that
                        brings together hospitality, wellness, education, adventure, eco-tourism,
                        agriculture, culture, and entrepreneurship within a single destination —
                        a true{" "}
                        <span className="italic">
                            &ldquo;One-Stop Destination for Complete Himalayan Experiences&rdquo;
                        </span>
                        , where visitors can enjoy diverse experiences throughout the year.
                    </p>
                    <p className="mt-4 text-slate-600 text-base max-w-3xl mx-auto leading-relaxed">
                        We invite entrepreneurs, investors, organizations, educational institutions,
                        CSR partners, and business groups to own or co-own facilities aligned with
                        their interests and become long-term partners in building one of India&apos;s
                        most inspiring Himalayan destinations.
                    </p>

                    <div className="mt-10 overflow-hidden rounded-2xl shadow-sm">
                        <Image
                            src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b2869511-6cdc-45c1-a203-9fb69daca2ba-pp.webp"
                            alt="CHP Himalayan Paradise partnership proposals"
                            width={1600}
                            height={700}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="h-56 w-full object-cover sm:h-72 lg:h-80"
                        />
                    </div>
                </div>
            </section>

            {/* ── Business Opportunities ── */}
            <section className="py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="12 Business Opportunities"
                    title="CHP Business Opportunities"
                    subtitle="Explore the facilities planned across the CHP ecosystem and view the detailed business proposal for each."
                    align="left"
                />

                <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
                    {businessOpportunities.map((opp, i) => {
                        const Icon = opp.icon;
                        return (
                            <StaggerItem key={opp.title}>
                                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-green-900/20 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className="w-10 h-10 shrink-0 rounded-xl bg-green-900/5 border border-green-900/10 flex items-center justify-center text-green-900">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-400">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold leading-snug text-slate-800 mt-3 mb-3">{opp.title}</h3>

                                    {opp.subItems.length > 0 && (
                                        <ul className="space-y-1.5 mb-4">
                                            {opp.subItems.map((item) => (
                                                <li
                                                    key={item}
                                                    className="text-slate-600 text-sm leading-relaxed flex items-start gap-2"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-green-900/40 mt-2 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-auto pt-2">
                                        {opp.proposalUrl ? (
                                        <a
                                                href={opp.proposalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-green-900 hover:text-green-800 transition-colors"
                                            >
                                                View Business Proposal
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 italic">
                                                Business proposal coming soon
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </section>
        </main>
    );
}
