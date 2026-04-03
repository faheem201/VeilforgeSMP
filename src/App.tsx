/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  MessageSquare as Discord,
  Gamepad2,
  Sword,
  Coins,
  Globe,
  Users,
  Zap,
  Flame,
  Skull,
  CheckCircle2,
  Copy,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Info,
  History,
  Scale,
  Shield,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const SERVER_NAME = 'VeilforgeSMP';
const SERVER_IP = 'play.veilforge.fun';
const DISCORD_INVITE = 'https://discord.gg/mb8ukyqdyA';
const SERVER_VERSIONS = 'Java 1.10.x – 1.21.11';
const LOGO_URL = '/server-icon.png';
const YOUTUBE_WATCH_URL = 'https://www.youtube.com/watch?v=LODV5L0Htis';
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/LODV5L0Htis';

// --- Helpers ---
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  window.history.replaceState(null, '', window.location.pathname);
};

const BrandWordmark = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div className={`flex flex-col ${compact ? 'leading-none' : 'leading-tight'}`}>
      <div
        className={`uppercase font-black italic tracking-tight text-white ${
          compact ? 'text-xl' : 'text-2xl'
        }`}
      >
        <span className="text-white">Veil</span>
        <span className="text-brand-purple-light">forge</span>
        <span className="text-white">SMP</span>
      </div>
      <span
        className={`uppercase tracking-[0.24em] text-gray-500 ${
          compact ? 'text-[9px]' : 'text-[10px]'
        }`}
      >
        Survival • PvP • Economy
      </span>
    </div>
  );
};

const RankName = ({ name }: { name: string }) => {
  const colorMap: Record<string, string> = {
    Spark: 'text-yellow-300',
    Flare: 'text-orange-300',
    Inferno: 'text-red-300',
  };

  return (
    <div className="flex flex-col leading-tight">
      <div className="uppercase font-black italic tracking-tight text-white text-3xl">
        <span className="text-white">{name.slice(0, 1)}</span>
        <span className={colorMap[name] || 'text-brand-purple-light'}>{name.slice(1)}</span>
      </div>
      <span className="uppercase tracking-[0.22em] text-gray-500 text-[10px]">
        Supporter Rank
      </span>
    </div>
  );
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Overview', id: 'overview' },
    { name: 'Play', id: 'play' },
    { name: 'Ranks', id: 'ranks' },
    { name: 'Updates', id: 'updates' },
    { name: 'Rules', id: 'rules' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.replaceState(null, '', window.location.pathname);
          }}
          className="flex items-center gap-3 group"
          type="button"
        >
          <div className="relative">
            <img
              src={LOGO_URL}
              alt={`${SERVER_NAME} logo`}
              className="w-11 h-11 object-contain rounded-xl shrink-0"
            />
            <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_40px_rgba(139,92,246,0.55)] transition-all"></div>
          </div>
          <div className="group-hover:translate-x-0.5 transition-transform">
            <BrandWordmark compact />
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-gray-400 hover:text-brand-purple-light transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple hover:bg-brand-purple-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-[0_0_24px_rgba(139,92,246,0.28)] hover:shadow-[0_0_34px_rgba(139,92,246,0.42)]"
          >
            Join Discord
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} type="button">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-bg border-b border-dark-border p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                className="text-left text-lg font-medium text-gray-300"
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </button>
            ))}
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-purple text-white px-5 py-3 rounded-xl text-center font-semibold"
            >
              Join Discord
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = async () => {
    await navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-mesh">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple-light text-xs font-bold uppercase tracking-widest mb-6">
            Now Live • {SERVER_VERSIONS}
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-6 leading-tight">
            Forge Your Legacy in <br />
            <span className="text-gradient">VeilforgeSMP</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            A competitive survival world where players build, fight, trade, and grow their legacy in a dark, ever-evolving economy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(139,92,246,0.25)] hover:shadow-[0_0_45px_rgba(139,92,246,0.4)] group"
            >
              Join Discord
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('ranks')}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              View Ranks
            </button>
          </div>

          <div className="inline-flex items-center gap-4 p-2 pl-6 bg-dark-card border border-dark-border rounded-2xl">
            <span className="text-gray-400 font-mono text-sm uppercase tracking-wider">Server IP:</span>
            <span className="text-white font-mono font-bold">{SERVER_IP}</span>
            <button
              onClick={copyIP}
              type="button"
              className="p-3 bg-brand-purple/10 hover:bg-brand-purple/20 text-brand-purple-light rounded-xl transition-all relative group"
            >
              {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-bg border border-dark-border text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {copied ? 'Copied!' : 'Copy IP'}
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

const Overview = () => {
  const features = [
    {
      icon: <Sword className="w-8 h-8 text-brand-purple-light" />,
      title: 'Survival / PvP / Economy',
      description:
        'Balanced gameplay inspired by DonutSMP, focusing on competitive survival and a player-driven economy.',
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-purple-light" />,
      title: 'World Access',
      description:
        'Explore the Overworld, Nether, and End. Each dimension offers unique challenges and resources.',
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-purple-light" />,
      title: 'Fair Progression',
      description:
        'Competitive but balanced. No pay-to-win mechanics. Skill and dedication determine your success.',
    },
    {
      icon: <Users className="w-8 h-8 text-brand-purple-light" />,
      title: 'Active Community',
      description:
        'Regular events, consistent updates, and a thriving Discord community to keep things fresh.',
    },
  ];

  return (
    <section id="overview" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Server Overview</h2>
          <p className="text-gray-400">Everything you need to know about the Veilforge experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border p-8 rounded-3xl hover:border-brand-purple/50 transition-all group"
            >
              <div className="mb-6 p-4 bg-brand-purple/10 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-brand-purple/5 border border-brand-purple/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-white">Server Status: Online & Growing</span>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1.18.x – 1.21.11</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Supported Versions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlayInfo = () => {
  return (
    <section id="play" className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl mb-6">Ready to Join?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              VeilforgeSMP is designed for players who want a serious, competitive survival experience.
              Whether you&apos;re a builder, a warrior, or a merchant, there&apos;s a place for you in our world.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Donut-Inspired Survival Economy',
                'Fair and Balanced PvP Mechanics',
                'Long-Term Progression System',
                'Custom Shard & Crate Rewards',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-brand-purple w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <div className="bg-dark-bg border border-dark-border px-6 py-4 rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Server IP</div>
                <div className="text-white font-mono font-bold">{SERVER_IP}</div>
              </div>
              <div className="bg-dark-bg border border-dark-border px-6 py-4 rounded-2xl">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Versions</div>
                <div className="text-white font-mono font-bold">{SERVER_VERSIONS}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <a
              href={YOUTUBE_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="aspect-video bg-dark-bg rounded-3xl border border-dark-border overflow-hidden shadow-[0_0_35px_rgba(139,92,246,0.14)] relative hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(139,92,246,0.24)] transition-all duration-300 cursor-pointer">
                <iframe
                  className="w-full h-full pointer-events-none"
                  src={YOUTUBE_EMBED_URL}
                  title="VeilforgeSMP Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center shadow-[0_0_34px_rgba(139,92,246,0.45)] group-hover:scale-110 transition-transform duration-300">
                    <Gamepad2 className="text-white w-10 h-10" />
                  </div>
                </div>
              </div>
            </a>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ranks = () => {
  const ranks = [
    {
      name: 'Spark',
      price: '50 BDT',
      badge: 'Starter',
      icon: <Zap className="w-6 h-6 text-yellow-300" />,
      accent: 'from-yellow-400/30 to-transparent',
      border: 'border-yellow-400/25',
      button: 'bg-white/5 hover:bg-white/10 border border-white/10 text-white',
      perks: [
        '+1 Home',
        '+5 order slots',
        '+2 auction slots',
        'Small shard bonus',
        'Rank tag',
        '2 Common Crate Keys',
        'Priority support',
      ],
    },
    {
      name: 'Flare',
      price: '150 BDT',
      badge: 'Best Value',
      featured: true,
      icon: <Flame className="w-6 h-6 text-orange-300" />,
      accent: 'from-brand-purple/30 to-transparent',
      border: 'border-brand-purple/40',
      button:
        'bg-brand-purple hover:bg-brand-purple-dark text-white shadow-[0_0_30px_rgba(139,92,246,0.3)]',
      perks: [
        '+2 homes total',
        '/anvil',
        '+10 order slots total',
        '+5 auction slots total',
        'Medium shard bonus',
        'Get shards everywhere',
        'Priority support',
        'Rank tag',
        '1 Gold Crate Key',
        'Fly in lobby',
      ],
    },
    {
      name: 'Inferno',
      price: '300 BDT',
      badge: 'Most Premium',
      featured: true,
      icon: <Flame className="w-6 h-6 text-red-300" />,
      accent: 'from-brand-purple/30 to-transparent',
      border: 'border-brand-purple/40',
      button:
        'bg-brand-purple hover:bg-brand-purple-dark text-white shadow-[0_0_30px_rgba(139,92,246,0.3)]',
      perks: [
        '+3 homes total',
        '/anvil',
        '+15 order slots total',
        '+10 auction slots total',
        'Large shard bonus',
        'Large enderchest',
        'Get shards everywhere',
        'Priority support',
        'Rank tag',
        '1 Crimson Crate Key',
        'Fly in lobby',
    ],
  },

  return (
    <section id="ranks" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Supporter Ranks</h2>
          <p className="text-gray-400">A cleaner, fair store experience built around value and identity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ranks.map((rank, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-[28px] border ${rank.border} bg-dark-card overflow-hidden flex flex-col ${
                rank.featured ? 'md:-translate-y-2 shadow-[0_0_35px_rgba(139,92,246,0.18)]' : ''
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${rank.accent} pointer-events-none`}></div>

              <div className="relative p-8 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.18em] font-bold bg-white/5 border border-white/10 text-gray-300 mb-4">
                      {rank.badge}
                    </span>
                    <RankName name={rank.name} />
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-2xl font-bold text-brand-purple-light">{rank.price}</span>
                    </div>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {rank.icon}
                  </div>
                </div>

                {!rank.teaser ? (
                  <ul className="space-y-4 mb-8 flex-grow">
                    {rank.perks?.map((perk, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5 mb-8 flex-grow">
                    <ul className="space-y-4">
                      {rank.teaser.map((line, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                          <Info className="w-4 h-4 text-brand-purple-light mt-0.5 flex-shrink-0" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  <a
                    href={DISCORD_INVITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full rounded-2xl py-4 text-center font-bold transition-all block ${rank.button}`}
                  >
                    {rank.name === 'Inferno' ? 'Join Discord to Ask' : `Buy ${rank.name} in Discord`}
                  </a>

                  <div className="mt-4 p-4 rounded-2xl border border-white/10 bg-black/20">
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                      <Info className="w-3 h-3" /> How to buy this rank
                    </h4>
                    <p className="text-[12px] text-gray-500 leading-relaxed">
                      Click the button, join our Discord server, create a ticket, and tell staff which rank you want to buy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Updates = () => {
  const latestUpdates = [
    {
     date: '3/30/2026 11:00 PM',
     title: 'VeilforgeSMP - Election Results 2026',
     type: 'Election',
     content: (
       <div className="space-y-4">
         <div>
           <h4 className="text-white font-bold text-sm mb-2">Election Result</h4>
           <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
           <li>Rylov won the Presidential Election with the Beacon symbol, securing 52.6% of the total vote.</li>
           <li>TiringBiring finished as runner-up with the Mace symbol, receiving 47.4% of the vote.</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold text-sm mb-2">Elected Leadership</h4>
        <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
          <li>President: @Radif/Rylov (IGN: Rylov)</li>
          <li>Vice President: @TAPI (IGN: oTAPI)</li>
        </ul>
       </div>
       <div>
        <h4 className="text-white font-bold text-sm mb-2">Presidential Government Members</h4>
        <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
          <li>Prime Minister: @Bingo (IGN: BingoGames)</li>
          <li>Secretary of State: @lolnypop (IGN: lolnypop)</li>
          <li>Secretary of Treasury: @Is Duniya Ka Papa (IGN: NOT_Xelvion)</li>
        </ul>
      </div>
       </div>
     ),
    },
    {
      date: '3/16/2026 7:17 AM',
      title: 'VeilforgeSMP - Hotfix v1.0.2',
      type: 'Patch',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Gameplay Adjustments</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Ender Pearl Cooldown Reduced — improved mobility and overall PvP flow.</li>
              <li>Wind Charge Cooldown Removed.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Economy Changes</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Auction Listing Limit Increased — players can now list up to 10 auctions simultaneously (previously 3).</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Bug Fixes</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Natural Spawners Fixed.</li>
              <li>Daily Rewards Fixed.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      date: '3/16/2026 7:17 AM',
      title: 'VeilforgeSMP - Hotfix v1.0.1',
      type: 'Patch',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-bold text-sm mb-2">New Features</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>GSit is now live. Use /sit to sit anywhere, or simply right click any stair or slab.</li>
              <li>Hunger is now disabled at spawn.</li>
              <li>Players can now pick up items within the spawn area.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Voting Rewards</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>The voting system has been fully restored.</li>
              <li>Each vote now rewards you with 1 Common Crate Key and Shards.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      date: 'Future',
      title: 'Upcoming Announcements',
      type: 'News',
      content: (
        <div className="space-y-3">
          <p>This area will continue to be used for:</p>
          <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
            <li>Shard changes</li>
            <li>Crate reworks</li>
            <li>Maintenance notices</li>
            <li>Eid events</li>
            <li>Future balance updates</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="updates" className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Latest Updates</h2>
                <p className="text-gray-400">Patch notes, announcements, and ongoing server improvements.</p>
              </div>
              <History className="text-brand-purple w-8 h-8 opacity-50" />
            </div>

            <div className="space-y-6">
              {latestUpdates.map((update, i) => (
                <div
                  key={i}
                  className="bg-dark-bg border border-dark-border p-6 rounded-2xl hover:border-brand-purple/30 transition-all relative overflow-hidden group"
                >
                  <div className="text-xs text-brand-purple-light font-bold mb-2 flex items-center gap-2">
                    {update.date}
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="text-gray-500 uppercase tracking-tighter">{update.type}</span>
                  </div>
                  <h3 className="text-xl mb-4 group-hover:text-brand-purple-light transition-colors">{update.title}</h3>
                  <div className="text-gray-400 text-sm">{update.content}</div>
                </div>
              ))}

              <div className="p-12 border-2 border-dashed border-dark-border rounded-3xl flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-gray-600 w-6 h-6" />
                </div>
                <p className="text-gray-500 font-medium">More patch notes coming soon...</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-brand-purple/5 border border-brand-purple/20 p-6 rounded-3xl sticky top-24 self-start">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-brand-purple w-6 h-6" />
                Community & Announcements
              </h3>

              <div className="space-y-5 text-sm text-gray-400 leading-relaxed">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-dark-bg/50 rounded-xl border border-dark-border">
                    <span className="text-gray-400">Network Status</span>
                    <span className="text-green-500 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Online
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-dark-bg/50 rounded-xl border border-dark-border">
                    <span className="text-gray-400">Server Focus</span>
                    <span className="text-brand-purple-light font-bold">Economy & PvP</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-dark-bg/50 rounded-xl border border-dark-border">
                    <span className="text-gray-400">Discord</span>
                    <span className="text-white font-bold">Main Hub</span>
                  </div>
                </div>

                <p>
                  Join the Discord to stay updated on events, maintenance, ranks, tickets, economy changes, and future server content.
                </p>

                <div className="pt-5 border-t border-brand-purple/10">
                  <a
                    href={DISCORD_INVITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-purple-light font-bold hover:gap-3 transition-all"
                  >
                    Follow on Discord <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Rules = () => {
  const rules = [
    {
      text: 'No cheating, xray, or unfair mods.',
      icon: <Shield className="text-brand-purple w-5 h-5" />,
      bg: 'bg-brand-purple/10',
    },
    {
      text: 'No exploiting bugs, dupes, or unintended mechanics.',
      icon: <Zap className="text-yellow-300 w-5 h-5" />,
      bg: 'bg-yellow-400/10',
    },
    {
      text: 'Respect staff and other players.',
      icon: <Users className="text-blue-300 w-5 h-5" />,
      bg: 'bg-blue-400/10',
    },
    {
      text: 'No toxic behavior, hate speech, or excessive harassment.',
      icon: <Skull className="text-red-300 w-5 h-5" />,
      bg: 'bg-red-500/10',
    },
    {
      text: 'Use common sense and play fair.',
      icon: <Scale className="text-emerald-300 w-5 h-5" />,
      bg: 'bg-emerald-500/10',
    },
    {
      text: 'No combat logging during PvP encounters.',
      icon: <Sword className="text-orange-300 w-5 h-5" />,
      bg: 'bg-orange-500/10',
    },
    {
      text: 'No griefing protected claims or spawn areas.',
      icon: <Globe className="text-cyan-300 w-5 h-5" />,
      bg: 'bg-cyan-500/10',
    },
    {
      text: 'No alt accounts to bypass bans or limits.',
      icon: <Info className="text-pink-300 w-5 h-5" />,
      bg: 'bg-pink-500/10',
    },
    {
      text: 'No advertising other servers or services.',
      icon: <Coins className="text-amber-300 w-5 h-5" />,
      bg: 'bg-amber-500/10',
    },
  ];

  return (
    <section id="rules" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Server Rules</h2>
          <p className="text-gray-400">Keep the community healthy, competitive, and fair for everyone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-dark-card border border-dark-border p-6 rounded-2xl flex items-center gap-4 hover:border-brand-purple/30 transition-all"
            >
              <div className={`w-11 h-11 ${rule.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                {rule.icon}
              </div>
              <p className="text-gray-300 font-medium text-sm">{rule.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommunityCTA = () => {
  return (
    <section className="py-24 bg-mesh">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-brand-purple/20 bg-gradient-to-br from-[#1d1530] via-[#120f1d] to-[#0b0b12] p-12 md:p-16 shadow-[0_0_50px_rgba(139,92,246,0.14)]">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-purple-light text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Main Community Hub
            </span>

            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6">
              Join the Veilforge Network
            </h2>
            <p className="text-white/75 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Get updates first, open support tickets, buy ranks, meet the community, and stay ahead of every major change.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 min-w-[220px] bg-white text-brand-purple px-8 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all shadow-xl"
              >
                <Discord className="w-5 h-5" />
                Join Discord
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('ranks')}
                className="inline-flex items-center justify-center gap-3 min-w-[220px] bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Supporter Ranks
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.replaceState(null, '', window.location.pathname);
              }}
              className="flex items-center gap-3 mb-6 group w-fit"
            >
              <div className="relative">
                <img
                  src={LOGO_URL}
                  alt={`${SERVER_NAME} logo`}
                  className="w-12 h-12 object-contain rounded-xl shrink-0"
                />
                <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_40px_rgba(139,92,246,0.55)] transition-all"></div>
              </div>
              <div className="group-hover:translate-x-0.5 transition-transform">
                <BrandWordmark />
              </div>
            </button>

            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              VeilforgeSMP is a premium Minecraft survival experience focusing on competition,
              player economy, and community growth.
            </p>

            <div className="flex gap-4">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card border border-dark-border rounded-xl text-gray-400 hover:text-brand-purple-light hover:border-brand-purple/50 transition-all"
              >
                <Discord className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.replaceState(null, '', window.location.pathname);
                }}
                className="p-3 bg-dark-card border border-dark-border rounded-xl text-gray-400 hover:text-brand-purple-light hover:border-brand-purple/50 transition-all"
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <button type="button" onClick={() => scrollToSection('home')} className="hover:text-brand-purple-light transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('overview')} className="hover:text-brand-purple-light transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('ranks')} className="hover:text-brand-purple-light transition-colors">
                  Supporter Ranks
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('rules')} className="hover:text-brand-purple-light transition-colors">
                  Server Rules
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple-light transition-colors">
                  Discord Support
                </a>
              </li>
              <li>
                <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple-light transition-colors">
                  Create a Ticket
                </a>
              </li>
              <li>
                <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple-light transition-colors">
                  Buy Ranks
                </a>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('updates')} className="hover:text-brand-purple-light transition-colors">
                  Latest Updates
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-600 font-medium">
          <p>© 2026 {SERVER_NAME}. All rights reserved.</p>
          <p>Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.</p>
          <div className="flex items-center gap-2">
            Designed for <span className="text-brand-purple-light">veilforge.fun</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-purple/30">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <PlayInfo />
        <Ranks />
        <Updates />
        <Rules />
        <CommunityCTA />
      </main>
      <Footer />
    </div>
  );
}
