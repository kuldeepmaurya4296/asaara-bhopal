export const relayZones = [
  {
    id: 'zone-a',
    name: 'Zone 1',
    title: 'مفضل ',
    color: 'emerald',
    description: `A German Hangar Dome is proposed to be constructed on a 3.1 Acre land parcel, subject to the raza and approval of Shehzada Husain Bhaisaheb. The planning has been prepared in accordance with the guidance received from Hazrat Aliya.`,
    capacity: '12,300 Operational Capacity',
    tables: [
      {
        title: '',
        headers: ['Category', 'Area', 'Capacity'],
        data: [
          { particulars: 'Total Venue Area', details: '96,831 Sq. Ft', remarks: '-' },
          { particulars: 'Gents Seating', details: '55,678 Sq. Ft.', remarks: '4,539' },
          { particulars: 'Ladies Seating', details: '36,312 Sq. Ft.', remarks: '6,959' },
          { particulars: 'Rahat Seating', details: '4,841 Sq. Ft.', remarks: '605' },
          { particulars: 'TOTAL OPERATIONAL CAPACITY', details: '', remarks: '12,300' },
        ]
      }
    ]
  },
  {
    id: 'zone-b',
    name: 'Zone 2',
    title: 'حسيني',
    color: 'gold',
    description: '',
    capacity: '4,623 Operational Capacity',
    tables: [
      {
        title: '',
        headers: ['Mawaid Area', 'Per Thok ', 'Capacity'],
        data: [
          { particulars: 'Ground Floor', details: '1,700 Sq. Ft.', remarks: '300 Gents' },
          { particulars: 'First Floor', details: '1,000 Sq. Ft. ', remarks: '200 Ladies' },
          { particulars: 'Second Floor', details: '1,000 Sq. Ft.', remarks: '200 Ladies' },
          { particulars: 'Sehen Area ', details: '2,000 Sq. Ft.', remarks: '350 Gents' },
          { particulars: 'Courtyard Area', details: '810 Sq. Ft.', remarks: '150 Rahat' },
          { particulars: 'TOTAL CAPACITY', details: '-', remarks: '1,200' },
        ]
      },
      {
        title: '',
        headers: ['Mawaid Area', 'Per Thok ', 'Total Capacity'],
        data: [
          { particulars: 'Husaini Sehen', details: '280', remarks: '640' },
          { particulars: 'Husaini Basement ', details: '280', remarks: '640' },
        ]
      },

    ],

  },
  {
    id: 'zone-c',
    name: 'Zone 3',
    title: 'حيدري',
    color: 'emerald',
    description: '',
    capacity: '1,200 Operational Capacity',
    tables: [
      {
        title: '',
        headers: ['Haidery Masjid Area', 'Approx. Area', 'Capacity'],
        data: [
          { particulars: 'Ground Floor', details: '3,168 Sq. Ft', remarks: '742 Gents' },
          { particulars: 'First Floor', details: '2,684 Sq. Ft', remarks: '525 Gents' },
          { particulars: 'Second Floor', details: '2,684 Sq. Ft', remarks: '525 Gents' },
          { particulars: 'Sehen', details: '874 Sq. Ft.', remarks: '131 Seating' }
        ]
      },
      {
        title: '',
        headers: ['Haidery Mawaid', 'Approx. Area', 'Capacity'],
        data: [
          { particulars: 'Ground Floor', details: '10,900 Sq. Ft.', remarks: '920 Ladies' },
          { particulars: 'First Floor', details: '10,880 Sq. Ft.', remarks: '920 Ladies' },
        ]
      },
      {
        title: '',
        headers: ['Badri Masjid Area', 'Approx. Area', 'Capacity'],
        data: [
          { particulars: 'Ground Floor', details: '1,664 Sq. Ft.', remarks: '400 Rahat' },
          { particulars: 'First Floor', details: '1,400 Sq. Ft.', remarks: '150 Ladies' },
          { particulars: 'Second Floor', details: '1,400 Sq. Ft. ', remarks: '150 Ladies' },
          { particulars: 'Sehen', details: '972 Sq. Ft', remarks: '160 Rahat' }
        ]
      },
      {
        title: '',
        headers: ['Mawaid Area', 'Per Thok', 'Total Capacity'],
        data: [
          { particulars: 'Haidery GF', details: '920', remarks: '1,840' },
          { particulars: 'Haidery 1st Floor', details: '920', remarks: '1,840' },
          { particulars: 'Badri Mawaid', details: '450', remarks: '900' },
          { particulars: 'TOTAL ZONE 3 CAPACITY', details: '-', remarks: '4623' },

        ]
      },
    ]
  },
  {
    id: 'zone-d',
    name: 'Zone 4',
    title: 'برهاني ',
    color: 'gold',
    description: '',
    capacity: '2,877 Operational Capacity',
    tables: [
      {
        title: '',
        headers: ['Burhani Masjid Area', 'Approx. Area', 'Capacity'],
        data: [
          { particulars: 'Ground Floor', details: '3,744 Sq. Ft.', remarks: '900 Gents' },
          { particulars: 'First Floor', details: '2,745 Sq. Ft. ', remarks: '650 Ladies' },
          { particulars: 'Second Floor', details: '2,745 Sq. Ft.', remarks: '650 Ladies' },
          { particulars: 'Sehen', details: '1,200 Sq. Ft.', remarks: '300 Gents' },
        ]
      },
      {
        title: '',
        headers: ['Hakimi Markaz ', 'Approx. Area', 'Capacity'],
        data: [
          { particulars: 'Hakimi Markaz', details: '2,800 Sq. Ft.', remarks: '377 Total' },
        ]
      },
      {
        title: '',
        headers: ['Mawaid Venue', 'Per Thok', 'Total Capacity'],
        data: [
          { particulars: 'Burhani Mawaid A', details: '1,120 ', remarks: '2,240' },
          { particulars: 'Burhani Mawaid B', details: '800 ', remarks: '1,600' },
          { particulars: 'Hakimi Markaz', details: '-', remarks: '377' },
          { particulars: 'TOTAL ZONE 4 CAPACITY', details: '-', remarks: '2877' },
        ]
      },

    ]
  },
];

export function getZoneById(id) {
  return relayZones.find((z) => z.id === id) || null;
}
