export const client = {
  // Business Details
  name: "Southwest Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Gloucester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01242 851941",
  email: "",
  website: "",

  // Location
  address: "Gloucester",
  city: "Gloucester",
  county: "",
  postcode: "",
  basedIn: "Gloucester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "6",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Sue Dowler", rating: 5, text: "I would have no hesitation in recommending this company. They were reliable, knowledgeable and hard working and cleared up completely when finished. I'm very happy with my huge hedge. ", date: "11 months ago" },
    { name: "Mike Staite", rating: 5, text: "Another first class job from a professional company. Frank and his team certainly know how to prune shrubs and trees as well as removing an old tree. All debris removed with the garden and drive left as though nothing had happened! …  ", date: "3 years ago" },
    { name: "Nadia Wawryn", rating: 5, text: "Amazing, can't fault them. Frank was very professional from our initial contact. Frank and Shane were great guys, hard working, tidy. HHighlyctecommend the  ", date: "2 years ago" },
    { name: "WIZARD PRINTERS", rating: 5, text: "We had the pleasure of printing the Southwest Landscapes Compnay work wear. Frank was really great to communicate his requirements. We look forward to working with him again on future jobs printing Sign Boards, and more work wear. Cheers, Rob @ Wizar", date: "7 years ago" },
    { name: "Patricia Todd", rating: 5, text: "Arrived in good time and was polite. Assessed the garden and advised that the  price for clearing brambles would be £350   ! With a further sting of £100 to take away the waste !!! ", date: "4 years ago" },
    { name: "Ray Brasier", rating: 5, text: "Excellent work would recommend ", date: "5 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Southwest Landscapes | Landscaper in Gloucester",
    description: "Professional landscaper in Gloucester. 5.0-star rated on Google. Call for a free quote.",
  },
};
