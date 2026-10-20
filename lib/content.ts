// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE. Swap text + image paths and the
//  whole site updates. Put PNGs in /public/images and reference
//  them like "/images/case-1.png". Leave `image` empty to show
//  a styled placeholder.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Muhammad Babar",
  role: "Meta Ads Specialist & Social Media Manager",
  location: "Pakistan",
  email: "m.babar2156@gmail.com",
  fiverr: "https://www.fiverr.com/mbabar56/create-and-manage-high-converting-facebook-and-instagram-ad-campaigns-b9b2",
  linkedin: "https://www.linkedin.com/in/m-babar/",
  bookingUrl: "https://www.fiverr.com/mbabar56/create-and-manage-high-converting-facebook-and-instagram-ad-campaigns-b9b2",
  ctaLabel: "Hire me on Fiverr",
  photo: "/images/profile.jpg",
  availability: "Meta Ads Specialist · Available for new clients",
  heroTitle: "Meta ads that turn scrolling into paying customers.",
  heroSub:
    "I help brands grow with data-driven Facebook & Instagram campaigns and social media that actually converts — not just gets likes.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/m-babar/" },
    { label: "Fiverr", href: "https://www.fiverr.com/mbabar56/create-and-manage-high-converting-facebook-and-instagram-ad-campaigns-b9b2" },
  ],
};

// Brands / clients worked with. Put logo PNGs in /public/images/brands/
// and set logo: "/images/brands/name.png". With no logo, the name shows as text.
export const brands: { name: string; logo?: string }[] = [
  { name: "Lightpath to Wellness", logo: "/images/brands/lightpath-to-wellness.png" },
  { name: "Paris Natural Health Foods", logo: "/images/brands/paris-natural-health-foods.png" },
  { name: "Swift Smart Learning", logo: "/images/brands/swift-smart-learning.png" },
  { name: "Hakka Express", logo: "/images/brands/hakka-express.png" },
  { name: "Paragon Health Food", logo: "/images/brands/paragon-health-food.png" },
  { name: "SwiftTakeoffs", logo: "/images/brands/swifttakeoffs.png" },
  { name: "NexFlow Technologies", logo: "/images/brands/nexflow-technologies.png" },
];

export const stats = [
  { value: "5.0★", label: "Fiverr rating" },
  { value: "11", label: "Five-star reviews" },
  { value: "2 days", label: "Campaign setup delivery" },
  { value: "From $30", label: "Campaign setup package" },
];

export const about = {
  title: "Hi, I'm Muhammad Babar",
  body: [
    "I'm a Meta ads specialist and social media manager. I help e-commerce brands, service businesses and growing personal brands turn Facebook and Instagram into a dependable source of leads, messages and sales.",
    "My work covers the full journey: offer and audience research, campaign structure and tracking, ad creative, and the weekly optimization that makes results scalable. I've managed campaigns across lead generation, messaging and online sales, and I run social accounts end to end for brands in health, food, education and technology.",
    "I'm rated 5.0 on Fiverr across 11 reviews, and clients consistently mention fast delivery, clear communication and work that follows the brief. Every campaign is built around measurable results, and I report on them plainly.",
  ],
};

export const services: { title: string; text: string; icon: string; iconImage?: string }[] = [
  { title: "Meta Ads Management", text: "Full setup and ongoing management of Facebook and Instagram campaigns, from account structure and budgets to weekly optimization and scaling.", icon: "meta", iconImage: "/images/icons/meta.png" },
  { title: "Lead & Messaging Campaigns", text: "Lead generation and click-to-message campaigns built to bring in qualified enquiries at a low, trackable cost per lead or conversation.", icon: "messenger", iconImage: "/images/icons/leads.png" },
  { title: "E-commerce & Sales Campaigns", text: "Purchase-focused campaigns with Advantage+ and retargeting setups that turn store visitors into repeat customers.", icon: "bag", iconImage: "/images/icons/ecommerce.png" },
  { title: "Tracking & Reporting", text: "Pixel and conversion event setup so every result is measured, plus clear reports on spend, ROAS, CTR and cost per result.", icon: "chart", iconImage: "/images/icons/tracking.png" },
  { title: "UGC & Ad Creative", text: "Creator-style UGC ads, scripts and ad copy designed for Feed, Stories and Reels, then tested to find the winners.", icon: "video", iconImage: "/images/icons/ugc.png" },
  { title: "Social Media Management & Video Editing", text: "Content planning, posting and community management for your Instagram, plus edited Reels and short-form videos that hold attention.", icon: "instagram", iconImage: "/images/icons/social.png" },
];

// Real Meta Ads Manager screenshots (client names blurred). Numbers below are
// exactly what the screenshots show. Click a card image to open it full size.
export const caseStudies: {
  title: string;
  tag: string;
  result: string;
  period?: string;
  detail: string;
  stats: { v: string; l: string }[];
  image: string;
  featured?: boolean;
}[] = [
  {
    title: "Messaging conversation campaigns",
    tag: "Meta Ads · Messaging",
    result: "$9.12 per conversation",
    period: "16 Sep – 16 Oct 2026",
    detail: "9 ads testing different creatives, with the best ad driving 16 messaging conversations.",
    stats: [
      { v: "$9.12", l: "Best cost per conversation" },
      { v: "16", l: "Conversations from top ad" },
      { v: "2,437", l: "People reached (top ad)" },
    ],
    image: "/images/projects/messaging-conversations.jpg",
    featured: true,
  },
  {
    title: "Lead generation at scale",
    tag: "Meta Ads · Lead generation",
    result: "$134K ad spend",
    period: "May 2019 – Jun 2022 (full account history)",
    detail: "68 ads managed in a single ad account.",
    stats: [
      { v: "2.29M", l: "People reached" },
      { v: "8.46M", l: "Impressions" },
      { v: "47,230", l: "Link clicks" },
    ],
    image: "/images/projects/ads-lead-gen-134k.jpg",
  },
  {
    title: "Facebook lead campaigns",
    tag: "Meta Ads · Lead generation",
    result: "229 leads",
    period: "Apr 28 – Jun 24, 2022",
    detail: "9 campaigns on £1,526.66 total spend.",
    stats: [
      { v: "£6.67", l: "Avg. cost per lead" },
      { v: "£1.28", l: "Best cost per lead" },
      { v: "61,826", l: "People reached" },
    ],
    image: "/images/projects/campaigns-leads-229.jpg",
  },
  {
    title: "E-commerce purchase campaigns",
    tag: "Meta Ads · E-commerce",
    result: "$3.4K+ ad spend",
    detail: "Website purchase campaigns on $25–$42 daily budgets.",
    stats: [
      { v: "267K", l: "People reached" },
      { v: "502K", l: "Impressions" },
      { v: "$29.82", l: "Best cost per purchase" },
    ],
    image: "/images/projects/ecom-purchases.jpg",
  },
  {
    title: "Advantage+ and sales campaigns",
    tag: "Meta Ads · E-commerce",
    result: "112 purchases",
    period: "Last 7 days",
    detail: "4 active campaigns, including Advantage+ shopping.",
    stats: [
      { v: "70", l: "Top campaign" },
      { v: "25", l: "Advantage+ shopping" },
      { v: "11", l: "CBO prospecting (+10%)" },
    ],
    image: "/images/projects/campaign-trends-7d.jpg",
  },
];

export const gallery = [
  { title: "Ad creative", image: "" },
  { title: "Dashboard results", image: "" },
  { title: "Social content", image: "" },
  { title: "Reel cover", image: "" },
  { title: "Campaign report", image: "" },
  { title: "Carousel post", image: "" },
];

export const process = [
  { n: "01", title: "Share your goals", text: "Message me about your business, offer and current ad account. I'll review it and ask the right questions, no jargon." },
  { n: "02", title: "Get your growth plan", text: "Within 48 hours you receive a clear strategy: audiences, creatives, budget and expected results." },
  { n: "03", title: "Launch & scale", text: "I build, test and optimize your campaigns, then scale what works with weekly reports." },
];

// Real Fiverr reviews (short ones verbatim, longer ones as complete-sentence excerpts)
export const testimonials = [
  { quote: "Work done with great professionalism, and a very helpful attitude when answering all our questions and suggestions!", name: "oakley_rorayy", role: "Verified Fiverr client, US" },
  { quote: "I am very happy with the work. The seller is efficient and fast. Thank you very much.", name: "preston_48", role: "Verified Fiverr client, US" },
  { quote: "Quick delivery, professional work, and everything followed the guidelines exactly.", name: "sutton_dean", role: "Verified Fiverr client, UK" },
  { quote: "The seller was very easy to work with, and the communication was prompt.", name: "lisa_ashley7", role: "Verified Fiverr client, US" },
  { quote: "Amazing seller! Very responsive, patient, and truly understands client requirements.", name: "archiee8", role: "Verified Fiverr client, UK" },
];

export const faqs = [
  { q: "What is your ad management process?", a: "I audit your offer and account, build a testing plan, launch campaigns, then optimize weekly based on data and scale winners." },
  { q: "How long until I see results?", a: "Most accounts show clear signals within 7–14 days. Stable, scalable results usually come in the first 30–60 days." },
  { q: "How much do you charge?", a: "Campaign setup starts from $30 on Fiverr. Ongoing management and weekly reviews are available in higher packages, so message me for a clear quote." },
  { q: "Do you work with small budgets?", a: "Yes. I work with startups and local businesses and focus on getting profitable before scaling spend." },
  { q: "Can you work with my existing team?", a: "Absolutely. I plug into your designers, editors or in-house marketers and keep everyone aligned." },
  { q: "What do I need to get started?", a: "Access to your Meta Business account, your product or offer details, and any past ad data you have." },
];

// ─────────────────────────────────────────────────────────────
//  NEW SECTIONS — fill these in.
//  For each item you can set ONE of:
//    image:  "/images/xyz.png"        (thumbnail / screenshot)
//    video:  "/videos/xyz.mp4"        (self-hosted file in /public/videos)
//    embed:  "https://www.youtube.com/embed/VIDEO_ID"  (YouTube/Vimeo/Drive preview)
//  Leave them empty to show a placeholder card.
// ─────────────────────────────────────────────────────────────

export type MediaItem = { title: string; sub?: string; image?: string; video?: string; embed?: string; url?: string };

export const handles: { platform: string; name: string; handle: string; url: string; stat?: string; desc?: string; image?: string; preview?: string }[] = [
  {
    platform: "Instagram",
    name: "LightPathLED",
    handle: "@lightpathled",
    url: "https://www.instagram.com/lightpathled/",
    stat: "3,774 followers · 181 posts",
    desc: "Pulsed red light therapy for home use, from a veteran-owned health brand. The feed mixes educational reels, the Head to Toe series and product promos that explain the science in plain language.",
    image: "/images/brands/lightpath-to-wellness.png",
    preview: "/images/social/lightpathled.jpg",
  },
  {
    platform: "Instagram",
    name: "Swift Takeoffs",
    handle: "@swifttakeoffs",
    url: "https://www.instagram.com/swifttakeoffs/",
    stat: "362 followers · 58 posts",
    desc: "Construction takeoff and estimation services for all trades, with fast turnaround across the US. Bold, on-brand blue creatives that explain cost accuracy and estimating to contractors.",
    image: "/images/brands/swifttakeoffs.png",
    preview: "/images/social/swifttakeoffs.jpg",
  },
  {
    platform: "Instagram",
    name: "Swift Smart Learning",
    handle: "@swiftsmartlearning",
    url: "https://www.instagram.com/swiftsmartlearning/",
    stat: "71 followers · 39 posts",
    desc: "1-on-1 online tutoring in Maths, English and Science for K–12 students. Parent-focused posts on exam prep, study habits and free trial lessons.",
    image: "/images/brands/swift-smart-learning.png",
    preview: "/images/social/swiftsmartlearning.jpg",
  },
  {
    platform: "Instagram",
    name: "Paris Natural Health Foods",
    handle: "@parisnaturalhealthfoods",
    url: "https://www.instagram.com/parisnaturalhealthfoods/",
    stat: "157 followers · 26 posts",
    desc: "A natural and herbal vitamin and supplement shop. Clean product-focused creatives that show benefits and ingredients, such as Amla, Saw Palmetto and Vitamin D.",
    image: "/images/brands/paris-natural-health-foods.png",
    preview: "/images/social/paris-natural-health-foods.jpg",
  },
];

export const ugcAds: MediaItem[] = [
  { title: "Doctor recommendation", sub: "UGC-style ad", video: "/videos/ugc-1.mp4", image: "/images/ugc/ugc-1.jpg" },
  { title: "Organic hair oil", sub: "Paris Natural Health Foods · UGC ad", video: "/videos/ugc-2.mp4", image: "/images/ugc/ugc-2.jpg" },
  { title: "Magnesium Glycinate", sub: "Paris Natural Health Foods · UGC ad", video: "/videos/ugc-3.mp4", image: "/images/ugc/ugc-3.jpg" },
  { title: "Customer testimonial", sub: "UGC-style ad", video: "/videos/ugc-4.mp4", image: "/images/ugc/ugc-4.jpg" },
  { title: "Inflammation Away", sub: "Paris Natural Health Foods · UGC ad", video: "/videos/ugc-5.mp4", image: "/images/ugc/ugc-5.jpg" },
  { title: "Wellness testimonial", sub: "UGC-style ad", video: "/videos/ugc-6.mp4", image: "/images/ugc/ugc-6.jpg" },
];

export const editedVideos: MediaItem[] = [
  { title: "100% Paneer", sub: "Food promo reel", video: "/videos/edited-1.mp4", image: "/images/edited/edited-1.jpg" },
  { title: "Studying hard…", sub: "Swift Smart Learning · Captioned ad", video: "/videos/edited-2.mp4", image: "/images/edited/edited-2.jpg" },
  { title: "Homework", sub: "Captioned ad", video: "/videos/edited-3.mp4", image: "/images/edited/edited-3.jpg" },
  { title: "Aap ka customer", sub: "Captioned talking-head reel", video: "/videos/edited-4.mp4", image: "/images/edited/edited-4.jpg" },
  { title: "My content strategy", sub: "Personal brand reel", video: "/videos/edited-5.mp4", image: "/images/edited/edited-5.jpg" },
  { title: "Who's there?", sub: "Text animation reel", video: "/videos/edited-6.mp4", image: "/images/edited/edited-6.jpg" },
  { title: "Glazed wings", sub: "Food promo reel", video: "/videos/edited-7.mp4", image: "/images/edited/edited-7.jpg" },
  { title: "Paneer bites", sub: "Hakka Express · Food promo", video: "/videos/edited-8.mp4", image: "/images/edited/edited-8.jpg" },
];
