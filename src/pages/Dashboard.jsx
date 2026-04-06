import React from "react";
import { motion } from "framer-motion";
import { Activity, Clock, Users, ArrowUpRight, Smartphone, Laptop, Apple, Anchor } from "lucide-react";

export default function Dashboard() {
  const kpis = [
    { label: "Total Scans", value: "12,453", change: "+14%", icon: Activity },
    { label: "Unique Visitors", value: "8,901", change: "+5%", icon: Users },
    { label: "Avg. Time on Card", value: "1m 45s", change: "+12s", icon: Clock },
  ];

  const recentActivity = [
    { id: 1, location: "New York, USA", time: "2 mins ago", device: "iPhone 14 Pro", type: "Bio Card" },
    { id: 2, location: "London, UK", time: "15 mins ago", device: "Samsung Galaxy S23", type: "vCard" },
    { id: 3, location: "Tokyo, JP", time: "1 hour ago", device: "MacBook Pro", type: "Product Page" },
    { id: 4, location: "Berlin, DE", time: "3 hours ago", device: "Google Pixel 7", type: "Bio Card" },
    { id: 5, location: "Sydney, AU", time: "5 hours ago", device: "iPhone 13", type: "vCard" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 md:p-8 font-sans mt-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#dbf3fd]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight"
            >
              Dashboard
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 mt-2 tracking-wide font-medium"
            >
              Real-time performance of your QR campaigns.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-md p-3 pr-6 rounded-full border border-white/10 shadow-lg"
          >
            <img 
              src="https://unavatar.io/instagram/puntoneutr0" 
              alt="PuntoNeutr0 User" 
              className="w-12 h-12 rounded-full border border-[#dbf3fd]/30 shadow-[0_0_10px_rgba(219,243,253,0.3)] object-cover" 
            />
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wide">PuntoNeutr0</span>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Pro Plan</span>
            </div>
          </motion.div>
        </header>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#dbf3fd]/30 transition-colors"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-[#dbf3fd]/5 blur-[50px] rounded-full group-hover:bg-[#dbf3fd]/10 transition-colors pointer-events-none" />
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 bg-slate-950 rounded-2xl border border-white/5">
                    <Icon className="w-6 h-6 text-[#dbf3fd]" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full text-sm font-bold">
                    <ArrowUpRight className="w-4 h-4" />
                    {kpi.change}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-extrabold text-white mb-1">{kpi.value}</h3>
                  <p className="text-slate-400 text-sm font-semibold tracking-wider uppercase">{kpi.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts & Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Scans over the last 7 days</h3>
            <div className="w-full h-48 md:h-64 relative flex items-end mb-4">
              {/* Simple SVG Line Chart */}
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#dbf3fd" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#dbf3fd" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,100 L0,70 Q15,40 30,60 T60,30 T100,50 L100,100 Z" fill="url(#line-gradient)" />
                <path d="M0,70 Q15,40 30,60 T60,30 T100,50" fill="none" stroke="#dbf3fd" strokeWidth="2" strokeLinecap="round" />
                {/* Data Points */}
                <circle cx="30" cy="60" r="3" fill="#0f172a" stroke="#dbf3fd" strokeWidth="2" />
                <circle cx="60" cy="30" r="3" fill="#0f172a" stroke="#dbf3fd" strokeWidth="2" />
                <circle cx="100" cy="50" r="3" fill="#0f172a" stroke="#dbf3fd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex justify-between text-slate-500 text-sm font-medium px-2">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </motion.div>

          {/* Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Distribution</h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Device Type</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex items-center gap-3 bg-slate-950 p-4 rounded-2xl border border-white/5">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-xl font-bold text-white">78%</div>
                      <div className="text-xs text-slate-500">Mobile</div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-3 bg-slate-950 p-4 rounded-2xl border border-white/5">
                    <Laptop className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-xl font-bold text-white">22%</div>
                      <div className="text-xs text-slate-500">Desktop</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Operating System</span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden flex">
                <div className="h-full bg-[#dbf3fd] w-[65%]" title="iOS (65%)" />
                <div className="h-full bg-blue-500 w-[35%]" title="Android (35%)" />
              </div>
              <div className="flex justify-between mt-3 text-sm font-medium">
                <div className="flex items-center gap-2"><Apple className="w-4 h-4 text-[#dbf3fd]" /> 65%</div>
                <div className="flex items-center gap-2">Android <span className="w-3 h-3 rounded-full bg-blue-500" /> 35%</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden"
        >
          <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 font-semibold text-slate-400 uppercase tracking-wider text-sm">Location</th>
                  <th className="pb-4 font-semibold text-slate-400 uppercase tracking-wider text-sm">Device</th>
                  <th className="pb-4 font-semibold text-slate-400 uppercase tracking-wider text-sm">Template</th>
                  <th className="pb-4 font-semibold text-slate-400 uppercase tracking-wider text-sm text-right">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((activity) => (
                  <tr key={activity.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 text-white font-medium flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {activity.location}
                    </td>
                    <td className="py-5 text-slate-300">{activity.device}</td>
                    <td className="py-5">
                      <span className="bg-[#dbf3fd]/10 text-[#dbf3fd] border border-[#dbf3fd]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {activity.type}
                      </span>
                    </td>
                    <td className="py-5 text-right text-slate-500">{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
