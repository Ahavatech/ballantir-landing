export const landingPageContent = {
  tagline: "AI-Driven Sports Intelligence Platform",
  hero:
    "An AI-driven basketball intelligence platform built to turn film, search, microphone routing, structured inputs, and context into faster, better decisions for players, teams, and decision-makers.",
  problem:
    "Basketball decisions are still slowed down by fragmented tools, endless tape, scattered data, and too much guesswork. BALLANTIR is designed to consolidate the signal into one high-conviction operating layer.",
  solution:
    "BALLANTIR Basketball brings everything into one intelligence system where film becomes the truth layer, search or microphone becomes the routing layer, and command modules turn inputs into clear decisions.",
  vision:
    "Basketball is the first build. BALLANTIR is being designed as the foundation for a multi-sport intelligence ecosystem that can scale from player development and roster construction into a broader sports intelligence platform.",
  metrics: [
    { value: "4h to 90s", label: "Scout report time" },
    { value: "10M+", label: "Film minutes indexed" },
    { value: "450+", label: "Decision signals tracked" },
    { value: "NBA-grade", label: "Operational standard" },
  ],
  featureCards: [
    {
      title: "Film Intelligence",
      description: "Game film becomes the truth layer for decision-making.",
    },
    {
      title: "Command Search",
      description: "Search or voice routes questions directly into the intelligence system.",
    },
    {
      title: "Decision Modules",
      description: "Structured outputs generate insights for players, teams, and investors.",
    },
  ],
  decisionFeed: [
    {
      label: "Signal 01",
      title: "Film becomes the source of truth",
      badge: "truth layer",
      copy: "Possessions, tendencies, and role context are extracted from video instead of being manually stitched together from disconnected tools.",
    },
    {
      label: "Signal 02",
      title: "Questions route through one interface",
      badge: "routing layer",
      copy: "Search and microphone input move the user from question to answer without needing multiple dashboards or custom query fluency.",
    },
    {
      label: "Signal 03",
      title: "Outputs are decision-ready",
      badge: "command layer",
      copy: "The product is built to support next-best decisions across roster construction, player development, opportunity, and strategic fit.",
    },
  ],
  commandOutput: [
    {
      title: "Role fit by lineup context",
      tag: "teams",
      copy: "Surface players whose spacing, defensive coverage range, and decision speed complement a ball-dominant creator.",
    },
    {
      title: "Opportunity and value readout",
      tag: "players",
      copy: "Translate film and context into leverage signals around usage, fit, development runway, and role sustainability.",
    },
  ],
  audiences: [
    {
      kicker: "Intelligence for Players",
      title: "Know identity, pathway, opportunity, fit, and value.",
      copy: "Players and agents use BALLANTIR to understand how a player is perceived, where their role compounds, and which environments increase long-term leverage.",
      points: [
        "Role and identity mapping",
        "Targeted development pathways",
        "Opportunity and fit analysis",
        "Value framing for career decisions",
      ],
    },
    {
      kicker: "Intelligence for Teams",
      title: "See roster construction and next-best decisions faster.",
      copy: "Teams evaluate roster construction, lineup intelligence, scouting targets, and actionable next steps from one operating layer rather than scattered tooling.",
      points: [
        "Roster construction analysis",
        "Lineup intelligence",
        "Scouting and target prioritization",
        "Next-best decision support",
      ],
    },
  ],
  difference: [
    {
      title: "Not a dashboard. A decision platform.",
      copy: "BALLANTIR is built to reduce noise and return a clear answer with context, rather than asking users to navigate tools and interpret charts on their own.",
    },
    {
      title: "Film is the truth layer.",
      copy: "The system is anchored in what happened on court, turning video into the primary evidence source for evaluations, planning, and strategic conviction.",
    },
    {
      title: "Speed compounds across the workflow.",
      copy: "When film, search, voice, and output modules live in one product, time-to-decision compresses from hours to seconds without sacrificing clarity.",
    },
  ],
} as const;
