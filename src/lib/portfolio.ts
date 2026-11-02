// Projects documented on the foundation's Instagram (@olaidedohertycharityfoundation).
// Recipient names and payment receipts from those posts are intentionally left out.
import businessFlyer from "@/assets/business-grant-flyer.jpg.asset.json";
import schoolFlyer from "@/assets/back-to-school-flyer.jpg.asset.json";
import schoolLive from "@/assets/back-to-school-live-flyer.jpg.asset.json";
import outreach from "@/assets/outreach-food-distribution.jpg.asset.json";
import communityLive from "@/assets/community-live-flyer.jpg.asset.json";
import founderIndependence from "@/assets/founder-independence-day.jpg.asset.json";

export type PortfolioImage = { src: string; alt: string; w: number; h: number };

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  cover: PortfolioImage;
  stats: { value: string; label: string }[];
  story: string[];
  gallery: PortfolioImage[];
  quote?: { text: string; by: string };
  instagram: string;
};

export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "small-business-grants",
    title: "Small Business Grants",
    category: "Small business support",
    date: "September 2026",
    summary: "₦100,000 grants that helped hard-working small business owners restock, upgrade and grow.",
    cover: {
      src: businessFlyer.url,
      alt: "Foundation flyer: What can 100,000 naira do for your business?",
      w: 1166,
      h: 1492,
    },
    stats: [
      { value: "₦100,000", label: "Per grant" },
      { value: "2", label: "Grants paid on 16 Sep" },
      { value: "Live", label: "Selected on Instagram" },
    ],
    story: [
      "We asked a simple question: what can ₦100,000 do for your business? Small business owners with an active online page sent short videos explaining how a grant would help them boost inventory, upgrade equipment or improve their marketing.",
      "Applicants were celebrated live on Instagram, and on 16 September 2026 the first two grants were paid out — with thanks to our sponsors who made it possible.",
      "One recipient has already invested the funds in soft drinks and provisions, expanding the business and growing a new source of income.",
    ],
    gallery: [],
    quote: {
      text: "I'm grateful to OD Charity Foundation for the ₦100,000 small business grant. This support has helped me expand my business and increase my source of income.",
      by: "Small business grant recipient",
    },
    instagram: "https://www.instagram.com/olaidedohertycharityfoundation/p/DctjqwNRxBf/",
  },
  {
    slug: "back-to-school-empowerment",
    title: "Back-to-School Empowerment",
    category: "Youth transformation",
    date: "30 September 2026",
    summary: "Support for parents with their children's back-to-school needs — we planned for six and reached seven.",
    cover: {
      src: schoolFlyer.url,
      alt: "Foundation flyer: Back-to-school edition, 30k each for 6 individuals",
      w: 640,
      h: 800,
    },
    stats: [
      { value: "₦30,000", label: "Per family" },
      { value: "7", label: "Parents supported" },
      { value: "₦180k+", label: "Given in one day" },
    ],
    story: [
      "Our Back-to-School Empowerment Edition set out to give ₦30,000 each to six people who really needed help getting their children ready for the new term.",
      "On Wednesday 30 September we went live on TikTok. We couldn't help everybody, but we were able to touch six mothers and one father — going over our budget to do it.",
      "Thank you to everyone who shared and announced the page. Stay tuned for the next batch!",
    ],
    gallery: [
      {
        src: schoolLive.url,
        alt: "Flyer: Join us on TikTok for the Back-to-School Empowerment Edition, Wednesday 30th",
        w: 361,
        h: 640,
      },
    ],
    quote: {
      text: "Thank you so much for the school fees support. May God almighty send sponsors and make this foundation bigger.",
      by: "Parent supported by the foundation",
    },
    instagram: "https://www.instagram.com/olaidedohertycharityfoundation/reel/Dd7d8DNxntC/",
  },
  {
    slug: "community-food-outreach",
    title: "Community Food Outreach",
    category: "Community outreach",
    date: "Ongoing",
    summary: "Food packages delivered by hand to women and families in our community.",
    cover: {
      src: outreach.url,
      alt: "Women holding food packages from an Olaide Doherty Charity Foundation outreach",
      w: 1870,
      h: 841,
    },
    stats: [
      { value: "Hand", label: "Delivered" },
      { value: "Families", label: "Supported" },
      { value: "Hope", label: "Shared" },
    ],
    story: [
      "Our outreach days bring food and care directly to the people who need it most. Women and families receive food packages and, just as importantly, a reminder that they are seen.",
      "These outreaches are how we live out our motto every day: where giving meets the needs.",
    ],
    gallery: [],
    instagram: "https://www.instagram.com/olaidedohertycharityfoundation/",
  },
  {
    slug: "live-community-conversations",
    title: "Live Community Conversations",
    category: "Encouraging hope",
    date: "Weekly",
    summary: "Live sessions on TikTok and Instagram that keep our community close — from Nigeria to America.",
    cover: {
      src: founderIndependence.url,
      alt: "Independence Day message from founder Olaide Doherty",
      w: 360,
      h: 640,
    },
    stats: [
      { value: "6pm", label: "Nigerian time" },
      { value: "12 noon", label: "CST, America" },
      { value: "2", label: "Platforms" },
    ],
    story: [
      "Every giveaway, grant and empowerment programme happens in the open. We go live on TikTok and Instagram at 6pm Nigerian time (12 noon CST) so supporters and applicants can join from anywhere.",
      "These sessions are also where we catch up, celebrate milestones like Nigeria's Independence Day, and build a community where love, kindness, compassion and sincerity come first.",
    ],
    gallery: [
      {
        src: communityLive.url,
        alt: "Flyer: Hey everyone! Let's meet live on TikTok this Wednesday to catch up",
        w: 1152,
        h: 1168,
      },
    ],
    instagram: "https://www.instagram.com/olaidedohertycharityfoundation/",
  },
];

export function findProject(slug: string) {
  return PORTFOLIO.find((p) => p.slug === slug);
}
