"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  Globe,
  Menu,
  Mic,
  Play,
  Search,
  ShieldCheck,
  Target,
  X,
} from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Basketball, CircuitBoard, Sparkle } from "@/components/ui/brand-icons";
import { landingPageContent } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [Play, Search, BrainCircuit];
const tickerMetrics = [...landingPageContent.metrics, ...landingPageContent.metrics];

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-transparent text-white">
      <SiteHeader
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <main>
        <HeroSection />
        <MetricsSection />
        <SectionDivider label="Signal Architecture" />
        <VideoSection />
        <NarrativeSection
          id="problem"
          eyebrow="The Problem"
          title="Basketball decisions still move slower than the game."
          description={landingPageContent.problem}
        />
        <SectionDivider label="One Intelligence System" />
        <SolutionSection />
        <AudienceSection />
        <SectionDivider label="Why It Compounds" />
        <DifferenceSection />
        <VisionSection />
        <CtaSection />
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="container-shell flex flex-col items-start justify-between gap-4 text-sm text-white/40 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/ballantir-logo.png"
              alt="BALLANTIR Basketball"
              width={28}
              height={28}
              className="h-7 w-7 rounded-sm object-cover ring-1 ring-[var(--accent)]/20"
            />
            <span className="font-medium tracking-[0.18em] text-white/55">
              BALLANTIR BASKETBALL
            </span>
          </div>
          <p className="max-w-md text-left md:text-right">
            Built for investor conversations, early access, and strategic partnerships.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SiteHeader({
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
}: {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}) {
  const navItems = [
    { href: "#solution", label: "Platform" },
    { href: "#audiences", label: "Stakeholders" },
    { href: "#difference", label: "Difference" },
    { href: "#vision", label: "Vision" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-black/45 backdrop-blur-xl">
      <div className="container-shell flex min-h-18 items-center justify-between gap-4 sm:min-h-20 sm:gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/ballantir-logo.png"
            alt="BALLANTIR Basketball"
            width={40}
            height={40}
            className="h-9 w-9 rounded-sm object-cover ring-1 ring-[var(--accent)]/25 sm:h-10 sm:w-10"
          />
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 sm:text-xs sm:tracking-[0.28em]">BALLANTIR</p>
            <p className="truncate text-sm font-semibold text-white">Basketball</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
          <a href="#cta" className={cn(buttonVariants({ size: "sm" }), "button-tech")}>
            Request Early Access
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={onToggleMenu}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/6 bg-[rgba(8,8,8,0.96)] md:hidden">
          <div className="container-shell flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onCloseMenu}
                className="rounded-2xl border border-white/8 px-4 py-3 text-sm text-white/75"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={onCloseMenu}
              className={cn(buttonVariants(), "button-tech w-full")}
            >
              Request Early Access
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-shell relative overflow-hidden pt-10 sm:pt-16">
      <div className="hero-overlay-grid" />
      <motion.div
        className="hero-glow-left"
        animate={{ opacity: [0.42, 0.64, 0.42], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-glow-right"
        animate={{ opacity: [0.18, 0.32, 0.18], y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute -right-20 top-20 z-0 hidden h-[32rem] w-[32rem] lg:block"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      >
        <Basketball className="h-full w-full text-[var(--accent)]/10 hero-circuit-glow" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[44rem] lg:block"
        animate={{ x: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      >
        <CircuitBoard className="h-full w-full text-[var(--accent-secondary)]/10" />
      </motion.div>

      <div className="container-shell relative z-10 grid min-h-[calc(100vh-4.5rem)] items-center gap-10 py-10 sm:gap-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="hero-badge max-w-full">
            <Sparkle className="h-4 w-4 text-[var(--accent)]" />
            <span>Investor-grade intelligence platform</span>
          </div>

          <div className="mt-6 flex items-center gap-3 sm:mt-7 sm:gap-4">
            <Image
              src="/ballantir-logo.png"
              alt="BALLANTIR Basketball"
              width={58}
              height={58}
              className="h-11 w-11 rounded-lg border border-[var(--accent)]/30 object-cover shadow-[0_0_30px_rgba(200,155,60,0.15)] sm:h-14 sm:w-14"
            />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40 sm:text-xs sm:tracking-[0.34em]">BALLANTIR</p>
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] sm:text-sm sm:tracking-[0.18em]">BASKETBALL</p>
            </div>
          </div>

          <h1 className="section-title hero-title max-w-5xl font-semibold text-white">
            BALLANTIR Basketball
            <span className="hero-title-accent block">
              The Future of AI-Driven Sports Intelligence
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
            {landingPageContent.hero}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#cta" className={cn(buttonVariants({ size: "lg" }), "button-tech w-full sm:w-auto")}>
              <Sparkle className="h-4 w-4" />
              Request Early Access
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#vision-video"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "button-tech-subtle w-full sm:w-auto")}
            >
              <Play className="h-4 w-4" />
              Watch Platform Vision
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {landingPageContent.metrics.slice(0, 3).map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.1, duration: 0.55 }}
                className="hero-metric-card"
              >
                <div className="signal-dot" />
                <p className="metric-flash text-2xl font-semibold text-[var(--accent)]">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/38">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="panel panel-cinematic relative overflow-hidden rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.18),transparent_35%)]" />
          <div className="absolute inset-0 opacity-20">
            <CircuitBoard className="h-full w-full text-white/20" />
          </div>

          <div className="relative rounded-[1.25rem] border border-white/8 bg-[rgba(4,7,13,0.88)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:rounded-[1.5rem] sm:p-6">
            <div className="flex flex-col gap-3 border-b border-white/8 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent-secondary)]">
                  Decision Feed
                </p>
                <p className="mt-1 text-sm font-medium text-white">Investor-grade intelligence loop</p>
              </div>
              <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs text-[var(--accent)]">
                Live concept
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {landingPageContent.decisionFeed.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.12, duration: 0.6 }}
                  className="feature-card rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                        {item.label}
                      </p>
                      <p className="mt-1 text-lg font-medium text-white">{item.title}</p>
                    </div>
                    <span className="rounded-full bg-[var(--accent)]/12 px-3 py-1 font-mono text-xs text-[var(--accent)]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/55">{item.copy}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {landingPageContent.metrics.slice(0, 3).map((metric) => (
                <div
                  key={metric.label}
                  className="metric-ticker rounded-2xl border border-white/8 bg-black/25 p-4"
                >
                  <p className="metric-flash text-2xl font-semibold text-[var(--accent)]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/35">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="border-y border-white/6 bg-black/30 py-6">
      <div className="ticker-shell">
        <motion.div
          className="ticker-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        >
          {tickerMetrics.map((metric, index) => (
            <div key={`${metric.label}-${index}`} className="ticker-chip">
              <span className="ticker-value">{metric.value}</span>
              <span className="ticker-label">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="container-shell py-6">
      <div className="section-divider">
        <span>{label}</span>
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <section id="vision-video" className="section-cinematic py-20 sm:py-32">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Platform Vision</p>
          <h2 className="section-title mt-4 font-semibold">See how the intelligence layer comes together.</h2>
          <p className="mt-6 text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            A concise walkthrough of how BALLANTIR
            turns film, search, voice, and structured context into faster basketball decisions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="panel panel-cinematic mt-10 overflow-hidden rounded-[1.5rem] p-3 sm:mt-12 sm:rounded-[2rem] sm:p-4"
        >
          <div className="video-panel relative aspect-[4/5] min-h-[24rem] rounded-[1.1rem] border border-[var(--accent)]/18 sm:aspect-video sm:min-h-0 sm:rounded-[1.5rem]">
            <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 sm:right-6 sm:top-6 sm:px-3 sm:text-[10px] sm:tracking-[0.24em]">
              Cloudinary-ready
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pb-6 pt-14 text-center sm:px-6 sm:pb-0 sm:pt-0">
              <div className="video-play-ring flex h-16 w-16 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 sm:h-20 sm:w-20">
                <Play className="h-6 w-6 text-[var(--accent)] sm:h-8 sm:w-8" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] sm:mt-6 sm:text-xs sm:tracking-[0.26em]">
                platform walkthrough
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white sm:mt-3 sm:text-3xl">Cinematic product demo</h3>
              <p className="mt-3 max-w-xl text-xs leading-5 text-white/55 sm:mt-4 sm:max-w-2xl sm:text-sm sm:leading-6">
                How BALLANTIR
                changes the speed and quality of decision-making for teams, players, and investors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NarrativeSection({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section id={id} className="py-20 sm:py-32">
      <div className="container-shell">
        <div className="section-card mx-auto max-w-4xl text-center">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4 font-semibold">{title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="solution" className="section-cinematic py-20 sm:py-32">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">One Intelligence System</p>
          <h2 className="section-title mt-4 font-semibold">
            Film as truth. Search and voice as routing. Decisions as output.
          </h2>
          <p className="mt-6 text-base leading-7 text-white/58 sm:text-lg sm:leading-8">{landingPageContent.solution}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {landingPageContent.featureCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="panel feature-card rounded-[1.5rem] p-5 sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="icon-chip">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white sm:mt-6 sm:text-2xl">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/55">{card.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="panel panel-cinematic mt-8 rounded-[1.5rem] p-5 sm:mt-10 sm:rounded-[2rem] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-eyebrow">Command Example</p>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Ask basketball in plain language.</h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7">
                The system routes natural-language or microphone input through the right context layers,
                then returns an answer built for real decisions rather than a pile of dashboards.
              </p>
            </div>

            <div className="command-panel rounded-[1.25rem] border border-white/8 p-4 sm:rounded-[1.5rem] sm:p-5">
              <div className="flex items-start gap-3 border-b border-white/8 pb-4 text-sm text-white/55">
                <Mic className="h-4 w-4 text-[var(--accent)]" />
                <span className="break-words font-mono text-xs leading-5 sm:text-sm">
                  &gt; Which wings create the best fit beside a high-usage guard?
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {landingPageContent.commandOutput.map((item) => (
                  <div key={item.title} className="feature-card rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-base font-medium text-white sm:text-lg">{item.title}</p>
                      <span className="rounded-full bg-[var(--accent)]/12 px-3 py-1 text-xs text-[var(--accent)]">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/55">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="audiences" className="py-20 sm:py-32">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Two Operating Views</p>
          <h2 className="section-title mt-4 font-semibold">Intelligence for players and teams.</h2>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-2">
          {landingPageContent.audiences.map((audience, index) => (
            <motion.article
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="panel feature-card rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8"
            >
              <p className="section-eyebrow">{audience.kicker}</p>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{audience.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58 sm:text-base sm:leading-7">{audience.copy}</p>
              <div className="mt-8 space-y-3">
                {audience.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/70 transition hover:border-[var(--accent)]/25 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <ChevronRight className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <span>{point}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  const cards = [
    { icon: Target, ...landingPageContent.difference[0] },
    { icon: Play, ...landingPageContent.difference[1] },
    { icon: ShieldCheck, ...landingPageContent.difference[2] },
  ];

  return (
    <section id="difference" className="section-cinematic py-20 sm:py-32">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Why BALLANTIR Is Different</p>
          <h2 className="section-title mt-4 font-semibold">This is not another analytics dashboard.</h2>
          <p className="mt-6 text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            BALLANTIR is designed to reduce noise, compress decision time, and keep every answer grounded in what happened on court.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="panel feature-card rounded-[1.5rem] p-5 sm:rounded-[1.75rem] sm:p-6"
            >
              <div className="icon-chip">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold sm:mt-6 sm:text-2xl">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/55">{card.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="py-20 sm:py-32">
      <div className="container-shell">
        <div className="panel panel-cinematic overflow-hidden rounded-[1.75rem] p-5 sm:rounded-[2.25rem] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="icon-chip flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20">
              <Globe className="h-7 w-7 text-[var(--accent)] sm:h-9 sm:w-9" />
            </div>
            <div>
              <p className="section-eyebrow">The Bigger Vision</p>
              <h2 className="section-title mt-4 font-semibold">
                Basketball is the first build in a multi-sport intelligence system.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                {landingPageContent.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="pb-20 pt-6 sm:pb-32 sm:pt-8">
      <div className="container-shell">
        <div className="panel panel-cinematic rounded-[1.75rem] px-5 py-8 text-center sm:rounded-[2.5rem] sm:px-10 sm:py-14">
          <p className="section-eyebrow">Early Access And Investor Conversations</p>
          <h2 className="section-title mt-4 font-semibold">Join the first wave of strategic partners.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            Meet the platform early, shape the product direction, and start the investor conversation while the system is still selective.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:invest@ballantir.ai" className={cn(buttonVariants({ size: "lg" }), "button-tech")}>
              Request Early Access
            </a>
            <a
              href="mailto:partners@ballantir.ai"
              className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "button-tech-subtle")}
            >
              Start Investor Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
