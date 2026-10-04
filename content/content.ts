import type { Content } from "./types";

export const content: Content = {
  profile: {
    name: "Hakim Takiyuddin 👨‍💻",
    title: "Software Engineer",
    company: "PayNet",
    team: "Mule Buster Team",
    location: "Kuala Lumpur, Malaysia 🇲🇾",
    focus: "Fintech: payments & fraud systems",
    bio: "Backend engineer building payment and anti-fraud systems in Malaysia — from card switching and HSM key management at Setel to national fraud reporting at PayNet.",
  },

  experience: [
    {
      name: "Payment Network (PayNet)",
      location: "Gardens, Kuala Lumpur",
      period: "Feb 2026 – present",
      roles: [
        {
          title: "Software Engineer (Backend)",
          team: "Mule Buster Team",
          bullets: [
            "Delivering the integration between iPRS (Integrated Police Reporting System) and NFP (National Fraud Portal), so scams reported at any police station are channelled directly into NFP.",
            "Co-developing the User Access Management (UAM) service in NFP to adopt Role-Based Access Control (RBAC), replacing permissions assigned directly to users — making access more consistent and compliance easier to track.",
            "Co-developing features to assess and report a scammer's tampered or fake ID, so any forged identity can be reported and assessed as part of a scam incident report.",
          ],
          stack: ["Java", "Spring", "Postgres", "GitLab"],
        },
      ],
    },
    {
      name: "Ørsted Services Malaysia",
      location: "Bangsar, Kuala Lumpur",
      period: "Oct 2024 – Feb 2026",
      roles: [
        {
          title: "Technical Consultant",
          team: "ServiceNow Team",
          bullets: [
            "Used ServiceNow to manage and resolve IT service requests and reported incidents, making sure each one was resolved within the agreed SLA.",
            "Updated and maintained a new service desk satisfaction survey to better understand how users experience the service desk team.",
            "Resolved issues and developed features in GRC Internal Audit management for Ørsted's Internal Control department, helping them manage financial risk and audits.",
          ],
          stack: ["ServiceNow", "JavaScript"],
        },
      ],
    },
    {
      name: "Setel",
      location: "Bangsar, Kuala Lumpur",
      period: "Sep 2021 – Sep 2024",
      roles: [
        {
          title: "Fullstack Software Engineer",
          team: "Treasury Team",
          bullets: [
            "Maintained and optimised business-critical legacy repositories — Merchant and Treasury services — which drive merchant management and the transaction ledger.",
            "Improved reliability between sub-wallet and main-wallet transactions in Setel's payment system, keeping the two accurate and consistent.",
            "Implemented DuitNow transfers through sub-wallets and the transaction ledger, so Setel's payment services accept DuitNow proxy transfers.",
            "Inherited 15 services and kept them reliable, avoiding disruption from high traffic and issues raised during development.",
            "Configured and managed encrypted reports for government initiatives (e-Madani and e-Belia), delivered to the mediator server so every related transaction is recorded.",
          ],
          stack: ["React", "NestJS", "TypeScript", "MongoDB", "Redis", "Kafka", "RabbiqMQ", "Grafana", "Jest", "Github"],
        },
        {
          title: "Fullstack Software Engineer",
          team: "Payment Engine Team",
          bullets: [
            "Co-developed microservice APIs connecting to payment gateways for top-ups — FPX and card transactions using direct charge, pre-auth and capture.",
            "Co-developed a payment switching API that decides which gateway each transaction is routed to, using a circuit breaker, before reflecting it in Setel's PCI-DSS certified payment system.",
            "Built routing change management in the Setel Admin Portal as a micro-frontend, with maker-checker approval and a trace log of every routing change request.",
            "Cached a high-traffic database call with Redis for data that rarely changes, reducing database calls and cost.",
            "Ran K6 performance tests to make sure the system could handle large traffic.",
            "Prepared the deployment setup for the team's API services across Development, Staging, Pre-Production and Production.",
          ],
          stack: ["React", "NestJS", "TypeScript", "MongoDB", "Redis", "Kafka", "Grafana", "Jest", "K6", "Github"],
        },
        {
          title: "Fullstack Software Engineer",
          team: "Acquiring Team",
          bullets: [
            "Built encrypted key management in the Setel Admin Portal with maker-checker, so every key change is authorised and acknowledged across two levels of hierarchy.",
            "Co-developed calls to the HSM (Hardware Security Module) that encrypt clear keys and return them encrypted, using hexagonal architecture.",
            "Maintained the API for the series of function calls to Maybank, patching it ahead of any specification change or testing between Maybank and Setel.",
            "Developed an API that builds and parses ISO8583 requests and responses between CIMB and Setel, with request buffering on the TCP connection to CIMB.",
            "Led a successful SIT between Maybank and Setel's card payment system on OPT and IPT terminals, alongside external third-party testing.",
          ],
          stack: ["React", "NestJS", "TypeScript", "Grafana", "Jest", "Github"],
        },
      ],
    },
  ],

  highlights: [
    {
      year: "2026",
      title: "National scam reporting: iPRS → National Fraud Portal",
      kind: "work",
      problem: "Scam reports filed at police stations did not flow into the National Fraud Portal.",
      built: "An integration that channels iPRS police reports directly into NFP.",
      stack: ["Java", "Spring", "Postgres"],
    },
    {
      year: "2021–24",
      title: "Payment switching with a circuit breaker",
      kind: "work",
      problem: "Every top-up had to reach a healthy payment gateway, even when one was degraded.",
      built: "A PCI-DSS certified switching API that routes transactions across gateways using a circuit breaker.",
      stack: ["NestJS", "TypeScript", "MongoDB", "Kafka", "Redis"],
    },
    {
      year: "2021–24",
      title: "HSM key management with maker-checker",
      kind: "work",
      problem: "Encryption key changes needed two-level approval, and clear keys had to be encrypted by the HSM.",
      built: "Maker-checker key management in the Admin Portal, with HSM calls structured using hexagonal architecture.",
      stack: ["NestJS", "React", "TypeScript"],
    },
    {
      year: "2021–24",
      title: "ISO8583 over TCP: CIMB card integration",
      kind: "work",
      problem: "Card transactions with CIMB use ISO8583 messages over a raw TCP connection.",
      built: "An API that builds and parses ISO8583 requests and responses, with request buffering on the TCP link.",
      stack: ["NestJS", "TypeScript"],
    },
    {
      year: "2021–24",
      title: "DuitNow proxy transfers via sub-wallets",
      kind: "work",
      problem: "The payment system could not accept DuitNow transfers, and sub-wallets could drift from main wallets.",
      built: "DuitNow proxy transfers through sub-wallets and the ledger, with stronger sub-wallet/main-wallet consistency.",
      stack: ["NestJS", "MongoDB", "TypeScript"],
    },
    {
      year: "2023",
      title: "AWS User Group Meetup committee",
      kind: "activity",
      problem: "An AWS UG meetup hosted at the Setel office needed smooth attendee handling.",
      built: "Registration forms and on-site coordination so attendees felt welcome from start to finish.",
      stack: ["Event coordination", "Community"],
    },
    {
      year: "2019",
      title: "Finalist, MSTB Software Test Design Competition",
      kind: "activity",
      problem: "Design the best test approach for a given case study.",
      built: "A test plan with test cases, pitched to a panel of judges.",
      stack: ["Test planning", "Test design", "Pitching"],
    },
    {
      year: "2019",
      title: "Finalist, MMU 3 Days of Code hackathon",
      kind: "activity",
      problem: "Make textbook learning more engaging for Malaysian students.",
      built: "EDAR, a mobile app that shows interactive augmented-reality content when you scan textbook objects.",
      stack: ["Mobile", "Augmented reality"],
    },
  ],

  skills: [
    {
      name: "languages & data",
      items: ["Node.js", "TypeScript", "JavaScript", "Java", "MongoDB", "SQL", "Redis", "HTML", "CSS"],
    },
    {
      name: "frameworks",
      items: ["React", "NestJS", "Next.js", "Spring", "REST"],
    },
    {
      name: "testing",
      items: ["Jest (unit & integration)", "K6 (performance)"],
    },
    {
      name: "tools & infra",
      items: ["Git (GitHub/GitLab)", "GitLab CI/CD", "Argo", "Grafana", "AWS", "Confluent", "Kafka", "RabbitMQ", "ServiceNow", "GitOps", "Terraform"],
    },
  ],

  languages: [
    { name: "Malay", level: "native" },
    { name: "English", level: "conversation & reading" },
  ],

  education: [
    {
      school: "Universiti Kebangsaan Malaysia (UKM)",
      location: "Bangi, Selangor",
      degree: "Bachelor of Software Engineering (Information System Development)",
      period: "2018 – 2021",
      cgpa: "3.76 / 4.00",
      subjects: ["Software Requirement Engineering", "Web Programming", "Advanced Database Systems", "Software Testing", "Decision Support Systems", "Data Analytics"],
      awards: ["JPA Scholar", "Dean's List", "Team Selangor Ambassador", "Golden Key Honor Society", "Faculty Graduate Award"],
    },
    {
      school: "Universiti Malaysia Perlis (UniMAP)",
      location: "Pauh, Perlis",
      degree: "Diploma in Computer Engineering",
      period: "2015 – 2018",
      cgpa: "3.75 / 4.00",
      subjects: ["Digital Systems", "Microcontrollers", "Database Systems", "Object Oriented Programming", "Electronic Circuits", "Electronic Instrumentation"],
      awards: ["Dean's List", "Anugerah Buku Konvokesyen"],
    },
  ],

  certifications: [
    {
      name: "ISTQB Certified Tester Foundation Level (CTFL)",
      issuer: "Malaysian Software Testing Board",
      issued: "Dec 2021",
      credentialId: "MY0061-21",
    },
  ],

  contact: {
    email: "hakimtakiyuddin@gmail.com",
    linkedin: "https://www.linkedin.com/in/hakimtakiyuddin/",
    github: "https://github.com/hakimtakiyuddin",
    cvPath: "/cv.pdf",
    cvFilename: "Hakim_Takiyuddin_CV.pdf",
  },
};
