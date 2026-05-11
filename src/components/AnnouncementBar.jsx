import { Megaphone } from 'lucide-react';

const announcements = [
  "✦ Ashara Mubarak 1448H – Live Relay Active ✦",
  "✦ Emergency Support Available 24/7 ✦",
  "✦ Waaz Timing Updated – Check Schedule ✦",
  "✦ Volunteer Registration Now Open ✦",
];

export default function AnnouncementBar() {
  return (
    <div className="bg-emerald-dark text-gold py-2.5 overflow-hidden whitespace-nowrap relative">
      <div className="flex items-center animate-marquee">
        {announcements.concat(announcements).map((txt, i) => (
          <span key={i} className="mx-8 text-sm font-medium tracking-wide flex items-center gap-2">
            <Megaphone size={14} className="opacity-70 shrink-0" />
            {txt}
          </span>
        ))}
      </div>
    </div>
  );
}
