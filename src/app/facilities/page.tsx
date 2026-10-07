"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Laptop,
  Coffee,
  Mountain,
  CalendarDays,
  Heart,
  Leaf,
  BriefcaseBusiness,
} from "lucide-react";

const suitableFor = [
  "IT professionals",
  "Startup founders",
  "Entrepreneurs",
  "Consultants",
  "Freelancers",
  "Designers and creatives",
  "Digital professionals",
  "Teachers and educators",
  "Remote employees",
  "Independent professionals",
  "Professionals taking a workation",
];

const facilities = [
  "Comfortable accommodation",
  "Dedicated work-friendly spaces",
  "Reliable connectivity for everyday remote work",
  "Peaceful surroundings for focused work",
  "Meals and hospitality options",
  "Nature, fresh air and Himalayan landscapes",
  "Opportunities for local exploration after work",
  "Weekend treks, trails and Himalayan experiences",
  "Spaces for individuals, couples, friends and small teams",
];

const corporateOptions = [
  "Individual employees",
  "Small teams",
  "Star performers",
  "Project teams",
  "Remote employees",
  "Leadership teams",
  "Distributed teams",
  "Employee wellness programs",
  "Extended work retreats",
];

const teamActivities = [
  "Himalayan nature walks",
  "Treks and trails",
  "Adventure activities",
  "Campfire evenings",
  "Team-building activities",
  "Local village experiences",
  "Cultural experiences",
  "Wellness sessions",
  "Outdoor discussions",
  "Leadership retreats",
  "Weekend Himalayan excursions",
];

const whyWork = [
  [
    "A Change of Environment",
    "Move away from the noise and routine of the city and work in a natural Himalayan setting.",
  ],
  [
    "Continue Your Work",
    "Remote work does not mean taking time away from your responsibilities. Continue your regular work while changing your surroundings.",
  ],
  [
    "Space to Recharge",
    "Use the mountains, nature and slower surroundings to create space between work and everyday urban life.",
  ],
  [
    "Connect with People",
    "Meet fellow professionals, entrepreneurs, travellers and Himalayan communities.",
  ],
  [
    "Experience the Himalaya",
    "Your workday can end with a sunset, nature walk, campfire or Himalayan exploration.",
  ],
];

const workDay = [
  [
    "Morning",
    Mountain,
    "bg-green-50 text-green-700",
    "Wake up to the Himalayan landscape. Enjoy breakfast and begin your workday.",
  ],
  [
    "Work Hours",
    Laptop,
    "bg-blue-50 text-blue-700",
    "Settle into your work-friendly space and continue your regular meetings, calls and assignments.",
  ],
  [
    "Break Time",
    Coffee,
    "bg-amber-50 text-amber-700",
    "Step outside, enjoy the surroundings or take a short walk through the Himalayan landscape.",
  ],
  [
    "Evening",
    Heart,
    "bg-orange-50 text-orange-700",
    "When the workday ends, switch from work mode to Himalayan mode. Enjoy a campfire, local experiences, nature walks, village exploration or simply some quiet time.",
  ],
  [
    "Weekend",
    CalendarDays,
    "bg-violet-50 text-violet-700",
    "Use your weekend to explore the surrounding Himalaya through treks, trails and curated experiences.",
  ],
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-[11px]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-[0_6px_24px_rgba(15,23,42,0.045)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative mt-[72px] h-[430px] overflow-hidden sm:h-[470px] lg:h-[510px]">
        <Image
          src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/baa1b671-abe3-4bc1-b818-6cc9500327e8-chp-remote-work-himalayas-header.webp"
          alt="Remote work from the Himalayas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/35" />

        {/* HERO TEXT — MOVED UP BY 2.5CM */}
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl -translate-y-[2.5cm]"
          >
            <p className="mb-4 inline-flex rounded-full bg-green-900/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Remote Work
            </p>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Remote Work from
              <br />
              the Himalayas
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
              Work, live, connect, and recharge in a Himalayan environment
              designed for the modern remote professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 01 — WHITE */}
      <section className="border-b border-slate-200 bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Remote Work from Himalaya"
            title="Work from the Himalaya"
            description="Work. Stay. Breathe. Reconnect."
          />

          <div className="mx-auto mt-7 max-w-4xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              What if your next productive workweek came with{" "}
              <strong className="text-green-800">mountain views</strong>, fresh
              Himalayan air, peaceful surroundings and a completely different
              environment from the city?
            </p>

            <p>
              CHP is designed for professionals who want to maintain their{" "}
              <strong className="text-green-800">productivity</strong> while
              enjoying a change of environment. Employees and professionals can
              combine work and the Himalayan experience through a dedicated
              Remote Work from Himalaya program. Whether you are an employee
              looking for a refreshing place to work for a few days, or an
              employer looking to offer your team a meaningful
              work-from-anywhere benefit, CHP provides a practical environment
              where work and{" "}
              <strong className="text-green-800">Himalayan living</strong> can
              come together.
            </p>
          </div>

          <Card className="mx-auto mt-7 max-w-5xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              It can be suitable for:
            </h3>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {suitableFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-green-700" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* 02 — LIGHT GREY */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Employees & Remote Professionals"
            title="Make the Himalaya Your Temporary Workplace"
          />

          <Card className="mx-auto mt-7 max-w-4xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <div className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  Have you been working remotely from the same room, the same
                  city and the same <strong>routine</strong>?
                </p>

                <p>
                  Change the environment without putting your work on hold.
                  Spend a few days or weeks at CHP and continue working while
                  experiencing <strong>Himalayan life</strong>.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 03 — WHITE */}
      <section className="border-b border-slate-200 bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Remote Work Experience"
            title="A Typical Remote Work Day"
          />

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {workDay.map(([title, Icon, iconClass, text]) => {
              const IconComponent = Icon as React.ElementType;

              return (
                <Card key={title as string} className="p-5">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${iconClass as string}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {title as string}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text as string}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — LIGHT GREY */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-5xl p-6 sm:p-8 lg:p-9">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
              <Laptop className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Your Office Can Be in the Himalaya
            </h2>

            <div className="mt-4 max-w-4xl space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Remote work doesn't always have to mean working from your home.
                Take your laptop to the mountains and experience a different
                rhythm of working—quiet mornings, focused work hours, nature
                around you and the opportunity to explore the{" "}
                <strong className="text-green-800">
                  Himalaya after work
                </strong>
                .
              </p>

              <p>
                At CHP, you can stay in a comfortable Himalayan environment
                while continuing your regular{" "}
                <strong className="text-green-800">
                  professional responsibilities
                </strong>
                .
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* 05 — WHITE */}
      <section className="border-b border-slate-200 bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Remote Work Facilities"
            title="Designed for Remote Professionals"
          />

          <div className="mx-auto mt-7 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50/70 px-4 py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-[11px] font-bold text-green-800">
                  {index + 1}
                </span>

                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-lg font-bold text-green-900 sm:text-xl">
            Come for work. Stay for the Himalaya.
          </p>
        </div>
      </section>

      {/* 06 — LIGHT GREY */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Employers & Organizations"
            title="Give Your Employees the Opportunity to Work from the Himalaya"
          />

          <div className="mx-auto mt-7 max-w-4xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Remote and hybrid work has opened up new possibilities for
              employee <strong className="text-green-800">engagement</strong>.
              CHP can provide organizations with a destination where employees
              can work remotely while experiencing the Himalaya.
            </p>

            <p>
              Instead of limiting employee benefits to conventional rewards,
              organizations can offer a Himalayan remote-work experience as
              part of their employee engagement, wellness or{" "}
              <strong className="text-green-800">
                work-from-anywhere initiatives
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 07 — WHITE */}
      <section className="border-b border-slate-200 bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="A Corporate Remote Work Facility"
            description="Organizations can arrange Himalayan work stays for:"
          />

          <div className="mx-auto mt-7 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {corporateOptions.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-green-100 bg-green-50 px-4 py-4 text-center"
              >
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <Card className="mx-auto mt-6 max-w-5xl p-6 text-center sm:p-7">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              The program can be structured around the organization's
              requirements, including{" "}
              <strong className="text-green-800">
                accommodation, workspace, meals, connectivity
              </strong>{" "}
              and optional Himalayan experiences.
            </p>
          </Card>
        </div>
      </section>

      {/* 08 — LIGHT GREY */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <SectionHeading title="From Workation to Team Experience" />

          <Card className="mx-auto mt-7 max-w-4xl p-6 text-center sm:p-8">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              CHP can also combine remote work with team engagement, creating a
              simple rhythm:
            </p>

            <p className="mt-4 text-xl font-bold tracking-wide text-green-900 sm:text-2xl">
              Work → Connect → Explore → Recharge
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Employees can work during designated hours and participate in
              curated activities{" "}
              <strong className="text-green-800">outside work hours</strong>.
            </p>
          </Card>
        </div>
      </section>

      {/* 09 — WHITE */}
      <section className="border-b border-slate-200 bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading title="Possible Team Activities" />

          <div className="mx-auto mt-7 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {teamActivities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-4"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-green-700" />
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — LIGHT GREY */}
      <section className="bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading title="Why Work from CHP?" />

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {whyWork.map(([title, text]) => (
              <Card key={title} className="p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-700">
                  <Leaf className="h-4 w-4" />
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}