import React, { useState } from 'react';
import type { Project } from '../../../data/projects';
import { Layers } from 'lucide-react';

interface WorkflowDiagramProps {
  project: Project;
}

export const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ project }) => {
  const { workflowStates, stateMachineStates, rbacRoles, asyncPipelineSteps, mlPipelineSteps } = project;

  const [selectedStateId, setSelectedStateId] = useState<string>(
    workflowStates ? workflowStates[0].id :
    stateMachineStates ? stateMachineStates[0].id :
    rbacRoles ? rbacRoles[0].role :
    asyncPipelineSteps ? asyncPipelineSteps[0].id :
    mlPipelineSteps ? mlPipelineSteps[0].id : ''
  );

  return (
    <div className="bg-[#0B0D10] border border-[#25282D] rounded-lg p-4 font-mono text-xs space-y-4 shadow-inner">
      <div className="flex items-center justify-between text-[10px] text-[#7EE2A8] border-b border-[#25282D] pb-2 font-bold uppercase">
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          <span>INTERACTIVE WORKFLOW STATE ENGINE</span>
        </div>
        <span className="text-[9px] text-[#64748b]">CLICK STATE TO INSPECT INVARIANTS</span>
      </div>

      {/* 1. Crop Workflow States */}
      {workflowStates && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {workflowStates.map((st) => {
              const isSelected = selectedStateId === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedStateId(st.id)}
                  className={`p-2 rounded border text-center font-bold text-[10px] truncate transition-all ${
                    isSelected
                      ? 'bg-[#7EE2A8]/15 border-[#7EE2A8] text-[#7EE2A8] shadow-[0_0_10px_rgba(126,226,168,0.2)]'
                      : 'bg-[#17191D] border-[#25282D] text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {st.name}
                </button>
              );
            })}
          </div>

          {workflowStates.find(s => s.id === selectedStateId) && (
            <div className="bg-[#17191D] p-3.5 rounded border border-[#25282D] space-y-2 text-[11px]">
              <div className="flex justify-between text-[#7EE2A8] font-bold">
                <span>STATE: {workflowStates.find(s => s.id === selectedStateId)?.name}</span>
                <span className="text-[9px] text-[#64748b]">MODULE: {workflowStates.find(s => s.id === selectedStateId)?.responsibleModule}</span>
              </div>
              <p className="font-sans text-slate-300 bg-[#0B0D10] p-2.5 rounded border border-[#25282D]">
                <strong className="text-white block text-[10px] uppercase font-bold mb-0.5">BUSINESS INVARIANT:</strong>
                {workflowStates.find(s => s.id === selectedStateId)?.businessInvariant}
              </p>
              <p className="font-mono text-slate-400 text-[10px] bg-[#0B0D10] p-2.5 rounded border border-[#25282D]">
                <strong className="text-[#65B8FF] block text-[10px] uppercase font-bold mb-0.5">TECHNICAL IMPLEMENTATION:</strong>
                {workflowStates.find(s => s.id === selectedStateId)?.technicalImplementation}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 2. CareerPath State Machine */}
      {stateMachineStates && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {stateMachineStates.map((st) => {
              const isSelected = selectedStateId === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedStateId(st.id)}
                  className={`p-2 rounded border text-center font-bold text-[10px] truncate transition-all ${
                    isSelected
                      ? 'bg-[#65B8FF]/15 border-[#65B8FF] text-[#65B8FF]'
                      : 'bg-[#17191D] border-[#25282D] text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {st.name}
                </button>
              );
            })}
          </div>

          {stateMachineStates.find(s => s.id === selectedStateId) && (
            <div className="bg-[#17191D] p-3.5 rounded border border-[#25282D] space-y-2 text-[11px]">
              <span className="text-[#65B8FF] font-bold block">FSM STATE: {stateMachineStates.find(s => s.id === selectedStateId)?.name}</span>
              <p className="font-mono text-slate-300 text-[10px] bg-[#0B0D10] p-2.5 rounded border border-[#25282D]">
                <strong className="text-[#7EE2A8] block text-[10px] uppercase font-bold mb-0.5">PERSISTENCE MODEL:</strong>
                {stateMachineStates.find(s => s.id === selectedStateId)?.persistenceModel}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 3. Real Estate Hub RBAC Roles */}
      {rbacRoles && (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-1.5">
            {rbacRoles.map((r) => {
              const isSelected = selectedStateId === r.role;
              return (
                <button
                  key={r.role}
                  type="button"
                  onClick={() => setSelectedStateId(r.role)}
                  className={`p-2 rounded border text-center font-bold text-[10px] transition-all ${
                    isSelected
                      ? 'bg-[#65B8FF]/15 border-[#65B8FF] text-[#65B8FF]'
                      : 'bg-[#17191D] border-[#25282D] text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {r.role}
                </button>
              );
            })}
          </div>

          {rbacRoles.find(r => r.role === selectedStateId) && (
            <div className="bg-[#17191D] p-3.5 rounded border border-[#25282D] space-y-2 text-[11px]">
              <span className="text-[#65B8FF] font-bold block">{rbacRoles.find(r => r.role === selectedStateId)?.title}</span>
              <div className="flex flex-wrap gap-1">
                {rbacRoles.find(r => r.role === selectedStateId)?.permissions.map(p => (
                  <span key={p} className="px-2 py-0.5 rounded bg-[#0B0D10] border border-[#25282D] text-[#7EE2A8] text-[9px]">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. Avis Async Pipeline */}
      {asyncPipelineSteps && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {asyncPipelineSteps.map((st) => {
              const isSelected = selectedStateId === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedStateId(st.id)}
                  className={`p-2.5 rounded border text-left transition-all ${
                    isSelected
                      ? 'bg-sky-950 border-sky-400 text-sky-300 font-bold'
                      : 'bg-[#17191D] border-[#25282D] text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  <div className="text-[8px] text-[#64748b]">STEP {st.stepNumber}</div>
                  <div className="text-xs font-bold truncate">{st.name}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. ML Pipeline Steps */}
      {mlPipelineSteps && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {mlPipelineSteps.map((st) => {
              const isSelected = selectedStateId === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedStateId(st.id)}
                  className={`p-2 rounded border text-center transition-all ${
                    isSelected
                      ? 'bg-indigo-950 border-indigo-400 text-indigo-300 font-bold'
                      : 'bg-[#17191D] border-[#25282D] text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  <div className="text-[8px] text-[#64748b]">STAGE {st.stepNumber}</div>
                  <div className="text-[10px] font-bold truncate">{st.name}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
