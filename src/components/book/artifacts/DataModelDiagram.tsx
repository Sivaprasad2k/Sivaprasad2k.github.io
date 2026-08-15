import React, { useState } from 'react';
import { Database, Key, Link2 } from 'lucide-react';

export const DataModelDiagram: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<string>('JobApplication');

  const entities = [
    {
      name: 'Candidate',
      type: 'Entity Root',
      fields: ['id (PK)', 'email (UNIQUE)', 'name', 'password_hash', 'created_at'],
      relationships: ['1:N → JobApplication']
    },
    {
      name: 'JobApplication',
      type: 'Transactional State Entity',
      fields: ['id (PK)', 'candidate_id (FK)', 'company_name', 'position_title', 'status (ENUM)', 'date_applied'],
      relationships: ['N:1 → Candidate', '1:N → InterviewRound', '1:N → ApplicationAuditLog']
    },
    {
      name: 'InterviewRound',
      type: 'Child Entity',
      fields: ['id (PK)', 'application_id (FK)', 'round_number', 'scheduled_at', 'interviewer_notes', 'outcome'],
      relationships: ['N:1 → JobApplication']
    },
    {
      name: 'ApplicationAuditLog',
      type: 'Audit History Table',
      fields: ['id (PK)', 'application_id (FK)', 'previous_status', 'new_status', 'transitioned_at'],
      relationships: ['N:1 → JobApplication']
    }
  ];

  const activeEntity = entities.find(e => e.name === selectedEntity) || entities[0];

  return (
    <div className="bg-[#0B0D10] border border-[#25282D] rounded-lg p-4 font-mono text-xs space-y-4 shadow-inner">
      <div className="flex items-center justify-between text-[10px] text-[#65B8FF] border-b border-[#25282D] pb-2 font-bold uppercase">
        <div className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5" />
          <span>RELATIONAL DATA MODEL DIAGRAM</span>
        </div>
        <span className="text-[9px] text-[#64748b]">CLICK ENTITY TO INSPECT SCHEMA</span>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        {entities.map((e) => {
          const isSelected = selectedEntity === e.name;
          return (
            <button
              key={e.name}
              type="button"
              onClick={() => setSelectedEntity(e.name)}
              className={`p-2.5 rounded border text-left transition-all ${
                isSelected
                  ? 'bg-[#65B8FF]/15 border-[#65B8FF] text-[#65B8FF] font-bold'
                  : 'bg-[#17191D] border-[#25282D] text-slate-400 hover:border-slate-600 hover:text-white'
              }`}
            >
              <div className="text-[8px] text-[#64748b]">{e.type}</div>
              <div className="text-xs font-bold truncate">{e.name}</div>
            </button>
          );
        })}
      </div>

      {activeEntity && (
        <div className="bg-[#17191D] p-3.5 rounded border border-[#25282D] space-y-2 text-[11px]">
          <div className="flex items-center justify-between text-[#65B8FF] font-bold">
            <span>ENTITY: {activeEntity.name}</span>
            <span className="text-[9px] text-[#7EE2A8]">{activeEntity.type}</span>
          </div>

          <div className="space-y-1 bg-[#0B0D10] p-2.5 rounded border border-[#25282D]">
            <span className="text-[9px] text-[#64748b] font-bold block uppercase">TABLE COLUMNS / FIELDS</span>
            <div className="flex flex-wrap gap-1">
              {activeEntity.fields.map(f => (
                <span key={f} className="px-2 py-0.5 rounded bg-[#17191D] border border-[#25282D] text-slate-300 text-[9px] flex items-center gap-1">
                  <Key className="w-2.5 h-2.5 text-[#65B8FF]" />
                  <span>{f}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1 bg-[#0B0D10] p-2.5 rounded border border-[#25282D]">
            <span className="text-[9px] text-[#64748b] font-bold block uppercase">FOREIGN KEY MAPPINGS</span>
            <div className="flex flex-wrap gap-1">
              {activeEntity.relationships.map(r => (
                <span key={r} className="px-2 py-0.5 rounded bg-[#17191D] border border-[#25282D] text-[#7EE2A8] text-[9px] flex items-center gap-1">
                  <Link2 className="w-2.5 h-2.5 text-[#7EE2A8]" />
                  <span>{r}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
