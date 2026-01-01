import {
  mobile,
  backend,
  creators,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  IMG_1,
  IMG_2,
  IMG_3,
  IMG_4,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Clypso",
  },
  {
    id: "work",
    title: "How it Works",
  },
  {
    id: "contact",
    title: "Contact us",
  },
];

const services = [
  {
    title: "Choose from various Brand campaigns",
    icon: web,
  },
  {
    title: "Upload your creative content",
    icon: mobile,
  },
  {
    title: "Submit your work ",
    icon: backend,
  },
  {
    title: "Get Paid. ",
    icon: creators,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Aura AI",  
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    //Choose from various brand campaigns: Browse live campaigns across every niche (music, apps, SaaS, personal brands). Pick what fits your niche and RPM,  then move forward with the one that aligns best with your skills and page.
    title: "Choose from various brand campaigns",
    
    icon: IMG_1,
    iconBg: "#383E56",
    date: "Step 1",
    points: [
      "Browse live campaigns across every niche (music, apps, SaaS, personal brands).",
      "Pick what fits your niche.",
      "then move forward with the one that aligns best with your skills and page.",
      
    ],
  },
  {
    title: "Create content and Post .",
    
    icon: IMG_2,
    iconBg: "#E6DEDD",
    date: "Step 2",
    points: [
      "Follow the guidelines and references provided for each specific campaign and post content designed to blow up on social media.",
    ],
  },
  {
    title: "Submit your work   .",

    icon: IMG_3,
    iconBg: "#383E56",
    date: "Step 3",
    points: [
      "Submit your post links on our discord server within 24 hours of posting to have your views start being tracked and paid out",  
      ,
    ],
  },
  {
    title: "Get Paid. ",
    
    icon: IMG_4,
    iconBg: "#E6DEDD",
    date: "Step 4",
    points: [
      "Get paid for your campaign submissions every Wednesday through your preferred payout methods (PayPal, Crypto, UPI, Wire)",
    ],
  },
  
];

const testimonials = [
  // 1.
  {
    id:1,
    Question: "When can I expect to see a positive RoI ?",
    testimonial:
      "You'll typically start seeing traction and high view volumes within the first week. ROI  is evaluated across traffic,conversions, and brand lift -all drivern by performance, not fixed placements",

        
   
   
  },
  // 2.
  {
    id:2,
    Question: "How do you ensure views come from target country (eg.US )?  ?",
    testimonial:"We use geo-optimized creators, posting schdeules aligned with Tier-1 times zones, and controlled distribution methods. Most campaigns acheive 40-50% +Tier-1 traffic, with full geo-breakdown reporting provided.",
      
    
  },
  

  // 3.

  {
    id:3,
    Question: "Can I approve every piece of content before it goes live ?",
    testimonial:"To keep clipping fast and scalable ,we don't offer pre-approval.Instead we strictly follow your SOPs and brand guidelines to ensure consistency .Adding approvals would create bottlenecks and reduce viral velocity.",
      
    
  },
  // 4.
   {
    id:4,
    Question: "What does RPM mean , exactly  ?",
    testimonial:"RPM stands for Rate per Million views- payouts are based purely on views delivered.CPM (Cost per Mille) refers to cost per 1000 views. Our fixed RPM model helps maintain predictable costs and lower effective CPMs accross campaigns.",
      
    
  },

  // 5.
   {
    id:5,
    Question: "What happened if a creator posts something negative or off-brand  ?",
    testimonial:"All clippers are vetted and trained and monitered . Any off-brand content is removed immediately and the creator is permanently banned from all future camoaigns . Zero tolerance ,full accountability.",
   },

  // 6.
   {
    id:6,
    Question: "Who are these \"clippers\" ? are they random people ?",
    testimonial:"Not at all. Our clippers are vetted editors, niche page owners ,theme pages, and high-performing creators.They're niche-specific and selected based on performance , not randomness.",
   },
   // 7.
   {
    id:7,
    Question: "Can winning clips be transferred to us ? ?",  
    testimonial:"Yes , High-performing clips can be shared with you for reposting ,repurposing, or further distribution.",
   }, 
    // 8. 
    {
    id:8,
    Question: "Can we change the RPM or budget halfway through the month ?",
    testimonial:"Yes. You can increase your budget or adjust RPM mid-campaign. Changes usually go live within 24-48 hours.",
   },
    // 9. 
    {
    id:9,
    Question: "Do we own the accounts that the content is posted on ?",
    testimonial:"Creators post on their own established accounts to avoid bottlenecks and maximize organic reach . This distributed model is what allows us to scale fast and hit high volumes consistenty",
   },

];

const projects = [
  {
    name: "Step 1",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    
  },
  {
    name: "Step 2",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    
  },
  {
    name: "Step 3",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    
  },
];

export { services, technologies, experiences, testimonials, projects };