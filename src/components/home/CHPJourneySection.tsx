"use client";

import { motion } from "framer-motion";
import {
    Compass,
    MapPin,
    Mountain,
    RotateCcw,
    Users,
    UserPlus,
    Heart,
    ArrowRight,
} from "lucide-react";

const journeySteps = [
    {
        number: "01",
        title: "DISCOVER",
        description:
            "Discover CHP, the Himalayas, and the experiences, spaces, and possibilities waiting for you.",
        icon: Compass,
    },
    {
        number: "02",
        title: "VISIT",
        description:
            "Come to the mountains and experience the beauty, culture, people, and peaceful surroundings of CHP.",
        icon: MapPin,
    },
    {
        number: "03",
        title: "EXPERIENCE",
        description:
            "Explore treks, wellness, nature, culture, adventure, food, and unique spaces designed around meaningful experiences.",
        icon: Mountain,
    },
    {
        number: "04",
        title: "RETURN",
        description:
            "Leave with memories and return for another season, another adventure, or simply another moment in the mountains.",
        icon: RotateCcw,
    },
    {
        number: "05",
        title: "CONNECT",
        description:
            "Build relationships with the CHP community, local people, fellow travellers, creators, and mountain enthusiasts.",
        icon: Users,
    },
    {
        number: "06",
        title: "JOIN",
        description:
            "Become more deeply involved through partnerships, programs, initiatives, events, or the wider CHP ecosystem.",
        icon: UserPlus,
    },
    {
        number: "07",
        title: "BELONG",
        description:
            "Make CHP part of your journey — a place to return to, contribute to, grow with, and call your Himalayan home.",
        icon: Heart,
    },
];

export function CHPJourneySection() {
    return (
        <section
            id="chp-journey"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
            {/* Subtle background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-green-100/40 blur-3xl" />
                <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl" />
                <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-700/20 bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-800">
                        <Compass className="h-3.5 w-3.5" />
                        The CHP Journey
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Your CHP Journey
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                        DISCOVER{" "}
                        <span className="text-orange-500">→</span>{" "}
                        VISIT{" "}
                        <span className="text-orange-500">→</span>{" "}
                        EXPERIENCE{" "}
                        <span className="text-orange-500">→</span>{" "}
                        RETURN{" "}
                        <span className="text-orange-500">→</span>{" "}
                        CONNECT{" "}
                        <span className="text-orange-500">→</span>{" "}
                        JOIN{" "}
                        <span className="text-orange-500">→</span>{" "}
                        BELONG
                    </p>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
                        CHP is more than a destination. It is a journey that
                        grows from a first discovery into a lasting connection
                        with the mountains and the community.
                    </p>
                </motion.div>

                {/* Journey */}
                <div className="relative mt-16 lg:mt-20">

                    {/* Desktop connecting line */}
                    <div className="absolute left-[7.14%] right-[7.14%] top-[34px] hidden h-px bg-gradient-to-r from-green-200 via-orange-200 to-green-200 lg:block" />

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
                        {journeySteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="group relative"
                                >
                                    {/* Mobile connecting line */}
                                    {index < journeySteps.length - 1 && (
                                        <div className="absolute left-6 top-14 hidden h-[calc(100%+2rem)] w-px bg-gradient-to-b from-green-200 to-orange-200 sm:block lg:hidden" />
                                    )}

                                    {/* Number / Icon */}
                                    <div className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border-4 border-white bg-green-900 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-600 group-hover:shadow-xl">
                                        <Icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />

                                        <span className="absolute -right-1 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-orange-500 px-1 text-[9px] font-bold text-white">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Card */}
                                    <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-green-100 group-hover:shadow-xl lg:min-h-[235px]">
                                        <h3 className="text-sm font-bold tracking-[0.12em] text-slate-900">
                                            {step.title}
                                        </h3>

                                        <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-12" />

                                        <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Arrow between desktop steps */}
                                    {index < journeySteps.length - 1 && (
                                        <ArrowRight className="absolute -right-3 top-7 z-20 hidden h-4 w-4 text-orange-400 lg:block" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mx-auto mt-14 max-w-3xl text-center lg:mt-16"
                >
                    <div className="rounded-2xl border border-green-100 bg-green-50/60 px-6 py-6 sm:px-8">
                        <p className="text-base font-medium leading-relaxed text-green-950 sm:text-lg">
                            "Come for the mountains. Stay for the experience.
                            Return for the connection. Belong to something
                            bigger."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}