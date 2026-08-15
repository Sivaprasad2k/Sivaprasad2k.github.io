import React, { useState } from 'react';
import type { Project } from '../../data/projects';
import { MetricBadge } from '../MetricBadge';
import { Layers, Shield, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../Icons';

interface RealEstateRbacExplorerProps {
  project: Project;
  onOpenArchitecture: () => void;
}

export const RealEstateRbacExplorer: React.FC<RealEstateRbacExplorerProps> = ({ project, onOpenArchitecture }) => {
  const roles = project.rbacRoles || [];
  const [selectedRoleName, setSelectedRoleName] = useState<'USER' | 'AGENT' | 'ADMIN'>('AGENT');

  const activeRole = roles.find(r => r.role === selectedRoleName) || roles[0];

  return (
    <div id={`project-card-${project.id}`} className="bg-[#0b0f19] border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-xl relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">INTERACTION: RBAC EXPLORER</span>
            <MetricBadge label={project.status} variant="indigo" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-100">{project.title}</h3>
        </div>

        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>SOURCE CODE</span>
            </a>
          )}
          <button
            type="button"
            onClick={onOpenArchitecture}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-950/80 border border-amber-800 text-xs font-mono text-amber-300 hover:bg-amber-900 transition-all"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURE</span>
          </button>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm font-sans text-slate-300 leading-relaxed">
        {project.summary}
      </p>

      {/* Role Selection Tabs */}
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-400">
          <span className="font-bold text-amber-400">FINE-GRAINED ROLE-BASED ACCESS CONTROL (RBAC)</span>
          <span className="text-[10px] text-slate-500">SELECT A ROLE TO INSPECT PERMISSIONS & API BOUNDARIES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {roles.map((r) => {
            const isSelected = selectedRoleName === r.role;
            return (
              <button
                key={r.role}
                type="button"
                onClick={() => setSelectedRoleName(r.role)}
                className={`p-3.5 rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'bg-amber-950/90 border-amber-400 text-amber-300 font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-extrabold">{r.role} ROLE</span>
                  <Shield className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                </div>
                <div className="text-[10px] text-slate-500 font-sans">{r.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Role Permissions & API Boundaries Inspector */}
      {activeRole && (
        <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-5 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-slate-100 text-sm">INSPECTING ROLE AUTHORITY: ROLE_{activeRole.role}</span>
            </div>
            <span className="text-[10px] text-slate-500">{activeRole.permissions.length} GRANTED PERMISSIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Granted Permissions */}
            <div className="bg-slate-900/80 p-4 rounded border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>GRANTED PERMISSIONS</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeRole.permissions.map((p) => (
                  <span key={p} className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-bold text-xs">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Accessible Operations */}
            <div className="bg-slate-900/80 p-4 rounded border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px]">
                <ArrowRight className="w-3.5 h-3.5" />
                <span>ACCESSIBLE REST ENDPOINTS</span>
              </div>
              <div className="space-y-1">
                {activeRole.accessibleOperations.map((op) => (
                  <div key={op} className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-200 text-[11px] font-mono">
                    {op}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Constraints */}
          <div className="bg-slate-900/60 p-4 rounded border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px]">
              <Lock className="w-3.5 h-3.5" />
              <span>SPRING SECURITY ANNOTATION & ENFORCEMENT</span>
            </div>
            <p className="font-mono text-amber-300 text-xs bg-slate-950 p-2.5 rounded border border-slate-800 break-all">
              {activeRole.securityConstraints}
            </p>
          </div>
        </div>
      )}

      {/* Specs Footer */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60 font-mono text-[11px]">
        {project.keySpecs.map((spec) => (
          <span key={spec.label} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
            <strong className="text-slate-200">{spec.label}:</strong> {spec.value}
          </span>
        ))}
      </div>
    </div>
  );
};
