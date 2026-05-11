import {
  Car, Home, HeartPulse, Shield, Users, Radio,
  UtensilsCrossed, ParkingCircle, HelpCircle, UserCheck,
  Search, AlertTriangle,
} from 'lucide-react';

const services = [
  { name: 'Transport', icon: Car, desc: 'Pick-up, drop & shuttle services' },
  { name: 'Accommodation', icon: Home, desc: 'Verified guest houses & stays' },
  { name: 'Medical Support', icon: HeartPulse, desc: '24/7 medical team on standby' },
  { name: 'Security', icon: Shield, desc: 'Round-the-clock safety coverage' },
  { name: 'Volunteer Mgmt', icon: Users, desc: 'Coordinated volunteer operations' },
  { name: 'Live Relay', icon: Radio, desc: 'HD quality waaz relay streaming' },
  { name: 'Niyaz / Food', icon: UtensilsCrossed, desc: 'Organized food distribution' },
  { name: 'Parking', icon: ParkingCircle, desc: 'Dedicated parking zones' },
  { name: 'Helpdesk', icon: HelpCircle, desc: 'Information & support counter' },
  { name: 'Women Assistance', icon: UserCheck, desc: 'Dedicated women help services' },
  { name: 'Lost & Found', icon: Search, desc: 'Item recovery assistance' },
  { name: 'Emergency', icon: AlertTriangle, desc: 'Rapid emergency response team' },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Khidmat</span>
          <h2 className="font-heading text-3xl sm:text-4xl text-emerald-dark mt-2 mb-4">Services — 12 Umoor</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-emerald-dark/5 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-dark/5 group-hover:bg-gold/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <Icon size={28} className="text-emerald-dark group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-base text-emerald-dark font-semibold mb-1">{s.name}</h3>
                <p className="text-xs text-charcoal/50">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
