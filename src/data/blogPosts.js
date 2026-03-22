/**
 * Blog registry — add a new post here and create its page component.
 * The parent Blogs page and routes update automatically from this list.
 */
import BlackCountryHalfMarathon from '../Components/Blogs/BlackCountryHalfMarathon';

export const blogPosts = [
  {
    slug: 'black-country-half-marathon',
    title: 'How to Prepare for & Recover From the Black Country Half Marathon',
    excerpt:
      'Preparation and recovery tips for runners — training, common injuries, sports massage, dry needling, and when to seek professional rehabilitation.',
    publishedAt: '2026-01-15',
    readTimeMinutes: 8,
    image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1774214782/bbchm_logo_jcvmrj.png',
    Component: BlackCountryHalfMarathon,
  },
];

export function getBlogPostsSorted() {
  return [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
