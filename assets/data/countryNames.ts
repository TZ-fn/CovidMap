const countryNamesFromCovidData = {
  'Dominican Republic': 'Dominican Rep.',
  'United States': 'USA',
  'Falkland Is.': 'Falkland Islands (Malvinas)',
  'United Arab Emirates': 'UEA',
  'N. Cyprus': 'Cyprus',
  Korea: 'S. Korea',
  'Lao PDR': "Lao People's Democratic Republic",
  Syria: 'Syrian Arab Republic',
  'Central African Rep.': 'Central African Republic',
  'Dem. Rep. Congo': 'Congo',
  'Eq. Guinea': 'Equatorial Guinea',
  Libya: 'Libyan Arab Jamahiriya',
  'W. Sahara': 'Western Sahara',
  'S. Sudan': 'South Sudan',
  Somaliland: 'Somalia',
  'Bosnia and Herz.': 'Bosnia',
  'Czech Rep.': 'Czechia',
  'United Kingdom': 'UK',
  'Solomon Is.': 'Solomon Islands',
} as const;

export type CountryNameFromMap = keyof typeof countryNamesFromCovidData;

export default countryNamesFromCovidData;
