import { useState, useEffect } from 'react';

export function TerminalWidget() {
  const [time, setTime] = useState<string>('');
  const [uptime, setUptime] = useState<number>(1420);
  const [activeTab, setActiveTab] = useState<'TELEMETRY' | 'METRICS'>('TELEMETRY');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(() => {
      updateTime();
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        background: 'var(--bg-dark)',
        color: '#A0AEC0',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-strong)',
        boxShadow: '0 16px 40px rgba(18, 18, 18, 0.25)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        overflow: 'hidden'
      }}
    >
      {/* Terminal Title Bar */}
      <div style={{ background: '#1A202C', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #2D3748' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-red)' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ECC94B' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#48BB78' }} />
          <span style={{ marginLeft: 8, color: '#E2E8F0', fontWeight: 600, fontSize: '0.72rem' }}>
            ENGINEERING TELEMETRY v2.6
          </span>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: 10, fontSize: '0.68rem' }}>
          <button
            onClick={() => setActiveTab('TELEMETRY')}
            style={{ background: 'none', border: 'none', color: activeTab === 'TELEMETRY' ? 'var(--accent-red)' : '#718096', cursor: 'pointer', fontWeight: 600 }}
          >
            [ TELEMETRY ]
          </button>
          <button
            onClick={() => setActiveTab('METRICS')}
            style={{ background: 'none', border: 'none', color: activeTab === 'METRICS' ? 'var(--accent-red)' : '#718096', cursor: 'pointer', fontWeight: 600 }}
          >
            [ METRICS ]
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div style={{ padding: '16px 18px', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {activeTab === 'TELEMETRY' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ color: '#48BB78', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>●</span> STATUS: AVAILABLE FOR SOFTWARE ROLES
            </div>
            <div style={{ color: '#E2E8F0' }}>
              $ sysctl -a | grep siva.engineering
            </div>
            <div style={{ color: '#718096', paddingLeft: 12 }}>
              CORE: Java 21 / Spring Boot 3 / PostgreSQL<br />
              PIPELINE: FastAPI / Python Inference / Async Tasks<br />
              UX: React 19 / TypeScript / Swiss Brutalism
            </div>
            <div style={{ color: '#CBD5E0', marginTop: 4 }}>
              SYSTEM_TIME : {time || '18:30:00'} IST<br />
              UPTIME      : {uptime}s (STABLE)
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              [ METRICS & PERFORMANCE INVARIANTS ]
            </div>
            <div style={{ color: '#E2E8F0' }}>
              REST_API_LATENCY  : &lt; 45ms (p99)<br />
              DATABASE_POOL     : HikariCP 20 connections<br />
              STATE_AUTOMATA    : Strict invariant validation<br />
              ASYNC_QUEUE       : Telemetry worker pipeline
            </div>
            <div style={{ color: '#48BB78', marginTop: 6 }}>
              PASSED 48 SYSTEM CHECKS (100% HEALTH)
            </div>
          </div>
        )}

        {/* ASCII Prompt Line */}
        <div style={{ borderTop: '1px solid #2D3748', paddingTop: 10, marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent-red)' }}>
          <span>siva@dossier:~$</span>
          <span style={{ color: '#E2E8F0', animation: 'blink 1s infinite' }}>_</span>
        </div>
      </div>
    </div>
  );
}
