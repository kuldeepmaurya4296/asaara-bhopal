import umoorPdf from './12 umoor.pdf';

export const TAGS_META = {
  community: { en: 'Community', ur: 'کمیونٹی' },
  initiatives: { en: 'Initiatives', ur: 'اقدامات' },
  communication: { en: 'Communication', ur: 'مواصلات' },
  infrastructure: { en: 'Infrastructure', ur: 'بنیادی ڈھانچہ' },
  finance: { en: 'Finance', ur: 'مالیات' },
  health: { en: 'Health', ur: 'صحت' },
};

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
      headingEn: 'QAZA E RASIYAH (OVERALL)',
      headingUr: 'مجموعی پروگرام کا جائزہ',
      contentEn: 'A detailed overview of programs conducted across all Umoors and cities, including logistics, volunteer deployment, and community engagement strategies implemented.',
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600`,
      ],
      docUrl: umoorPdf,
    },
  ],
};

// ─── COMPLETE HIERARCHICAL DATA ───────────────────────────────────────────
// This array is the single source of truth for the entire reports page.
export const reportsData2 = [
  {
    id: 'umoor-deeniyah',
    nameEn: 'Umoor Deeniyah',
    nameUr: 'امور دینیہ',
    accordion: {
      headingEn: 'UMOOR DEENIYAH (ALL CITIES)',
      headingUr: 'امور دینیہ (تمام شہر)',
      contentEn: 'Overview of Umoor Deeniyah activities conducted across all cities. Highlights general religious and community initiatives.',
      contentUr: 'تمام شہروں میں امور دینیہ کی سرگرمیوں کا جائزہ۔',
      images: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600'],
      docUrl: '',
    },
    cities: [
      {
        id: 'bhopal',
        nameEn: 'Bhopal',
        nameUr: 'بھوپال',
        achievements: [
          { textEn: 'Successfully completed health outreach programs across all sectors.', textUr: 'کمیونٹی پروگرامز کو کامیابی سے مکمل کیا گیا', tags: ['community', 'initiatives'] },
          { textEn: 'Launched new digital infrastructure for member engagement.', textUr: 'نئے اقدامات کا آغاز کیا گیا', tags: ['infrastructure'] },
        ],
        improvements: [
          { textEn: 'Communication channels need to be streamlined for faster response times.', textUr: 'رابطے کو بہتر بنانے کی ضرورت ہے', tags: ['communication', 'infrastructure'] },
        ],
        images: [
          'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600',
          'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600'
        ],
        accordion: {
          headingEn: 'UMOOR DEENIYAH IN BHOPAL',
          headingUr: 'بھوپال میں امور دینیہ کا جائزہ',
          contentEn: 'A comprehensive overview of Umoor Deeniyah activities and programs conducted in Bhopal. This section highlights key metrics, volunteer efforts, and strategic goals specific to this selection.',
          contentUr: 'یہ سیکشن بھوپال میں امور دینیہ کی سرگرمیوں اور پروگراموں کا جامع جائزہ ہے۔',
          images: ['https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600'],
          docUrl: umoorPdf,
        }
      },
      {
        id: 'sagar',
        nameEn: 'Sagar',
        nameUr: 'ساگر',
        achievements: [
          { textEn: 'Organized large scale educational seminars.', textUr: 'تعلیمی سیمینار کا انعقاد کیا گیا', tags: ['community'] },
        ],
        improvements: [
          { textEn: 'Infrastructure maintenance schedules require better coordination.', textUr: 'بنیادی ڈھانچے کی دیکھ بھال کی ضرورت ہے', tags: ['infrastructure'] },
        ],
        images: [
          'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600'
        ],
        accordion: {
          headingEn: 'UMOOR DEENIYAH IN SAGAR',
          headingUr: 'ساگر میں امور دینیہ کا جائزہ',
          contentEn: 'Overview of Umoor Deeniyah activities conducted in Sagar.',
          contentUr: 'یہ سیکشن ساگر میں امور دینیہ کی سرگرمیوں کا جائزہ ہے۔',
          images: ['https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600'],
          docUrl: umoorPdf,
        }
      }
    ]
  },
  {
    id: 'umoor-talimiyah',
    nameEn: 'Umoor Talimiyah',
    nameUr: 'امور تعلیمیہ',
    accordion: {
      headingEn: 'UMOOR TALIMIYAH (ALL CITIES)',
      headingUr: 'امور تعلیمیہ (تمام شہر)',
      contentEn: 'Overview of educational programs across all cities.',
      contentUr: 'تمام شہروں میں تعلیمی پروگراموں کا جائزہ۔',
      images: ['https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=600'],
      docUrl: umoorPdf,
    },
    cities: [
      {
        id: 'jabalpur',
        nameEn: 'Jabalpur',
        nameUr: 'جبلپور',
        achievements: [
          { textEn: 'Launched new digital educational programs.', textUr: 'نئے تعلیمی اقدامات کا آغاز کیا گیا', tags: ['initiatives', 'community'] },
        ],
        improvements: [
          { textEn: 'School infrastructure maintenance requires better coordination.', textUr: 'سکول کے بنیادی ڈھانچے کی دیکھ بھال کی ضرورت ہے', tags: ['infrastructure'] },
        ],
        images: [
          'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=600'
        ],
        accordion: {
          headingEn: 'UMOOR TALIMIYAH IN JABALPUR',
          headingUr: 'جبلپور میں امور تعلیمیہ کا جائزہ',
          contentEn: 'Detailed overview of educational activities in Jabalpur.',
          contentUr: 'جبلپور میں تعلیمی سرگرمیوں کا تفصیلی جائزہ۔',
          images: ['https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=600'],
          docUrl: umoorPdf,
        }
      }
    ]
  },
  {
    id: 'umoor-marafiq',
    nameEn: 'Umoor Marafiq',
    nameUr: 'امور مرافق',
    accordion: {
      headingEn: 'UMOOR MARAFIQ (ALL CITIES)',
      headingUr: 'امور مرافق (تمام شہر)',
      contentEn: 'Overview of facility management and logistics across all cities.',
      contentUr: 'تمام شہروں میں انتظامات اور مرافق کا جائزہ۔',
      images: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600'],
      docUrl: umoorPdf,
    },
    cities: [
      {
        id: 'bhopal',
        nameEn: 'Bhopal',
        nameUr: 'بھوپال',
        achievements: [
          { textEn: 'Successfully completed facility upgrades.', textUr: 'مرافق کی بہتری کامیابی سے مکمل ہوئی', tags: ['infrastructure'] },
        ],
        improvements: [
          { textEn: 'Need to improve event management coordination.', textUr: 'انتظامات بہتر کرنے کی ضرورت ہے', tags: ['communication'] },
        ],
        images: [
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600'
        ],
        accordion: {
          headingEn: 'UMOOR MARAFIQ IN BHOPAL',
          headingUr: 'بھوپال میں امور مرافق کا جائزہ',
          contentEn: 'Overview of facility and logistics management activities in Bhopal.',
          contentUr: 'بھوپال میں امور مرافق کا تفصیلی جائزہ۔',
          images: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600'],
          docUrl: umoorPdf,
        }
      }
    ]
  },
  {
    id: 'umoor-sehat',
    nameEn: 'Umoor Sehat',
    nameUr: 'امور صحت',
    accordion: {
      headingEn: 'UMOOR SEHAT (ALL CITIES)',
      headingUr: 'امور صحت (تمام شہر)',
      contentEn: 'Overview of health and medical programs across all cities.',
      contentUr: 'تمام شہروں میں صحت اور طبی پروگراموں کا جائزہ۔',
      images: ['https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600'],
      docUrl: umoorPdf,
    },
    cities: [
      {
        id: 'bhopal-burhani',
        nameEn: 'Bhopal Burhani',
        nameUr: 'بھوپال برہانی',
        achievements: [
          { textEn: 'Conducted a major health camp reaching out to 500+ individuals.', textUr: 'کیمپ کا انعقاد کامیابی سے ہوا', tags: ['health', 'community'] },
        ],
        improvements: [
          { textEn: 'Need to increase medical supplies for the next quarter.', textUr: 'طبی سامان بڑھانے کی ضرورت ہے', tags: ['infrastructure', 'finance'] },
        ],
        images: [
          'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600'
        ],
        accordion: {
          headingEn: 'UMOOR SEHAT IN BHOPAL BURHANI',
          headingUr: 'بھوپال برہانی میں امور صحت کا جائزہ',
          contentEn: 'Overview of health activities conducted in Bhopal Burhani.',
          contentUr: 'یہ سیکشن بھوپال برہانی میں امور صحت کی سرگرمیوں کا جائزہ ہے۔',
          images: ['https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600'],
          docUrl: umoorPdf,
        }
      }
    ]
  }
];
