/**
 * Gallery Data – Ashara Mubaraka Bhopal
 *
 * Categories:
 *  1. Ashara Ohbat – Majlis 1447
 *  2. Ashara  Preparation
 *     a. Mawaid / Niyaz
 *     b. Relay Centre
 *     c. Zones
 *     d. Volunteers
 *     e. Masajid
 *     f. Markaz
 *     g. Mahlus Shifa – Medical Assistance
 *  3. Other
 */

export const galleryCategories = [
  { key: 'all', label: 'All' },
  { key: 'majlis', label: 'Ashara Ohbat – Majlis 1447' },
  { key: 'mawaid', label: 'Mawaid / Niyaz' },
  { key: 'relay-centre', label: 'Relay Centre' },
  { key: 'zones', label: 'Zones' },
  { key: 'volunteers', label: 'Volunteers' },
  { key: 'masajid', label: 'Masajid' },
  { key: 'markaz', label: 'Markaz' },
  { key: 'medical', label: 'Mahlus Shifa - Medical Assitance' },
  { key: 'other', label: 'Other' },
];

export const galleryImages = [
  // ── Ashara Ohbat – Majlis 1447 ──
  { id: 1, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp', category: 'majlis', title: 'Waaz Mubaraka – Ashara 1447H', featured: true },
  { id: 2, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/622701576_18073706855373522_5838723358977877538_nfull.webp', category: 'majlis', title: 'Majlis Gathering – Day 1' },
  { id: 3, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp', category: 'majlis', title: 'Mumineen at Ashara Majlis', featured: true },

  // ── Mawaid / Niyaz ──
  { id: 4, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp', category: 'mawaid', title: 'Community Niyaz Preparations', featured: true },
  { id: 5, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/514391007_18052679591373522_4970761108929655218_nlow.webp', category: 'mawaid', title: 'Thaal Distribution' },

  // ── Relay Centre ──
  { id: 6, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/511454734_1402170707719877_5663356764546071948_n.heiclow.webp', category: 'relay-centre', title: 'Relay Centre Setup', featured: true },

  // ── Volunteers ──
  { id: 7, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/514391007_18052679591373522_4970761108929655218_nlow.webp', category: 'volunteers', title: 'Volunteer Team Briefing' },

  // ── Masajid ──
  { id: 8, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/511454734_1402170707719877_5663356764546071948_n.heiclow.webp', category: 'masajid', title: 'Saifee Masjid – Bhopal', featured: true },

  // ── Zones ──
  { id: 9, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/622701576_18073706855373522_5838723358977877538_nfull.webp', category: 'zones', title: 'Zone A – Central Bhopal Setup' },

  // ── Markaz ──
  { id: 10, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp', category: 'markaz', title: 'Markaz Central Operations' },

  // ── Mahlus Shifa – Medical ──
  { id: 11, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp', category: 'medical', title: 'Medical Camp – Mahlus Shifa' },

  // ── Other ──
  { id: 12, url: 'https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp', category: 'other', title: 'Bhopal City of Lakes' },
];

/** Get featured images for homepage preview (max 5) */
export function getFeaturedImages(count = 5) {
  const featured = galleryImages.filter((img) => img.featured);
  if (featured.length >= count) return featured.slice(0, count);
  // Fill remaining slots with non-featured images
  const remaining = galleryImages.filter((img) => !img.featured);
  return [...featured, ...remaining].slice(0, count);
}

/** Get images by category key */
export function getImagesByCategory(categoryKey) {
  if (categoryKey === 'all') return galleryImages;
  return galleryImages.filter((img) => img.category === categoryKey);
}
