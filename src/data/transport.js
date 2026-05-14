export const transportData = {
  railway: {
    title: 'By Railway',
    icon: 'Train',
    description: 'Bhopal is a major railway junction on the West Central Railway zone, well-connected to all major Indian cities.',
    stations: [
      { name: 'Bhopal Junction (BPL)', address: '80 Feet Road, Bajaria, Navbahar Colony, Bhopal, MP 462001', phone: '139 (Railway Enquiry)', helpline: '138 (General Helpline)', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9!2d77.4120!3d23.2690!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6911c6e1e4c1%3A0x2b0e8e0b35bf07b0!2sBhopal+Junction!5e0!3m2!1sen!2sin!4v1', description: 'Main railway station serving Bhopal. Connected to Delhi, Mumbai, Chennai, Kolkata, and all major cities via Shatabdi, Rajdhani, and Express trains.' },
      { name: 'Rani Kamlapati (Habibganj)', address: 'Habibganj, Bhopal, MP 462024', phone: '139', helpline: '138', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9!2d77.4380!3d23.2290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRani+Kamlapati+Station!5e0!3m2!1sen!2sin!4v1', description: 'India\'s first world-class railway station. Modern amenities, escalators, food court, and direct connectivity to ISBT.' },
    ],
    keyTrains: [
      { name: 'Shatabdi Express', route: 'Delhi ↔ Bhopal', number: '12001/12002', duration: '~8 hrs' },
      { name: 'Rajdhani Express', route: 'Delhi ↔ Bhopal', number: '12155/12156', duration: '~8 hrs' },
      { name: 'Mumbai Rajdhani', route: 'Mumbai ↔ Delhi via Bhopal', number: '12951/12952', duration: '~12 hrs from Mumbai' },
      { name: 'AP Express', route: 'Delhi ↔ Hyderabad via Bhopal', number: '12723/12724', duration: '~10 hrs from Delhi' },
      { name: 'Gondwana Express', route: 'Delhi ↔ Jabalpur via Bhopal', number: '12411/12412', duration: '~11 hrs from Delhi' },
    ],
  },
  airlines: {
    title: 'By Airlines',
    icon: 'Plane',
    description: 'Raja Bhoj Airport connects Bhopal to major cities across India with daily flights.',
    airport: { name: 'Raja Bhoj International Airport (BHO)', address: 'Gandhi Nagar, Bairagarh, Bhopal, MP 462036', phone: '+91-755-2743389', distanceFromCity: '~15 km from Bhopal Junction (~30 min drive)', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5!2d77.3370!3d23.2870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69ba46e88e29%3A0xc68e3c9e9d10ac88!2sRaja+Bhoj+Airport!5e0!3m2!1sen!2sin!4v1', description: 'Domestic airport with daily flights to Delhi, Mumbai, Hyderabad, Bengaluru, and more.' },
    airlines: [
      { name: 'IndiGo', routes: 'Delhi, Mumbai, Hyderabad, Bengaluru, Pune' },
      { name: 'Air India', routes: 'Delhi, Mumbai' },
      { name: 'SpiceJet', routes: 'Delhi, Mumbai, Hyderabad' },
      { name: 'Vistara', routes: 'Delhi, Mumbai' },
      { name: 'Go First', routes: 'Delhi, Mumbai, Ahmedabad' },
    ],
  },
  road: {
    title: 'By Road',
    icon: 'Car',
    description: 'Bhopal is well-connected via national highways and has excellent inter-state bus services.',
    highways: [
      { name: 'NH-46 (Agra-Mumbai Highway)', description: 'Connects Bhopal to Agra (520 km) and Mumbai (780 km)' },
      { name: 'NH-12', description: 'Connects Bhopal to Jaipur (600 km) and Jabalpur (330 km)' },
      { name: 'NH-86', description: 'Connects Bhopal to Sagar and eastern Madhya Pradesh' },
    ],
    busTerminals: [
      { name: 'Kushabhau Thakre ISBT', address: 'Habibganj, Bhopal, MP 462024', phone: '+91-755-2746590', description: 'Main inter-state bus terminus for long-distance buses to Indore, Jabalpur, Delhi, Mumbai, etc.', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9!2d77.438!3d23.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sISBT+Habibganj+Bhopal!5e0!3m2!1sen!2sin!4v1' },
      { name: 'Nadra Bus Stand', address: 'Near Bhopal Junction, Old Bhopal, MP 462001', phone: '+91-755-2740123', description: 'Regional bus stand near Bhopal Junction serving local and nearby city routes.', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9!2d77.412!3d23.267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNadra+Bus+Stand+Bhopal!5e0!3m2!1sen!2sin!4v1' },
    ],
    distances: [
      { city: 'Indore', distance: '195 km', duration: '~3.5 hrs' },
      { city: 'Jabalpur', distance: '330 km', duration: '~5.5 hrs' },
      { city: 'Delhi', distance: '780 km', duration: '~12 hrs' },
      { city: 'Mumbai', distance: '780 km', duration: '~13 hrs' },
      { city: 'Jaipur', distance: '600 km', duration: '~9 hrs' },
      { city: 'Nagpur', distance: '350 km', duration: '~6 hrs' },
    ],
  },
  cityTransport: {
    title: 'Inside City Transport',
    icon: 'Bus',
    description: 'Multiple options available for getting around Bhopal city during Ashara Mubaraka.',
    modes: [
      { name: 'City Bus (BCLL)', icon: 'Bus', description: 'Bhopal City Link Limited operates AC and non-AC buses covering major routes across the city. Affordable and well-networked.', fare: '₹10 – ₹30', availability: '6:00 AM – 10:00 PM', tips: 'Use Google Maps for real-time bus tracking. Major stops: Habibganj, MP Nagar, Old City, Bhadbhada.' },
      { name: 'Auto Rickshaw', icon: 'Bike', description: 'Three-wheelers available throughout the city. Both meter and fixed-fare autos are common.', fare: '₹30 – ₹200 (based on distance)', availability: '24/7', tips: 'Negotiate fare before boarding. Meter autos charge ~₹25 base + ₹15/km.' },
      { name: 'Taxi / Cab', icon: 'Car', description: 'Traditional taxis and app-based cabs for comfortable city travel and airport/station transfers.', fare: '₹150 – ₹800 (based on distance)', availability: '24/7', tips: 'Pre-paid taxi booths available at Railway Station and Airport. Ideal for group travel.' },
      { name: 'Rapido', icon: 'Zap', description: 'Bike taxi service offering quick and affordable two-wheeler rides across the city via the Rapido app.', fare: '₹20 – ₹150', availability: '6:00 AM – 11:00 PM', tips: 'Download Rapido app. Best for solo travelers needing quick point-to-point travel.' },
      { name: 'Ola', icon: 'Smartphone', description: 'Leading ride-hailing platform offering Mini, Sedan, and Auto categories in Bhopal.', fare: '₹80 – ₹500 (based on category & distance)', availability: '24/7', tips: 'Book via Ola app. Ola Auto available for budget rides. Ola Outstation for inter-city.' },
      { name: 'Uber', icon: 'Smartphone', description: 'Popular ride-hailing platform with UberGo, UberAuto, and UberXL options in Bhopal.', fare: '₹80 – ₹500 (based on category & distance)', availability: '24/7', tips: 'Book via Uber app. UberAuto is the most affordable option.' },
      { name: 'Other Online Services', icon: 'Globe', description: 'InDriver, Meru Cabs, and local aggregator services also operate in Bhopal for ride-hailing.', fare: 'Varies', availability: 'Varies', tips: 'InDriver allows fare negotiation. Meru available for airport transfers.' },
    ],
  },
};
