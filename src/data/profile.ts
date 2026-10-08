export const profile = {
  name: "Yosri Khedher",
  initials: "YK",
  title: "Software Engineering Student · AI · Cybersecurity",
  shortBio:
    "Software Engineering & Information Systems student passionate about software development, artificial intelligence, cybersecurity, networks and IoT.",
  location: "Tunisia",
  school: "Faculty of Sciences of Gabès",
  indicator: "3rd Year · Faculty of Sciences of Gabès",
  phone: "+216 99 404 956",
  phoneUri: "+21699404956",
  email: "khedheryossri@gmail.com",
  universityEmail: "yossri.khedher@fsg.u-gabes.tn",
  linkedin: "https://www.linkedin.com/in/yosri-khedher-9680b71a7",
  github: "",
  cvPath: "/cv/Yosri_Khedher_CV.pdf",
  about:
    "Tunisian third-year student in Software Engineering and Information Systems at the Faculty of Sciences of Gabès. I am interested in building reliable software and exploring artificial intelligence, cybersecurity, networks, IoT and data.",
  goal:
    "My academic and professional goal is to join a Master's programme in Computer Science in France, with an interest in software engineering, AI, cybersecurity, systems and innovation.",
  languages: [
    ["Arabic", "Native"],
    ["French", "Fluent"],
    ["English", "Advanced / C2"],
  ],
} as const;

export const skillGroups = [
  { title: "Programming", skills: ["Python", "C++", "Java", "PL/SQL"] },
  { title: "AI & Data", skills: ["Deep Learning", "CNN", "Computer Vision", "Adversarial Machine Learning", "pandas"] },
  { title: "Cybersecurity", skills: ["Network Security", "Vulnerability Analysis", "Security Operations", "Threat Analysis", "Phishing Detection"] },
  { title: "Networks & IoT", skills: ["IPv4/IPv6", "Ethernet", "Switching", "Routing", "OSI Model", "UDP", "RPL", "Contiki", "Cooja", "Wireless Sensor Networks"] },
  { title: "Systems & Embedded", skills: ["Databases", "Operating Systems", "Arduino", "Raspberry Pi"] },
  { title: "Tools & Methods", skills: ["GitHub", "Google Colab", "Jira", "Agile", "n8n", "CUDA", "A* Algorithm"] },
] as const;
