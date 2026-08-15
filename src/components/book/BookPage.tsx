import React from 'react';
import type { ProjectBookDefinition, ProjectPage } from '../../data/projectBooks';
import { ArchitectureDiagram } from './artifacts/ArchitectureDiagram';
import { WorkflowDiagram } from './artifacts/WorkflowDiagram';
import { DataModelDiagram } from './artifacts/DataModelDiagram';
import { DecisionComparison } from './artifacts/DecisionComparison';
import { RepositoryArtifact } from './artifacts/RepositoryArtifact';
import { CheckCircle2 } from 'lucide-react';

interface BookPageProps {
  page: ProjectPage;
  book: ProjectBookDefinition;
}

export const BookPage: React.FC<BookPageProps> = ({ page, book }) => {
  const { title, subtitle, content, bulletPoints, codeSnippet, artifactId } = page;
  const { projectRef } = book;

  return (
    <div className="w-full h-full bg-[#E8E2D6] text-[#0B0D10] font-sans p-6 sm:p-10 space-y-6 overflow-y-auto max-h-[75vh] select-text">
      {/* Page Header */}
      <div className="border-b-2 border-[#0B0D10]/20 pb-3 font-mono">
        <div className="flex items-center justify-between text-[10px] text-[#64748b] font-bold uppercase tracking-widest">
          <span>{book.title}</span>
          <span>PAGE 0{page.pageNumber}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B0D10] mt-1">{title}</h3>
        {subtitle && <p className="text-xs text-slate-700 font-bold mt-0.5">{subtitle}</p>}
      </div>

      {/* Main Text Content */}
      <div className="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
        {content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Bullet Points */}
      {bulletPoints && bulletPoints.length > 0 && (
        <div className="space-y-2 bg-[#0B0D10]/5 p-4 rounded-lg border border-[#0B0D10]/15 text-xs font-sans">
          <strong className="text-[10px] font-mono font-bold uppercase text-[#0B0D10] block">KEY HIGHLIGHTS & BOUNDARIES</strong>
          <div className="space-y-1.5">
            {bulletPoints.map((bp, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{bp}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Code Snippet Display */}
      {codeSnippet && (
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono font-bold uppercase text-slate-600 block">CODE PROOF & IMPLEMENTATION</span>
          <div className="bg-[#0B0D10] p-4 rounded-lg border border-slate-800 font-mono text-[11px] text-[#E8E2D6] overflow-x-auto shadow-inner">
            <pre><code>{codeSnippet}</code></pre>
          </div>
        </div>
      )}

      {/* Interactive Artifact Mounting */}
      {artifactId === 'architecture' && (
        <div className="pt-2">
          <ArchitectureDiagram nodes={projectRef.architectureLayers} />
        </div>
      )}

      {artifactId === 'workflow' && (
        <div className="pt-2">
          <WorkflowDiagram project={projectRef} />
        </div>
      )}

      {artifactId === 'datamodel' && (
        <div className="pt-2">
          <DataModelDiagram />
        </div>
      )}

      {artifactId === 'tradeoffs' && (
        <div className="pt-2">
          <DecisionComparison project={projectRef} />
        </div>
      )}

      {artifactId === 'repository' && (
        <div className="pt-2">
          <RepositoryArtifact project={projectRef} />
        </div>
      )}
    </div>
  );
};
