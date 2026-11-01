import { getTrekBookingHref } from "@/lib/trekBooking";
import { MultipleTreksNotice } from "@/components/treks/MultipleTreksNotice";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { treks, getTrekBySlug } from "@/data/treks";
import { Clock, MapPin, TrendingUp, Calendar, ArrowLeft, CheckCircle2 } from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";
import { VillageHeritageTrekDetail } from "./VillageHeritageTrekDetail";
import { BirdWatchingTrekDetail } from "./BirdWatchingTrekDetail";
import { ForestEcosystemTrekDetail } from "./ForestEcosystemTrekDetail";
import { GaushalaMedicineFarmTrekDetail } from "./GaushalaMedicineFarmTrekDetail";
import { MountainCyclingTrekDetail } from "./MountainCyclingTrekDetail";
import { RamGangaRiverCampingTrekDetail } from "./RamGangaRiverCampingTrekDetail";
import { NightJungleSafariDetail } from "./NightJungleSafariDetail";
import { ChandikaGhatTrekDetail } from "./ChandikaGhatTrekDetail";
import { KapileshwarMahadevTrekDetail } from "./KapileshwarMahadevTrekDetail";
import { KotviDeviCaveTrekDetail } from "./KotviDeviCaveTrekDetail";
import { ThalkedarTrekDetail } from "./ThalkedarTrekDetail";
import { DhwajTempleTrekDetail } from "./DhwajTempleTrekDetail";
import { KhaliaTopTrekDetail } from "./KhaliaTopTrekDetail";
import { MilamGlacierTrekDetail } from "./MilamGlacierTrekDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  treks.forEach((t) => {
    params.push({ slug: t.slug });
    if (t.aliases) {
      t.aliases.forEach((alias) => params.push({ slug: alias }));
    }
  });
  return params;
}

const BASE_URL = "https://comet-himalayan-paradise.vercel.app";
const VILLAGE_HERITAGE_TREK_ID = "village-heritage-and-nature-walk";
const VILLAGE_HERITAGE_TITLE = "Village Heritage Tour & Nature Walk";
const VILLAGE_HERITAGE_DESCRIPTION =
  "Explore the authentic Himalayan lifestyle through traditional Kumaoni villages, heritage homes, local food, indigenous knowledge and peaceful nature trails.";
const BIRD_WATCHING_TREK_ID = "bird-watching-and-crop-discovery-walk";
const BIRD_WATCHING_TITLE = "Bird Watching & Crop Discovery Walk";
const BIRD_WATCHING_DESCRIPTION =
  "Discover Himalayan birds, native crops and the rich biodiversity of mountain landscapes on a guided walk through traditional fields and natural habitats.";
const FOREST_ECOSYSTEM_TREK_ID =
  "forest-ecosystem-discovery-and-herbal-medicine-trail";
const FOREST_ECOSYSTEM_TITLE =
  "Forest Ecosystem Discovery and Herbal Medicine Trail";
const FOREST_ECOSYSTEM_DESCRIPTION =
  "Explore the rich Himalayan forest ecosystem through guided nature trails, indigenous medicinal plants, aromatic herbs and traditional knowledge of local communities. Discover the interconnected world of forest flora, wildlife habitats and natural healing resources.";
const GAUSHALA_TREK_ID = "gaushala-and-medicine-farm-visit";
const GAUSHALA_TITLE = "Gaushala and Medicine Farm Visit";
const GAUSHALA_DESCRIPTION =
  "Experience the traditional Himalayan farming lifestyle through a guided visit to a local Gaushala and medicinal plant farm. Discover indigenous cattle breeds, traditional dairy practices, Himalayan herbs, medicinal plants and sustainable mountain agriculture.";
const MOUNTAIN_CYCLING_TREK_ID = "mountain-cycling";
const MOUNTAIN_CYCLING_TITLE = "Mountain Cycling";
const MOUNTAIN_CYCLING_DESCRIPTION =
  "Experience the thrill of cycling through the beautiful Himalayan countryside. Explore winding mountain roads, traditional villages, pine forests and breathtaking viewpoints while enjoying an active outdoor adventure.";
const RAM_GANGA_RIVER_CAMPING_TREK_ID = "ram-ganga-river-camping";
const RAM_GANGA_RIVER_CAMPING_TITLE = "Ram Ganga River Camping";
const RAM_GANGA_RIVER_CAMPING_DESCRIPTION =
  "Experience the beauty of the Ram Ganga River through an immersive riverside camping experience. Enjoy scenic mountain surroundings, riverside relaxation, outdoor activities, bonfire evenings and the peaceful charm of Himalayan nature.";
const NIGHT_JUNGLE_SAFARI_TREK_ID = "night-jungle-safari";
const NIGHT_JUNGLE_SAFARI_TITLE = "Night Jungle Safari";
const NIGHT_JUNGLE_SAFARI_DESCRIPTION =
  "Explore Himalayan forest trails after dark with a local nature guide. Discover nocturnal wildlife, forest sounds, night sky observation and the hidden activities of the jungle.";
const CHANDIKA_GHAT_TREK_ID = "chandika-ghat-trek";
const CHANDIKA_GHAT_TREK_TITLE = "Chandika Ghat Trek";
const CHANDIKA_GHAT_TREK_DESCRIPTION =
  "Discover the natural beauty and spiritual charm of Chandika Ghat on a scenic Himalayan trek through peaceful mountain trails and surrounding forests, connecting with local traditions and spiritual heritage.";
const KAPILESHWAR_MAHADEV_TREK_ID = "kapileshwar-mahadev-cave-temple-trek";
const KAPILESHWAR_MAHADEV_TREK_TITLE = "Kapileshwar Mahadev Cave Temple Trek";
const KAPILESHWAR_MAHADEV_TREK_DESCRIPTION =
  "Discover the spiritual and natural beauty of Kapileshwar Mahadev Cave Temple. Explore the sacred cave shrine dedicated to Lord Shiva, scenic mountain trails and the peaceful surrounding forests and Himalayan landscapes.";
const KOTVI_DEVI_TREK_ID = "kotvi-devi-cave-temple-trail";
const KOTVI_DEVI_TREK_TITLE = "Kotvi Devi Cave Temple Trek";
const KOTVI_DEVI_TREK_DESCRIPTION =
  "Experience a combination of spirituality, nature and adventure at Kotvi Devi Cave Temple. Explore the natural cave surroundings and spiritual significance of this sacred destination in the beautiful Himalayan landscape.";
const THALKEDAR_TREK_ID = "thalkedar-trek";
const THALKEDAR_TREK_TITLE = "Thalkedar Trek";
const THALKEDAR_TREK_DESCRIPTION =
  "Discover the spiritual and natural beauty of Thalkedar. Explore a scenic mountain route, panoramic Himalayan views and the sacred Thalkedar Mahadev Temple surrounded by peaceful forests and landscapes.";
const DHWAJ_TEMPLE_TREK_ID = "dhwaj-temple-trek";
const DHWAJ_TEMPLE_TREK_TITLE = "Dhwaj Temple Trek";
const DHWAJ_TEMPLE_TREK_DESCRIPTION =
  "Discover the spiritual and natural beauty of Dhwaj Temple in the mountains of Pithoragarh, with forest trails, Himalayan views, spiritual exploration and a peaceful connection with nature.";
const KHALIA_TOP_TREK_ID = "khalia-top-trek";
const KHALIA_TOP_TREK_TITLE = "Khalia Top Trek";
const KHALIA_TOP_TREK_DESCRIPTION =
  "Experience the spectacular beauty of the Himalayas near Munsiyari. Walk through dense forests, alpine meadows and mountain trails with views of the Panchachuli peaks and surrounding Himalayan ranges.";
const MILAM_GLACIER_TREK_ID = "milam-glacier-trek";
const MILAM_GLACIER_TREK_TITLE = "Milam Glacier Trek";
const MILAM_GLACIER_TREK_DESCRIPTION =
  "Trek through remote mountain villages, dramatic valleys, pristine rivers and rugged Himalayan terrain to Milam Glacier, with mountain views and the natural and cultural heritage of the Kumaon Himalayas.";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);
  if (!trek) return {};
  if (trek.id === VILLAGE_HERITAGE_TREK_ID) {
    return {
      title: VILLAGE_HERITAGE_TITLE,
      description: VILLAGE_HERITAGE_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${VILLAGE_HERITAGE_TITLE} | CHP Himalayan Paradise`,
        description: VILLAGE_HERITAGE_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: trek.image, alt: VILLAGE_HERITAGE_TITLE }],
      },
    };
  }
  if (trek.id === BIRD_WATCHING_TREK_ID) {
    return {
      title: BIRD_WATCHING_TITLE,
      description: BIRD_WATCHING_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${BIRD_WATCHING_TITLE} | CHP Himalayan Paradise`,
        description: BIRD_WATCHING_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: trek.image, alt: BIRD_WATCHING_TITLE }],
      },
    };
  }
  if (trek.id === FOREST_ECOSYSTEM_TREK_ID) {
    return {
      title: FOREST_ECOSYSTEM_TITLE,
      description: FOREST_ECOSYSTEM_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${FOREST_ECOSYSTEM_TITLE} | CHP Himalayan Paradise`,
        description: FOREST_ECOSYSTEM_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: trek.image, alt: FOREST_ECOSYSTEM_TITLE }],
      },
    };
  }
  if (trek.id === GAUSHALA_TREK_ID) {
    return {
      title: GAUSHALA_TITLE,
      description: GAUSHALA_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${GAUSHALA_TITLE} | CHP Himalayan Paradise`,
        description: GAUSHALA_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: trek.image, alt: GAUSHALA_TITLE }],
      },
    };
  }
  if (trek.id === MOUNTAIN_CYCLING_TREK_ID) {
    return {
      title: MOUNTAIN_CYCLING_TITLE,
      description: MOUNTAIN_CYCLING_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${MOUNTAIN_CYCLING_TITLE} | CHP Himalayan Paradise`,
        description: MOUNTAIN_CYCLING_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: trek.image, alt: MOUNTAIN_CYCLING_TITLE }],
      },
    };
  }
  if (trek.id === RAM_GANGA_RIVER_CAMPING_TREK_ID) {
    return {
      title: RAM_GANGA_RIVER_CAMPING_TITLE,
      description: RAM_GANGA_RIVER_CAMPING_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${RAM_GANGA_RIVER_CAMPING_TITLE} | CHP Himalayan Paradise`,
        description: RAM_GANGA_RIVER_CAMPING_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [
          {
            url: `${BASE_URL}/images/treks/ram-ganga-river-camping-hero.webp`,
            alt: RAM_GANGA_RIVER_CAMPING_TITLE,
          },
        ],
      },
    };
  }
  if (trek.id === NIGHT_JUNGLE_SAFARI_TREK_ID) {
    return {
      title: NIGHT_JUNGLE_SAFARI_TITLE,
      description: NIGHT_JUNGLE_SAFARI_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${NIGHT_JUNGLE_SAFARI_TITLE} | CHP Himalayan Paradise`,
        description: NIGHT_JUNGLE_SAFARI_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: "/images/treks/night-jungle-forest.webp", alt: NIGHT_JUNGLE_SAFARI_TITLE }],
      },
    };
  }
  if (trek.id === CHANDIKA_GHAT_TREK_ID) {
    return {
      title: CHANDIKA_GHAT_TREK_TITLE,
      description: CHANDIKA_GHAT_TREK_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${CHANDIKA_GHAT_TREK_TITLE} | CHP Himalayan Paradise`,
        description: CHANDIKA_GHAT_TREK_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: "/images/treks/chandika-ghat-trek.webp", alt: CHANDIKA_GHAT_TREK_TITLE }],
      },
    };
  }
  if (trek.id === KAPILESHWAR_MAHADEV_TREK_ID) {
    return {
      title: KAPILESHWAR_MAHADEV_TREK_TITLE,
      description: KAPILESHWAR_MAHADEV_TREK_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${KAPILESHWAR_MAHADEV_TREK_TITLE} | CHP Himalayan Paradise`,
        description: KAPILESHWAR_MAHADEV_TREK_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: "/images/treks/kapileshwar-mahadev-cave-temple.webp", alt: KAPILESHWAR_MAHADEV_TREK_TITLE }],
      },
    };
  }
  if (trek.id === KOTVI_DEVI_TREK_ID) {
    return {
      title: KOTVI_DEVI_TREK_TITLE,
      description: KOTVI_DEVI_TREK_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${KOTVI_DEVI_TREK_TITLE} | CHP Himalayan Paradise`,
        description: KOTVI_DEVI_TREK_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: "/images/treks/kotvi-devi-cave-temple.webp", alt: KOTVI_DEVI_TREK_TITLE }],
      },
    };
  }
  if (trek.id === THALKEDAR_TREK_ID) {
    return {
      title: THALKEDAR_TREK_TITLE,
      description: THALKEDAR_TREK_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${THALKEDAR_TREK_TITLE} | CHP Himalayan Paradise`,
        description: THALKEDAR_TREK_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: "/images/treks/thalkedar-trek.webp", alt: THALKEDAR_TREK_TITLE }],
      },
    };
  }
  if (trek.id === DHWAJ_TEMPLE_TREK_ID) {
    return {
      title: DHWAJ_TEMPLE_TREK_TITLE,
      description: DHWAJ_TEMPLE_TREK_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${DHWAJ_TEMPLE_TREK_TITLE} | CHP Himalayan Paradise`,
        description: DHWAJ_TEMPLE_TREK_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: "/images/treks/dhwaj-temple-trek.webp", alt: DHWAJ_TEMPLE_TREK_TITLE }],
      },
    };
  }
  if (trek.id === KHALIA_TOP_TREK_ID) {
    return {
      title: KHALIA_TOP_TREK_TITLE,
      description: KHALIA_TOP_TREK_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${KHALIA_TOP_TREK_TITLE} | CHP Himalayan Paradise`,
        description: KHALIA_TOP_TREK_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: "/images/treks/khalia-top-trek.webp", alt: KHALIA_TOP_TREK_TITLE }],
      },
    };
  }
  if (trek.id === MILAM_GLACIER_TREK_ID) {
    return {
      title: MILAM_GLACIER_TREK_TITLE,
      description: MILAM_GLACIER_TREK_DESCRIPTION,
      alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
      openGraph: {
        title: `${MILAM_GLACIER_TREK_TITLE} | CHP Himalayan Paradise`,
        description: MILAM_GLACIER_TREK_DESCRIPTION,
        url: `${BASE_URL}/treks/${trek.slug}`,
        images: [{ url: "/images/treks/milam-glacier-trek.webp", alt: MILAM_GLACIER_TREK_TITLE }],
      },
    };
  }
  return {
    title: trek.name,
    description: `${trek.description.slice(0, 155)}...`,
    alternates: { canonical: `${BASE_URL}/treks/${trek.slug}` },
    openGraph: {
      title: `${trek.name} | CHP Himalayan Paradise`,
      description: trek.description.slice(0, 155),
      url: `${BASE_URL}/treks/${trek.slug}`,
      images: [{ url: trek.image, width: 1200, height: 630, alt: trek.name }],
    },
  };
}

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-sky-100 text-sky-700",
  Challenging: "bg-amber-100 text-amber-700",
  Strenuous: "bg-red-100 text-red-700",
};

export default async function TrekDetailPage({ params }: Props) {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);
  if (!trek) notFound();
  if (trek.id === VILLAGE_HERITAGE_TREK_ID) {
    return <VillageHeritageTrekDetail trek={trek} />;
  }
  if (trek.id === BIRD_WATCHING_TREK_ID) {
    return <BirdWatchingTrekDetail trek={trek} />;
  }
  if (trek.id === FOREST_ECOSYSTEM_TREK_ID) {
    return <ForestEcosystemTrekDetail trek={trek} />;
  }
  if (trek.id === GAUSHALA_TREK_ID) {
    return <GaushalaMedicineFarmTrekDetail trek={trek} />;
  }
  if (trek.id === MOUNTAIN_CYCLING_TREK_ID) {
    return <MountainCyclingTrekDetail trek={trek} />;
  }
  if (trek.id === RAM_GANGA_RIVER_CAMPING_TREK_ID) {
    return <RamGangaRiverCampingTrekDetail />;
  }
  if (trek.id === NIGHT_JUNGLE_SAFARI_TREK_ID) {
    return <NightJungleSafariDetail trek={trek} />;
  }
  if (trek.id === CHANDIKA_GHAT_TREK_ID) {
    return <ChandikaGhatTrekDetail trek={trek} />;
  }
  if (trek.id === KAPILESHWAR_MAHADEV_TREK_ID) {
    return <KapileshwarMahadevTrekDetail trek={trek} />;
  }
  if (trek.id === KOTVI_DEVI_TREK_ID) {
    return <KotviDeviCaveTrekDetail trek={trek} />;
  }
  if (trek.id === THALKEDAR_TREK_ID) {
    return <ThalkedarTrekDetail trek={trek} />;
  }
  if (trek.id === DHWAJ_TEMPLE_TREK_ID) {
    return <DhwajTempleTrekDetail trek={trek} />;
  }
  if (trek.id === KHALIA_TOP_TREK_ID) {
    return <KhaliaTopTrekDetail trek={trek} />;
  }
  if (trek.id === MILAM_GLACIER_TREK_ID) {
    return <MilamGlacierTrekDetail trek={trek} />;
  }

  const heroImage =
    trek.id === "adi-kailash-om-parvat-trek"
      ? "/images/treks/adi-kailash-om-parvat-hero.jpg"
      : trek.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trek.name,
    description: trek.description,
    url: `${BASE_URL}/treks/${trek.slug}`,
    image: trek.image,
    touristType: trek.difficulty,
    itinerary: {
      "@type": "ItemList",
      itemListElement: (trek.itinerary ?? []).map((day, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: day.title,
        description: day.description,
      })),
    },
    provider: {
      "@type": "TravelAgency",
      name: "CHP Himalayan Paradise",
      url: BASE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src={heroImage}
          alt={
            trek.id === "adi-kailash-om-parvat-trek"
              ? "Om Parvat in Uttarakhand"
              : trek.name
          }
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {trek.id === "adi-kailash-om-parvat-trek" && (
          <a
            href="https://commons.wikimedia.org/wiki/File:Om_parvat,_uttarakhand.jpg"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-2 right-3 z-10 text-xs text-white/75 underline underline-offset-2 hover:text-white"
          >
            Photo: Sujithshivam511 / Wikimedia Commons (cropped, CC BY-SA 4.0)
          </a>
        )}

        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link
            href="/treks"
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 w-fit transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Treks
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${difficultyColor[trek.difficulty]}`}
            >
              {trek.difficulty}
            </span>
            {trek.isPopular && (
              <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Popular
              </span>
            )}
          </div>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            {trek.name}
          </h1>
          <p className="text-white/70 text-lg">{trek.tagline}</p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Clock className="w-4 h-4 text-green-700" />
              <span>{trek.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <MapPin className="w-4 h-4 text-green-700" />
              <span>{trek.location}</span>
            </div>
            {trek.maxAltitude && (
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <TrendingUp className="w-4 h-4 text-green-700" />
                <span>Max altitude: {trek.maxAltitude}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Calendar className="w-4 h-4 text-green-700" />
              <span>{trek.bestSeason}</span>
            </div>
            {trek.distance && (
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="font-semibold text-green-700">~</span>
                <span>{trek.distance}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-slate-800 text-2xl font-bold mb-4">About This Trek</h2>
                <p className="text-slate-600 leading-relaxed text-base">{trek.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-slate-800 text-2xl font-bold mb-5">Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trek.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              {trek.itinerary && trek.itinerary.length > 0 && (
                <div>
                  <h2 className="text-slate-800 text-2xl font-bold mb-5">Itinerary</h2>
                  <div className="relative pl-6 border-l-2 border-green-900/20 space-y-6">
                    {trek.itinerary.map((day, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[25px] w-5 h-5 rounded-full bg-green-900 border-2 border-white shadow" />
                        <p className="text-green-700 font-semibold text-xs uppercase tracking-wider mb-1">
                          {day.day}
                        </p>
                        <h3 className="text-slate-800 font-semibold text-base mb-1.5">
                          {day.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar — Booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  Book This Trek
                </p>
                <h3 className="text-slate-800 font-bold text-xl mb-5">
                  {trek.name}
                </h3>

                <div className="space-y-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Duration</span>
                    <span className="font-medium text-slate-800">{trek.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Difficulty</span>
                    <span className="font-medium text-slate-800">{trek.difficulty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Best Season</span>
                    <span className="font-medium text-slate-800">{trek.bestSeason}</span>
                  </div>
                  {trek.maxAltitude && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Max Altitude</span>
                      <span className="font-medium text-slate-800">{trek.maxAltitude}</span>
                    </div>
                  )}
                </div>

                <MultipleTreksNotice />
                <Link
                  href={getTrekBookingHref(trek.id)}
                  className="w-full block text-center bg-green-900 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl transition-colors mb-3"
                >
                  Book This Trek
                </Link>
                <Link
                  href="/contact"
                  className="w-full block text-center border border-green-900/20 text-green-900 font-semibold py-3.5 rounded-xl hover:bg-green-900/5 transition-colors text-sm"
                >
                  Request Custom Itinerary
                </Link>

                <p className="text-slate-400 text-xs text-center mt-4">
                  Free consultation · No booking fee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
