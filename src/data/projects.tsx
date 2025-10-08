import React from 'react';
import { BookOpen, FileText, Bot, Filter, Vote, Book, Video, Film } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  industry: string;
  problem: string;
  toolsUsed: string[];
  agent: string;
  builtLabel: string;
  results: string[];
  description: string;
  icon: React.ReactNode;
  tags: string[];
  meta?: string;
  videoUrl?: string;
  screenshot?: string;
  links?: {
    case?: string;
    code?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    id: "videoForgeAI",
    title: "VideoForge AI",
    industry: "Content Creation",
    problem: "Content creators need a streamlined workflow to turn ideas into production ready short form videos with scripts, visual plans, and export assets",
    toolsUsed: ["React", "AI", "OpenAI", "Content Generation", "Video Production Workflow"],
    agent: "AI powered creator tool that transforms ideas into ready to produce short videos with scripts, visual plans, and export assets",
    builtLabel: "App Built",
    results: [
      "Generates hook forward scripts that sound natural when spoken",
      "Produces beat by beat outlines with suggested b roll and on screen text",
      "Creates caption packs and social post copy for multiple platforms",
      "Suggests thumbnail ideas and title options",
      "Exports assets in formats that drop into CapCut or similar editors"
    ],
    description: "A creator tool designed to showcase AI powered workflows for content production. User enters a topic or link, and the app analyzes the source to produce two to three angles with hooks. After selecting an angle, the tool expands it into a timed script with scene notes and cut suggestions. Outputs captions, posting checklists, and optional prompts for image or video generation for b roll. Built to demonstrate the ability to design intelligent workflows that bridge ideation and production.",
    icon: <Film className="w-5 h-5" />,
    tags: ["Content Creation", "AI", "Video Production", "React"],
    meta: "Creator and Full Stack",
    links: {
      live: "https://vidforgeai.netlify.app/"
    }
  },
  {
    id: "pigeonQuill",
    title: "PigeonQuill",
    industry: "Study Tools",
    problem: "Studying from PDF textbooks is slow because you cannot quickly search figures, extract images, or get page aware help",
    toolsUsed: ["React", "PDF.js", "OpenAI", "Python", "FastAPI", "OCR", "Vector DB", "LangChain"],
    agent: "LLM powered study buddy for PDF textbooks with figure aware search, image extraction, page aware Q and A, and 1 click flashcards",
    builtLabel: "App Built",
    results: [
      "Find content by figure captions and labels",
      "Save images and ask targeted questions about them",
      "Generate flashcards from the current page with spaced repetition format"
    ],
    description: "A reader that rides along as you read. It knows your current page, answers in context, supports normal PDF tools, and lets you capture figures and facts as flashcards.",
    icon: <FileText className="w-5 h-5" />,
    tags: ["Study Tools", "React", "AI"],
    meta: "Creator and Full Stack",
    screenshot: "https://i.imgur.com/LhijfcL.png"
  },
  {
    id: "jerryBlueprintBot",
    title: "Jerry Blueprint Bot",
    industry: "Dev Rel and Gaming",
    problem: "Sharing Minecraft builds and step by step plans is slow and hard to reproduce",
    toolsUsed: ["Python","Discord.py","FastAPI","Pagoda Storage API","React","NEAR SDK"],
    agent: "Discord bot that records a world volume stores block coordinates and ids as a blueprint and can rebuild the structure block by block",
    builtLabel: "App Built",
    results: [
      "Chat commands set start and end points then capture blocks in that volume",
      "Rebuilds structures from saved blueprints for a watchable demo",
      "Companion site lets users publish and share blueprints with friends",
      "Extended demo showcased e-commerce integration for blueprint marketplace using NEAR SDK"
    ],
    description: "Built to demo the Pagoda storage API during developer relations work. Jerry acts as a chat proxy to capture blueprints and replay them so people can see their builds reconstructed in real time. Extended with an e-commerce marketplace demo to show gamers how to monetize their creations using blockchain technology.",
    icon: <Bot className="w-5 h-5" />,
    tags: ["Developer Relations", "Gaming", "Discord Bot"],
    meta: "Creator and full stack",
    videoUrl: "https://www.youtube.com/embed/pSuTpjvfEEs?si=PI91J-WkN4O4eX9M",
    links: {
      case: "https://www.youtube.com/watch?v=hIBfQxvPeis&t=1s"
    }
  },
  {
    id: "audioh",
    title: "Audioh",
    industry: "Social Reading",
    problem: "Audiobook listeners had no place for chapter level discussion, so clubs lost momentum between listens",
    toolsUsed: ["React Native","React","TypeScript","AWS Lambda","API Gateway","DynamoDB","S3","CloudFront","Cognito","Stripe"],
    agent: "Mobile and web audiobook club with chapter synced discussion, highlights, reading streaks, and club management",
    builtLabel: "App Built",
    results: [
      "First audiobook book club app",
      "Partnered with major distributors including Penguin Random House for content licensing",
      "Team of 3 developers and 1 designer working over 1.5 years",
      "Reliable pipeline for large audiobook ingestion and streaming delivery",
      "Passed store navigation and accessibility reviews for iOS and Android"
    ],
    description: "A startup venture built with friends over a year and a half. As Technical PM and Frontend developer, I led a team of 3 developers and 1 designer through the entire product lifecycle. We successfully partnered with major publishers including Penguin Random House and other leading distributors to license audiobook content. Built full mobile and web experiences with chapter-synced discussions, highlights, and club management features. Though the app is no longer live, it represented a pioneering effort in social audiobook experiences.",
    icon: <BookOpen className="w-5 h-5" />,
    tags: ["Social Reading", "React Native", "AWS"],
    meta: "Technical PM and Frontend • Team 3 devs, 1 designer",
    screenshot: "https://i.imgur.com/Bpo7FzW.jpeg"
  },
  {
    id: "airbnbAgent",
    title: "Airbnb Agent",
    industry: "Hospitality",
    problem: "Hosts spend hours managing guest communications, scheduling cleaners, and coordinating maintenance between bookings",
    toolsUsed: ["RelevanceAI", "Zapier", "Notion", "Twilio", "Custom API"],
    agent: "Intelligent hospitality management agent that handles guest messaging, cleaner coordination, and maintenance scheduling",
    builtLabel: "AI Agent Built",
    results: [
      "Automated guest messaging and booking management",
      "Smart cleaner scheduling and buffer time management",
      "Maintenance request triaging and contractor coordination"
    ],
    description: "Built an AI agent that automatically manages all aspects of short-term rental operations, from guest communication to maintenance coordination.",
    icon: <FileText className="w-5 h-5" />,
    tags: ["Hospitality", "AI", "Automation"],
    meta: "Creator and Full Stack",
    videoUrl: "https://www.youtube.com/embed/618woMJox54?start=168"
  },
  {
    id: "newsImpactFilter",
    title: "News Impact Filter",
    industry: "Personal Research",
    problem: "People feel anxious and overwhelmed by nonstop headlines. It is hard to know which stories actually affect your life or work.",
    toolsUsed: ["React", "OpenAI", "NewsAPI", "Firebase Auth", "Firestore", "Firebase Cloud Functions"],
    agent: "A personal news triage app that reads headlines and full articles, matches them to a user profile and keywords, and flags only the items that will matter. Each alert includes a short 'why this matters to you' note and optional next steps. Supports a daily brief view and on demand checks.",
    builtLabel: "App Built",
    results: [
      "Time saved: Daily scrolling replaced by a 1 minute brief",
      "Signal: Only triggers when an impact threshold is met",
      "Clarity: Every alert explains why it is relevant to you"
    ],
    description: "A calm filter that turns the news firehose into personal impact alerts with clear reasons and zero doomscrolling.",
    icon: <Filter className="w-5 h-5" />,
    tags: ["Personal Research", "AI", "News", "React"],
    meta: "Creator and Full Stack"
  },
  {
    id: "blockchainVoting",
    title: "Blockchain Voting App",
    industry: "Civic Tech",
    problem: "Traditional voting systems lack transparency and verifiability, which makes it difficult to ensure election integrity and voter confidence.",
    toolsUsed: ["Solidity", "Ethereum", "React", "Web3.js", "Truffle", "MetaMask"],
    agent: "Decentralized voting application built on blockchain that delivers transparent, tamper proof elections with verifiable results.",
    builtLabel: "App Built",
    results: [
      "Immutable voting records on blockchain",
      "Complete transparency and auditability",
      "Anonymous yet verifiable voting mechanism",
      "Real time vote counting and results",
      "Most viewed YouTube tutorial with 56K views",
      "Flagship live workshop during Developer Relations at NEAR, used to onboard and mentor new builders"
    ],
    description: "A blockchain based voting system that leverages smart contracts to create secure, transparent, and tamper proof elections. Built with Ethereum and React for a seamless user experience. The project anchored my NEAR DevRel workshops and the companion tutorial reached 56K views, becoming my go to demo for teaching end to end decentralized application development.",
    icon: <Vote className="w-5 h-5" />,
    tags: ["Blockchain", "Civic Tech", "Web3", "React"],
    meta: "Creator and Full Stack",
    videoUrl: "https://www.youtube.com/embed/sm8w9tDnMZc",
    links: {
      code: "https://github.com/doriancrutcher/blockvotetutorial2"
    }
  },
  {
    id: "nearDocumentation",
    title: "NEAR Protocol Documentation",
    industry: "Developer Relations",
    problem: "Blockchain developers need clear, comprehensive documentation to build smart contracts and dApps on NEAR Protocol",
    toolsUsed: ["Technical Writing", "NEAR SDK", "JavaScript", "Rust", "Python", "Markdown", "Documentation Tools"],
    agent: "Comprehensive documentation and tutorials for NEAR Protocol smart contract development",
    builtLabel: "Contribution",
    results: [
      "Created written examples for smart contract quickstart guides",
      "Modified and enhanced existing documentation for clarity",
      "Improved developer onboarding experience",
      "Contributed to official NEAR Protocol documentation website"
    ],
    description: "Technical writing and documentation contributions to the NEAR Protocol developer resources. Focused on creating clear, practical examples and improving existing documentation to help developers quickly understand and build on the NEAR blockchain.",
    icon: <Book className="w-5 h-5" />,
    tags: ["Documentation", "Technical Writing", "Developer Relations", "Blockchain"],
    meta: "Technical Writer and Documentation Contributor",
    screenshot: "https://i.imgur.com/Oh1PCgb.png",
    links: {
      live: "https://docs.near.org/smart-contracts/quickstart"
    }
  },
  {
    id: "nearJavaScriptSDK",
    title: "Getting Started with NEAR JavaScript SDK",
    industry: "Developer Education",
    problem: "Developers need hands-on guidance to understand NEAR blockchain development fundamentals and JavaScript SDK implementation",
    toolsUsed: ["NEAR JavaScript SDK", "JavaScript", "Smart Contracts", "Blockchain", "Live Coding"],
    agent: "Comprehensive live workshop teaching developers how to build on NEAR blockchain using the JavaScript SDK",
    builtLabel: "Workshop Delivered",
    results: [
      "Setting up the NEAR JS SDK in a local environment",
      "Writing and deploying smart contracts",
      "Interacting with accounts and transactions",
      "Understanding gas, fees, and wallet integration",
      "Real-time coding walkthrough with live commentary"
    ],
    description: "A comprehensive developer education session walking through the fundamentals of building on the NEAR blockchain using the official JavaScript SDK. Covered setup, environment configuration, smart contract interactions, and practical code examples for connecting decentralized applications to NEAR. Demonstrates clear technical communication skills by combining blockchain knowledge with hands-on coding demonstrations to support the developer community.",
    icon: <Book className="w-5 h-5" />,
    tags: ["Developer Education", "Blockchain", "JavaScript", "Live Workshop"],
    meta: "Technical Educator and Developer Relations",
    videoUrl: "https://www.youtube.com/embed/fQkz2DLmXsI",
    screenshot: "https://i.imgur.com/Oh1PCgb.png"
  },
  {
    id: "nearBytes",
    title: "NEARbytes Series",
    industry: "Developer Relations",
    problem: "Developers need quick, digestible updates on the latest developments and tools in the NEAR ecosystem",
    toolsUsed: ["Video Production", "Technical Communication", "NEAR Protocol", "Content Creation"],
    agent: "Short-form video series delivering quick information updates about the NEAR ecosystem for developers",
    builtLabel: "Series Created",
    results: [
      "Created bite-sized video content for developer engagement",
      "Covered ecosystem updates, tools, and features",
      "Made complex blockchain concepts accessible in short format",
      "Kept developer community informed and engaged"
    ],
    description: "A short-form video series designed to give developers quick insights into what's happening in the NEAR ecosystem. NEARbytes delivered concise, information-packed updates about new tools, features, and developments, making it easy for busy developers to stay current with the NEAR blockchain. Combined technical knowledge with clear communication to create engaging developer-focused content.",
    icon: <Video className="w-5 h-5" />,
    tags: ["Developer Relations", "Video Content", "Blockchain", "NEAR Protocol"],
    meta: "Content Creator and Developer Relations",
    videoUrl: "https://www.youtube.com/embed/oh59VVo8oH8",
    screenshot: "https://i.imgur.com/Oh1PCgb.png"
  },
  {
    id: "nearNFTMinting",
    title: "NEAR NFT Minting Workshop",
    industry: "Developer Education",
    problem: "Developers need practical, hands-on tutorials to understand NFT creation on NEAR blockchain using both CLI and JavaScript",
    toolsUsed: ["Rust", "NEAR CLI", "NEAR API JS", "JavaScript", "WASM", "VS Code", "Yarn"],
    agent: "Practical workshop that mints an NFT on NEAR using both NEAR CLI and a minimal JavaScript frontend",
    builtLabel: "Workshop Delivered",
    results: [
      "Contract struct for NFTs including owner tracking and metadata",
      "View methods versus change methods",
      "Build Rust to WASM and deploy with NEAR CLI",
      "Initialize contract metadata and verify state",
      "Attach deposits for storage and set gas",
      "Configure NEAR API JS and call NFT mint from a web app"
    ],
    description: "A comprehensive workshop recorded at a conference in Denver teaching developers how to mint NFTs on the NEAR blockchain. Covers contract structure, initialization, storage staking, and NEAR API JS integration. The session walks through building a Rust smart contract, compiling to WASM, deploying with NEAR CLI, and creating a simple frontend to mint NFTs. Includes detailed chapters: Intro and plan (00:00), Build and deploy (13:50), Initialize and verify (18:45), Mint with CLI (21:57), Frontend wiring and mint from UI (25:16), and Confirm in wallet (35:39).",
    icon: <Video className="w-5 h-5" />,
    tags: ["NFT", "Blockchain", "Rust", "Developer Education", "NEAR Protocol"],
    meta: "Conference Speaker and Technical Educator",
    videoUrl: "https://www.youtube.com/embed/Rt_cmIq12lo",
    screenshot: "https://i.imgur.com/Oh1PCgb.png"
  }
]; 