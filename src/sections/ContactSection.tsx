import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, Send, Terminal, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';
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

  const socialChannels = [
    {
      name: "GitHub",
      purpose: "Engineering Work & Code Repositories",
      url: PROFILE_DATA.github,
      handle: "Sivaprasad2k",
      icon: <GithubIcon className="w-5 h-5 text-slate-100" />,
      color: "border-slate-700 hover:border-sky-500",
      id: "social-github"
    },
    {
      name: "LinkedIn",
      purpose: "Professional Profile & Career Network",
      url: PROFILE_DATA.linkedin,
      handle: "sivaprasadml",
      icon: <LinkedinIcon className="w-5 h-5 text-sky-400" />,
      color: "border-slate-700 hover:border-sky-400",
      id: "social-linkedin"
    },
    {
      name: "Instagram",
      purpose: "Personal Layer & Community Context",
      url: PROFILE_DATA.instagram,
      handle: "@sivaprasad2k",
      icon: <InstagramIcon className="w-5 h-5 text-rose-400" />,
      color: "border-slate-700 hover:border-rose-400",
      id: "social-instagram"
    },
    {
      name: "Email",
      purpose: "Direct Communication & Engineering Inquiries",
      url: `mailto:${PROFILE_DATA.email}`,
      handle: PROFILE_DATA.email,
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      color: "border-slate-700 hover:border-emerald-400",
      id: "social-email"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>06.</span>
              <span className="uppercase tracking-widest">CONNECT & SOCIAL CHANNELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              ENGINEERING CONNECT HUB
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="btn-copy-email"
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors focus:ring-1 focus:ring-sky-500"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              <span>{copied ? 'EMAIL COPIED' : PROFILE_DATA.email}</span>
            </button>
          </div>
        </div>

        {/* Dedicated Channel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialChannels.map((ch) => (
            <a
              key={ch.name}
              id={ch.id}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#0b0f19] p-5 rounded-lg border ${ch.color} transition-all space-y-3 font-mono block group shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                  {ch.icon}
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div>
                <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block">{ch.purpose}</span>
                <h3 className="text-lg font-bold text-slate-100 font-sans group-hover:text-sky-300 transition-colors">{ch.name}</h3>
                <span className="text-xs text-slate-400 font-mono block truncate mt-0.5">{ch.handle}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Main Grid: Form Composer & Direct Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left Form Console */}
          <div className="lg:col-span-7 bg-[#0b0f19] p-6 sm:p-8 rounded-lg border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-200 font-bold">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>DIRECT TECHNICAL INQUIRY COMPOSER</span>
              </div>
              <MetricBadge label="MAILTO DISPATCH" variant="emerald" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              <div>
                <label htmlFor="contact-inquiry-type" className="block text-slate-400 text-[11px] mb-1">
                  INQUIRY CATEGORY
                </label>
                <select
                  id="contact-inquiry-type"
                  name="inquiryType"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="Backend Systems Role">Backend Engineering Role</option>
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
                  placeholder="Detail your inquiry, system requirements, or engineering specs..."
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
                <span>DISPATCH MAILTO PAYLOAD</span>
              </button>
            </form>
          </div>

          {/* Right Direct Email Info Box */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-lg border border-slate-800 font-mono text-xs space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="text-slate-400 font-bold uppercase">DIRECT COMMUNICATION</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                ACTIVE
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold font-sans text-slate-100">Ready to build production systems?</h3>
              <p className="font-sans text-slate-300 text-xs leading-relaxed">
                I am actively seeking backend engineering roles focused on Java/Spring Boot, domain modeling, relational database persistence, and system architecture.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-900">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">DIRECT EMAIL CONTACT</span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="inline-flex items-center gap-2 text-sky-400 hover:underline text-sm font-bold"
              >
                <Mail className="w-4 h-4" />
                <span>{PROFILE_DATA.email}</span>
              </a>
            </div>

            <div className="bg-[#05080e] p-4 rounded border border-slate-900 text-slate-400 text-[11px] font-sans space-y-1">
              <strong className="text-slate-200 font-mono block">Recruiter Quick Scan Available:</strong>
              <p>Click "QUICK SCAN" in the navigation bar anytime for a 30-second executive summary of experience and technical skills.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
