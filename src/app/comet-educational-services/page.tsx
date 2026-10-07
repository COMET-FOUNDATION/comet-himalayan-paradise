import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    GraduationCap,
    Users,
    BookOpen,
    Mic,
    BrainCircuit,
    Laptop,
    School,
    HeartHandshake,
    Trophy,
    Lightbulb,
    Building2,
    ArrowRight,
    ArrowLeft,
    CheckCircle,
} from "lucide-react";
import {
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Comet Educational Services",
    description:
        "COMET Educational Service is a nonprofit initiative bridging the career-development gap for talented students from remote and underserved communities through mentoring, IT training, and professional skills development.",
    alternates: {
        canonical:
            "https://comet-himalayan-paradise.vercel.app/comet-educational-services",
    },
};

/* ────────────────────────────────────────────────────────────────
   Page-level settings
   ──────────────────────────────────────────────────────────────── */

// Menu name shown in the green pill on the header image.
const MENU_NAME = "EDUCATIONAL SERVICES";

// Position of the pill on the header image.
const PILL_POSITION_CLASS = "top-0 sm:top-1 lg:top-2";

// Destination of the button at the bottom of the page.
const HOME_HREF = "/";

/*
 * SINGLE CONTAINER COLOR
 *
 * All text/card containers on this page use the same
 * very-light green treatment.
 */
const CONTAINER_CLASS =
    "bg-white border border-slate-200";

const CHIP_CLASS =
    "bg-stone-50 border border-slate-200 text-green-800";

/**
 * Key-word highlighter.
 *
 * Kept subtle and consistent with the page's single light-green
 * container treatment instead of using a separate red container.
 */
function Key({ children }: { children: ReactNode }) {
    const isShort =
        typeof children === "string" && children.length <= 30;

    return (
        <strong
            className={`font-semibold text-green-800 bg-green-50 rounded-sm px-0.5 ${
                isShort
                    ? "inline-block whitespace-nowrap text-left"
                    : ""
            }`}
        >
            {children}
        </strong>
    );
}

/** Centered section heading: eyebrow, title and justified intro paragraph. */
function CenteredHeader({
    eyebrow,
    title,
    subtitle,
}: {
    eyebrow: string;
    title: string;
    subtitle: string;
}) {
    return (
        <ScrollReveal direction="up">
            <div className="flex items-center justify-center gap-3 mb-3">
                <span className="h-px w-8 bg-orange-500" />

                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] text-center">
                    {eyebrow}
                </p>

                <span className="h-px w-8 bg-orange-500" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 leading-tight mb-5 max-w-3xl mx-auto">
                {title}
            </h2>

            <p className="text-slate-600 leading-relaxed text-justify max-w-4xl mx-auto">
                {subtitle}
            </p>
        </ScrollReveal>
    );
}

/* ────────────────────────────────────────────────────────────────
   Content
   ──────────────────────────────────────────────────────────────── */

const stats = [
    {
        value: "40+",
        label: "Senior IT Professionals",
    },
    {
        value: "20,000+",
        label: "Students Reached",
    },
    {
        value: "7",
        label: "States",
    },
    {
        value: "50+",
        label: "Schools & Colleges",
    },
    {
        value: "500+",
        label: "Success Stories",
    },
];

const trainings: {
    icon: typeof Laptop;
    title: string;
    tagline: string;
    description: ReactNode;
    focus: string[];
    color: string;
}[] = [
    {
        icon: Laptop,
        title: "IT Training",
        tagline:
            "Practical Technology Skills for Tomorrow's Careers",
        description: (
            <>
                Learn IT tools, technologies and{" "}
                <Key>job-oriented skills</Key> that build a strong
                foundation for today&apos;s technology-driven careers.
            </>
        ),
        focus: [
            "IT Tools",
            "Technologies",
            "Job Profiles",
            "Practical Skills",
        ],
        color: "green",
    },
    {
        icon: Users,
        title: "Group Discussion",
        tagline: "Think. Speak. Listen. Participate.",
        description:
            "Develop communication, logical thinking, teamwork and confidence through structured group discussions.",
        focus: [
            "Communication",
            "Confidence",
            "Teamwork",
            "Critical Thinking",
        ],
        color: "green",
    },
    {
        icon: Mic,
        title: "Presentation Skills",
        tagline: "Turn Knowledge Into Confidence.",
        description:
            "Learn to organize ideas, create effective presentations and communicate clearly and confidently before an audience.",
        focus: [
            "Communication",
            "Presentation",
            "Public Speaking",
            "Confidence",
        ],
        color: "green",
    },
    {
        icon: BrainCircuit,
        title: "Soft Skills",
        tagline: "Skills Beyond the Classroom.",
        description:
            "Build the interpersonal and professional skills required to succeed in academic, interview and workplace environments.",
        focus: [
            "Communication",
            "Teamwork",
            "Leadership",
            "Interview Readiness",
        ],
        color: "green",
    },
];

const schoolServices: {
    icon: typeof Laptop;
    title: string;
    description: ReactNode;
}[] = [
    {
        icon: HeartHandshake,
        title: "Career Counselling & Mentorship",
        description:
            "Career counselling sessions and workshops help students understand career options, identify their strengths, and make informed decisions about their future.",
    },
    {
        icon: School,
        title: "Adopt-a-School Program",
        description:
            "Through our school-support initiative, COMET works with selected schools to improve educational opportunities and contribute to the academic and career development of their students.",
    },
    {
        icon: BookOpen,
        title: "Career Planning & Tracking",
        description: (
            <>
                Our <Key>Career Planning Tracker</Key> provides
                students with a platform to plan their careers while
                enabling school management to follow their progress
                and support them through COMET mentorship.
            </>
        ),
    },
    {
        icon: Lightbulb,
        title: "Motivational & Awareness Programs",
        description:
            "Industry professionals and experienced mentors conduct motivational sessions, career-awareness programs, and interactive workshops for students.",
    },
    {
        icon: Trophy,
        title: "Competitions & Career Events",
        description:
            "COMET supports inter-school competitions and plans career-focused events at block and district levels to encourage healthy competition, exposure, and learning.",
    },
];

const mentorshipSkills = [
    "Communication",
    "Leadership",
    "Teamwork",
    "Problem Solving",
    "Creative Thinking",
    "Decision Making",
    "Time Management",
    "Emotional Intelligence",
    "Positive Attitude",
    "Responsibility",
];

const careerGuidanceOfferings = [
    "Career Counselling & Mentoring",
    "Technical & IT Training",
    "BCA/B.Tech Career Support",
    "Programming, Cloud, DevOps, AI, ML & Data Science",
    "Software Testing & Database Development",
    "Business Analysis & Project Management",
    "Spoken English & Communication Skills",
    "Soft Skills, Leadership & Personality Development",
    "Mock Tests, Group Discussions & Mock Interviews",
    "Internship & Fresher Job Opportunities",
    "Industry Interaction with IT Professionals",
];

const studyCentreFeatures: ReactNode[] = [
    "Safe & disciplined learning environment for focused study",
    <>
        <Key>24×7 supervision</Key>, mentoring and guidance
    </>,
    "Structured rules and routines that encourage discipline and responsibility",
    "Close mentoring and continuous monitoring of student progress",
    "Technical and functional training during early morning and evening hours",
    "English communication and soft-skills development",
    "Group discussions, team activities and presentation-oriented sessions",
    "Mock interviews and career preparation",
    "Weekend workshops with focused student participation",
    "360° feedback to students and parents on learning and development",
];

const careerMakeoverPathways: {
    title: string;
    description: ReactNode;
}[] = [
    {
        title: "From Beginner to Software Professional",
        description:
            "Advanced computer training can help students with little or no prior computer knowledge build the skills required for software careers.",
    },
    {
        title: "From Hindi Medium to Professional Careers",
        description:
            "Spoken English, group discussions, presentation practice and mock interviews help students build communication and workplace confidence.",
    },
    {
        title: "Alternative Pathways to BCA",
        description:
            "Arts and Commerce students can receive guidance and support to explore BCA and other technology-oriented degree programs.",
    },
    {
        title: "Opportunities Beyond Academic Scores",
        description:
            "Students with lower Class 12 scores can receive guidance to explore BCA, BBA and other suitable degree programs.",
    },
    {
        title: "Support for Students Without Mathematics",
        description:
            "Students from Science and Commerce backgrounds who did not study Mathematics can explore suitable pathways toward BCA programs.",
    },
    {
        title: "Affordable Higher Education",
        description:
            "COMET works to help deserving and financially constrained students identify affordable college and degree options.",
    },
];

const supportWays: {
    title: string;
    description: ReactNode;
}[] = [
    {
        title: "Adopt a School",
        description:
            "Support the development of schools in remote communities through technology, mentoring, training and educational initiatives.",
    },
    {
        title: "Build Computer Labs",
        description:
            "Help establish and sustain computer labs by sponsoring computers, lab infrastructure or technical consultants.",
    },
    {
        title: "Support Career Workshops & Career Fests",
        description:
            "Enable students to discover career opportunities through counselling sessions, workshops and career awareness events.",
    },
    {
        title: "Sponsor Competitions",
        description:
            "Support inter-school competitions that encourage creativity, knowledge, confidence and healthy competition among students.",
    },
    {
        title: "Provide Digital Devices",
        description:
            "Donate or sponsor laptops, desktops and tablets for students and schools that lack access to technology.",
    },
    {
        title: "Sponsor IT Training & Certifications",
        description:
            "Help students gain industry-relevant IT skills and professional certifications that can improve their career opportunities.",
    },
    {
        title: "Support Higher Education",
        description:
            "Sponsor BCA, BBA or other higher-education expenses for deserving students who face financial constraints.",
    },
    {
        title: "Sponsor Student Laptops",
        description:
            "Provide laptops to students pursuing professional courses who cannot afford the equipment required for their education.",
    },
    {
        title: "Create Internship & Job Opportunities",
        description:
            "Organizations can support COMET students by offering internships, project opportunities and entry-level employment.",
    },
];

const leaders: {
    name: string;
    role: string;
    bio: ReactNode;
    photo: string;
}[] = [
    {
        name: "Ram Datt Bhatt",
        role: "Founder & Chairman, COMET Foundation",
        bio: (
            <>
                An MCA postgraduate and{" "}
                <Key>IIM Calcutta alumnus</Key>, Ram Datt Bhatt
                brings more than two decades of experience across
                leading IT organizations. His professional journey
                includes management roles with companies such as Dell,
                HPE, Wipro, Infosys, Stanley and ValueLabs. His earlier
                experience in education and social service, combined
                with his passion for supporting students and creating
                sustainable opportunities in the Himalayan region,
                led to the creation of COMET and its broader social
                initiatives.
            </>
        ),
        photo:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/comet-education-services/d5416b2e-95cc-425b-862d-e9d142a7cbe8-ram-sir.jpeg",
    },
    {
        name: "Jeetendra Ranjan",
        role: "Co-Founder & Director, COMET Foundation",
        bio: (
            <>
                A Master of Science in Computer Science and MBA,
                Jeetendra Ranjan has{" "}
                <Key>more than 20 years</Key> of experience working
                with Indian and multinational technology organizations.
                He contributes to COMET through his technical,
                management and mentoring expertise, helping strengthen
                programs designed for students and young professionals.
                He is also associated with social initiatives supporting
                education and scholarships for students from weaker
                sections of society.
            </>
        ),
        photo:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/comet-education-services/716f2d6b-a5dc-4ad7-bb7c-99cd1ebbb44a-jjeetendraranjan.jpeg",
    },
    {
        name: "Harish Chandra Bhatt",
        role: "Co-Founder & Director, COMET Foundation",
        bio: (
            <>
                A B.Sc. and B.Ed. graduate from Kumaun University,
                Harish Chandra Bhatt has been actively involved in
                social causes in the <Key>Pithoragarh region</Key> for
                more than two decades. His longstanding commitment to
                supporting underserved communities and helping people
                in remote villages inspired him to join COMET and
                contribute to its education and
                community-development initiatives.
            </>
        ),
        photo:
            "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/comet-education-services/b9912e60-8f4c-4bd5-ba96-8bc6058f644f-harishchandra.jpeg",
    },
];

/*
 * All training cards now use the SAME light-green container.
 *
 * The object is retained because the training data still uses
 * the color property, but every value resolves to the same
 * visual treatment.
 */
const colorMap: Record<string, string> = {
    green: "bg-white border-slate-200 text-green-800",
};

const iconBgMap: Record<string, string> = {
    green: "bg-green-900",
};

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function CometEducationalServicesPage() {
    return (
        <main
            lang="en"
            className="min-h-screen bg-stone-50 text-slate-800 pt-16 [hyphens:auto]"
        >
            {/* ── Hero (header image + menu-name pill) ── */}

            <section className="relative w-full overflow-hidden">
                {/* Supplied header image — natural aspect ratio, never cropped */}
                <img
                    src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/47ac4747-8af6-43b8-a00a-35d08e567d4d-scaled-comet-svc.webp"
                    alt="Comet Educational Services in the Himalayas"
                    fetchPriority="high"
                    decoding="async"
                    className="block h-auto w-full border-0 outline-none"
                />

                {/* Page title for search engines & screen readers */}
                <h1 className="sr-only">
                    About Comet Educational Services
                </h1>

                {/* Menu name */}
                <div
                    className={`absolute inset-x-0 z-10 flex justify-center ${PILL_POSITION_CLASS}`}
                >
                    <span className="inline-block whitespace-nowrap rounded-full bg-green-900 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md">
                        {MENU_NAME}
                    </span>
                </div>
            </section>

            {/* ── Stats ── */}

            <section className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {stats.map((stat, i) => (
                            <ScrollReveal
                                key={stat.label}
                                delay={i * 0.07}
                                direction="up"
                            >
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-green-900 mb-2">
                                        {stat.value}
                                    </p>

                                    <p className="text-slate-500 text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMET Trainings ── */}

            <section id="trainings" className="py-10 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CenteredHeader
                        eyebrow="COMET Trainings"
                        title="Building Skills. Building Confidence. Building Careers."
                        subtitle="COMET training programs help students develop the technical, communication and professional skills needed for higher education, employment and career growth. Our training combines IT skills, practical learning and professional development to prepare students for real-world opportunities."
                    />

                    <StaggerContainer
                        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        staggerDelay={0.08}
                    >
                        {trainings.map((t) => {
                            const Icon = t.icon;

                            return (
                                <StaggerItem key={t.title}>
                                    <div
                                        className={`rounded-2xl border p-6 flex flex-col gap-4 h-full ${colorMap[t.color]}`}
                                    >
                                        <div
                                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBgMap[t.color]}`}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>

                                        <div>
                                            <h3 className="text-slate-800 font-bold text-lg mb-1">
                                                {t.title}
                                            </h3>

                                            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-3">
                                                {t.tagline}
                                            </p>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                                                {t.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto">
                                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">
                                                Focus Areas
                                            </p>

                                            <div className="flex flex-wrap gap-1.5">
                                                {t.focus.map((f) => (
                                                    <span
                                                        key={f}
                                                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${CHIP_CLASS}`}
                                                    >
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── COMET Services for Schools ── */}

            <section id="schools" className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CenteredHeader
                        eyebrow="COMET Services for Schools"
                        title="Empowering Students. Strengthening Schools. Building Careers."
                        subtitle="COMET Services (eCOMET Foundation) is a non-profit initiative focused on helping students from remote and underserved communities access career guidance, mentoring, quality training, and opportunities that may otherwise be limited by geography or financial constraints. We believe talented students exist everywhere. With the right guidance, mentoring, discipline, and exposure, their potential can be transformed into meaningful career opportunities."
                    />

                    <div className="mt-8">
                        <p className="text-slate-700 font-semibold text-lg mb-6 text-center">
                            What We Offer Schools
                        </p>

                        <StaggerContainer
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            staggerDelay={0.07}
                        >
                            {schoolServices.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <StaggerItem key={service.title}>
                                        <div
                                            className={`${CONTAINER_CLASS} rounded-2xl p-6 flex gap-4 hover:shadow-md transition-shadow duration-300 h-full`}
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center shrink-0">
                                                <Icon className="w-5 h-5 text-green-800" />
                                            </div>

                                            <div>
                                                <h3 className="text-slate-800 font-bold text-base mb-2">
                                                    {service.title}
                                                </h3>

                                                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* ── COMET Mentorship Program ── */}

            <section id="mentorship" className="py-10 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`${CONTAINER_CLASS} rounded-2xl px-6 py-10 sm:px-10`}>
                        <ScrollReveal direction="up">
                            <div className="flex items-center gap-3 mb-4 justify-center">
                                <span className="h-px w-8 bg-green-700" />

                                <p className="text-green-800 text-xs font-semibold uppercase tracking-[0.2em]">
                                    COMET Mentorship Program
                                </p>

                                <span className="h-px w-8 bg-green-700" />
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 max-w-3xl mx-auto text-slate-800">
                                Mentoring from Class 5 Through Career
                            </h2>

                            <p className="text-slate-700 max-w-3xl mx-auto mb-4 leading-relaxed text-justify">
                                COMET is expanding its mentorship services
                                to school students, with{" "}
                                <Key>
                                    career guidance planned from Class 5
                                </Key>{" "}
                                onwards and preparation support for
                                competitive examinations for students
                                from Class 8 onwards.
                            </p>

                            <p className="text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed text-justify">
                                The program also focuses on essential life
                                and soft skills designed to support
                                students&apos; overall personal, academic,
                                and career development.
                            </p>
                        </ScrollReveal>

                        <div className="flex flex-wrap justify-center gap-3">
                            {mentorshipSkills.map((skill, i) => (
                                <ScrollReveal
                                    key={skill}
                                    delay={i * 0.05}
                                    direction="up"
                                >
                                    <span
                                        className={`text-sm font-medium px-4 py-2 rounded-full ${CHIP_CLASS}`}
                                    >
                                        {skill}
                                    </span>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Career Guidance & Mentorship ── */}

            <section
                id="career-guidance"
                className="py-10 bg-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <ScrollReveal direction="left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-8 bg-orange-500" />

                                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                                    Career Guidance & Mentorship
                                </p>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight text-slate-800">
                                What We Offer
                            </h2>

                            <p className="text-slate-600 leading-relaxed mb-5 text-justify">
                                The traditional education system in our
                                country does not consider career
                                development aspect in its curriculum.
                                Hence, career counselling services are
                                associated with expensive schools in
                                major cities only. COMET bridges this gap
                                by making{" "}
                                <Key>
                                    career guidance accessible to all
                                </Key>
                                .
                            </p>

                            <p className="text-slate-600 leading-relaxed text-justify">
                                The training covers both job-profile-oriented
                                skills and technology-based learning,
                                supported by professionals from the IT
                                industry.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <ul className="space-y-3">
                                {careerGuidanceOfferings.map(
                                    (item, i) => (
                                        <li
                                            key={i}
                                            className={`flex items-start gap-3 p-3 rounded-xl ${CONTAINER_CLASS}`}
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />

                                            <span className="text-slate-700 text-sm font-medium">
                                                {item}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── COMET Study Centre ── */}

            <section
                id="study-centre"
                className="py-10 bg-stone-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CenteredHeader
                        eyebrow="COMET Study Centre"
                        title="A Disciplined Environment for Learning, Mentoring & Career Growth"
                        subtitle="The COMET Study Centre (CSC) is an economical, residential e-Gurukul-style learning environment designed to help students build strong academic foundations, develop professional skills and work steadily toward their career goals. We believe that students can achieve greater career outcomes when they receive consistent mentoring, structured guidance and a focused study environment over two to three years."
                    />

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <ScrollReveal direction="left">
                            <div>
                                <h3 className="text-slate-800 font-bold text-xl mb-5">
                                    What the COMET Study Centre Offers
                                </h3>

                                <ul className="space-y-3">
                                    {studyCentreFeatures.map(
                                        (feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-1 w-5 h-5 rounded-full bg-green-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                                                    {i + 1}
                                                </span>

                                                <span className="text-slate-600 text-sm leading-relaxed text-justify">
                                                    {feature}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div
                                className={`${CONTAINER_CLASS} text-slate-700 rounded-2xl p-8 flex flex-col gap-5`}
                            >
                                <GraduationCap className="w-10 h-10 text-green-800" />

                                <div>
                                    <h3 className="font-bold text-xl mb-3 text-slate-800">
                                        More Than a Study Centre
                                    </h3>

                                    <p className="text-slate-700 leading-relaxed mb-4 text-justify">
                                        COMET Study Centre combines
                                        education, mentoring, discipline,
                                        technology and personality
                                        development in one structured
                                        environment.
                                    </p>

                                    <p className="text-slate-700 leading-relaxed text-justify">
                                        The objective is not simply to
                                        help students study better, but
                                        to help them develop the
                                        knowledge, confidence,
                                        communication skills and
                                        professional readiness needed
                                        to pursue their future careers.
                                    </p>
                                </div>

                                <div className="border-t border-green-200 pt-5">
                                    <p className="text-green-800 text-xs font-semibold uppercase tracking-widest mb-3">
                                        Our Vision
                                    </p>

                                    <p className="text-slate-800 font-semibold leading-relaxed text-justify">
                                        Create an environment where
                                        students can learn, grow, build
                                        confidence and prepare
                                        themselves for a successful
                                        career.
                                    </p>

                                    <p className="text-green-800 font-bold mt-3 text-sm">
                                        COMET Study Centre — Learn. Grow.
                                        Prepare. Succeed.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── Career Makeover ── */}

            <section
                id="career-makeover"
                className="py-10 bg-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CenteredHeader
                        eyebrow="Career Makeover"
                        title="Transforming Potential into Career Opportunities"
                        subtitle="COMET's Career Makeover initiative helps students overcome academic, financial, language and skill-related barriers and move confidently toward higher education and professional careers. Through a combination of technology training, communication skills, mentoring and career guidance, COMET helps students discover pathways that may otherwise seem out of reach."
                    />

                    <p className="text-center text-slate-600 font-semibold text-base mt-4 mb-6">
                        What COMET Helps Students Achieve
                    </p>

                    <StaggerContainer
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        staggerDelay={0.07}
                    >
                        {careerMakeoverPathways.map(
                            (pathway, i) => (
                                <StaggerItem key={i}>
                                    <div
                                        className={`${CONTAINER_CLASS} rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 h-full`}
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                                            <ArrowRight className="w-4 h-4 text-green-800" />
                                        </div>

                                        <h3 className="text-slate-800 font-bold text-base mb-2">
                                            {pathway.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            {pathway.description}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ),
                        )}
                    </StaggerContainer>

                    <ScrollReveal
                        direction="up"
                        className="mt-8"
                    >
                        <div
                            className={`${CONTAINER_CLASS} rounded-2xl p-6 max-w-3xl mx-auto`}
                        >
                            <p className="text-green-900 font-semibold text-base leading-relaxed text-justify">
                                Career Makeover is about helping
                                students move from uncertainty to
                                clarity, skills to confidence, and{" "}
                                <Key>
                                    education to employment opportunities
                                </Key>
                                .
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Adopt-A-School ── */}

            <section
                id="adopt-a-school"
                className="py-10 bg-stone-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <ScrollReveal direction="left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-8 bg-orange-500" />

                                <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
                                    Adopt-A-School
                                </p>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight text-slate-800">
                                Transforming Schools Together
                            </h2>

                            <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                                The future of a nation depends upon the
                                quality of education imparted to our
                                children. We believe that it is the joint
                                responsibility of the Government and
                                citizens to improve school education,
                                hence we have begun the process of
                                transforming underprivileged schools by
                                the active involvement of donors,
                                non-government organizations, and
                                corporate sectors through the
                                &ldquo;
                                <Key>
                                    COMET — Adopt-A-School Programme
                                </Key>
                                &rdquo;.
                            </p>

                            <p className="text-slate-600 leading-relaxed text-justify">
                                This program is an initiative to develop
                                partnerships between schools,
                                professionals, and organizations. The
                                focus of the program is on identifying
                                and solving problems that affect the
                                quality of education and is grounded in
                                the belief that government, corporates,
                                and individuals can all play a pivotal
                                role in accelerating student and school
                                success.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div
                                className={`${CONTAINER_CLASS} rounded-2xl p-8 text-slate-700`}
                            >
                                <Building2 className="w-10 h-10 text-green-800 mb-4" />

                                <h3 className="font-bold text-xl mb-4 text-slate-800">
                                    Program Focus
                                </h3>

                                <ul className="space-y-3">
                                    {[
                                        "Developing partnerships between schools, professionals, and organizations",
                                        "Identifying and solving problems affecting education quality",
                                        "Enabling government, corporates, and individuals to play a role",
                                        "Accelerating student and school success",
                                        "Technology access for remote schools",
                                        "Career mentoring for underserved students",
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />

                                            <span className="text-slate-700 text-sm text-justify">
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

            {/* ── Lending a Helping Hand ── */}

            <section id="support" className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CenteredHeader
                        eyebrow="Lending a Helping Hand"
                        title="Ways You Can Support"
                        subtitle="COMET works with schools, students and communities in underserved and remote areas to create access to education, technology, career guidance and professional opportunities. We invite government organizations, corporates, institutions and individuals to join us in creating meaningful opportunities for students who need them most."
                    />

                    <StaggerContainer
                        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        staggerDelay={0.06}
                    >
                        {supportWays.map((way, i) => (
                            <StaggerItem key={i}>
                                <div
                                    className={`${CONTAINER_CLASS} rounded-2xl p-6 hover:shadow-md transition-all duration-300 h-full`}
                                >
                                    <h3 className="text-slate-800 font-bold text-base mb-3">
                                        {way.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                        {way.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <ScrollReveal
                        direction="up"
                        className="mt-8"
                    >
                        <div
                            className={`${CONTAINER_CLASS} text-slate-700 rounded-2xl p-8 text-center max-w-3xl mx-auto`}
                        >
                            <p className="text-green-800 text-xs font-semibold uppercase tracking-widest mb-4">
                                Make a Direct Impact
                            </p>

                            <p className="text-slate-700 text-lg leading-relaxed mb-2 text-justify">
                                Your contribution can help a student
                                access a computer, complete a professional
                                course, attend a career workshop, pursue
                                higher education or take the first step
                                toward a career.
                            </p>

                            <p className="text-slate-600 mt-4 text-sm text-justify">
                                COMET believes that the{" "}
                                <Key>right support at the right time</Key>{" "}
                                can change a student&apos;s future.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal
                        direction="up"
                        className="mt-6"
                    >
                        <div
                            className={`${CONTAINER_CLASS} rounded-2xl p-6 max-w-3xl mx-auto`}
                        >
                            <p className="text-green-900 font-semibold text-sm mb-2">
                                Transparency & Engagement
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                We encourage supporters to see the impact
                                of their contributions firsthand. Donors
                                may visit supported schools or facilities,
                                meet students directly, and receive
                                updates, photographs and videos from
                                sponsored programs and events.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Change Leaders ── */}

            <section id="leaders" className="py-10 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CenteredHeader
                        eyebrow="Our Change Leaders"
                        title="People Behind the COMET Mission"
                        subtitle="COMET is driven by professionals and social leaders who combine industry experience, education, mentorship and a commitment to community development. Our Change Leaders bring decades of experience across the IT industry, education and social initiatives. Together, they work to create better career opportunities for students, support underserved communities and contribute to sustainable development."
                    />

                    <StaggerContainer
                        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                        staggerDelay={0.1}
                    >
                        {leaders.map((leader) => (
                            <StaggerItem key={leader.name}>
                                <div
                                    className={`${CONTAINER_CLASS} rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 flex flex-col gap-5 h-full`}
                                >
                                    {/* Identical size for every image */}
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                                        <Image
                                            src={leader.photo}
                                            alt={leader.name}
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 object-cover object-top border-0 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-slate-800 font-bold text-lg mb-1">
                                            {leader.name}
                                        </h3>

                                        <p className="text-green-800 text-xs font-semibold uppercase tracking-wide mb-4">
                                            {leader.role}
                                        </p>

                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            {leader.bio}
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── Go Back to Home ── */}

            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                    <Link
                        href={HOME_HREF}
                        className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-6 py-3 text-sm font-semibold text-green-900 hover:bg-green-100 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}