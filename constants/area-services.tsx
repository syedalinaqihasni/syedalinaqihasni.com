import { SERVICES } from "./services";

type Area = { name: string; slug: string };
type City = { name: string; slug: string; areas: Area[] };
type Country = { name: string; slug: string; code: string; cities: City[] };

export const services = [
  "ecommerce-solutions",
  "frontend-development",
  "seo-optimization",
  "ui-ux-design",
  "website-maintenance",
  "wordpress-development",
  "web-application",
];

export const countries: Country[] = [
  {
    name: "Pakistan",
    slug: "pakistan",
    code: "PK",
    cities: [
      {
        name: "Karachi",
        slug: "karachi",
        areas: [
          { name: "DHA", slug: "dha" },
          { name: "Gulshan-e-Iqbal", slug: "gulshan-e-iqbal" },
          { name: "Clifton", slug: "clifton" },
          { name: "North Nazimabad", slug: "north-nazimabad" },
          { name: "Gulshan", slug: "gulshan" },
        ],
      },
      {
        name: "Lahore",
        slug: "lahore",
        areas: [
          { name: "Gulberg", slug: "gulberg" },
          { name: "DHA", slug: "dha" },
          { name: "Model Town", slug: "model-town" },
        ],
      },
      {
        name: "Islamabad",
        slug: "islamabad",
        areas: [
          { name: "F-7", slug: "f-7" },
          { name: "G-11", slug: "g-11" },
          { name: "Bahria Town", slug: "bahria-town" },
        ],
      },
    ],
  },
  {
    name: "United Arab Emirates",
    slug: "united-arab-emirates",
    code: "AE",
    cities: [
      {
        name: "Dubai",
        slug: "dubai",
        areas: [
          { name: "Business Bay", slug: "business-bay" },
          { name: "Jumeirah", slug: "jumeirah" },
          { name: "Deira", slug: "deira" },
          { name: "Downtown", slug: "downtown" },
          { name: "Marina", slug: "marina" },
        ],
      },
      {
        name: "Abu Dhabi",
        slug: "abu-dhabi",
        areas: [
          { name: "Al Khalidiya", slug: "al-khalidiya" },
          { name: "Al Reem Island", slug: "al-reem-island" },
          { name: "Al Khalidiyah", slug: "al-khalidiyah" },
          { name: "Yas Island", slug: "yas-island" },
        ],
      },
    ],
  },
  {
    name: "United States",
    slug: "united-states",
    code: "US",
    cities: [
      {
        name: "New York",
        slug: "new-york",
        areas: [
          { name: "Manhattan", slug: "manhattan" },
          { name: "Brooklyn", slug: "brooklyn" },
          { name: "Queens", slug: "queens" },
        ],
      },
      {
        name: "Los Angeles",
        slug: "los-angeles",
        areas: [
          { name: "Hollywood", slug: "hollywood" },
          { name: "Santa Monica", slug: "santa-monica" },
          { name: "Downtown", slug: "downtown" },
        ],
      },
      {
        name: "Chicago",
        slug: "chicago",
        areas: [
          { name: "Lincoln Park", slug: "lincoln-park" },
          { name: "The Loop", slug: "the-loop" },
          { name: "Wicker Park", slug: "wicker-park" },
        ],
      },
    ],
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    code: "GB",
    cities: [
      {
        name: "London",
        slug: "london",
        areas: [
          { name: "Camden", slug: "camden" },
          { name: "Southwark", slug: "southwark" },
          { name: "Chelsea", slug: "chelsea" },
        ],
      },
      {
        name: "Manchester",
        slug: "manchester",
        areas: [
          { name: "Salford", slug: "salford" },
          { name: "Didsbury", slug: "didsbury" },
          { name: "Ancoats", slug: "ancoats" },
        ],
      },
    ],
  },
  {
    name: "India",
    slug: "india",
    code: "IN",
    cities: [
      {
        name: "Mumbai",
        slug: "mumbai",
        areas: [
          { name: "Andheri", slug: "andheri" },
          { name: "Bandra", slug: "bandra" },
          { name: "Juhu", slug: "juhu" },
        ],
      },
      {
        name: "Delhi",
        slug: "delhi",
        areas: [
          { name: "Connaught Place", slug: "connaught-place" },
          { name: "Gurgaon", slug: "gurgaon" },
          { name: "Noida", slug: "noida" },
        ],
      },
      {
        name: "Bangalore",
        slug: "bangalore",
        areas: [
          { name: "Whitefield", slug: "whitefield" },
          { name: "Koramangala", slug: "koramangala" },
          { name: "MG Road", slug: "mg-road" },
        ],
      },
    ],
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
    cities: [
      {
        name: "Berlin",
        slug: "berlin",
        areas: [
          { name: "Mitte", slug: "mitte" },
          { name: "Kreuzberg", slug: "kreuzberg" },
          { name: "Charlottenburg", slug: "charlottenburg" },
        ],
      },
      {
        name: "Munich",
        slug: "munich",
        areas: [
          { name: "Altstadt", slug: "altstadt" },
          { name: "Schwabing", slug: "schwabing" },
          { name: "Maxvorstadt", slug: "maxvorstadt" },
        ],
      },
    ],
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
    cities: [
      {
        name: "Paris",
        slug: "paris",
        areas: [
          { name: "Le Marais", slug: "le-marais" },
          { name: "Latin Quarter", slug: "latin-quarter" },
          { name: "Montmartre", slug: "montmartre" },
        ],
      },
    ],
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    code: "SA",
    cities: [
      {
        name: "Riyadh",
        slug: "riyadh",
        areas: [
          { name: "Olaya", slug: "olaya" },
          { name: "Al Malaz", slug: "al-malaz" },
          { name: "Diriyah", slug: "diriyah" },
        ],
      },
    ],
  },
  {
    name: "China",
    slug: "china",
    code: "CN",
    cities: [
      {
        name: "Beijing",
        slug: "beijing",
        areas: [
          { name: "Chaoyang", slug: "chaoyang" },
          { name: "Haidian", slug: "haidian" },
          { name: "Dongcheng", slug: "dongcheng" },
        ],
      },
      {
        name: "Shanghai",
        slug: "shanghai",
        areas: [
          { name: "Pudong", slug: "pudong" },
          { name: "Jing’an", slug: "jingan" },
          { name: "Xuhui", slug: "xuhui" },
        ],
      },
      {
        name: "Guangzhou",
        slug: "guangzhou",
        areas: [
          { name: "Tianhe", slug: "tianhe" },
          { name: "Yuexiu", slug: "yuexiu" },
          { name: "Haizhu", slug: "haizhu" },
        ],
      },
    ],
  },
  {
    name: "Japan",
    slug: "japan",
    code: "JP",
    cities: [
      {
        name: "Tokyo",
        slug: "tokyo",
        areas: [
          { name: "Shinjuku", slug: "shinjuku" },
          { name: "Shibuya", slug: "shibuya" },
          { name: "Ginza", slug: "ginza" },
        ],
      },
      {
        name: "Osaka",
        slug: "osaka",
        areas: [
          { name: "Umeda", slug: "umeda" },
          { name: "Namba", slug: "namba" },
          { name: "Shin-Osaka", slug: "shin-osaka" },
          { name: "Shin‑Osaka", slug: "shin-osaka" },
        ],
      },
      {
        name: "Kyoto",
        slug: "kyoto",
        areas: [
          { name: "Gion", slug: "gion" },
          { name: "Arashiyama", slug: "arashiyama" },
          { name: "Fushimi", slug: "fushimi" },
        ],
      },
    ],
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    cities: [
      {
        name: "Sydney",
        slug: "sydney",
        areas: [
          { name: "CBD", slug: "cbd" },
          { name: "Bondi", slug: "bondi" },
          { name: "Manly", slug: "manly" },
        ],
      },
      {
        name: "Melbourne",
        slug: "melbourne",
        areas: [
          { name: "Fitzroy", slug: "fitzroy" },
          { name: "St Kilda", slug: "st-kilda" },
          { name: "South Yarra", slug: "south-yarra" },
        ],
      },
    ],
  },
  {
    name: "Brazil",
    slug: "brazil",
    code: "BR",
    cities: [
      {
        name: "São Paulo",
        slug: "sao-paulo",
        areas: [
          { name: "Paulista", slug: "paulista" },
          { name: "Morumbi", slug: "morumbi" },
          { name: "Pinheiros", slug: "pinheiros" },
        ],
      },
      {
        name: "Rio de Janeiro",
        slug: "rio-de-janeiro",
        areas: [
          { name: "Copacabana", slug: "copacabana" },
          { name: "Ipanema", slug: "ipanema" },
          { name: "Botafogo", slug: "botafogo" },
        ],
      },
    ],
  },
  {
    name: "South Africa",
    slug: "south-africa",
    code: "ZA",
    cities: [
      {
        name: "Johannesburg",
        slug: "johannesburg",
        areas: [
          { name: "Sandton", slug: "sandton" },
          { name: "Rosebank", slug: "rosebank" },
          { name: "Midrand", slug: "midrand" },
        ],
      },
    ],
  },
  {
    name: "Singapore",
    slug: "singapore",
    code: "SG",
    cities: [
      {
        name: "Singapore",
        slug: "singapore",
        areas: [
          { name: "Orchard", slug: "orchard" },
          { name: "Marina Bay", slug: "marina-bay" },
          { name: "Sentosa", slug: "sentosa" },
        ],
      },
    ],
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    code: "MY",
    cities: [
      {
        name: "Kuala Lumpur",
        slug: "kuala-lumpur",
        areas: [
          { name: "Bukit Bintang", slug: "bukit-bintang" },
          { name: "KL Sentral", slug: "kl-sentral" },
          { name: "Petaling Jaya", slug: "petaling-jaya" },
        ],
      },
      {
        name: "Penang",
        slug: "penang",
        areas: [
          { name: "George Town", slug: "george-town" },
          { name: "Batu Ferringhi", slug: "batu-ferringhi" },
          { name: "Bayan Lepas", slug: "bayan-lepas" },
        ],
      },
    ],
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    code: "ID",
    cities: [
      {
        name: "Jakarta",
        slug: "jakarta",
        areas: [
          { name: "Central Jakarta", slug: "central-jakarta" },
          { name: "South Jakarta", slug: "south-jakarta" },
          { name: "North Jakarta", slug: "north-jakarta" },
        ],
      },
      {
        name: "Bali",
        slug: "bali",
        areas: [
          { name: "Kuta", slug: "kuta" },
          { name: "Seminyak", slug: "seminyak" },
          { name: "Ubud", slug: "ubud" },
        ],
      },
    ],
  },
  {
    name: "Thailand",
    slug: "thailand",
    code: "TH",
    cities: [
      {
        name: "Bangkok",
        slug: "bangkok",
        areas: [
          { name: "Sukhumvit", slug: "sukhumvit" },
          { name: "Silom", slug: "silom" },
          { name: "Rattanakosin", slug: "rattanakosin" },
        ],
      },
    ],
  },
  {
    name: "South Korea",
    slug: "south-korea",
    code: "KR",
    cities: [
      {
        name: "Seoul",
        slug: "seoul",
        areas: [
          { name: "Gangnam", slug: "gangnam" },
          { name: "Hongdae", slug: "hongdae" },
          { name: "Itaewon", slug: "itaewon" },
        ],
      },
      {
        name: "Busan",
        slug: "busan",
        areas: [
          { name: "Haeundae", slug: "haeundae" },
          { name: "Suyeong", slug: "suyeong" },
          { name: "Seomyeon", slug: "seomyeon" },
        ],
      },
    ],
  },
];
export function generateServicePaths(countries: Country[], services: string[]) {
  const paths: string[] = [];

  countries.forEach((country) => {
    // services.forEach((service) => {
      // /country-service
      paths.push(`/${country?.slug}`);
    // });

    country.cities.forEach((city) => {
      // services.forEach((service) => {
        // /city-service
        paths.push(`/${city?.slug}`);
        // /country-city-service
        paths.push(`/${country?.slug}-${city?.slug}`);
      // });

      city.areas.forEach((area) => {
        // services.forEach((service) => {
          // /area-service
          paths.push(`/${area?.slug}`);
          // /city-area-service
          paths.push(`/${city?.slug}-${area?.slug}`);
          // /country-city-area-service
          paths.push(`/${country?.slug}-${city?.slug}-${area?.slug}`);
        // });
      });
    });
  });

  return paths;
}

// export async function generateStaticParams() {
//   const params: { slug: string; country?: string; city?: string; area?: string }[] = [];

//   for (const country of countries) {
//     for (const city of country?.cities) {
//       for (const area of city.areas) {
//         for (const service of SERVICES) {
//           // service/country
//           params.push({
//             slug: service?.slug,
//             country: country?.slug,
//           });
//           // service/country/city
//           params.push({
//             slug: service?.slug,
//             country: country?.slug,
//             city: city.slug,
//           });
//           // service/country/city/area
//           params.push({
//             slug: service?.slug,
//             country: country?.slug,
//             city: city.slug,
//             area: area?.slug,
//           });
//           // service/city
//           params.push({
//             slug: service?.slug,
//             city: city.slug,
//           });
//           // service/city/area
//           params.push({
//             slug: service?.slug,
//             city: city.slug,
//             area: area?.slug,
//           });
//           // service/area
//           params.push({
//             slug: service?.slug,
//             area: area?.slug,
//           });
//         }
//       }
//     }
//   }

//   // Optionally, add more combinations as needed

//   return params;
// }

