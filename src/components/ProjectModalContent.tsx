import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Globe, FileText } from 'lucide-react';

interface ProjectModalContentProps {
  title: string;
  meta?: string;
  problem: string;
  builtLabel: string;
  builtValue: string;
  tools: string[];
  results: string[];
  summary?: string;
  videoUrl?: string;
  links?: {
    case?: string;
    code?: string;
    live?: string;
  };
}

export function ProjectModalContent({
  title,
  meta,
  problem,
  builtLabel,
  builtValue,
  tools,
  results,
  summary,
  videoUrl,
  links
}: ProjectModalContentProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        {meta && (
          <p className="text-sm text-muted-foreground">{meta}</p>
        )}
      </div>

      {/* Problem and Built Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3">The Problem</h4>
          <p className="text-muted-foreground leading-relaxed">{problem}</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">{builtLabel}</h4>
          <p className="text-secondary leading-relaxed">{builtValue}</p>
        </div>
      </div>

      {/* Tools */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Tools Used</h4>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="secondary" className="bg-secondary/10 text-foreground border-secondary/20">
              {tool}
            </Badge>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Results</h4>
        <ol className="space-y-2 list-decimal list-inside">
          {results.map((result, index) => (
            <li key={index} className="text-muted-foreground leading-relaxed">
              {result}
            </li>
          ))}
        </ol>
      </div>

      {/* Summary */}
      {summary && (
        <div>
          <h4 className="font-semibold text-foreground mb-3">Summary</h4>
          <p className="text-muted-foreground leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Video Embed */}
      {videoUrl && (
        <div>
          <h4 className="font-semibold text-foreground mb-3">Demo</h4>
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-lg border border-zinc-800"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${title} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Footer Links */}
      {links && (links.case || links.code || links.live) && (
        <div className="pt-4 border-t border-zinc-800">
          <div className="flex flex-wrap gap-3">
            {links.case && (
              <a
                href={links.case}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                <FileText className="w-4 h-4" />
                Case Study
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {links.code && (
              <a
                href={links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                <Github className="w-4 h-4" />
                Code
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                <Globe className="w-4 h-4" />
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 