import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Building2,
  Globe,
  Award,
  Megaphone,
  Handshake,
  Shield,
  Clock,
  Mail,
  Briefcase,
  Target,
  BarChart3,
  Newspaper,
  Tv,
  Share2,
} from "lucide-react";
import {
  STATS,
  CLIENTS,
  EXPERTISE_ITEMS,
  FEATURES,
  CAREER_PERKS,
  PRINT_MEDIA,
  DIGITAL_TV_MEDIA,
  SOCIAL_MEDIA,
} from "@/lib/data";

const HERO_PILLS = [
  "Corporate Events",
  "Government Programs",
  "Conferences",
  "Exhibitions",
  "Large-Scale Execution",
];

const EXPERTISE_ICONS = [Calendar, Building2, Globe, Award, Handshake, Megaphone];
const FEATURE_ICONS = [Target, Briefcase, BarChart3, Megaphone, Shield, Clock];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

type MediaTab = "print" | "digital" | "social";

const MEDIA_TABS: { key: MediaTab; label: string; icon: typeof Newspaper }[] = [
  { key: "print", label: "Print Media", icon: Newspaper },
  { key: "digital", label: "Digital & TV", icon: Tv },
  { key: "social", label: "Social Media", icon: Share2 },
];

const MEDIA_DATA: Record<MediaTab, string[]> = {
  print: PRINT_MEDIA,
  digital: DIGITAL_TV_MEDIA,
  social: SOCIAL_MEDIA,
};

/* Small gold decorative dash used above section headings */
function SectionDash() {
  return (
    <div className="flex justify-center mb-6">
      <div className="w-10 h-[3px] bg-secondary rounded-full" />
    </div>
  );
}

export default function Home() {
  const [activeMediaTab, setActiveMediaTab] = useState<MediaTab>("print");

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section
        className="relative overflow-hidden bg-primary"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        {/* Layer 1: Background image faded */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-stage.jpg"
            alt="Grand Corporate Event"
            className="w-full h-full object-cover object-center opacity-25"
          />
          {/* Layer 2: Directional gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, hsl(224 62% 15%) 0%, hsl(224 62% 15% / 0.9) 40%, hsl(224 62% 15% / 0.5) 100%)",
            }}
          />
        </div>

        {/* Layer 3: Animated floating gold glow (top-right) */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(44 54% 54% / 0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Layer 4: Animated floating blue glow (bottom-left) */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(224 62% 35% / 0.3) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Layer 5: Subtle grid line texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(44 54% 54% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(44 54% 54% / 0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="relative z-10 flex flex-col items-start justify-center mx-auto px-6 md:px-12"
          style={{ maxWidth: "80rem", minHeight: "calc(100vh - 4rem)" }}
        >
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {HERO_PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/20 text-white/60 text-[10px] uppercase tracking-widest px-4 py-1.5"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Delivering{" "}
            <span className="text-secondary">Excellence</span> in
            <br />
            Event Management
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-white/70 leading-relaxed mb-10"
            style={{ maxWidth: "32rem" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            RV Events &amp; Entertainment Pvt. Ltd. specializes in conceptualizing,
            planning, and executing high-impact corporate, government, and
            institutional events across India and international markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-secondary/90 font-semibold text-sm px-8 py-3.5 transition-colors"
            >
              Request Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* View our Work link - bottom right */}
          <motion.div
            className="absolute bottom-8 right-6 md:right-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-white/60 hover:text-white text-xs transition-colors"
            >
              View our Work <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────── Stats ───────── */}
      <section className="bg-white py-16">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "80rem" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`text-center ${i < STATS.length - 1 ? "md:border-r md:border-border" : ""}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-4xl font-serif font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── About Preview ───────── */}
      <section className="bg-muted py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "80rem" }}>
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6"
            {...fadeUp}
          >
            Building Experiences Through Strategy, Precision &amp; Execution
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            style={{ maxWidth: "48rem" }}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            RV Events &amp; Entertainment Pvt. Ltd. is a professionally managed event
            solutions company with over a decade of expertise in delivering high-impact
            events. From concept creation to final execution, we provide complete event
            management solutions with strong operational capabilities, experienced teams,
            and reliable industry partnerships.
          </motion.p>
        </div>
      </section>

      {/* ───────── Our Expertise ───────── */}
      <section className="bg-white py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "80rem" }}>
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-primary"
              {...fadeUp}
            >
              Our Expertise
            </motion.h2>
            <motion.div {...fadeUp} className="hidden md:flex">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-primary font-medium hover:text-secondary transition-colors text-sm"
              >
                All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_ITEMS.map((item, i) => {
              const Icon = EXPERTISE_ICONS[i % EXPERTISE_ICONS.length];
              return (
                <motion.div
                  key={item.title}
                  className="bg-muted p-8 group"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif font-semibold text-primary text-lg mb-2">
                    {item.title}
                  </h3>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Clients & Partners ───────── */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="mx-auto px-6 md:px-12 text-center mb-10" style={{ maxWidth: "80rem" }}>
          <SectionDash />
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3"
            {...fadeUp}
          >
            Our Clients &amp; Partners
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-sm mx-auto"
            style={{ maxWidth: "32rem" }}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trusted by India&rsquo;s most recognised corporations, institutions,
            and global brands.
          </motion.p>
        </div>

        {/* Two-row marquee */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track">
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div
                  key={`r1-${client.name}-${i}`}
                  className="flex items-center justify-center bg-white rounded border border-border"
                  style={{ width: 150, height: 70, padding: 10, flexShrink: 0 }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="marquee-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 - reverse direction */}
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track" style={{ animationDirection: "reverse" }}>
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div
                  key={`r2-${client.name}-${i}`}
                  className="flex items-center justify-center bg-white rounded border border-border"
                  style={{ width: 150, height: 70, padding: 10, flexShrink: 0 }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="marquee-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Media Partnerships ───────── */}
      <section className="bg-muted py-20 text-center">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "80rem" }}>
          <SectionDash />
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3"
            {...fadeUp}
          >
            Media Partnerships
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-sm mb-10 mx-auto"
            style={{ maxWidth: "36rem" }}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Strategic media collaborations across print, digital, and social
            platforms — ensuring maximum reach and credibility for every event
            we execute.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {MEDIA_TABS.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveMediaTab(tab.key)}
                  className={`inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeMediaTab === tab.key
                      ? "bg-secondary text-primary"
                      : "border border-border text-muted-foreground hover:text-primary"
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {MEDIA_DATA[activeMediaTab].map((name) => (
              <div
                key={name}
                className="border border-border rounded-full px-5 py-2 text-sm text-foreground"
              >
                {name}
              </div>
            ))}
          </motion.div>

          <motion.p
            className="text-muted-foreground/60 text-xs mt-8"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Strategic media alliances for government programs, corporate events
            &amp; large-scale exhibitions
          </motion.p>
        </div>
      </section>

      {/* ───────── Features ───────── */}
      <section className="bg-white py-20">
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "80rem" }}>
          <SectionDash />
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12"
            {...fadeUp}
          >
            Proven. Professional. Partnership-Driven.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {FEATURES.map((feature, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <motion.div
                  key={feature.title}
                  className="border border-border p-6"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Icon className="w-7 h-7 text-primary mb-4" />
                  <h3 className="font-serif font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Careers ───────── */}
      <section className="bg-muted py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "80rem" }}>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Join Our Team
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We are always on the lookout for driven, creative professionals
                who thrive in high-energy environments and are passionate about
                delivering extraordinary events. Whether you bring expertise in
                event production, client management, logistics, or
                communications — we want to hear from you.
              </p>
              <ul className="space-y-3">
                {CAREER_PERKS.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" style={{ flexShrink: 0 }} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-primary text-white p-8 flex flex-col justify-between"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Apply Now
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Send your CV and a brief cover note to our HR team. We review
                  every application with care and will reach out if your profile
                  aligns with our requirements.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-white/50 text-xs">HR &amp; Careers</span>
                </div>
                <a
                  href="mailto:hr@rvevents.org"
                  className="text-secondary hover:text-secondary/80 font-medium transition-colors"
                >
                  hr@rvevents.org
                </a>
              </div>
              <div className="mt-8">
                <p className="text-white/50 text-xs leading-relaxed mb-6">
                  Include the role you're applying for in the subject line.
                  We accept applications in PDF format only.
                </p>
                <a
                  href="mailto:hr@rvevents.org"
                  className="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-secondary/90 font-semibold text-sm px-6 py-3 transition-colors"
                >
                  Send Application <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── Bottom CTA ───────── */}
      <section className="relative py-24 text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-stage.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "80rem" }}>
          <SectionDash />
          <motion.h2
            className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight"
            {...fadeUp}
          >
            Creating Impactful Events.{" "}
            <span className="text-secondary">
              Delivering Exceptional Experiences.
            </span>
          </motion.h2>
          <motion.p
            className="text-sm text-white/70 mb-10 mx-auto"
            style={{ maxWidth: "36rem" }}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether it is a corporate summit, government program, exhibition, or
            large-scale gathering — RV Events brings together strategy,
            creativity, and execution excellence.
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-secondary/90 font-semibold text-sm px-8 py-3.5 transition-colors"
            >
              Request Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
