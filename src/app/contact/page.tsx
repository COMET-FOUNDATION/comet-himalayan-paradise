"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe,
  Video,
  Send,
  CheckCircle2,
} from "lucide-react";

const interests = [
  "Himalayan Trek",
  "Holiday Camp",
  "Wellness Retreat",
  "Wildlife Safari",
  "Cultural Experience",
  "Corporate Group",
  "School Trip",
  "Custom Itinerary",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    dates: "",
    groupSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80&auto=format&fit=crop"
          alt="Contact CHP Himalayan Paradise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Start Your Journey
          </h1>
          <p className="text-white/65 text-base max-w-md">
            Tell us your dream Himalayan experience and we&apos;ll design it for you. Free consultation, no commitment.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-slate-800 text-2xl font-bold mb-2">
                  We&apos;d Love to Hear from You
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Whether you&apos;re planning a solo trek, a family camp, a
                  corporate retreat, or a wellness escape — our team is here to
                  help you design the perfect Himalayan journey.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm mb-0.5">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-slate-600 text-sm hover:text-green-700 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm mb-0.5">Email</p>
                    <a
                      href="mailto:hello@chphimalayanparadise.com"
                      className="text-slate-600 text-sm hover:text-sky-600 transition-colors"
                    >
                      hello@chphimalayanparadise.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm mb-0.5">Location</p>
                    <p className="text-slate-600 text-sm">
                      Munsiyari, Pithoragarh,
                      <br />
                      Uttarakhand 262554, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-slate-700 font-semibold text-sm mb-3">
                  Follow Our Adventures
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: Share2, label: "Instagram", color: "hover:text-pink-500" },
                    { Icon: Globe, label: "Facebook", color: "hover:text-blue-600" },
                    { Icon: Video, label: "YouTube", color: "hover:text-red-500" },
                  ].map(({ Icon, label, color }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className={`w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 ${color} transition-colors`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-52 relative">
                <Image
                  src="https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=600&q=60&auto=format&fit=crop"
                  alt="Munsiyari location map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-900/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold text-sm">Munsiyari, Uttarakhand</p>
                    <p className="text-white/70 text-xs">2,200m above sea level</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-slate-800 text-xl font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                      Thank you for reaching out. Our team will respond within
                      24 hours with a personalised itinerary for your Himalayan journey.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-slate-800 text-xl font-bold mb-1">
                        Plan Your Journey
                      </h2>
                      <p className="text-slate-400 text-sm">
                        Fill in the details and we&apos;ll craft your perfect itinerary.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          placeholder="Your name"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-700 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          placeholder="your@email.com"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-700 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-700 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Group Size
                        </label>
                        <select
                          value={form.groupSize}
                          onChange={(e) => setForm((f) => ({ ...f, groupSize: e.target.value }))}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-700 transition-colors"
                        >
                          <option value="">Select size</option>
                          <option>Solo</option>
                          <option>2–4 people</option>
                          <option>5–10 people</option>
                          <option>11–20 people</option>
                          <option>20+ people</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2">
                        I&apos;m Interested In
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() =>
                              setForm((f) => ({
                                ...f,
                                interest: f.interest === item ? "" : item,
                              }))
                            }
                            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
                              form.interest === item
                                ? "bg-green-900 text-white border-green-900"
                                : "bg-white text-slate-600 border-slate-200 hover:border-green-900/30 hover:text-green-900"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Preferred Dates
                      </label>
                      <input
                        type="text"
                        value={form.dates}
                        onChange={(e) => setForm((f) => ({ ...f, dates: e.target.value }))}
                        placeholder="e.g. October 10–20, 2025 or flexible"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-700 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Your Message / Special Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        placeholder="Tell us about your dream Himalayan experience, fitness level, dietary needs, or anything else that helps us plan perfectly for you..."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-700 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-900 hover:bg-green-800 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-slate-400 text-xs text-center">
                      We respond within 24 hours · No spam · Your information is secure
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
