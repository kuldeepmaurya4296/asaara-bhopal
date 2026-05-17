// ─── Reports Data 2 ─────────────────────────────────────────────────────────
// Structured data for the Report 2 page — Multi-Umoor × Multi-City reports
// Each umoor has multiple cities, each city has achievements, improvements,
// slider images, accordion sections, and optional document download.
// Dual language: English (en) and Urdu (ur)

import umoorPdf from './12 umoor.pdf';

export const cities = [
  { id: 'sagar', nameEn: 'Sagar', nameUr: 'ساگر' },
  { id: 'biaora', nameEn: 'Biaora', nameUr: 'بیاورہ' },
  { id: 'sehore', nameEn: 'Sehore', nameUr: 'سیہور' },
  { id: 'damoh', nameEn: 'Damoh', nameUr: 'دمو' },
  { id: 'guna', nameEn: 'Guna', nameUr: 'گنا' },
  { id: 'narsinghgarh', nameEn: 'Narsinghgarh', nameUr: 'نرسنگھ گڑھ' },
  { id: 'bhopal', nameEn: 'Bhopal', nameUr: 'بھوپال' },
  { id: 'ashta', nameEn: 'Ashta', nameUr: 'آشٹا' },
  { id: 'jabalpur', nameEn: 'Jabalpur', nameUr: 'جبلپور' },
  { id: 'hoshangabad', nameEn: 'Hoshangabad', nameUr: 'ہوشنگ آباد' },
  { id: 'pipariya', nameEn: 'Pipariya', nameUr: 'پپریا' },
  { id: 'bhopal-haidery', nameEn: 'Bhopal - Haidery', nameUr: 'بھوپال حیدری' },
  { id: 'sironj', nameEn: 'Sironj', nameUr: 'سرونج' },
  { id: 'bhopal-burhani', nameEn: 'Bhopal Burhani', nameUr: 'بھوپال برہانی' },
  { id: 'bhopal-hakimi', nameEn: 'Bhopal Hakimi', nameUr: 'بھوپال حکیمی' },
  { id: 'vidisha', nameEn: 'Vidisha', nameUr: 'ودیشا' },
];

export const umoors = [
  { id: 'umoor-deeniyah', nameEn: 'Umoor Deeniyah', nameUr: 'امور دینیہ' },
  { id: 'umoor-talimiyah', nameEn: 'Umoor Talimiyah', nameUr: 'امور تعلیمیہ' },
  { id: 'umoor-marafiq', nameEn: 'Umoor Marafiq', nameUr: 'امور مرافق' },
  { id: 'umoor-maliyah', nameEn: 'Umoor Maliyah', nameUr: 'امور مالیہ' },
  { id: 'umoor-diyafah', nameEn: 'Umoor Diyafah', nameUr: 'امور ضیافہ' },
  { id: 'umoor-amlak', nameEn: 'Umoor Amlak', nameUr: 'امور املاک' },
  { id: 'umoor-iqtisadiyah', nameEn: 'Umoor Iqtisadiyah', nameUr: 'امور اقتصادیہ' },
  { id: 'umoor-qazaiyah', nameEn: 'Umoor Qazaiyah', nameUr: 'امور قضائیہ' },
  { id: 'umoor-faiz-al-mawaid', nameEn: 'Umoor Faiz al-Mawaid', nameUr: 'امور فیض المائدۃ' },
  { id: 'umoor-kharijiyah', nameEn: 'Umoor Kharijiyah', nameUr: 'امور خارجیہ' },
  { id: 'umoor-mawarid', nameEn: 'Umoor Mawarid', nameUr: 'امور موارد' },
  { id: 'umoor-sehat', nameEn: 'Umoor Sehat', nameUr: 'امور صحت' },
];

export const TAGS_META = {
  community: { en: 'Community', ur: 'کمیونٹی' },
  initiatives: { en: 'Initiatives', ur: 'اقدامات' },
  communication: { en: 'Communication', ur: 'مواصلات' },
  infrastructure: { en: 'Infrastructure', ur: 'بنیادی ڈھانچہ' },
  finance: { en: 'Finance', ur: 'مالیات' },
  health: { en: 'Health', ur: 'صحت' },
};

// Helper to create a city entry with sample data
function makeCityEntry(cityId, umoorId, hasSampleData = false) {
  if (!hasSampleData) {
    return {
      cityId,
      achievements: { en: null, ur: null },
      improvements: { en: null, ur: null },
      images: [],
    };
  }

  const tag1 = cityId === 'bhopal' ? 'community' : 'health';
  const tag2 = cityId === 'sagar' ? 'infrastructure' : 'initiatives';
  const tag3 = 'communication';
  
  const sampleImages = [
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=600'
  ];

  return {
    cityId,
    images: [sampleImages[Math.floor(Math.random() * sampleImages.length)]],
    achievements: {
      ur: {
        heading: 'اہم کامیابیاں',
        items: [
          { text: `کمیونٹی پروگرامز کو کامیابی سے مکمل کیا گیا`, tags: [tag1, 'initiatives'] },
          { text: `نئے اقدامات کا آغاز کیا گیا`, tags: [tag2] },
        ],
      },
      en: {
        heading: 'Key Achievements',
        items: [
          { text: `Successfully completed ${tag1} outreach programs across all sectors in ${cityId}.`, tags: [tag1, 'initiatives'] },
          { text: `Launched new digital ${tag2} for member engagement.`, tags: [tag2] },
        ],
      },
    },
    improvements: {
      ur: {
        heading: 'بہتری کی ضرورت',
        items: [
          { text: 'رابطے کو بہتر بنانے کی ضرورت ہے', tags: [tag3, 'infrastructure'] },
          { text: 'بنیادی ڈھانچے کی دیکھ بھال کی ضرورت ہے', tags: ['infrastructure'] },
        ],
      },
      en: {
        heading: 'Need to Improve',
        items: [
          { text: `Communication channels need to be streamlined in ${cityId} for faster response times.`, tags: [tag3, 'infrastructure'] },
          { text: `Infrastructure maintenance schedules require better coordination.`, tags: ['infrastructure'] },
        ],
      },
    },
  };
}

// ─── Build the full data structure ──────────────────────────────────────────
// For demonstration, a few umoor-city combos have sample data.
// The rest are empty shells — the UI hides empty sections gracefully.

const sampleCombos = [
  ['umoor-deeniyah', 'bhopal'],
  ['umoor-deeniyah', 'sagar'],
  ['umoor-deeniyah', 'sehore'],
  ['umoor-talimiyah', 'bhopal'],
  ['umoor-talimiyah', 'jabalpur'],
  ['umoor-talimiyah', 'biaora'],
  ['umoor-marafiq', 'bhopal'],
  ['umoor-marafiq', 'ashta'],
  ['umoor-maliyah', 'bhopal'],
  ['umoor-maliyah', 'guna'],
  ['umoor-diyafah', 'bhopal'],
  ['umoor-diyafah', 'damoh'],
  ['umoor-amlak', 'bhopal'],
  ['umoor-amlak', 'narsinghgarh'],
  ['umoor-iqtisadiyah', 'bhopal'],
  ['umoor-iqtisadiyah', 'vidisha'],
  ['umoor-qazaiyah', 'bhopal'],
  ['umoor-qazaiyah', 'hoshangabad'],
  ['umoor-faiz-al-mawaid', 'bhopal'],
  ['umoor-faiz-al-mawaid', 'pipariya'],
  ['umoor-kharijiyah', 'bhopal'],
  ['umoor-kharijiyah', 'bhopal-haidery'],
  ['umoor-mawarid', 'bhopal'],
  ['umoor-mawarid', 'sironj'],
  ['umoor-sehat', 'bhopal'],
  ['umoor-sehat', 'bhopal-burhani'],
  ['umoor-sehat', 'bhopal-hakimi'],
];

export const reportsData2 = umoors.map((umoor) => ({
  ...umoor,
  cities: cities.map((city) => {
    const hasSample = sampleCombos.some(
      ([u, c]) => u === umoor.id && c === city.id
    );
    return makeCityEntry(city.id, umoor.id, hasSample);
  }),
}));

// ─── Helper Functions ───────────────────────────────────────────────────────

/** Get a specific umoor by ID */
export function getUmoorById(umoorId) {
  return reportsData2.find((u) => u.id === umoorId) || null;
}

/** Get all city data for a specific umoor (only cities that have content) */
export function getCitiesWithDataForUmoor(umoorId) {
  const umoor = getUmoorById(umoorId);
  if (!umoor) return [];
  return umoor.cities.filter((c) => cityHasData(c));
}

/** Check if a city entry has any meaningful data */
export function cityHasData(cityEntry) {
  if (!cityEntry) return false;
  const hasAchievements =
    (cityEntry.achievements.en && cityEntry.achievements.en.items && cityEntry.achievements.en.items.length > 0) ||
    (cityEntry.achievements.ur && cityEntry.achievements.ur.items && cityEntry.achievements.ur.items.length > 0);
  const hasImprovements =
    (cityEntry.improvements.en && cityEntry.improvements.en.items && cityEntry.improvements.en.items.length > 0) ||
    (cityEntry.improvements.ur && cityEntry.improvements.ur.items && cityEntry.improvements.ur.items.length > 0);
  const hasDoc = !!cityEntry.docUrl;
  return hasAchievements || hasImprovements || hasDoc;
}

/** Get city meta info by ID */
export function getCityMeta(cityId) {
  return cities.find((c) => c.id === cityId) || null;
}

/** Get umoor meta info by ID */
export function getUmoorMeta(umoorId) {
  return umoors.find((u) => u.id === umoorId) || null;
}

// ─── Common Page Data ────────────────────────────────────────────────────────
export const commonData = {
  sliderImages: [
    `https://images.unsplash.com/photo-1596422846543-74c6ca7f41a8?auto=format&fit=crop&q=80&w=900`,
    `https://images.unsplash.com/photo-1622308644420-b003a27db8da?auto=format&fit=crop&q=80&w=900`,
    `https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&q=80&w=900`,
    `https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&q=80&w=900`,
    `https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=900`,
  ],
  accordion: [
    {
      headingEn: 'Overall Program Overview',
      headingUr: 'مجموعی پروگرام کا جائزہ',
      contentEn: 'A detailed overview of programs conducted during the Ashara period across all Umoors and cities, including logistics, volunteer deployment, and community engagement strategies implemented.',
      contentUr: 'تمام امور اور شہروں میں عشرہ مبارکہ کے دوران منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600`,
      ],
      docUrl: umoorPdf,
    },
    {
      headingEn: 'Global Future Goals',
      headingUr: 'عالمی مستقبل کے اہداف',
      contentEn: 'Strategic planning for the upcoming year includes expanding outreach globally, improving digital infrastructure, and enhancing volunteer training modules across all departments.',
      contentUr: 'آئندہ سال کے لیے اسٹریٹجک منصوبہ بندی میں عالمی سطح پر رسائی کو بڑھانا، ڈیجیٹل انفراسٹرکچر کو بہتر بنانا، اور تمام محکموں میں رضاکاروں کی تربیت کے ماڈیولز کو بہتر بنانا شامل ہے۔',
      images: [],
    },
    {
      headingEn: 'Visual Highlights',
      headingUr: 'بصری جھلکیاں',
      contentEn: 'A curated collection of visual moments captured across various Umoors and cities, showcasing community participation, events, and infrastructural improvements.',
      contentUr: 'مختلف امور اور شہروں سے لی گئی بصری جھلکیوں کا مجموعہ، جو کمیونٹی کی شرکت، تقریبات، اور بنیادی ڈھانچے کی بہتری کو نمایاں کرتا ہے۔',
      images: [],
    },
  ],
};
