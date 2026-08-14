import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, Send, Terminal, CheckCircle2, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { MetricBadge } from '../components/MetricBadge';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Backend Systems Role');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[System Inquiry: ${inquiryType}] from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(`Sender: ${senderName}\nEmail: ${senderEmail}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedPayload = JSON.stringify({
    protocol: "MAILTO DISPATCH",
    recipient: PROFILE_DATA.email,
    payload: {
      sender: senderName || "Visitor",
      contactEmail: senderEmail || "client@company.com",
      topic: inquiryType,
      messageBody: message || "Engineering collaboration inquiry..."
    }
  }, null, 2);

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>06.</span>
              <span className="uppercase tracking-widest">CONTACT & INQUIRIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              INITIATE TECHNICAL CHANNEL
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="btn-copy-email"
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors focus:ring-1 focus:ring-sky-500"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              <span>{copied ? 'EMAIL COPIED' : PROFILE_DATA.email}</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Form Console & Live JSON Payload Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Console */}
          <div className="lg:col-span-6 bg-[#0b0f19] p-6 rounded-lg border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-200 font-bold">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>TECHNICAL MESSAGE COMPOSER</span>
              </div>
              <MetricBadge label="CLIENT MAILTO DISPATCH" variant="emerald" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label htmlFor="contact-name" className="block text-slate-400 text-[11px] mb-1">
                  YOUR NAME / ORGANIZATION
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Engineering Lead"
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 focus:border-sky-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-slate-400 text-[11px] mb-1">
                  RETURN EMAIL ADDRESS
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 focus:border-sky-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-inquiry-type" className="block text-slate-400 text-[11px] mb-1">
                  INQUIRY TYPE / CATEGORY
                </label>
                <select
                  id="contact-inquiry-type"
                  name="inquiryType"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="Backend Systems Role">Backend Systems Role</option>
                  <option value="Software Architecture Collaboration">Software Architecture Collaboration</option>
                  <option value="Open Source Inquiry">Open Source Inquiry</option>
                  <option value="General Engineering Query">General Engineering Query</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-slate-400 text-[11px] mb-1">
                  MESSAGE BODY
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Detail your inquiry, system requirements, or role specs..."
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 focus:border-sky-500 focus:outline-none transition-colors font-sans text-xs"
                  required
                />
              </div>

              <button
                id="btn-contact-submit"
                type="submit"
                className="w-full py-3 px-4 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-600/20 focus:ring-2 focus:ring-sky-400"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH MESSAGE PAYLOAD</span>
              </button>
            </form>
          </div>

          {/* Right Live JSON Payload Inspector */}
          <div className="lg:col-span-6 bg-slate-950 p-6 rounded-lg border border-slate-800 font-mono text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="text-slate-400 font-bold">LIVE MESSAGE PAYLOAD PREVIEW</span>
              <span className="text-[10px] text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
                JSON STREAM
              </span>
            </div>

            <div className="bg-[#05080e] p-4 rounded border border-slate-900 text-emerald-400 overflow-x-auto">
              <pre className="text-[11px]"><code>{formattedPayload}</code></pre>
            </div>

            <div className="pt-3 border-t border-slate-900 space-y-3 font-sans text-xs text-slate-400">
              <span className="font-mono text-[10px] text-slate-500 uppercase block font-bold">DIRECT CHANNELS</span>
              <div className="flex flex-wrap gap-4 font-mono text-xs">
                <a href={`mailto:${PROFILE_DATA.email}`} className="flex items-center gap-2 text-sky-400 hover:underline" id="link-direct-email">
                  <Mail className="w-4 h-4" />
                  <span>{PROFILE_DATA.email}</span>
                </a>
                <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-400 hover:underline" id="link-direct-linkedin">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>linkedin.com/in/sivaprasadml</span>
                </a>
                <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-400 hover:underline" id="link-direct-github">
                  <GithubIcon className="w-4 h-4" />
                  <span>github.com/Sivaprasad2k</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
