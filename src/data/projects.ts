export type Project = {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  accent: string;
};

export const projects: Project[] = [
  { title: "Password Strength Analyzer", description: "A software development and cybersecurity project focused on analysing password strength.", technologies: ["Software Development", "Cybersecurity"], accent: "01" },
  { title: "PhishGuard AI", description: "Email phishing detection and analysis project with automated analysis workflows.", technologies: ["AI", "Phishing Detection", "Automation"], accent: "02" },
  { title: "Search Engine", description: "Information indexing, retrieval and corpus processing project built with Python.", technologies: ["Python", "Information Retrieval", "Corpus Processing"], accent: "03" },
  { title: "Intelligent Agent", description: "An artificial intelligence project centred on intelligent agents and automation.", technologies: ["Artificial Intelligence", "Automation"], accent: "04" },
  { title: "Network Routing Optimization with A*", description: "Network modelled as a grid/graph for pathfinding and routing-cost optimisation.", technologies: ["Python", "Google Colab", "GitHub", "A*"], accent: "05" },
  { title: "Broadcast Communication Simulation", description: "Academic wireless sensor network project studying UDP, RPL, IPv6, topology and energy consumption.", technologies: ["Contiki", "Cooja", "UDP", "RPL", "IPv6"], accent: "06" },
];
