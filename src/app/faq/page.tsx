"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "What fitness level is required for the treks?",
    a: "We offer experiences for all fitness levels — from gentle 2-hour nature walks suitable for seniors and children to strenuous 10-day glacier expeditions requiring prior trekking experience. Each trek page clearly states the difficulty level and any prerequisites. Our guides will always assess your comfort level before any activity.",
  },
  {
    q: "What is included in a holiday camp package?",
    a: "Holiday camp packages typically include accommodation (choice of hotel, homestay, cottage, or tent), all meals (breakfast, lunch, dinner), guided activities, campfire evenings, a dedicated trek guide, safety equipment, and pickup & drop from the nearest major transport hub. Specific inclusions are listed on each camp's booking page.",
  },
  {
    q: "Are the programs suitable for children?",
    a: "Absolutely. We welcome children aged 5 and above. Programs are designed with age-appropriate activities — nature walks, farm visits, bird watching, and campfire activities are ideal for younger guests. We also offer family camps where every age group is catered for simultaneously.",
  },
  {
    q: "What is the best season to visit?",
    a: "The Kumaon Himalayas are accessible year-round with different experiences in each season. April–June is ideal for treks and wildflowers; July–September brings lush monsoon greenery (some high passes close); October–November offers crystal-clear views; December–March features snow at altitude. We can recommend the ideal season based on your interests.",
  },
  {
    q: "How do I reach Munsiyari / your base camp?",
    a: "Munsiyari is reachable by road from Kathgodam (the nearest railway head, ~270km) or Pithoragarh (~130km). The nearest airports are Pantnagar (~300km) and Naini Saini, Pithoragarh. We provide pickup & drop services and can assist with route planning from any major city.",
  },
  {
    q: "Can I customise my itinerary?",
    a: "Yes — customisation is at the heart of what we do. You can mix treks, wellness programs, cultural experiences, accommodation types, and activity levels. Tell us your dates, group size, interests, and budget, and we'll build your perfect Himalayan itinerary from scratch.",
  },
  {
    q: "What accommodation options are available?",
    a: "We offer five types of accommodation to suit all preferences: comfortable hotels, traditional homestays with local families, heritage houses, high-quality camping tents, and luxury cottages. Each type offers a distinct experience and can be chosen based on your budget and comfort preferences.",
  },
  {
    q: "Is solo travel supported?",
    a: "Yes, we warmly welcome solo travelers. You can join shared group departures to connect with like-minded adventurers, or book a private custom program. Solo travel in the Himalayas is one of the most enriching experiences, and our guides ensure you never feel alone.",
  },
  {
    q: "Can outsiders own plot/cottage in Uttarakhand?",
    a: "Any Indian can buy a plot/cottage within limit of 2700 sft land.",
  },
  {
    q: "Can outsiders buy bulk of land?",
    a: "Yes, but it must go through legal approval process via DM with proper justification. Here, land conversion procedures must be fulfilled during registration.",
  },
  {
    q: "Can we do booking and registration in single trip (without going for advance booking)?",
    a: "Yes, this will be possible after my registration is completed.",
  },
  {
    q: "How good in network connectivity in this location?",
    a: "Airtel and JIO network connectivity will be good in every selected location.",
  },
  {
    q: "Can plot owners go with their own designs and construction?",
    a: "We want to maintain the overall look of the community in sync; hence the cottage builders will give couple of options to the cottage owners to select from.",
  },
  {
    q: "Can cottage owner allow their relatives and friends for as long as they wish?",
    a: "Yes. However, because the association will bear all maintenance costs for cottages that have been approved for homestay, cottages should be allowed for a minimum homestay occupancy. If the cottage cannot be made available for homestay for any reason, the cottage owner must pay the agreed-upon monthly maintenance fees.",
  },
  {
    q: "How far are char Dham locations from here?",
    a: "It starts from 250 Km onward.",
  },
  {
    q: "How good is electricity supply in this area?",
    a: "Since NHPC Dhauli ganga hydro power station is located in same district so we have very good electricity services. We will also setup solar electric lights around the community fence.",
  },
  {
    q: "What are the plans for water supply to these cottages?",
    a: "All cottages will have 24X7 water supply. We are going to setup bore-well hand pump, with a central water system. Each cottage will have its own overhead tanks, which will get common water supply from central unit. Note: there is a government project for extending “Ghat drinking water scheme” to this area. The project is already approved, and work has started. Once this project is operational, we can also request for water supply via same project (if needed and agreed by cottage owners).",
  },
  {
    q: "How about grocery related availability and services?",
    a: "All grocery related items are available in nearest local market (Bungachhina). We will have common watchman who will be employed do basic watchman services. His services can be leveraged for such personal needs as well (with additional predefined service charges for such personal needs). We will maintain list of such additional personal services and charges per request/weekly/monthly basis.",
  },
  {
    q: "How is maintenance service going to be carried out?",
    a: "We have local electrician, plumber and other service providing personnel in these villages. For any problems, cottage owners will just need to inform watchman and he will get the services done from these local technicians. Common repairing will be association responsibility. If repairing is within cottage premise, service charges will need to be borne by the cottage owner. We will list out the prevailing charges for all such services in our portal, so that all such services are provided genuinely.",
  },
  {
    q: "Do we have car-rental services available for this location?",
    a: "Yes, watchman and security personal will have the local contact numbers with him. Cottage owners can let them for arrangements. Note: we will have all important service-related numbers maintained centrally in our portal, so that cottage owners/homestay users can directly avail the numbers if needed.",
  },
  {
    q: "What are the arrangements for food?",
    a: "After the first phase is finished, we'll design a central dining and conference area. A three-time meal option will be offered for a fee. Users of homestays won't have to pay for meals (it will be included in homestay charges). The menu will be standard. Any special requests must be made in addition.",
  },
  {
    q: "Will there be any planned event management/site-seeing activities from association?",
    a: "The list of such activities will be listed in portal. Once community grows to more than 25-30 cottages, we will plan to employ one event manager who will be responsible to provide this service in group.",
  },
  {
    q: "How safe is this place from flooding, glacier bursts and landslides?",
    a: "This place is very stable and has no historical instances of any such calamity. Flooding: the nearest river is appx 6-7 km away from here (Ram ganga) and the river flow appx 200-300 feet down, so no chances for any flooding. Landslides: the elevation of the land in this location is very even and the land is very stable, hence no chances for land slide. If there are any land slide reported in roads between this location for Pithoragarh or between Pithoragarh to Delhi, they are cleaned in 1-2 hours hence no impact to travel. Glacier Burst: we are 60-70 km away from nearest glaciers (Milam Glacier, Kafni glacier, Namik glacier) and the flow of rivers originating from these glaciers is in different direction, so this location cannot have any threats due to glacier burst as well.",
  },
  {
    q: "What type of land is this? Does it require land conversion for construction?",
    a: "The land here is categorized into forest land and farm land. Except forests, all lands fall in farm land category. No occupancy/construction of any kind is allowed in forest land. Anyone can occupy up to 2700 sft land and do construction for personal or homestay purpose in farm land. As long as this limit is maintained, it doesn't require any land conversion.",
  },
  {
    q: "How good is the road connectivity to this location?",
    a: "This location is directly accessible via car. 25 Km distance from Pithoragarh city can be covered in 45 minutes to 1 hour.",
  },
  {
    q: "Are OCI card holder eligible to own a plot/cottage?",
    a: "OCI card holders are not allowed to buy land in Uttarakhand.",
  },
  {
    q: "How is safety of these cottages going to be ensured when owners are not staying?",
    a: "We are going to appoint watchman and security personnel to take care of cottages 24X7.",
  },
  {
    q: "How about medical services?",
    a: "We have clinics and doctors first aid purpose in 2 near-by local markets (Bungachhina – 1.5 km and Dewalthal – 4 Km). For major needs, we need to go to the main city, Pithoragarh.",
  },
  {
    q: "Can we get home loan for this project?",
    a: "Yes, once plot is registered to plot owner name, home loan can be sanctioned for cottage construction.",
  },
  {
    q: "What common amenities are going to be provided by the Himalayan Paradise?",
    a: "Security fencing, fencing lights, security personnel, watchman service, gardener service, watchman can be leveraged for any personal help as well (on paid basis).",
  },
  {
    q: "How much open area will there be there?",
    a: "Garden area, open lawn for campfire activity, breakout area for tea/snacks, one common conference/work location, car parking area within 100-meter distance from the community, and one common community hall for all 2-3 communities, for any social gathering and event management.",
  },
  {
    q: "How will the common open area be protected against any misuse or construction in future?",
    a: "Once we have 10+ cottages constructed, we will form an association, with all plot owners and the cottage owners as member of the association. The open common area will be registered to the association name, to keep it safe from any possible construction in future.",
  },
  {
    q: "Are there any timelines registration and construction of cottages?",
    a: "Plot should be registered within 1 year after booking. If not registered, plot rates will be revised as per the market condition. Once registered, construction should be started within 1 year. If not constructed, monthly maintenance will be applicable on those plots also.",
  },
  {
    q: "How are we ensuring security of the advance booking amount?",
    a: "Himalayan Paradise LLP company is registered. Once registration is complete, we will have escrow account in the company name and all advance booking amount can be paid to the escrow account. It will be transferred to my account during registration time.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800 text-base group-hover:text-green-900 transition-colors leading-snug">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-slate-100 group-hover:bg-green-900/10 flex items-center justify-center text-slate-500 group-hover:text-green-900 transition-all mt-0.5">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-600 text-sm leading-relaxed pb-5 pr-11">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions & Answers"
            subtitle="Everything you need to know before booking your Himalayan journey."
          />

          <div className="mt-12">
            {faqs.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}