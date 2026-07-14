export const profile = {
  name: "Alexander Maanavi",
  traits: ["Quantitative", "AI-Driven", "Curious"],
  tagline:
    "Mathematics & Philosophy student focused on entrepreneurship, venture building, investments, and quantitative strategy.",
  about:
    "I'm a Mathematics & Philosophy student at the University of Toronto with a minor in Statistics. Alongside school, I co-founded the Office of Rebates and Grants, advising 20+ startups on grant funding, and have worked across quantitative crypto strategy, biotech investment research, and M&A due diligence. Outside of work, I compete in chess (~2000-rated) and poker (4x Fiji Poker Champion).",
  location: "New York, NY",
  email: "amaanavi84@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexander-maanavi",
  resumeUrl: "/alexander-maanavi-resume.pdf",
};

export const famousGames = [
  {
    white: "Garry Kasparov",
    whiteRating: 2851,
    black: "Veselin Topalov",
    blackRating: 2690,
    date: "1999",
    tournament: "Hoogovens",
    fen: "b2r3r/k4p1p/p2q1np1/Np1P4/3p1Q2/P4PPB/1PP4P/1K2R3 w - - 0 25",
  },
  {
    white: "Vincent Keymer",
    whiteRating: 2491,
    black: "Boris Gelfand",
    blackRating: 2701,
    date: "Oct 2018",
    tournament: "Isle of Man Masters",
    fen: "3r2k1/p1b2p1p/4qnp1/8/N3P3/3QBPPP/1P1R1K2/8 b - - 0 1",
  },
  {
    white: "Ernesto Inarkiev",
    whiteRating: 2690,
    black: "Daniil Dubov",
    blackRating: 2691,
    date: "Aug 2018",
    tournament: "Russian Championship Superfinal",
    fen: "2q3k1/1p4bp/p2p2p1/P1nP1p2/2p1r3/r3PP1P/QP1BB1P1/1R1R2K1 b - - 0 1",
  },
  {
    white: "Daniil Dubov",
    whiteRating: 2699,
    black: "Sergey Karjakin",
    blackRating: 2752,
    date: "May 2020",
    tournament: "Russian Championship Superfinal",
    fen: "r3qrk1/1pp2pp1/3PbBnp/8/pPB5/2pQ1N2/P2R1K2/R7 b - - 0 1",
  },
  {
    white: "Ding Liren",
    whiteRating: 2734,
    black: "Yihan Meng",
    blackRating: 2483,
    date: "April 2022",
    tournament: "Chinese Team Championship",
    fen: "3rrk2/1pn3R1/1pn5/2p5/1P3P1p/P3Pq2/B1Q1NPK1/R2R4 w - - 0 1",
  },
];

export const works = [
  {
    title:
      "The Court's Wrong Reason: An Investigation of Langton's Illocutionary Account, the Limits of R v Butler, and the Obligation of the Law to Prevent Harm",
    description:
      "An analysis of R v Butler, arguing that the Supreme Court of Canada's obscenity ruling rests on an unstable philosophical foundation, and that Rae Langton's account of pornography as an illocutionary act of subordination supplies the principled basis the Court's reasoning lacked.",
    href: "/phl271-long-essay.pdf",
  },
];

export const education = [
  {
    school: "University of Toronto, St. George's Campus",
    detail: "Major: Mathematics — Minors: Philosophy, Statistics",
    period: "09/2023 – 06/2027",
  },
  {
    school: "Riverdale Country School",
    detail: "High School Diploma",
    period: "09/2021 – 06/2023",
  },
  {
    school: "Cambridge University",
    detail: "Professional Certificate of Applied Corporate Finance",
    period: "",
  },
];

export const experience = [
  {
    org: "Interplay",
    role: "Intern, Operations and AI, Studio",
    location: "New York, NY",
    period: "05/2026 – Present",
    bullets: [] as string[],
  },
  {
    org: "EgaTree",
    role: "Intern, Data Analysis and Strategy (Hybrid)",
    location: "New York, NY",
    period: "06/2025 – 01/2026",
    bullets: [
      "Joined as an early team member at a 3-person fintech startup, building quantitative Bitcoin trading strategies grounded in the Power-Law model.",
      "Engineered long-term BTC cycle trading models in Python, backtested against 14 years of price data to validate Power-Law performance signals.",
      "Designed and directly presented investor materials to private and institutional clients, supporting a seed-stage startup's fundraising for a quantitative crypto strategy fund.",
    ],
  },
  {
    org: "Manas AI",
    role: "Intern, Investment Research and Strategy (Hybrid)",
    location: "New York, NY",
    period: "09/2025 – 01/2026",
    bullets: [
      "Conducted diligence on 4 pipeline drug candidates across indication fit, TAM sizing, and clinical feasibility, directly informing executive capital deployment decisions.",
      "Authored weekly strategic reports to C-suite and VP of Operations, distilling complex biotech data into actionable investment recommendations.",
      "Presented recommendations to C-suite on commercial potential and capital deployment considerations.",
    ],
  },
  {
    org: "Office of Rebates and Grants",
    role: "Co-Founder (CEO 01/2023–05/2025)",
    location: "New York, NY",
    period: "01/2023 – 01/2025",
    bullets: [
      "Co-founded a legal services startup partnering with law firms to deliver affordable, on-call legal advice to student-founded startups.",
      "Sourced and advised 20+ companies on Employee Retention Credit and CARES Act applications via partner law firms, generating $3M+ in client funding and $300K+ in revenue.",
      "Led all client relationships as primary liaison between founders, clients, and partner law firms.",
    ],
  },
  {
    org: "Blanco Art",
    role: "Employee",
    location: "New York, NY / Toronto, ON (Remote)",
    period: "07/2024 – 03/2025",
    bullets: [
      "Served as first employee, reporting directly to the founder of Cardinal Ventures, gaining hands-on exposure to early-stage venture building.",
      "Authored investor materials and quarterly reports for 7+ investors, advising the founder on capital allocation strategy.",
      "Built event-level budgets and supported partner negotiations and funding plans across key growth initiatives.",
    ],
  },
  {
    org: "Geller & Company",
    role: "Summer Intern, Special Projects",
    location: "New York, NY",
    period: "06/2023 – 08/2023",
    bullets: [
      "Delivered competitive industry research that directly supported the acquisition decision for Julien's Auctions, an 8-figure deal.",
      "Presented financial analysis and expense optimization recommendations to the C-suite of 3 M&A targets.",
      "Created presentations on unnecessary expenses and maximizing short-term ROI for a newly acquired company, presented to high-value clients and the COO.",
      "Produced first financial analytics and management reporting on new acquisitions as a special project for the CEO.",
    ],
  },
];

export const skills = [
  "Financial Modelling",
  "Excel & Microsoft Office Suite",
  "Python",
  "SQL",
  "CRM Creation and Management",
  "AI-Native",
];

export const languages = [
  "French (Proficient, in-progress)",
  "Spanish (Conversational)",
  "German (Basic, in-progress)",
];

export const clubsAndAwards = [
  "UofT Chess Team (Alternate, 2026)",
  "Vertige Investment Group, Quant Finance Competition Team (2025)",
  "Phi Gamma Delta, Financial Committee & Cabinet Advisory (2025/27)",
  "UofT Club Soccer",
  "UofT Intramural Football",
];

export const interests = [
  "Chess (~2000-rated online)",
  "Poker (4x Fiji Poker Champion)",
  "Soccer",
  "Basketball",
  "Football",
  "Linguistics",
  "Geography & Geopolitics",
];
