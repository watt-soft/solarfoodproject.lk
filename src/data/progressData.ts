import type { PhaseData } from '../types';

export const phases: PhaseData[] = [
  {
    id: "phase-1",
    name: "Core Operations",
    tag: "Phase 1",
    desc: "This phase establishes foundational capabilities enabling revenue generation while subsequent phases progress.",
    progress: 36, // ~4 out of 11
    items: [
      { id: "m1-1", tag: "Completed", tagClass: "done", title: "Site acquisition and legal documentation" },
      { id: "m1-2", tag: "Completed", tagClass: "done", title: "Environmental impact assessment and regulatory approvals" },
      { id: "m1-3", tag: "Completed", tagClass: "done", title: "Site preparation and grading" },
      { id: "m1-4", tag: "On going", tagClass: "active", title: "Detailed engineering and architectural designs" },
      { id: "m1-5", tag: "Planned", tagClass: "planned", title: "Foundation construction for primary buildings" },
      { id: "m1-6", tag: "Planned", tagClass: "planned", title: "Primary processing equipment installation" },
      { id: "m1-7", tag: "Planned", tagClass: "planned", title: "Dehydration systems commissioning" },
      { id: "m1-8", tag: "Planned", tagClass: "planned", title: "Establishing solar system" },
      { id: "m1-9", tag: "Planned", tagClass: "planned", title: "Basic quality control capabilities" },
      { id: "m1-10", tag: "Planned", tagClass: "planned", title: "Initial product line launches" },
      { id: "m1-11", tag: "Planned", tagClass: "planned", title: "Domestic market entry" }
    ]
  },
  {
    id: "phase-2",
    name: "Capacity Expansion",
    tag: "Phase 2",
    desc: "Phase 2 expands capacity in response to market traction and demand growth from Phase 1 operations.",
    progress: 0,
    items: [
      { id: "m2-1", tag: "Planned", tagClass: "planned", title: "Additional processing lines" },
      { id: "m2-2", tag: "Planned", tagClass: "planned", title: "Expanded dehydration capacity" },
      { id: "m2-3", tag: "Planned", tagClass: "planned", title: "Vegetarian sausage production full commissioning" },
      { id: "m2-4", tag: "Planned", tagClass: "planned", title: "Enhanced quality control laboratory" },
      { id: "m2-5", tag: "Planned", tagClass: "planned", title: "Export market development" }
    ]
  },
  {
    id: "phase-3",
    name: "Diversification and Optimization",
    tag: "Phase 3",
    desc: "Phase 3 optimizes operations and captures opportunities identified during earlier phases.",
    progress: 0,
    items: [
      { id: "m3-1", tag: "Planned", tagClass: "planned", title: "New product line additions" },
      { id: "m3-2", tag: "Planned", tagClass: "planned", title: "Process automation enhancements" },
      { id: "m3-3", tag: "Planned", tagClass: "planned", title: "Advanced certification achievements" },
      { id: "m3-4", tag: "Planned", tagClass: "planned", title: "Market penetration in priority export markets" },
      { id: "m3-5", tag: "Planned", tagClass: "planned", title: "Operational efficiency improvements" }
    ]
  }
];
