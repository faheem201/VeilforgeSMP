/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare as Discord, 
  Gamepad2, 
  Shield, 
  Sword, 
  Coins, 
  Globe, 
  Users, 
  Zap, 
  Flame, 
  Skull, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Info,
  History,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const SERVER_NAME = "VeilforgeSMP";
const SERVER_IP = "play.veilforge.fun";
const DISCORD_INVITE = "https://discord.gg/mb8ukyqdyA";
const SERVER_VERSIONS = "Java 1.18.x – 1.21.11";
const LOGO_URL = "/logo.png"; // Assuming the uploaded logo is named logo.png in the root

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
    { name: 'Home', href: '#' },
    { name: 'Overview', href: '#overview' },
    { name: 'Play', href: '#play' },
    { name: 'Ranks', href: '#ranks' },
    { name: 'Updates', href: '#updates' },
    { name: 'Rules', href: '#rules' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-display font-bold tracking-tighter text-white uppercase">{SERVER_NAME}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-brand-purple-light transition-colors"
            >
              {link.name}
            </a>
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

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-bg border-b border-dark-border p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
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

  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-mesh">
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
            <a 
              href="#ranks" 
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              View Ranks
            </a>
          </div>

          <div className="inline-flex items-center gap-4 p-2 pl-6 bg-dark-card border border-dark-border rounded-2xl">
            <span className="text-gray-400 font-mono text-sm uppercase tracking-wider">Server IP:</span>
            <span className="text-white font-mono font-bold">{SERVER_IP}</span>
            <button 
              onClick={copyIP}
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
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

const Overview = () => {
  const features = [
    {
      icon: <Sword className="w-8 h-8 text-brand-purple-light" />,
      title: "Survival / PvP / Economy",
      description: "Balanced gameplay inspired by DonutSMP, focusing on competitive survival and a player-driven economy."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-purple-light" />,
      title: "World Access",
      description: "Explore the Overworld, Nether, and End. Each dimension offers unique challenges and resources."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-purple-light" />,
      title: "Fair Progression",
      description: "Competitive but balanced. No pay-to-win mechanics. Skill and dedication determine your success."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-purple-light" />,
      title: "Active Community",
      description: "Regular events, consistent updates, and a thriving Discord community to keep things fresh."
    }
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
              Whether you're a builder, a warrior, or a merchant, there's a place for you in our world.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Donut-Inspired Survival Economy",
                "Fair and Balanced PvP Mechanics",
                "Long-Term Progression System",
                "Custom Shard & Crate Rewards"
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
            <div className="aspect-video bg-dark-bg rounded-3xl border border-dark-border overflow-hidden glow-purple relative">
              <img 
                src="https://picsum.photos/seed/minecraft-dark/1200/800" 
                alt="Server Preview" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center glow-purple-strong cursor-pointer hover:scale-110 transition-transform">
                  <Gamepad2 className="text-white w-10 h-10" />
                </div>
              </div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ranks = () => {
  const ranks = [
    {
      name: "Spark",
      price: "50 BDT",
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      color: "border-yellow-400/30",
      perks: [
        "+1 Home",
        "Shorter /rtp cooldown",
        "+2 auction slots",
        "Small shard bonus",
        "Rank tag (Game & Discord)",
        "2 Common Crate Keys",
        "Priority support"
      ]
    },
    {
      name: "Flare",
      price: "120 BDT",
      icon: <Flame className="w-10 h-10 text-orange-500" />,
      color: "border-orange-500/30",
      perks: [
        "+3 homes total",
        "/anvil access",
        "Better /rtp cooldown",
        "+5 auction slots total",
        "Medium shard bonus",
        "1 shard per minute everywhere",
        "Rank tag (Game & Discord)",
        "1 Gold Crate Key",
        "Priority support"
      ]
    },
    {
      name: "Inferno",
      price: "200 BDT",
      hidePrice: true,
      icon: <Skull className="w-10 h-10 text-red-500" />,
      color: "border-red-500/30",
      comingSoon: true,
      perks: ["1 shard per minute everywhere"]
    }
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
              {i === 2 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{rank.name}</h3>
                  <div className="text-brand-purple-light font-bold text-xl">{rank.hidePrice ? '???' : rank.price}</div>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl">
                  {rank.icon}
                </div>
              </div>

              <div className="flex-grow">
                {rank.comingSoon ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10 px-4 bg-brand-purple/5 rounded-2xl border border-dashed border-brand-purple/20 mb-10">
                    <Zap className="w-12 h-12 text-brand-purple mb-4 animate-pulse" />
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Something Epic is Coming</h4>
                    <p className="text-gray-400 text-sm">Stay tuned for the ultimate rank launch. It's going to be legendary.</p>
                  </div>
                ) : (
                  <ul className="space-y-4 mb-10">
                    {rank.perks.map((perk, j) => (
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
                  Buy {rank.name} in Discord
                </a>

                <div className="p-4 bg-dark-bg/50 border border-dark-border rounded-2xl">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Info className="w-3 h-3" /> How to buy
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
      date: "Today", 
      title: "EID EVENT ANNOUNCEMENT", 
      type: "Event",
      content: (
        <div className="space-y-4">
          <p className="text-brand-purple-light font-bold">Eid Mubarak, @Veilborn fam! 💜</p>
          <p>We’re hosting a special Eid event today, and everyone who joins on time will receive:</p>
          <div className="flex items-center gap-2 bg-brand-purple/20 p-3 rounded-xl border border-brand-purple/30">
            <Coins className="text-brand-purple w-5 h-5" />
            <span className="text-white font-bold">500 SHARDS</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-card p-3 rounded-xl border border-dark-border">
              <div className="text-[10px] text-gray-500 uppercase">Event Time</div>
              <div className="text-white font-bold">4:00 PM</div>
            </div>
            <div className="bg-dark-card p-3 rounded-xl border border-dark-border">
              <div className="text-[10px] text-gray-500 uppercase">Grace Time</div>
              <div className="text-white font-bold">4:10 PM Max</div>
            </div>
          </div>
        </div>
      )
    },
    { 
      date: "March 16, 2026", 
      title: "Wadiyan Foreign Legion (WFL)", 
      type: "Community",
      content: (
        <div className="space-y-4">
          <p>The Republic of Wadiya is expanding its fight against terror, and now, players from across the server can stand with us.</p>
          <p>The Wadiyan Foreign Legion is a newly formed organization operating under Wadiyan command, created for those who wish to be on the side of Wadiya and defend its mission.</p>
          <div>
            <h4 className="text-white font-bold text-sm mb-2">As a Legionnaire, you can:</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Fight alongside Wadiyan forces against terrorists</li>
              <li>Support intelligence and strategic efforts</li>
              <li>Receive the same benefits as a Wadiyan</li>
              <li>Take part in exclusive missions and operations</li>
              <li>Just play peacefully with your friends if you want</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Who can join?</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Anyone with a good track record (no major punishments)</li>
              <li>Anyone interested in PvP'ing</li>
              <li>Anyone interested in joining Wadiya</li>
            </ul>
          </div>
          <p className="text-xs bg-brand-purple/10 p-2 rounded border border-brand-purple/20">
            Interested? Contact <span className="text-brand-purple-light font-bold">@Convrse</span> or <span className="text-brand-purple-light font-bold">@Bingo</span> via DM to enlist.
          </p>
        </div>
      )
    },
    { 
      date: "March 16, 2026", 
      title: "The Sovereign Union (TSU) Statement", 
      type: "Official",
      content: (
        <div className="space-y-4">
          <p className="italic text-gray-300">NoMercy, X1, and Hunk have formally agreed to unite under one alliance: The Sovereign Union (TSU).</p>
          <p className="text-xs">While each team retains its distinct identity and leadership, all critical decisions and external engagements will henceforth be orchestrated under the aegis of The Sovereign Union.</p>
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Primary Objectives:</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Ensuring mutual defense</li>
              <li>Facilitating strategic growth</li>
              <li>Coordinating structured expansion</li>
              <li>Amplifying influence and authority</li>
              <li>Neutralizing and overcoming opposing forces</li>
            </ul>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 pt-2 border-t border-dark-border">Endorsed by: NoMercy, X1, Hunk</p>
        </div>
      )
    },
    { 
      date: "March 16, 2026", 
      title: "Hotfix v1.0.2", 
      type: "Patch",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-bold text-sm mb-1">Gameplay Adjustments</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Ender Pearl Cooldown Reduced for better mobility and PvP flow.</li>
              <li>Wind Charge Cooldown Removed.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-1">Economy Changes</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Auction Listing Limit Increased to 10 (previously 3).</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-1">Bug Fixes</h4>
            <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
              <li>Natural Spawners Fixed.</li>
              <li>Daily Rewards Fixed.</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="updates" className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Latest Updates & News</h2>
                <p className="text-gray-400">Stay informed about the world of Veilforge.</p>
              </div>
              <History className="text-brand-purple w-8 h-8 opacity-50" />
            </div>

            <div className="space-y-6">
              {latestUpdates.map((update, i) => (
                <div key={i} className="bg-dark-bg border border-dark-border p-6 rounded-2xl hover:border-brand-purple/30 transition-all relative overflow-hidden group">
                  {update.type === 'Event' && <div className="absolute top-0 right-0 bg-brand-purple text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Live Event</div>}
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
            <div className="bg-brand-purple/5 border border-brand-purple/20 p-8 rounded-3xl h-full sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-brand-purple w-6 h-6" />
                Server Status
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
                    <span className="text-gray-400">Current Event</span>
                    <span className="text-brand-purple-light font-bold">Eid Celebration</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-dark-bg/50 rounded-xl border border-dark-border">
                    <span className="text-gray-400">Active Alliance</span>
                    <span className="text-white font-bold">TSU and WFL</span>
                  </div>
                </div>

                <p className="pt-4">
                  VeilforgeSMP is currently in its prime. Join the Discord to participate in the Eid event and claim your 500 shards!
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
    "No cheating, xray, or unfair mods.",
    "No exploiting bugs, dupes, or unintended mechanics.",
    "Respect staff and other players.",
    "No toxic behavior, hate speech, or excessive harassment.",
    "No lag machines or intentional server disruption.",
    "No advertising other servers or services.",
    "No real-money trading (RMT) outside the official store.",
    "No impersonating staff members or other players.",
    "No offensive builds, skins, or usernames.",
    "No doxxing or sharing personal information of others.",
    "No combat logging during PvP encounters.",
    "No griefing protected claims or spawn areas.",
    "No alt accounts to bypass bans or limits.",
    "No spamming or excessive caps in chat.",
    "No begging for items, ranks, or staff positions.",
    "Report bugs and glitches immediately.",
    "Use common sense and play fair."
  ];

  return (
    <section id="rules" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Server Rules</h2>
          <p className="text-gray-400">Keep the community healthy and fair for everyone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
          {/* Decorative background */}
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
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter">{SERVER_NAME}</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              VeilforgeSMP is a premium Minecraft survival experience focusing on competition, 
              player economy, and community growth.
            </p>
            <div className="flex gap-4">
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-card border border-dark-border rounded-xl text-gray-400 hover:text-brand-purple-light hover:border-brand-purple/50 transition-all">
                <Discord className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-dark-card border border-dark-border rounded-xl text-gray-400 hover:text-brand-purple-light hover:border-brand-purple/50 transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-purple-light transition-colors">Home</a></li>
              <li><a href="#overview" className="hover:text-brand-purple-light transition-colors">Overview</a></li>
              <li><a href="#ranks" className="hover:text-brand-purple-light transition-colors">Supporter Ranks</a></li>
              <li><a href="#rules" className="hover:text-brand-purple-light transition-colors">Server Rules</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple-light transition-colors">Discord Support</a></li>
              <li><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple-light transition-colors">Create a Ticket</a></li>
              <li><a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple-light transition-colors">Buy Ranks</a></li>
              <li><a href="#" className="hover:text-brand-purple-light transition-colors">Privacy Policy</a></li>
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
