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
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const SERVER_NAME = 'VeilforgeSMP';
const SERVER_IP = 'play.veilforge.fun';
const DISCORD_INVITE = 'https://discord.gg/mb8ukyqdyA';
const SERVER_VERSIONS = 'Java 1.18.x – 1.21.11';
const LOGO_URL = '/server-icon.png';
const YOUTUBE_WATCH_URL = 'https://www.youtube.com/watch?v=LODV5L0Htis';
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/LODV5L0Htis';

// --- Helpers ---
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
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
          ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
          type="button"
        >
          <img
            src={LOGO_URL}
            alt={`${SERVER_NAME} logo`}
            className="w-10 h-10 object-contain rounded-lg shrink-0"
          />
          <span className="text-xl font-display font-bold tracking-tighter text-white uppercase group-hover:text-brand-purple-light transition-colors">
            {SERVER_NAME}
          </span>
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
            className="bg-brand-purple hover:bg-brand-purple-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 glow-purple"
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
              className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 glow-purple-strong group"
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
              <div className="aspect-video bg-dark-bg rounded-3xl border border-dark-border overflow-hidden glow-purple relative hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <iframe
                  className="w-full h-full pointer-events-none"
                  src={YOUTUBE_EMBED_URL}
                  title="VeilforgeSMP Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center glow-purple-strong group-hover:scale-110 transition-transform duration-300">
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
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      color: 'border-yellow-400/30',
      perks: [
        '+1 Home',
        'Slightly shorter /rtp cooldown',
        '+2 auction slots',
        'Small shard bonus — first purchase 250, renew bonus 200',
        'Rank tag — in-game and Discord',
        '2 Common Crate Keys',
        'Priority support',
      ],
    },
    {
      name: 'Flare',
      price: '120 BDT',
      icon: <Flame className="w-10 h-10 text-orange-500" />,
      color: 'border-orange-500/30',
      perks: [
        '+3 homes total',
        '/anvil',
        'Better /rtp cooldown',
        '+5 auction slots total',
        'Medium shard bonus — first purchase 500, renew bonus 350',
        'Get shards everywhere — 1 shard per minute',
        'Priority support',
        'Rank tag — in-game and Discord',
        '1 Gold Crate Key',
        'Fly in lobby',
      ],
    },
    {
      name: 'Inferno',
      price: 'Coming Soon',
      icon: <Skull className="w-10 h-10 text-red-500" />,
      color: 'border-red-500/30',
      comingSoon: true,
      teaser: [
        'A darker tier is being forged.',
        'Bigger perks, stronger identity, and premium access are on the way.',
        'Be ready when Inferno finally unlocks.',
      ],
    },
  ];

  return (
    <section id="ranks" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Supporter Ranks</h2>
          <p className="text-gray-400">Support the server and unlock premium perks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ranks.map((rank, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-dark-card border ${rank.color} p-8 rounded-3xl flex flex-col h-full relative overflow-hidden group hover:glow-purple transition-all`}
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{rank.name}</h3>
                  <div className="text-brand-purple-light font-bold text-xl">{rank.price}</div>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl">{rank.icon}</div>
              </div>

              <div className="flex-grow">
                {rank.comingSoon ? (
                  <div className="h-full flex flex-col justify-center py-6 px-4 bg-brand-purple/5 rounded-2xl border border-dashed border-brand-purple/20 mb-10">
                    <ul className="space-y-4">
                      {rank.teaser?.map((line, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul className="space-y-4 mb-10">
                    {rank.perks?.map((perk, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-auto">
                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white py-4 rounded-xl font-bold text-center block transition-all mb-6"
                >
                  {rank.name === 'Inferno' ? 'Join Discord to Ask' : `Buy ${rank.name} in Discord`}
                </a>

                <div className="p-4 bg-dark-bg/50 border border-dark-border rounded-2xl">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Info className="w-3 h-3" /> How to buy this rank
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Click the button, join our Discord server, create a ticket, and tell staff which rank you want to buy.
                  </p>
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
          <p className="text-xs text-gray-400 pt-2 border-t border-dark-border">
            Thank you for playing VeilforgeSMP and supporting the server. More improvements and updates will continue to roll out as we refine the experience.
          </p>
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
          <p className="text-xs text-gray-400 pt-2 border-t border-dark-border">
            Thank you for your patience and support. See you in game. <span className="text-brand-purple-light font-semibold">@Veilborn</span>
          </p>
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
            <div className="bg-brand-purple/5 border border-brand-purple/20 p-8 rounded-3xl sticky top-24 self-start">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-brand-purple w-6 h-6" />
                Community & Announcements
              </h3>

              <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
                <div className="space-y-4">
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

                <div className="pt-6 border-t border-brand-purple/10">
                  <a
                    href={DISCORD_INVITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-purple-light font-bold flex items-center gap-2 hover:gap-3 transition-all"
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
    'No cheating, xray, or unfair mods.',
    'No exploiting bugs, dupes, or unintended mechanics.',
    'Respect staff and other players.',
    'No toxic behavior, hate speech, or excessive harassment.',
    'Use common sense and play fair.',
    'No combat logging during PvP encounters.',
    'No griefing protected claims or spawn areas.',
    'No alt accounts to bypass bans or limits.',
    'No advertising other servers or services.',
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
              <div className="w-10 h-10 bg-brand-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="text-brand-purple w-5 h-5" />
              </div>
              <p className="text-gray-300 font-medium text-sm">{rule}</p>
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
        <div className="bg-brand-purple rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden glow-purple-strong">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6">
              Join the Community
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Stay updated, create tickets, buy ranks, and take part in exclusive events.
              Our Discord is the heart of VeilforgeSMP.
            </p>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-purple px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl"
            >
              <Discord className="w-6 h-6" />
              Join Discord Server
            </a>
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 mb-6 group w-fit"
            >
              <img
                src={LOGO_URL}
                alt={`${SERVER_NAME} logo`}
                className="w-10 h-10 object-contain rounded-lg shrink-0"
              />
              <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter group-hover:text-brand-purple-light transition-colors">
                {SERVER_NAME}
              </span>
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
