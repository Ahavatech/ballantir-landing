"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  Cpu,
  Globe,
  Menu,
  Mic,
  Radar,
  Play,
  Search,
  ShieldCheck,
  Target,
  Video,
  X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Basketball, CircuitBoard, Sparkle } from "@/components/ui/brand-icons";
import { landingPageContent } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [Play, Search, BrainCircuit];
const intelligenceSignals = [
  ...landingPageContent.intelligenceRibbon,
  ...landingPageContent.intelligenceRibbon,
];
const pipelineNodes = [
  {
    id: "video_node",
    label: "Film / Video Layer",
    description: "The truth layer of the platform - raw basketball film and input data.",
    tooltip: "Film / Video: Truth layer",
    icon: Video,
    badge: "truth layer",
  },
  {
    id: "ai_node",
    label: "AI / Bot Logic",
    description: "Computer vision and machine-learning models analyze film, context, and structured inputs to generate basketball intelligence signals.",
    tooltip: "AI / Bot Logic: Interpretation layer",
    icon: BrainCircuit,
    badge: "interpretation",
  },
  {
    id: "mic_node",
    label: "Microphone / Search Routing",
    description: "Natural-language search and voice commands route questions through the intelligence engine.",
    tooltip: "Microphone / Search: Routing layer",
    icon: null,
    badge: "routing layer",
  },
  {
    id: "output_node",
    label: "Intelligence Output",
    description: "Decision-grade outputs including player evaluation, lineup fit, opportunity signals, and structured intelligence reports.",
    tooltip: "Intelligence Output: Actionable insights",
    icon: Radar,
    badge: "decision layer",
  },
] as const;

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
        <IntelligenceRibbon />
        <SystemPipelineSection />
        <NarrativeSection
          id="problem"
          eyebrow="The Problem"
          title="Basketball decisions still move slower than the game."
          description={landingPageContent.problem}
        />
        <SectionDivider label="One Intelligence System" />
        <SolutionSection />
        <SectionDivider label="Signal Architecture" />
        <VideoSection />
        <SectionDivider label="Platform Company" />
        <CategoryDefiningSection />
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
    { href: "#category-defining", label: "Thesis" },
    { href: "#audiences", label: "Stakeholders" },
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
          <div className="hero-badge">
            <Sparkle className="h-4 w-4 shrink-0 text-[var(--accent)]" />
            <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">Investor-grade intelligence platform</span>
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
              The Bloomberg Terminal for Basketball Intelligence
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

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {landingPageContent.strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.1, duration: 0.55 }}
                className="hero-metric-card"
              >
                <div className="signal-dot" />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  {strength.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/58">{strength.description}</p>
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

            <div className="mt-6 rounded-[1.25rem] border border-white/8 bg-black/25 p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/38">
                    Institutional framing
                  </p>
                  <p className="mt-2 text-lg font-medium text-white sm:text-xl">
                    One interface for film analysis, scouting context, and basketball decision intelligence.
                  </p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                  terminal-grade workflow
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/56">
                The goal is not to display more dashboards.  
The goal is to create a disciplined intelligence environment where evidence, AI interpretation, and decision outputs live in one system.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IntelligenceRibbon() {
  return (
    <section className="intelligence-ribbon border-y border-[rgba(200,155,60,0.18)]">
      <div className="ticker-shell">
        <motion.div
          className="ticker-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        >
          {intelligenceSignals.map((signal, index) => (
            <div key={`${signal}-${index}`} className="ticker-chip">
              <span className="ticker-kicker">live intelligence</span>
              <span className="ticker-label">{signal}</span>
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

function SystemPipelineSection() {
  return (
    <section id="ballantir-intelligence-pipeline" className="pipeline-section py-16 sm:py-20 lg:py-24">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="panel panel-cinematic pipeline-shell overflow-hidden rounded-[1.75rem] px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10"
        >
          <div className="pipeline-shell-glow" />

          <div className="relative z-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="section-eyebrow">Core BALLANTIR Intelligence Pipeline</p>
                <h2 className="section-title mt-4 text-[clamp(1.9rem,5.2vw,4.8rem)] font-semibold">
                  Film + AI interpretation + search routing = basketball intelligence
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                  A compact visual equation for the platform: film provides the evidence layer,
AI interprets patterns and context, search and voice route the question,
and the output becomes decision-grade basketball intelligence.
                </p>
              </div>

              <div className="pipeline-caption-chip self-start lg:self-auto">
                <Cpu className="h-4 w-4" />
                <span>The intelligence layer of basketball</span>
              </div>
            </div>

            <div className="pipeline-layout relative mt-10 lg:mt-12">
              <DesktopPipelineConnectors />
              <TabletPipelineConnectors />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {pipelineNodes.map((node, index) => (
                  <PipelineNode
                    key={node.id}
                    node={node}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]/82">
                from film → to intelligence → to better decisions
              </p>
              <p className="max-w-2xl text-sm leading-6 text-white/42">
                Each layer represents how the platform converts raw basketball film into structured intelligence.  
Search and voice remain the primary command surface for routing questions through the system.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PipelineNode({
  node,
  index,
}: {
  node: (typeof pipelineNodes)[number];
  index: number;
}) {
  const Icon = node.icon;

  return (
    <div className="flex flex-col md:contents xl:block">
      {index > 0 ? (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.15 + index * 0.12, duration: 0.45 }}
          className="pipeline-mobile-connector origin-top xl:hidden"
          aria-hidden="true"
        >
          <div className="pipeline-flow-dot pipeline-flow-dot-mobile" />
        </motion.div>
      ) : null}

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ delay: 0.2 + index * 0.14, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pipeline-node feature-card relative min-h-[18rem] rounded-[1.5rem] p-5 sm:min-h-[19rem] sm:p-6"
        title={node.tooltip}
      >
        <div className="pipeline-node-top">
          <span className="pipeline-node-index">0{index + 1}</span>
          <span className="pipeline-node-badge">{node.badge}</span>
        </div>

        <div className="mt-5">
          {node.id === "mic_node" ? (
            <div className="pipeline-mic-wrap">
              <div className="pipeline-mic-ring" />
              <div className="pipeline-mic-core">
                <Image
                  src="/mic.png"
                  alt="BALLANTIR microphone routing interface"
                  width={74}
                  height={74}
                  className="h-[74px] w-[74px] object-contain"
                />
              </div>
            </div>
          ) : (
            <div className="pipeline-icon-wrap">
              {Icon ? <Icon className="h-8 w-8" /> : null}
            </div>
          )}
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">{node.label}</h3>
        <p className="mt-3 text-sm leading-6 text-white/58 sm:text-[15px] sm:leading-7">
          {node.description}
        </p>

        {node.id === "output_node" ? (
          <div className="pipeline-output-panel mt-6">
            <div className="pipeline-output-grid">
              <div>
                <span>player index</span>
                <strong>97.4</strong>
              </div>
              <div>
                <span>lineup fit</span>
                <strong>+11.3</strong>
              </div>
              <div>
                <span>opportunity</span>
                <strong>A+</strong>
              </div>
            </div>
            <div className="pipeline-output-footer">
              <span>confidence</span>
              <span>92%</span>
            </div>
          </div>
        ) : (
          <div className="pipeline-node-footer mt-6">
            <span>{node.tooltip}</span>
          </div>
        )}

        <div className="pipeline-tooltip">{node.tooltip}</div>
      </motion.article>
    </div>
  );
}

function DesktopPipelineConnectors() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden xl:block" aria-hidden="true">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={`desktop-connector-${index}`}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: 0.45 + index * 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`pipeline-connector-desktop pipeline-connector-desktop-${index + 1}`}
        >
          <div className="pipeline-flow-dot" />
        </motion.div>
      ))}
    </div>
  );
}

function TabletPipelineConnectors() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden md:block xl:hidden" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="pipeline-connector-tablet pipeline-connector-tablet-top"
      >
        <div className="pipeline-flow-dot" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ delay: 0.58, duration: 0.52 }}
        className="pipeline-connector-tablet pipeline-connector-tablet-diagonal"
      >
        <div className="pipeline-flow-dot" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="pipeline-connector-tablet pipeline-connector-tablet-bottom"
      >
        <div className="pipeline-flow-dot" />
      </motion.div>
    </div>
  );
}

function VideoSection() {
  return (
    <section id="vision-video" className="section-cinematic py-14 sm:py-20 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Platform Vision</p>
          <h2 className="section-title mt-4 font-semibold">See how the intelligence layer comes together.</h2>
          <p className="mt-6 text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            A concise walkthrough of how BALLANTIR turns basketball film, AI interpretation,
search, and voice commands into faster and more confident basketball decisions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="panel panel-cinematic mt-10 overflow-hidden rounded-[1.5rem] p-3 sm:mt-12 sm:rounded-[2rem] sm:p-4"
        >
          <VideoPlayer />
        </motion.div>
      </div>
    </section>
  );
}

function VideoPlayer() {
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.75;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (!entry.isIntersecting) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handlePlayClick = () => {
    setShowOverlay(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      className="video-panel relative aspect-video w-full overflow-hidden rounded-[1.1rem] border border-[var(--accent)]/18 bg-black sm:rounded-[1.5rem]"
    >
      <video
        ref={videoRef}
        src="http://ballantir.com.s3-website.eu-north-1.amazonaws.com/demo.mp4"
        className="h-full w-full object-cover"
        preload="metadata"
        loop
        playsInline
      />
      {showOverlay && (
        <button
          type="button"
          onClick={handlePlayClick}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 py-12 text-center sm:px-6 sm:py-6 hover:bg-black/10 transition"
        >
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
        </button>
      )}
    </div>
  );
}

function CategoryDefiningSection() {
  return (
    <section id="category-defining" className="py-14 sm:py-20 lg:py-28">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="panel category-panel rounded-[1.75rem] p-5 sm:rounded-[2.25rem] sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-eyebrow">Category-Defining Company</p>
              <h2 className="section-title mt-4 text-[clamp(1.9rem,5vw,4.4rem)] font-semibold">
                {landingPageContent.categoryDefining.title}
              </h2>
            </div>
            <div>
              <p className="text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
                {landingPageContent.categoryDefining.description}
              </p>
              <div className="mt-8 grid gap-3">
                {landingPageContent.categoryDefining.points.map((point, index) => (
                  <motion.article
                    key={point}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="rounded-[1.25rem] border border-white/8 bg-black/25 px-4 py-4 sm:px-5"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                      Thesis 0{index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/66 sm:text-base sm:leading-7">
                      {point}
                    </p>
                  </motion.article>
                ))}
              </div>
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
    <section id={id} className="py-14 sm:py-20 lg:py-28">
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
    <section id="solution" className="section-cinematic py-14 sm:py-20 lg:py-28">
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
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-eyebrow">Command Example</p>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Ask basketball in plain language.</h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7">
                The system routes natural-language or voice input through the intelligence pipeline,
then returns answers grounded in film and context rather than disconnected dashboards.
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
    <section id="audiences" className="py-14 sm:py-20 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Two Operating Views</p>
          <h2 className="section-title mt-4 font-semibold">The same system, tuned for different decision-makers.</h2>
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
    <section id="difference" className="section-cinematic py-14 sm:py-20 lg:py-28">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Why BALLANTIR Is Different</p>
          <h2 className="section-title mt-4 font-semibold">This is not another analytics dashboard.</h2>
          <p className="mt-6 text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
          BALLANTIR reduces noise, compresses decision time, and ensures every insight is grounded in what actually happened on the court.
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
    <section id="vision" className="py-14 sm:py-20 lg:py-28">
      <div className="container-shell">
        <div className="panel panel-cinematic overflow-hidden rounded-[1.75rem] p-5 sm:rounded-[2.25rem] sm:p-10">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="icon-chip shrink-0 flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl">
              <Globe className="h-5 w-5 text-[var(--accent)] sm:h-6 sm:w-6" />
            </div>
            <p className="section-eyebrow">The Bigger Vision</p>
          </div>
          <h2 className="section-title mt-6 font-semibold">
            Basketball is the first deployment of a multi-sport intelligence system.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            {landingPageContent.vision}
          </p>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="pb-14 pt-6 sm:pb-24 sm:pt-8 lg:pb-28">
      <div className="container-shell">
        <div className="panel panel-cinematic rounded-[1.75rem] px-5 py-8 text-center sm:rounded-[2.5rem] sm:px-10 sm:py-14">
          <p className="section-eyebrow">Early Access And Investor Conversations</p>
          <h2 className="section-title mt-4 font-semibold">Join the first wave of strategic partners and early operators.</h2>
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
