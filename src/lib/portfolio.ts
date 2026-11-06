// Projects documented on the foundation's Instagram (@olaidedohertycharityfoundation).
// Recipient names and payment receipts from those posts are intentionally left out.
import businessFlyer from "@/assets/business-grant-flyer.jpg";
import schoolFlyer from "@/assets/back-to-school-flyer.jpg";
import schoolLive from "@/assets/back-to-school-live-flyer.jpg";
import outreach from "@/assets/outreach-food-distribution.jpg";
import communityLive from "@/assets/community-live-flyer.jpg";

import img20 from "@/assets/IMG-20261102-WA0020.jpg";
import img21 from "@/assets/IMG-20261102-WA0021.jpg";
import img22 from "@/assets/IMG-20261102-WA0022.jpg";
import img24 from "@/assets/IMG-20261102-WA0024.jpg";
import img26 from "@/assets/IMG-20261102-WA0026.jpg";
import img28 from "@/assets/IMG-20261102-WA0028.jpg";
import img29 from "@/assets/IMG-20261102-WA0029.jpg";
import img30 from "@/assets/IMG-20261102-WA0030.jpg";
import img31 from "@/assets/IMG-20261102-WA0031.jpg";
import img32 from "@/assets/IMG-20261102-WA0032.jpg";
import img33 from "@/assets/IMG-20261102-WA0033.jpg";
import img34 from "@/assets/IMG-20261102-WA0034.jpg";
import videoPoster from "@/assets/video-poster.jpg";
import packedMealsVideo from "@/assets/packed-meals-outreach.mp4.asset.json";
import packedMealsPoster from "@/assets/meal-boxes-poster.jpg.asset.json";
import elderThanksVideo from "@/assets/elder-thanks-testimony.mp4.asset.json";
import elderThanksPoster from "@/assets/elder-thanks-poster.jpg.asset.json";
import motherThanksVideo from "@/assets/mother-thanks-testimony.mp4.asset.json";
import motherThanksPoster from "@/assets/mother-thanks-poster.jpg.asset.json";
import beneficiaryTestimonialVideo from "@/assets/community-beneficiary-testimonial.mp4.asset.json";
import beneficiaryTestimonialPoster from "@/assets/community-beneficiary-testimonial-poster.jpg.asset.json";

const LOVABLE_ASSET_ORIGIN = "https://kindhearted-giving-garden.lovable.app";

function hostedAssetUrl(url: string) {
  return new URL(url, LOVABLE_ASSET_ORIGIN).toString();
}

export type PortfolioMedia = {
  type?: "image" | "video";
  src: string;
  alt: string;
  w?: number;
  h?: number;
  poster?: string;
  title?: string;
};

export type PortfolioImage = PortfolioMedia;

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  cover: PortfolioMedia;
  stats: { value: string; label: string }[];
  story: string[];
  gallery: PortfolioMedia[];
  quote?: { text: string; by: string };
  instagram: string;
  video?: {
    src: string;
    poster?: string;
    title?: string;
  };
};

export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "back-to-school-empowerment",
    title: "Back-to-School Empowerment",
    category: "Youth transformation",
    date: "Academic Year 2026",
    summary:
      "Equipping children with sturdy custom backpacks, notebooks, and learning essentials so parents can send them to school with pride.",
    cover: {
      src: img24,
      alt: "Student before and after receiving new Olaide Doherty Charity Foundation backpack",
      w: 1600,
      h: 1600,
    },
    stats: [
      { value: "100+", label: "Students equipped" },
      { value: "Durable", label: "Custom backpacks" },
      { value: "Termly", label: "Ongoing support" },
    ],
    story: [
      "Our Back-to-School initiative tackles one of the most visible challenges children face: worn, torn schoolbags and lack of learning materials that hold them back from feeling confident in school.",
      "Through the generosity of our supporters and sponsors, we manufactured and distributed brand-new, durable Olaide Doherty Charity Foundation backpacks and custom exercise books directly to students.",
      "From young primary pupils to brothers and sisters in uniform, seeing their faces light up as they replaced their old worn bags with sturdy foundation backpacks is why we do what we do: where giving meets the needs.",
    ],
    gallery: [
      {
        src: img20,
        alt: "Schoolchildren proudly displaying their new Olaide Doherty Charity Foundation notebooks",
        w: 1080,
        h: 826,
      },
      {
        src: img21,
        alt: "Custom branded Olaide Doherty Charity Foundation backpacks prepared for students",
        w: 1250,
        h: 1600,
      },
      {
        src: img26,
        alt: "Primary school girl showing before with torn schoolbag and now with her new OD Foundation backpack",
        w: 862,
        h: 1080,
      },
      {
        src: img31,
        alt: "Two student brothers in uniform before with damaged bags and now wearing their new foundation schoolbags",
        w: 1024,
        h: 1280,
      },
      {
        src: schoolFlyer,
        alt: "Foundation flyer: Back-to-school edition, 30k each for 6 individuals",
        w: 640,
        h: 800,
      },
      {
        src: schoolLive,
        alt: "Flyer: Join us on TikTok for the Back-to-School Empowerment Edition",
        w: 361,
        h: 640,
      },
    ],
    quote: {
      text: "Thank you so much to the OD Charity Foundation for my new bag and books. I feel so proud going to school now!",
      by: "Primary school student beneficiary",
    },
    instagram: "https://www.instagram.com/olaidedohertycharityfoundation/reel/Dd7d8DNxntC/",
  },
  {
    slug: "community-food-outreach",
    title: "Community Food Outreach & Welfare",
    category: "Community outreach",
    date: "Ongoing",
    summary:
      "Nutritious hot meals, bulk rice, cooking oil, and packaged food provisions delivered by hand to widows, families, and orphans.",
    cover: {
      src: img34,
      alt: "Olaide Doherty Charity Foundation outreach staff and volunteers standing with the official community food outreach banner",
      w: 1600,
      h: 1020,
    },
    stats: [
      { value: "500+", label: "Hot meals served" },
      { value: "Bulk", label: "Rice & provisions" },
      { value: "Hands-on", label: "Volunteer staff" },
    ],
    story: [
      "Our Community Food Outreach mobilizes our volunteer staff and local cooking team to prepare and distribute wholesome meals directly into the heart of neighbourhoods.",
      "Our team procures bulk sacks of grains, cooking oil, and seasonings, packaging them alongside freshly prepared hot meals in sealed, hygienic containers for families, widows, and children.",
      "Founded by Olaide Doherty (Miss Island Lagos 2001), the foundation's outreach team stands on the frontlines to ensure no child or mother in our community is left hungry.",
    ],
    gallery: [
      {
        src: img28,
        alt: "Smiling young girl receiving a freshly cooked packaged meal from an outreach volunteer",
        w: 1200,
        h: 1600,
      },
      {
        src: img32,
        alt: "Foundation kitchen team in OD branded blue aprons cooking large pots of jollof rice",
        w: 1200,
        h: 1600,
      },
      {
        src: img33,
        alt: "Hundreds of neatly stacked, packaged meal boxes ready for community distribution beside the official banner",
        w: 1280,
        h: 942,
      },
      {
        type: "video",
        src: hostedAssetUrl(packedMealsVideo.url),
        poster: hostedAssetUrl(packedMealsPoster.url),
        alt: "Rows of sealed meal boxes labelled with the Olaide Doherty Charity Foundation sticker",
        title: "Video: Hundreds of meal boxes packed and ready to share",
      },
      {
        src: img22,
        alt: "Holiday food packages, rice, King's vegetable oil and seasonings displayed in front of the foundation backdrop",
        w: 1246,
        h: 1600,
      },
      {
        src: img29,
        alt: "Warehouse inventory of rice sacks procured for food distribution",
        w: 740,
        h: 987,
      },
      {
        src: img30,
        alt: "Pantry warehouse stacked with food grain sacks for the community drive",
        w: 810,
        h: 1080,
      },
      {
        src: outreach,
        alt: "Women holding food packages from an Olaide Doherty Charity Foundation outreach",
        w: 1870,
        h: 841,
      },
    ],
    quote: {
      text: "This food came right when we needed it most. God bless the Olaide Doherty Charity Foundation for putting smiles on our faces.",
      by: "Community outreach beneficiary",
    },
    instagram: "https://www.instagram.com/olaidedohertycharityfoundation/",
  },
  {
    slug: "live-community-conversations",
    title: "Community Voices & Video Testimonials",
    category: "Encouraging hope",
    date: "Weekly",
    summary:
      "Video testimonials from elders and community beneficiaries, plus weekly live sessions that unite supporters from Nigeria to the diaspora.",
    cover: {
      type: "video",
      src: hostedAssetUrl(elderThanksVideo.url),
      poster: videoPoster,
      alt: "Community elder giving heartfelt prayers and testimonial for the Olaide Doherty Charity Foundation",
      w: 1024,
      h: 576,
    },
    stats: [
      { value: "Weekly", label: "Live streams" },
      { value: "1:45 min", label: "Elder testimony" },
      { value: "Global", label: "Community & fans" },
    ],
    story: [
      "Every giveaway, grant and empowerment programme happens in the open. We go live on TikTok and Instagram at 6pm Nigerian time (12 noon CST) so supporters and applicants can join from anywhere.",
      "Beyond financial and material support, we share the heartfelt words and prayers of our community elders and beneficiaries who testify to the real, direct impact of the foundation.",
      "Watch the video testimonial above, where community elders offer prayers and blessings for the foundation, our founder Olaide Doherty, and all sponsors who make this work possible.",
    ],
    gallery: [
      {
        type: "video",
        src: hostedAssetUrl(elderThanksVideo.url),
        poster: hostedAssetUrl(elderThanksPoster.url),
        alt: "An elderly woman in a pink cap giving thanks to the foundation",
        title: "Video: An elder's words of thanks (0:40)",
      },
      {
        type: "video",
        src: hostedAssetUrl(motherThanksVideo.url),
        poster: hostedAssetUrl(motherThanksPoster.url),
        alt: "A mother in a green patterned dress sharing her gratitude for the foundation's support",
        title: "Video: A mother shares her gratitude (0:49)",
      },
      {
        type: "video",
        src: hostedAssetUrl(beneficiaryTestimonialVideo.url),
        poster: hostedAssetUrl(beneficiaryTestimonialPoster.url),
        alt: "A community woman in a blue-and-yellow patterned outfit sharing her experience",
        title: "Video: A community member shares her experience",
      },
      {
        src: communityLive,
        alt: "Flyer: Hey everyone! Let's meet live on TikTok this Wednesday to catch up",
        w: 1152,
        h: 1168,
      },
    ],
    quote: {
      text: "May the Almighty continue to bless, protect and elevate the Olaide Doherty Charity Foundation and all who give towards it.",
      by: "Community Elder & Prayer Leader",
    },
    instagram: "https://www.instagram.com/olaidedohertycharityfoundation/",
  },
  {
    slug: "small-business-grants",
    title: "Small Business Grants",
    category: "Small business support",
    date: "September 2026",
    summary:
      "₦100,000 grants that helped hard-working small business owners restock, upgrade and grow.",
    cover: {
      src: businessFlyer,
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
];

export function findProject(slug: string) {
  return PORTFOLIO.find((p) => p.slug === slug);
}
