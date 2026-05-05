import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  User, 
  Download, 
  Share2, 
  ShieldCheck,
  GraduationCap,
  Users,
  Lightbulb
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { NAVNEET_INFO, SOCIAL_LINKS } from '../constants';
import { downloadVCard } from '../lib/vcard';

const LogoB = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 mb-4 drop-shadow-lg">
    <defs>
      <linearGradient id="purpleGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#84CC16" />
      </linearGradient>
      <mask id="lionMask">
        <rect x="0" y="0" width="100" height="100" fill="white" />
        {/* Simple lion head cutout shape */}
        <path d="M45 35 Q55 25 65 35 Q75 45 65 55 Q55 65 45 55 Z" fill="black" />
      </mask>
    </defs>
    
    {/* Stylized 'B' */}
    <path 
      d="M30 20 H55 C70 20 75 35 60 45 C75 55 70 80 55 80 H30 V20" 
      fill="none" 
      stroke="url(#purpleGreen)" 
      strokeWidth="10" 
      strokeLinecap="round"
      className="drop-shadow-md"
    />
    
    {/* Lion Mane Patterns (Purple) */}
    <path 
      d="M58 35 Q70 20 80 40 Q90 60 70 70" 
      fill="none" 
      stroke="#7C3AED" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
    <path 
      d="M62 45 Q75 40 82 55 Q85 70 75 75" 
      fill="none" 
      stroke="#84CC16" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />

    {/* Digital/Tech Traces */}
    <rect x="20" y="30" width="6" height="6" fill="#84CC16" rx="1" />
    <rect x="20" y="50" width="6" height="6" fill="#7C3AED" rx="1" />
    <rect x="20" y="70" width="6" height="6" fill="#84CC16" rx="1" />
    
    <line x1="10" y1="30" x2="20" y2="30" stroke="#84CC16" strokeWidth="2" strokeDasharray="2,2" />
    <line x1="10" y1="50" x2="20" y2="50" stroke="#7C3AED" strokeWidth="2" strokeDasharray="2,2" />
    <line x1="10" y1="70" x2="20" y2="70" stroke="#84CC16" strokeWidth="2" strokeDasharray="2,2" />
  </svg>
);

const IconButton = ({ icon: Icon, label, onClick, primary = false }: any) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all transform active:scale-95 ${
      primary 
        ? 'bg-brand-purple text-white shadow-lg glow-purple hover:bg-brand-purple/90' 
        : 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20'
    }`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

export default function DigitalCard() {
  const monkImageSrc = `${import.meta.env.BASE_URL}monk-engine.png`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Navneet Porwal - Beast AI',
          text: 'Check out Navneet Porwal\'s digital business card.',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark tech-grid flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-brand-dark rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row relative"
      >
        {/* Left Side - Branding (Dark) */}
        <div className="w-full md:w-[45%] bg-[#0A0F1E] p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left border-r border-white/5">
          <div className="mb-8">
            <LogoB />
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
              BEAST <span className="text-brand-green">AI</span>
            </h1>
            <p className="text-brand-green/80 font-mono text-sm tracking-widest mt-2 uppercase">
              Building Ethical AI Solutions Together
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8 w-full">
            <div className="flex flex-col items-center md:items-start gap-2">
              <ShieldCheck className="text-brand-purple" size={32} />
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 leading-tight">AI CONSULTING</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <GraduationCap className="text-brand-purple" size={32} />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 leading-tight">AI TRAINING</span>
                <span className="text-[8px] text-brand-green/60 font-mono mt-1">BEAST AI ACADEMY</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <Users className="text-brand-purple" size={32} />
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 leading-tight">MENTORSHIP & ADVISORY</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <Globe className="text-brand-purple" size={32} />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 leading-tight">GLOBAL PROGRAMS</span>
                <span className="text-[8px] text-brand-green/60 font-mono">INDIA • USA</span>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-white/10 w-full">
            <div className="bg-brand-purple/20 border border-brand-purple/30 p-4 rounded-2xl">
              <p className="text-brand-green font-bold text-xs">EDUCATE. INNOVATE. TRANSFORM.</p>
              <p className="text-white/80 text-[10px] leading-relaxed mt-1 uppercase tracking-wider">
                Empowering the next generation of AI leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Information (Light/Glass) */}
        <div className="w-full md:w-[55%] bg-white p-8 md:p-12">
          <div className="mb-6">
            <img
              src={monkImageSrc}
              alt="Navneet Porwal Monk"
              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg border-2 border-brand-purple/20"
            />
          </div>

          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-1">
              NAVNEET PORWAL
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-brand-green mb-4">
              (MONK)
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500 font-medium">
              <p>CIO</p>
              <span className="text-slate-300">|</span>
              <p>FOUNDER & CEO</p>
            </div>
            <p className="text-brand-purple font-bold mt-2">
              BEAST AI <span className="text-slate-300 mx-2">|</span> PIVOT2AI
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <ContactItem 
              icon={User} 
              label="CIO, AI Leader" 
              subLabel="Strategist | Mentor | Innovator"
            />
            <ContactItem 
              icon={Mail} 
              label="ceo@pivot2ai.org" 
              link={`mailto:ceo@pivot2ai.org`}
              subLabel="navneet.porwal@beastai.ai"
            />
            <ContactItem 
              icon={Phone} 
              label="+1 (214) 210-1480" 
              link={`tel:+12142101480`}
            />
            <ContactItem 
              icon={Globe} 
              label="www.beastai.ai" 
              link="https://www.beastai.ai"
              subLabel="www.pivot2ai.org"
            />
            <ContactItem 
              icon={MapPin} 
              label="Dallas, Texas, USA" 
              subLabel="Serving Global Clients"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-slate-100 pt-8">
            <div className="text-center sm:text-left">
              <QRCodeSVG 
                value={window.location.href} 
                size={96} 
                level="M" 
                includeMargin={false}
                className="bg-white p-2 rounded-lg border border-slate-200 mb-2"
              />
              <p className="text-[10px] font-bold text-brand-purple uppercase tracking-widest">Scan to Connect</p>
            </div>
            
            <div className="flex-1 w-full space-y-3">
              <button
                onClick={() => downloadVCard(NAVNEET_INFO)}
                className="w-full flex items-center justify-center gap-3 bg-brand-dark text-white py-4 rounded-2xl font-bold hover:bg-brand-dark/90 transition-all shadow-xl"
              >
                <Download size={20} />
                ADD TO CONTACTS
              </button>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all"
                >
                  <Globe size={16} /> WEBSITE
                </a>
                <a 
                  href={SOCIAL_LINKS.academy} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all"
                >
                  <GraduationCap size={16} /> ACADEMY
                </a>
              </div>
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 text-slate-400 py-2 text-[10px] font-bold tracking-widest hover:text-brand-purple transition-all"
              >
                <Share2 size={14} /> SHARE BUSINESS CARD
              </button>
            </div>
          </div>

          <div className="mt-8 text-right">
            <p className="text-[9px] tracking-wide text-slate-300 uppercase">Powered by Leeway Innovations</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ContactItem({ icon: Icon, label, link, subLabel }: any) {
  const Content = () => (
    <div className="flex items-start gap-4 group">
      <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-green group-hover:glow-green transition-all shrink-0">
        <Icon size={18} />
      </div>
      <div className="flex flex-col">
        <p className={`text-slate-700 font-medium ${link ? 'hover:text-brand-purple transition-colors truncate px-1' : ''}`}>
          {label}
        </p>
        {subLabel && <p className="text-slate-400 text-sm">{subLabel}</p>}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block no-underline">
        <Content />
      </a>
    );
  }

  return <Content />;
}
