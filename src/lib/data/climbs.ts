export type Climb = {
  name: string;
  grade: string;
  location: string;
  date: string;
};

export const climbs: { boulder: Climb[]; sport: Climb[] } = {
  boulder: [
    { name: 'Tilted World', grade: 'V13', location: 'Obed, TN', date: '1/04/2026' },
    { name: 'Nine Pound Hammer', grade: 'V12', location: 'Austin, TX', date: '11/28/2023' },
    { name: 'Rumble in the Jungle', grade: 'V12', location: 'Hueco Tanks, TX', date: '2/27/2021' },
    { name: 'Tequila Sunrise Sit Start', grade: 'V12', location: 'Hueco Tanks, TX', date: '2/10/2024' },
    { name: 'Mr Big Stuff', grade: 'V11', location: 'Obed, TN', date: '3/25/2024' }
  ],
  sport: [
    { name: 'Patience Grasshopper', grade: '5.14a', location: "Reimer's Ranch, TX", date: '11/20/2021' },
    { name: 'Dreamkeeper', grade: '5.13b', location: "Reimer's Ranch, TX", date: '12/22/2018' },
    { name: 'House of Pain', grade: '5.13a', location: "Reimer's Ranch, TX", date: '10/25/2017' }
  ]
};
