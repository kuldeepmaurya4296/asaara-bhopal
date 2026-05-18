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
      headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
    },
  ],
};

// ─── COMPLETE HIERARCHICAL DATA ───────────────────────────────────────────
// This array is the single source of truth for the entire reports page.
export const reportsData2 = [
  {
    id: 'ا مور دينية',
    nameEn: '',
    nameUr: 'ا مور دينية',
    accordion: {
      headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
    },
    cities: [
      {
        id: 'بھوپال',
        nameEn: '',
        nameUr: 'بھوپال',
        achievements: [
          { textEn: '', textUr: 'العشرة المباركة عزائم - 500 ', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
          { textEn: '', textUr: 'مجموعي مجالس (جمعة نا دن انسس جمعة ني راتسس).', tags: ['general'] },
          { textEn: '', textUr: 'ككهرو ما اهبة مجالس - 400', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: 'محرمات ما ملوثين مؤمنين سي عشرة مباركة ثثظظلسس ثثاك تهاوا واسطسس عزائم كيدا', tags: ['محرمات بابت'] },
        ],
        images: ["https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp"
    
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'اْشتا',
        nameEn: '',
        nameUr: 'اْشتا',
        achievements: [
          { textEn: '', textUr: 'دكان بند عزم : 90 فيصد', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
          { textEn: '', textUr: 'ككوتهن ثثر بيتهي نسس ماتم ني عادة ، كهرا رهي نسس 5 منضض ماتم', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'بهوثثال - برهاني',
        nameEn: '',
        nameUr: 'بهوثثال - برهاني',
        achievements: [
          { textEn: '', textUr: 'دكان ححاوي عرض : 80 فيصد', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
          { textEn: '', textUr: 'مؤمنين لباس الانور ما} حاضر تهائي ــ تھ واسطسس تفهيم تهئي ؛', tags: ['بهوثثال - برهاني'] },
          { textEn: '', textUr: '75 فيصد سروس كرنار leave لئي ححكا', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'بهوثثال - حكيمي',
        nameEn: '',
        nameUr: 'بهوثثال - حكيمي',
        achievements: [
          { textEn: '', textUr: 'العشرة المباركة عزائم : قبل الوقت حاضر تهاوو', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
          { textEn: '', textUr: 'مجالس ما حاضري : 95 فيصد لباس الانور ', tags: ['بهوثثال - حكيمي'] },
          { textEn: '', textUr: 'ذاكرين ثثارتي قائم تهئي ؛.', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
      "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'جبلثثور',
        nameEn: '',
        nameUr: 'جبلثثور',
        achievements: [
          { textEn: '', textUr: 'دكان بند عزائم - 100 فيصد', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
     "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/511454734_1402170707719877_5663356764546071948_n.heiclow.webp"
        ],
        accordion: {
         headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'ساككر',
        nameEn: '',
        nameUr: 'ساككر',
        achievements: [
          { textEn: '', textUr: 'ححاوي عرض - 95 فيصد', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
       "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'سيهور',
        nameEn: '',
        nameUr: 'سيهور',
        achievements: [
          { textEn: '', textUr: 'دكان بند عزم : ٩٥ فيصد', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
          { textEn: '', textUr: 'ككهرو ما أهبة مجالس : ٧٠ فيصد', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
       "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'هوشنككاباد',
        nameEn: '',
        nameUr: 'هوشنككاباد',
        achievements: [
          { textEn: '', textUr: 'دكان بند عزائم: 100 فيصد', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
          { textEn: '', textUr: 'ككهرو ما أهبة مجلس تهئي', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
        "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp"
        ],
        accordion: {
     headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'سيرونج',
        nameEn: '',
        nameUr: 'سيرونج',
        achievements: [
          { textEn: '', textUr: 'العشرة المباركة عزائم - لباس الانور ، قبل الوقت حاضر ، سفيد توثثي ', tags: ['لباس الانور'] },
          { textEn: '', textUr: '3 مساجد ما امامة سي نماز شروع تهئي ؛.', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
      
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'دموه',
        nameEn: '',
        nameUr: 'دموه',
        achievements: [
          { textEn: '', textUr: 'تجهيز تكفين course', tags: ['تجهيز تكفين'] },
          { textEn: '', textUr: 'ككهرو ما أهبة مجلس تهئي', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: 'نماز حاضري ما فرق ؛', tags: ['general'] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'نرسنككرٌهـ',
        nameEn: '',
        nameUr: 'نرسنككرٌهـ',
        achievements: [
          { textEn: '', textUr: 'تجهيز تكفين : كميتي مستحكم', tags: ['تجهيز تكفين'] },
          { textEn: '', textUr: 'اهبة مجلس - ليلة الخميس انسس يوم الجمعة', tags: ['general'] },
          { textEn: '', textUr: 'مجلس حاضري - 90 فيصد', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: 'محرمات : 4 مؤمن', tags: ['محرمات بابت'] },
          { textEn: '', textUr: 'دكان بند عزم - 50 فيصد', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
          { textEn: '', textUr: 'شادي نتهي تهئي - 14 (45-25 عمر)', tags: ['شادي لائـق فرزندو'] },
          { textEn: '', textUr: 'نماز حاضري - ضعف', tags: ['general'] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'بهوثثال - حيدري',
        nameEn: '',
        nameUr: 'بهوثثال - حيدري',
        achievements: [
          { textEn: '', textUr: 'اهبة مجالس جاري ؛', tags: ['general'] }
        ],
        improvements: [
          { textEn: '', textUr: 'شادي لائق فرزندو ككهنا ؛ ، شادي نتهي تهئي.', tags: ['شادي لائـق فرزندو'] },
          { textEn: '', textUr: 'فرزندو نو غير ساتهسس شادي نو ratio ككهنو ؛.', tags: ['شادي لائـق فرزندو'] },
      
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'ككونا ',
        nameEn: '',
        nameUr: 'ككونا ',
        achievements: [
          { textEn: '', textUr: 'ككهرو ما أهبة مجالس : ٥٠ فيصد', tags: ['general'] }
        ],
        improvements: [
          { textEn: '', textUr: 'محرمات : ٢ مؤمن', tags: ['محرمات بابت'] },
          { textEn: '', textUr: 'دكان بند عزم : ٥٠ فيصد', tags: ['عشرة مباركة اهبة- دكان بند عزائم'] },
      
        ],
        images: [
      "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'ويديشا',
        nameEn: '',
        nameUr: 'ويديشا',
        achievements: [
          { textEn: '', textUr: '', tags: [''] },
          
        ],
        improvements: [
          { textEn: '', textUr: 'محرمات ما مبتلى - 14 مؤمن', tags: ['محرمات بابت'] },
          { textEn: '', textUr: '4 مخصوصين فقظ عاشورة نا دن حاضر تهائي ؛ ، تفهيم جاري ؛. ', tags: ['مخصوصين مؤمنين متعلق'] },
          { textEn: '', textUr: 'مجلس ما حاضري كم ؛.', tags: ['general'] },
          { textEn: '', textUr: 'بعض مؤمنين دارٌهي نهيطط راكهتا. ', tags: ['general'] }
      
        ],
        images: [
         "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'بـياؤره',
        nameEn: '',
        nameUr: 'بـياؤره',
        achievements: [
          { textEn: '', textUr: '', tags: [''] },
          
        ],
        improvements: [
          { textEn: '', textUr: 'محرمات ما مبتلى - 14 مؤمن', tags: ['محرمات بابت'] },
      
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
    ]
  },
  {
    id: 'ا مور تعليمية',
    nameEn: '',
    nameUr: 'ا مور تعليمية ',
    accordion: {
      headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
    },
    cities: [
      {
        id: 'اْشتا',
        nameEn: '',
        nameUr: 'اْشتا',
        achievements: [
          { textEn: '', textUr: 'نصاب 1،2،3 نا حلقةؤ تمام كيدا ', tags: ['اسباق متعلق'] },
        ],
        improvements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 1', tags: ['محرومين فرزندو '] },
        ],
        images: [
          'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=600'
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'بهوثثال',
        nameEn: '',
        nameUr: 'بهوثثال',
        achievements: [
          { textEn: '', textUr: 'ظاهر اسباق - 343 ، تأويل اسباق - 256', tags: ['اسباق متعلق'] },
          { textEn: '', textUr: 'ححلو اْوي نسس حل كري لو سؤالو - focused sessions', tags: ['اسباق متعلق'] },
          { textEn: '', textUr: 'نوجوانو حوار sessions', tags: ['اسباق متعلق'] },
          { textEn: '', textUr: 'يوم الجمعة - تفسير القران الكريم ', tags: ['اسباق متعلق'] },
          { textEn: '', textUr: 'مخصوص اسباق - منتزع الاخبار', tags: ['اسباق متعلق'] },
          { textEn: '', textUr: 'شهر الله المعظم - مسائل الامتحان ثثر بيانات', tags: ['اسباق متعلق'] },
          { textEn: '', textUr: 'قسم التحفيظ قائم تهائي ــ تھ واسطسس عرض ؛', tags: ['تحفيظ القراْن الكريـم '] },
          { textEn: '', textUr: 'تحفيظ واسطسس 2 dedicated  خدمة ككـزار ني تعيـين تهائي ', tags: ['تحفيظ القراْن الكريـم '] },
        ],
        improvements: [
          { textEn: '', textUr: 'داخلة فضل تهائي ــ ايم عرض ؛', tags: ['الجامعة السيفية داخلة عرض'] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'بهوثثال - حيدري',
        nameEn: '',
        nameUr: 'بهوثثال - حيدري',
        achievements: [
          { textEn: '', textUr: 'مخصوص اسباق ني رزا نا سبب اسباق ما حاضر تهاناراؤ ني ككنتي 300 نا فوق ثثظظنححي ؛', tags: ['اسباق متعلق'] },
        ],
        improvements: [
          { textEn: '', textUr: 'مدارس ايمانية ما جانار فرزندو نو ratio كم ؛.', tags: ['محرومين فرزندو '] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'بهوثثال - برهاني',
        nameEn: '',
        nameUr: 'بهوثثال - برهاني',
        achievements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 0', tags: ['فرزندو بابت'] },
          { textEn: '', textUr: 'ديني مدارس - MSB جديد داخلة- 15 فرزندو', tags: ['فرزندو بابت'] },
        ],
        improvements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        images: [
         "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'ثثيثثريا',
        nameEn: '',
        nameUr: 'ثثيثثريا',
        achievements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 0', tags: ['فرزندو بابت'] },
          { textEn: '', textUr: 'ديني مدارس - MSB جديد داخلة- 15 فرزندو', tags: ['فرزندو بابت'] },
        ],
        improvements: [
          { textEn: '', textUr: 'اسباق استمرار ساتهسس نتهي تهاتا', tags: ['اسباق متعلق'] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'جبلثثور',
        nameEn: '',
        nameUr: 'جبلثثور',
        achievements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 0', tags: ['فرزندو بابت'] },
          { textEn: '', textUr: 'تحفيظ القران : جزء عم 101 ، سورة البلد 183 ، سورة الانشقاق 48', tags: ['تحفيظ القراْن الكريـم '] },
          { textEn: '', textUr: '12 امور امتحان : 80 ، مستفيدين امتحان : 22 ', tags: ['general'] },
        ],
        improvements: [
          { textEn: '', textUr: 'مدرسة نسس renovate كرواني اشد ضرورة ؛', tags: ['مدرسة بابت '] },
        ],
        images: [
          'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=600'
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'دموه',
        nameEn: '',
        nameUr: 'دموه',
        achievements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 0', tags: ['فرزندو بابت'] },
        ],
        improvements: [
          { textEn: '', textUr: 'سبق ما حاضري كم ؛.', tags: ['اسباق متعلق'] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/642557896_18078047006373522_3613359581573383587_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
      {
        id: 'ساككر',
        nameEn: '',
        nameUr: 'ساككر',
        achievements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 0', tags: ['فرزندو بابت'] },
        ],
        improvements: [
          { textEn: '', textUr: 'داخلة فضل تهائي ــ ايم عرض ؛', tags: ['الجامعة السيفية داخلة عرض'] },
        ],
        images: [
         "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
       {
        id: 'نرسنككرٌهـ',
        nameEn: '',
        nameUr: 'نرسنككرٌهـ',
        achievements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 0', tags: ['فرزندو بابت'] },
          { textEn: '', textUr: 'اسكول \ كالج رزا - 100 فيصد', tags: ['عشرة مباركة اهبة '] },
        ],
        improvements: [
          { textEn: '', textUr: 'مدرسة ني بناء خسته ؛', tags: ['مدرسة بابت '] },
          { textEn: '', textUr: 'اسباق حاضري - 40 فيصد', tags: ['اسباق متعلق'] },
        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/534304307_18057192359373522_5961789652225816845_nfull.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
       {
        id: 'ويديشا',
        nameEn: '',
        nameUr: 'ويديشا',
        achievements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 0', tags: ['فرزندو بابت'] },
        ],
        improvements: [
          { textEn: '', textUr: 'سبق ما حاضري كم ؛.', tags: ['اسباق متعلق'] },
        ],
        images: [
          'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=600'
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
       {
        id: 'بـياؤره',
        nameEn: '',
        nameUr: 'بـياؤره',
        achievements: [
          { textEn: '', textUr: 'تحفيظ القران واسطسس معلم يھ سعي كيدي ؛', tags: ['تحفيظ القراْن الكريـم '] },
        ],
        improvements: [
          { textEn: '', textUr: 'ديني تعليم محروم - 1', tags: ['محرومين فرزندو '] },
          { textEn: '', textUr: 'اسباق استمرار ساتهسس نتهي تهاتا', tags: ['اسباق متعلق'] },
          { textEn: '', textUr: 'داخلة فضل تهائي ــ ايم عرض ؛', tags: ['الجامعة السيفية داخلة عرض'] },
        ],
        images: [
         "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
        {
        id: 'سيهور',
        nameEn: '',
        nameUr: 'سيهور',
        achievements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        improvements: [
          { textEn: '', textUr: 'ديني تعليم محروم - ٥', tags: ['محرومين فرزندو '] },

        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
        {
        id: 'ككونا',
        nameEn: '',
        nameUr: 'ككونا',
        achievements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        improvements: [
          { textEn: '', textUr: 'ديني تعليم محروم - ١٠', tags: ['محرومين فرزندو '] },

        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
        {
        id: 'بهوثثال - حكيمي',
        nameEn: '',
        nameUr: 'بهوثثال - حكيمي',
        achievements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        improvements: [
          { textEn: '', textUr: 'اسباق استمرار ساتهسس نتهي تهاتا', tags: ['اسباق متعلق'] },

        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
        {
        id: 'هوشنككاباد',
        nameEn: '',
        nameUr: 'هوشنككاباد',
        achievements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        improvements: [
          { textEn: '', textUr: 'داخلة فضل تهائي ــ ايم عرض ؛', tags: ['الجامعة السيفية داخلة عرض'] },

        ],
        images: [
         "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
        {
        id: 'اْشتھ',
        nameEn: '',
        nameUr: 'اْشتھ',
        achievements: [
          { textEn: '', textUr: '', tags: [''] },
        ],
        improvements: [
          { textEn: '', textUr: 'داخلة فضل تهائي ــ ايم عرض ؛', tags: ['الجامعة السيفية داخلة عرض'] },

        ],
        images: [
          "https://www.blrjmt.com/wp-content/uploads/sb-instagram-feed-images/516009504_713255458536416_5572747726922394130_n.heiclow.webp"
        ],
        accordion: {
          headingEn: '',
      headingUr: 'قضااي رئيسية',
  
      contentUr: 'تمام امور اور شہروں میں منعقد ہونے والے پروگرامز کا تفصیلی جائزہ، بشمول لاجسٹکس، رضاکاروں کی تعیناتی، اور کمیونٹی مصروفیت کی حکمت عملی۔',
      images: [
        `/Mss.jpeg`,
      ],
      docUrl: umoorPdf,
        }
      },
       
    ]
  }
];
