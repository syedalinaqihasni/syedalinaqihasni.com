import { SERVICES } from "./services";

export const services = [
  "ecommerce-solutions",
  "frontend-development",
  "seo-optimization",
  "ui-ux-design",
  "website-maintenance",
  "wordpress-development",
  "web-application",
];


// export async function generateStaticParams() {
//   const params: { slug: string; country?: string; city?: string; area?: string }[] = [];

//   for (const country of countries) {
//     for (const city of country?.cities) {
//       for (const area of city.areas) {
//         for (const service of SERVICES) {
//           // service/country
//           params?.push({
//             slug: service?.slug,
//             country: country?.slug,
//           });
//           // service/country/city
//           params?.push({
//             slug: service?.slug,
//             country: country?.slug,
//             city: city.slug,
//           });
//           // service/country/city/area
//           params?.push({
//             slug: service?.slug,
//             country: country?.slug,
//             city: city.slug,
//             area: area?.slug,
//           });
//           // service/city
//           params?.push({
//             slug: service?.slug,
//             city: city.slug,
//           });
//           // service/city/area
//           params?.push({
//             slug: service?.slug,
//             city: city.slug,
//             area: area?.slug,
//           });
//           // service/area
//           params?.push({
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
