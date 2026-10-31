import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Play, Radio } from "lucide-react";
import { groundCategories } from "@/data/liveFromGround";
import "./live-from-ground.css";

export const metadata: Metadata = {
  title: "CHP — Live From The Ground",
  description:
    "Real stories and updates from the people, places and initiatives shaping Comet Himalayan Paradise.",
  alternates: { canonical: "https://www.thehimalayancamp.com/chp-live-from-the-ground" },
  openGraph: {
    title: "CHP — Live From The Ground",
    description:
      "Get closer to the people, places, progress and experiences shaping Comet Himalayan Paradise.",
    url: "https://www.thehimalayancamp.com/chp-live-from-the-ground",
    images: [
      {
        url: "https://www.thehimalayancamp.com/chp-social.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain cottages beneath the Himalayan peaks at sunset",
      },
    ],
  },
};

function VideoFrame({
  youtubeId,
  title,
  category,
}: {
  youtubeId: string;
  title: string;
  category: string;
}) {
  if (youtubeId.trim()) {
    return (
      <div className="ground-video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="ground-video-frame ground-video-empty" role="img" aria-label={`No video updates yet for ${category}`}>
      <div className="ground-empty-inner">
        <span className="ground-play-mark" aria-hidden="true"><Play size={20} fill="currentColor" /></span>
        <span className="ground-empty-kicker">FIELD NOTES · {category.toUpperCase()}</span>
        <span className="ground-empty-title">The next chapter is taking shape.</span>
        <span className="ground-empty-copy">Video updates will appear here as they are added.</span>
      </div>
      <span className="ground-frame-index">CHP / 00{groundCategories.findIndex((item) => item.title === category) + 1}</span>
    </div>
  );
}

export default function CHPLiveFromTheGroundPage() {
  const [featuredCategory, ...supportingCategories] = groundCategories;

  return (
    <div className="ground-page">
      <section className="ground-hero" aria-labelledby="ground-title">
        <div className="ground-hero-image" />
        <div className="ground-hero-shade" />
        <div className="ground-hero-grain" />
        <div className="ground-hero-content">
          <p className="ground-eyebrow"><span /> Beyond the brochure <i>·</i> inside CHP</p>
          <h1 id="ground-title">Live from<br /><em>the ground.</em></h1>
          <p className="ground-hero-copy">
            Get closer to the people, places, progress and experiences shaping Comet Himalayan Paradise.
            Real updates, straight from the ground.
          </p>
          <a href="#stories" className="ground-hero-cta">Explore the latest <ArrowDown size={15} /></a>
        </div>
        <div className="ground-hero-meta">
          <span><Radio size={13} /> CHP, as it happens</span>
          <span>Munsiyari · Uttarakhand</span>
        </div>
        <a className="ground-scroll" href="#stories" aria-label="Scroll to stories"><span /> Scroll to explore</a>
      </section>

      <section className="ground-stories" id="stories" aria-labelledby="stories-title">
        <div className="ground-section-head">
          <div>
            <p className="ground-eyebrow ground-eyebrow-dark">A living Himalayan ecosystem</p>
            <h2 id="stories-title">What&apos;s happening<br /><em>at CHP</em></h2>
          </div>
          <p className="ground-section-intro">The work, care and small moments behind a place still becoming. Explore stories from across the CHP ecosystem.</p>
        </div>

        <div className="ground-card-grid">
          {featuredCategory && (
            <CategoryCard category={featuredCategory} featured />
          )}
          <div className="ground-supporting-cards">
            {supportingCategories.map((category) => <CategoryCard key={category.slug} category={category} />)}
          </div>
        </div>
        <div className="ground-index-note"><span>01 — 03</span><span>Three threads. One shared home.</span></div>
      </section>

      <section className="ground-manifesto" aria-label="About the CHP ecosystem">
        <div className="ground-manifesto-image" />
        <div className="ground-manifesto-copy">
          <p className="ground-eyebrow">The bigger picture</p>
          <p className="ground-quote">“A place is made by the lives that <em>take root</em> there.”</p>
          <p>From building a mountain community to caring for animals and cultivating native plants, CHP is growing through many connected acts of care.</p>
        </div>
        <span className="ground-manifesto-caption">A view into the CHP landscape</span>
      </section>

      <section className="ground-updates" aria-labelledby="updates-title">
        <div className="ground-updates-heading">
          <p className="ground-eyebrow ground-eyebrow-dark">From the field</p>
          <h2 id="updates-title">Stories in<br /><em>progress.</em></h2>
          <p>Each initiative has its own rhythm. Choose a chapter to see the updates as they arrive.</p>
          <nav className="ground-category-nav" aria-label="Jump to a CHP category">
            {groundCategories.map((category) => (
              <a key={category.slug} href={`#updates-${category.slug}`}>
                <span>{category.id}</span>{category.title}<ArrowRight size={14} />
              </a>
            ))}
          </nav>
        </div>

        <div className="ground-update-list">
          {groundCategories.map((category) => (
            <article className="ground-update" id={`updates-${category.slug}`} key={category.slug}>
              <div className="ground-update-topline">
                <span className="ground-update-number">{category.id}</span>
                <div><p className="ground-eyebrow ground-eyebrow-dark">CHP journal · Chapter {category.id}</p><h3>{category.title}</h3></div>
                <span className="ground-update-status"><i /> Updates to come</span>
              </div>
              <div className="ground-update-content">
                <VideoFrame
                  youtubeId={category.updates.find((update) => update.featured)?.youtubeId ?? category.updates[0]?.youtubeId ?? ""}
                  title={category.updates.find((update) => update.featured)?.title ?? `${category.title} video updates`}
                  category={category.title}
                />
                <div className="ground-update-details">
                  {category.updates.length ? (
                    <>
                      {category.updates.map((update, index) => (
                        <div className="ground-video-detail" key={`${update.youtubeId}-${index}`}>
                          <div className="ground-video-meta"><span>{update.episode || `FIELD NOTE ${String(index + 1).padStart(2, "0")}`}</span><span>{update.publishedAt}</span></div>
                          <h4>{update.title}</h4>
                          <p>{update.description}</p>
                        </div>
                      ))}
                      {category.updates.length > 1 && <p className="ground-previous-count">{category.updates.length - 1} previous {category.updates.length === 2 ? "update" : "updates"}</p>}
                    </>
                  ) : (
                    <div className="ground-coming-soon">
                      <span className="ground-small-rule" />
                      <h4>Good things take ground.</h4>
                      <p>There are no video updates here yet. When a story is ready to share, you&apos;ll find it here.</p>
                      <span className="ground-no-updates">NO UPDATES PUBLISHED</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="ground-related-row">
                <span>Explore another chapter</span>
                {groundCategories.filter((other) => other.slug !== category.slug).map((other) => (
                  <a href={`#updates-${other.slug}`} key={other.slug}>{other.title}<ArrowUpRight size={12} /></a>
                ))}
                {/* relatedHref remains intentionally blank until destination URLs are supplied. */}
                {category.relatedHref && <Link href={category.relatedHref}>Discover CHP <ArrowUpRight size={12} /></Link>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="ground-closing">
        <p className="ground-eyebrow">Beyond a destination</p>
        <h2>Life is taking shape<br /><em>in the mountains.</em></h2>
        <p>Stay close to the journey. The next story begins on the ground.</p>
        <a href="#stories">Return to the stories <ArrowUpRight size={15} /></a>
      </footer>
    </div>
  );
}

function CategoryCard({ category, featured = false }: { category: (typeof groundCategories)[number]; featured?: boolean }) {
  const hasUpdates = category.updates.some((update) => update.youtubeId.trim());
  return (
    <a
      className={`ground-category-card${featured ? " ground-category-featured" : ""}`}
      href={`#updates-${category.slug}`}
      style={{ "--category-image": `url("${category.image}")` } as React.CSSProperties}
      aria-label={`Explore updates from ${category.title}`}
    >
      <div className="ground-card-image" />
      <div className="ground-card-shade" />
      <div className="ground-card-topline"><span>CHP JOURNAL / {category.id}</span><span className="ground-card-play" aria-hidden="true"><Play size={13} fill="currentColor" /></span></div>
      <div className="ground-card-copy">
        <span className="ground-card-count">{hasUpdates ? `${category.updates.length} FIELD NOTES` : "FIELD NOTES · SOON"}</span>
        <h3>{category.title}</h3>
        <p>{category.description}</p>
        <span className="ground-card-link">Explore updates <ArrowRight size={15} /></span>
      </div>
      <span className="ground-card-index">{category.id}</span>
    </a>
  );
}
