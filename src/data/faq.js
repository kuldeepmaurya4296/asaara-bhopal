export const faqs = [
  {
    q: 'How to reach the relay center?',
    a: 'Take the main road towards Iqbal Maidan and follow the signboards. Dedicated parking and volunteer-assisted drop-off points are available at the main entrance.',
  },
  {
    q: 'What are the waaz timings?',
    a: 'Waaz Mubarak starts daily at 10:00 AM and again at 5:00 PM. Timings may change — please check the announcement bar for the latest updates.',
  },
  {
    q: 'Where is parking available?',
    a: 'Dedicated parking zones are marked near each masjid and at the main relay centre entrance. Volunteers will guide you to the nearest available spot.',
  },
  {
    q: 'How to access live relay?',
    a: 'You can access the live relay at any of the registered relay centres in Bhopal. Online streaming links will be shared via the official communication channels.',
  },
  {
    q: 'Emergency support number?',
    a: 'For emergencies, call our 24/7 helpline at +91-9876543210. Medical teams and ambulance services are on standby throughout Ashara Mubarak.',
  },
  {
    q: 'Accommodation support details?',
    a: 'We provide verified guest houses with transport facilities. Contact the Accommodation desk at the relay centre or call the helpline for advance booking.',
  },
  {
    q: 'Are there medical facilities available?',
    a: 'Yes, Mahlus Shifa medical camps are set up at all major relay centres. Ambulances and emergency medical teams are on standby 24/7.',
  },
  {
    q: 'How can I volunteer for Ashara Mubarak?',
    a: 'You can register at the Central Markaz volunteer desk or contact your local community representative. Volunteers are needed across 23 different departments.',
  },
  {
    q: 'What are the transport arrangements?',
    a: 'Shuttle buses are running from the airport, railway stations, and major hotels to the main relay centres. You can also book dedicated community cabs via our transport desk.',
  },
  {
    q: 'Are there separate arrangements for elderly and specially-abled mumineen?',
    a: 'Yes, dedicated seating zones with easy wheelchair access, special transport drop-offs, and priority volunteer assistance are available.',
  }
];

export function getFeaturedFaqs(count = 5) {
  return faqs.slice(0, count);
}
