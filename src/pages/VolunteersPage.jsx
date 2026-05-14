import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Search, Phone, Crown, Radio, Monitor, Video, Shield,
  ArrowRightLeft, UserCheck, Truck, ParkingCircle, Building, MapPin,
  UtensilsCrossed, Sparkles, ShoppingCart, IndianRupee, Megaphone,
  Palette, Flame, Stethoscope, Thermometer, Warehouse, Tent
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { departments } from '../data/volunteers';

const iconMap = {
  Crown, Radio, Monitor, Video, Shield, ArrowRightLeft, UserCheck,
  Truck, ParkingCircle, Building, MapPin, UtensilsCrossed, Sparkles,
  ShoppingCart, IndianRupee, Users, Megaphone, Palette, Flame,
  Stethoscope, Thermometer, Warehouse, Tent,
};

const statusColors = {
  Active: 'bg-emerald-dark/10 text-emerald-dark',
  Standby: 'bg-gold/20 text-gold',
  Inactive: 'bg-charcoal/10 text-charcoal/50',
};

export default function VolunteersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = departments.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.hod.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">
      <SEO title="Volunteers & Community" description="23 departments powering Ashara Mubaraka in Bhopal — from PMO to Medical, Transport to IT." />
      <Header />
      <PageHero
        title="Volunteers & Community"
        subtitle="23 dedicated departments working together to deliver a seamless Ashara Mubaraka experience"
        icon={Users}
        breadcrumbs={[{ label: 'Volunteers & Community' }]}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="relative max-w-md mb-10">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" />
          <input
            type="text"
            placeholder="Search departments or HOD..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-emerald-dark/10 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
          />
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Departments" value="23" icon={Tent} />
          <StatCard label="Active Departments" value={departments.filter(d => d.status === 'Active').length.toString()} icon={Shield} />
          <StatCard label="Total Volunteers" value="500+" icon={Users} />
          <StatCard label="Zones Covered" value="4" icon={MapPin} />
        </div>

        <p className="text-sm text-charcoal/50 mb-6">
          Showing <span className="font-semibold text-emerald-dark">{filtered.length}</span> of 23 departments
        </p>

        {/* Department Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dept, i) => {
            const DeptIcon = iconMap[dept.icon] || Users;
            const isExpanded = expandedId === dept.id;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => setExpandedId(isExpanded ? null : dept.id)}
                className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer ${isExpanded
                  ? 'border-gold/30 shadow-xl shadow-gold/10 ring-1 ring-gold/20'
                  : 'border-emerald-dark/5 shadow-sm hover:shadow-lg hover:-translate-y-0.5'
                  }`}
              >
                <div className="p-5">
                  {/* Header Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-dark/5 flex items-center justify-center shrink-0">
                      <DeptIcon size={22} className="text-emerald-dark" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                          #{dept.id.toString().padStart(2, '0')}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColors[dept.status]}`}>
                          {dept.status}
                        </span>
                      </div>
                      <h3 className="font-heading text-sm font-bold text-emerald-dark leading-tight">{dept.name}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal/50 leading-relaxed mb-4">{dept.description}</p>

                  {/* HOD & Contact */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-charcoal/70">
                      <Crown size={12} className="text-gold shrink-0" />
                      <span className="font-semibold">HOD:</span>
                      <span>{dept.hod}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal/70">
                      <Phone size={12} className="text-gold shrink-0" />
                      <span className="font-semibold">Contact:</span>
                      <span>{dept.contact}</span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {/* {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-emerald-dark/5"
                    >
                      <h4 className="font-heading text-xs font-semibold text-emerald-dark mb-2">Key Responsibilities</h4>
                      <ul className="space-y-1.5">
                        {dept.responsibilities.map((r, ri) => (
                          <li key={ri} className="flex items-start gap-2 text-xs text-charcoal/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )} */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <footer id="footer"><Footer /></footer>
    </div>
  );
}

function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-emerald-dark/5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-dark/5 flex items-center justify-center">
          <Icon size={18} className="text-emerald-dark" />
        </div>
        <div>
          <p className="font-heading text-xl font-bold text-emerald-dark">{value}</p>
          <p className="text-[10px] text-charcoal/50 uppercase tracking-wider">{label}</p>
        </div>
      </div>
    </div>
  );
}
