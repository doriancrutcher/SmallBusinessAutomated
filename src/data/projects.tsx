import React from 'react';
import { BookOpen, FileText, Bot } from "lucide-react";

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
  links?: {
    case?: string;
    code?: string;
    live?: string;
  };
}

export const projects: Project[] = [
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
    meta: "Creator and Full Stack"
  },
  {
    id: "jerryBlueprintBot",
    title: "Jerry Blueprint Bot",
    industry: "Dev Rel and Gaming",
    problem: "Sharing Minecraft builds and step by step plans is slow and hard to reproduce",
    toolsUsed: ["Python","Discord.py","FastAPI","Pagoda Storage API","React"],
    agent: "Discord bot that records a world volume stores block coordinates and ids as a blueprint and can rebuild the structure block by block",
    builtLabel: "App Built",
    results: [
      "Chat commands set start and end points then capture blocks in that volume",
      "Rebuilds structures from saved blueprints for a watchable demo",
      "Companion site lets users publish and share blueprints with friends"
    ],
    description: "Built to demo the Pagoda storage API during developer relations work. Jerry acts as a chat proxy to capture blueprints and replay them so people can see their builds reconstructed in real time.",
    icon: <Bot className="w-5 h-5" />,
    tags: ["Developer Relations", "Gaming", "Discord Bot"],
    meta: "Creator and full stack",
    videoUrl: "https://www.youtube.com/embed/pSuTpjvfEEs?si=PI91J-WkN4O4eX9M"
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
      "Team 3 developers and 1 designer",
      "Reliable pipeline for large audiobook ingestion and streaming delivery",
      "Passed store navigation and accessibility reviews"
    ],
    description: "Frontend for mobile and web and technical product manager. Led 3 developers and 1 designer, ran customer interviews, and coordinated compliance.",
    icon: <BookOpen className="w-5 h-5" />,
    tags: ["Social Reading", "React Native", "AWS"],
    meta: "Technical PM and Frontend • Team 3 devs, 1 designer"
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

]; 