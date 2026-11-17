/**
 * Smart Computer & Stationary — The Keyword Blog Data
 * Modeled on the editorial voice, structure, and design of blog.google (The Keyword)
 */

export const BLOG_CATEGORIES = [
  { id: "all", name: "All Stories", count: 6 },
  { id: "tech-ai", name: "Technology & AI", color: "blue", count: 2 },
  { id: "career-jobs", name: "Job Circulars & Career", color: "amber", count: 2 },
  { id: "citizen-services", name: "Citizen & Govt Services", color: "emerald", count: 1 },
  { id: "training-academy", name: "IT Training & Skills", color: "indigo", count: 1 },
  { id: "photo-printing", name: "Digital Photo & Printing", color: "rose", count: 1 },
  { id: "company-news", name: "Around Smart Computer", color: "sky", count: 1 }
];

export const BLOG_POSTS = [
  {
    id: "digital-citizen-services-bangladesh-2026",
    slug: "digital-citizen-services-bangladesh-2026",
    title: "The Next Era of Citizen Services: How Digital Smart Centers Are Streamlining Public Applications",
    subtitle: "From NID corrections to seamless university admissions, explore how local technology hubs bridge the digital divide for millions across Bangladesh.",
    category: "Citizen & Govt Services",
    categoryId: "citizen-services",
    categoryTheme: {
      pillBg: "bg-emerald-50 dark:bg-emerald-950/40",
      pillText: "text-emerald-700 dark:text-emerald-300",
      pillBorder: "border-emerald-200 dark:border-emerald-800/60",
      accent: "#10B981"
    },
    publishedDate: "Nov 17, 2026",
    readTime: "5 min read",
    author: {
      name: "Shafayat Hossain",
      role: "Founder & Lead Technologist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Digital infrastructure is transforming public service delivery across Bangladesh.",
    excerpt: "Navigating government portals and citizen documentation shouldn't be stressful. Discover how modern digital centers eliminate technical bottlenecks and guarantee 100% submission accuracy.",
    tags: ["DigitalBangladesh", "CitizenServices", "SmartGovernance", "eServices"],
    featured: true,
    trending: true,
    trendingRank: 1,
    keyTakeaways: [
      "Over 70% of initial online application rejections stem from incorrect image aspect ratios and document payload sizes.",
      "Dedicated verification centers reduce citizen turnaround time from days to under 15 minutes.",
      "Standardized digital workflows protect applicant privacy while ensuring biometric and demographic compliance."
    ],
    content: {
      introduction: "Across Bangladesh, the transition toward complete digital governance is accelerating at unprecedented speed. From the Bangladesh Public Service Commission (BPSC) to local Union Parishad registrations, essential public interactions now take place through high-throughput web portals. Yet for thousands of applicants, navigating dynamic portal requirements, resizing passport photos to strict 300x300 pixel standards, and executing Teletalk SMS payments remains a daunting barrier.",
      sections: [
        {
          heading: "The Anatomy of Modern Citizen Services",
          body: "When an applicant steps into Smart Computer beside the School & College Canteen Gate, the objective isn't merely typing text into an HTML form. It is the end-to-end orchestration of an identity submission. A single misplaced digit in a National ID or mismatched mother's name between an SSC certificate and Birth Registration can disqualify a candidate months later during physical viva verification.",
          quote: "A professional service center acts not just as an internet connection, but as a critical verification layer ensuring digital submissions are audit-proof."
        },
        {
          heading: "Three Critical Checkpoints for Every Online Application",
          list: [
            "Exact Demographic Alignment: Cross-verifying Bengali and English spellings across SSC certificates, NID, and Birth Registration databases before generating user IDs.",
            "Sub-Millimeter Image Resizing: Generating exact 300x300 pixel (under 100 KB) portrait images and 300x80 pixel (under 60 KB) digital signatures without pixel blur or aspect distortion.",
            "Instant Two-Tier Payment Confirmation: Completing Teletalk mobile payment handshakes within the 72-hour window and immediately printing high-gloss color admit slips."
          ]
        },
        {
          heading: "Looking Ahead: Seamless Multi-Channel Service",
          body: "As we look toward 2027, our mission at Smart Computer remains focused on closing the technical divide. With dedicated WhatsApp pre-booking, instant digital document archiving, and dual-redundant laser printing pipelines, we ensure our local community has access to world-class digital services right at their doorstep."
        }
      ]
    }
  },
  {
    id: "teletalk-job-application-mistakes-guide",
    slug: "teletalk-job-application-mistakes-guide",
    title: "Mastering Teletalk Job Applications: 7 Common Mistakes That Cause Rejection and How to Avoid Them",
    subtitle: "A practical, step-by-step breakdown of BPSC, Ministry, and Autonomous recruitment portal requirements to ensure your application gets approved.",
    category: "Job Circulars & Career",
    categoryId: "career-jobs",
    categoryTheme: {
      pillBg: "bg-amber-50 dark:bg-amber-950/40",
      pillText: "text-amber-700 dark:text-amber-300",
      pillBorder: "border-amber-200 dark:border-amber-800/60",
      accent: "#F59E0B"
    },
    publishedDate: "Nov 15, 2026",
    readTime: "6 min read",
    author: {
      name: "Shafayat Hossain",
      role: "Senior Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Accurate online submission is the first and most vital step toward career success.",
    excerpt: "Every recruitment cycle, hundreds of deserving candidates are disqualified before the exam due to minor form submission oversights. Here is the definitive checklist to guarantee success.",
    tags: ["BPSC", "JobCircular", "Teletalk", "CareerGuidance", "GovtJobs"],
    featured: false,
    trending: true,
    trendingRank: 2,
    keyTakeaways: [
      "Always verify that photo (300x300, max 100KB) and signature (300x80, max 60KB) match exact 8-bit true color standards.",
      "Ensure payment SMS confirmation message with transaction ID (TxID) is preserved as both a digital screenshot and a printed copy.",
      "Check education board codes and GPA conversion tables carefully for CGPA out of 4.00 vs 5.00 scales."
    ],
    content: {
      introduction: "Applying for government, ministry, or autonomous corporate vacancies through Teletalk portals (such as bpsc.teletalk.com.bd, bps.teletalk.com.bd, or bogmc.teletalk.com.bd) is a high-stakes process. With strict server validations and zero margin for error after the payment window closes, following a rigorous submission protocol is mandatory.",
      sections: [
        {
          heading: "Mistake #1: Overlooking the 72-Hour Payment Window",
          body: "Submitting the online form generates an Applicant Copy with a User ID. However, the application is legally non-existent until the corresponding fee is deducted and confirmed via dual Teletalk SMS. Waiting until the final hour often coincides with server congestion, leading to failed transactions."
        },
        {
          heading: "Mistake #2: Distorted Aspect Ratios in Photos",
          body: "A frequent error is forcibly stretching a standard 4:3 photograph into a 300x300 square. Automated facial detection algorithms at recruitment screening can flag stretched images. At Smart Computer, our digital studio uses calibrated square cropping lenses to maintain natural biometric symmetry."
        },
        {
          heading: "Step-by-Step Teletalk Verification Checklist",
          list: [
            "Check 1: Name, Father's Name, Mother's Name matching SSC certificate verbatim.",
            "Check 2: Permanent Address matching NID union/ward and post code records.",
            "Check 3: Active, reachable mobile number that will remain active throughout the 2-year recruitment timeline.",
            "Check 4: Quota selection (General, Freedom Fighter, Tribal, Disabled, Ansar/VDP) backed by physical documentation."
          ]
        }
      ]
    }
  },
  {
    id: "essential-computer-skills-college-students-2026",
    slug: "essential-computer-skills-college-students-2026",
    title: "Why Essential Computer Skills are the Highest-ROI Investment for College Students in 2026",
    subtitle: "From spreadsheet modeling to AI prompt literacy, explore how dedicated practical lab training gives students an unbeatable advantage.",
    category: "IT Training & Skills",
    categoryId: "training-academy",
    categoryTheme: {
      pillBg: "bg-indigo-50 dark:bg-indigo-950/40",
      pillText: "text-indigo-700 dark:text-indigo-300",
      pillBorder: "border-indigo-200 dark:border-indigo-800/60",
      accent: "#6366F1"
    },
    publishedDate: "Nov 12, 2026",
    readTime: "4 min read",
    author: {
      name: "Shafayat Hossain",
      role: "Lead Instructor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Hands-on workstation practice transforms theoretical knowledge into competitive workplace skills.",
    excerpt: "Theoretical computer classes aren't enough in today's workforce. Hands-on workstation mastery of Microsoft Office, high-speed typing, and presentation craft sets students apart.",
    tags: ["ComputerTraining", "SkillsDevelopment", "StudentSuccess", "WorkplaceSkills"],
    featured: false,
    trending: true,
    trendingRank: 3,
    keyTakeaways: [
      "Touch typing above 40 WPM in both English and Bengali (Avro/Bijoy) saves over 150 hours of productivity annually.",
      "Proficiency in Excel formulas (XLOOKUP, Pivot Tables) is the #1 requested skill by local business employers.",
      "Dedicated 1-to-1 workstation labs double retention rates compared to lecture-only environments."
    ],
    content: {
      introduction: "As college graduates enter an increasingly competitive job market, baseline computer literacy is no longer a perk—it is an assumed minimum standard. Yet many college students possess smartphone fluency rather than workplace computing fluency. Bridging this gap is the exact premise behind Smart Computer Training Academy.",
      sections: [
        {
          heading: "The Power of Hands-on 1-to-1 Workstations",
          body: "Unlike crowded classrooms where multiple learners share a single monitor, our training facility ensures every student has their own dedicated machine throughout every session. Real keyboard muscle memory, shortcut retention, and file management skills can only be forged through uninterrupted practice.",
          quote: "Speed in typing and precision in formatting are fundamental superpowers that amplify every career trajectory."
        },
        {
          heading: "Core Curriculum Pillars for 2026",
          list: [
            "Advanced Word Processing: Professional thesis and report layout, table of contents automation, and multi-language typing.",
            "Applied Spreadsheet Mastery: Business calculation formulas, inventory tracking, data cleansing, and charts.",
            "Creative Visual Communications: Canva pro layout design, presentation slides, and Adobe Photoshop essentials."
          ]
        }
      ]
    }
  },
  {
    id: "science-of-digital-passport-photos",
    slug: "science-of-digital-passport-photos",
    title: "The Science of Digital Passport Photos: Why Dimensions, Lighting, and Background Matter for Visas and Government Portals",
    subtitle: "A deep dive into ICAO biometrics, backdrop color calibration, and formal digital retouching standards.",
    category: "Digital Photo & Printing",
    categoryId: "photo-printing",
    categoryTheme: {
      pillBg: "bg-rose-50 dark:bg-rose-950/40",
      pillText: "text-rose-700 dark:text-rose-300",
      pillBorder: "border-rose-200 dark:border-rose-800/60",
      accent: "#F43F5E"
    },
    publishedDate: "Nov 08, 2026",
    readTime: "4 min read",
    author: {
      name: "Shafayat Hossain",
      role: "Studio Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Professional studio lighting ensures passport photos meet global visa and biometric criteria.",
    excerpt: "Why do DIY mobile phone selfies get rejected by immigration and government portals? Learn the strict photographic standards behind professional 2-minute passport lab printing.",
    tags: ["PhotoLab", "PassportPhoto", "Biometrics", "VisaRequirements"],
    featured: false,
    trending: false,
    trendingRank: 4,
    keyTakeaways: [
      "Shadow-free dual softbox lighting eliminates biometric edge artifacts on facial contour scans.",
      "Different institutions require different backdrops: White for Schengen/US visas, Sky Blue for Asian embassies, Light Grey for local registries.",
      "Digital formal attire retouching ensures students and professionals look polished even during unexpected urgent applications."
    ],
    content: {
      introduction: "Whether applying for an e-Passport, a foreign student visa, or a civil service recruitment examination, your biometric photograph is the primary visual identifier. While modern smartphones feature powerful cameras, they lack the calibrated optical focal length and uniform lighting necessary to meet ICAO Doc 9303 standards.",
      sections: [
        {
          heading: "The Role of Diffused Softbox Illumination",
          body: "Mobile flashes produce harsh shadows beneath the chin and reflections across the forehead, often resulting in automated portal rejections. At Smart Computer Photo Studio, calibrated balanced strobes distribute light evenly across the facial plane, preserving natural skin tones without overexposure."
        },
        {
          heading: "Instant 2-Minute Chemical-Grade Lab Printing",
          body: "For physical submissions, standard inkjet prints on light paper tend to bleed and degrade under moisture. Our lab utilizes genuine archival photo paper and dye-sublimation gloss finish, guaranteeing smudge-free, water-resistant prints that endure for years."
        }
      ]
    }
  },
  {
    id: "demystifying-ai-tools-for-everyday-productivity",
    slug: "demystifying-ai-tools-for-everyday-productivity",
    title: "Demystifying AI in the Workspace: Practical Tools Every Student and Professional Should Adopt in 2026",
    subtitle: "How generative AI, intelligent OCR, and automated document tools are empowering local communities to work smarter.",
    category: "Technology & AI",
    categoryId: "tech-ai",
    categoryTheme: {
      pillBg: "bg-blue-50 dark:bg-blue-950/40",
      pillText: "text-blue-700 dark:text-blue-300",
      pillBorder: "border-blue-200 dark:border-blue-800/60",
      accent: "#3B82F6"
    },
    publishedDate: "Nov 04, 2026",
    readTime: "5 min read",
    author: {
      name: "Shafayat Hossain",
      role: "Lead Technologist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Modern AI utilities assist with document synthesis, research drafting, and data summarization.",
    excerpt: "Artificial intelligence isn't just for silicon valley engineers. Discover how practical AI tools enhance document drafting, language translation, and research workflows in our daily lives.",
    tags: ["ArtificialIntelligence", "Productivity", "TechTips", "FutureOfWork"],
    featured: false,
    trending: true,
    trendingRank: 5,
    keyTakeaways: [
      "AI text summarizers help students extract key themes from complex academic papers in seconds.",
      "Intelligent OCR turns low-quality printed documents into cleanly editable Word text.",
      "Fact-checking and human verification remain the essential bridge between AI output and reliable truth."
    ],
    content: {
      introduction: "Artificial intelligence has shifted from experimental research into practical, everyday software utilities. For students drafting research proposals, job seekers polishing bilingual CVs, and small business owners managing records, understanding how to harness these tools responsibly is a transformative skill.",
      sections: [
        {
          heading: "The Human-in-the-Loop Imperative",
          body: "While AI models can draft letters and generate boilerplate spreadsheets, they require human discernment to calibrate context, correct nuances, and prevent hallucinations. In our training workshops, we emphasize verification methodologies: treating AI as an eager assistant whose work must always be reviewed."
        },
        {
          heading: "Practical Workplace Applications",
          list: [
            "Bilingual Translation Cleanup: Polishing official English-to-Bengali government letters while preserving respectful formal registers.",
            "Document Structure Synthesis: Structuring unstructured notes into clean, bulleted executive briefs and outlines.",
            "Formatting & Formula Troubleshooting: Generating complex Excel nested logic from natural language descriptions."
          ]
        }
      ]
    }
  },
  {
    id: "smart-computer-expands-evening-lab-capacity",
    slug: "smart-computer-expands-evening-lab-capacity",
    title: "Smart Computer Expands Workstation Capacity: Introducing Dedicated Evening Lab Batches for Working Professionals",
    subtitle: "Enhanced high-speed PCs, dual-band fiber connectivity, and individualized mentorship to accommodate high student demand.",
    category: "Around Smart Computer",
    categoryId: "company-news",
    categoryTheme: {
      pillBg: "bg-sky-50 dark:bg-sky-950/40",
      pillText: "text-sky-700 dark:text-sky-300",
      pillBorder: "border-sky-200 dark:border-sky-800/60",
      accent: "#0EA5E9"
    },
    publishedDate: "Oct 28, 2026",
    readTime: "3 min read",
    author: {
      name: "Shafayat Hossain",
      role: "Proprietor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "The newly upgraded workstation lab at Smart Computer beside Canteen Gate.",
    excerpt: "Responding to growing requests from college students and job candidates, Smart Computer has expanded its computer laboratory with new high-speed workstations and an evening learning schedule.",
    tags: ["SmartComputer", "LabExpansion", "Community", "Announcements"],
    featured: false,
    trending: false,
    trendingRank: 6,
    keyTakeaways: [
      "New 7:00 PM – 9:00 PM evening batch tailored specifically for office workers and senior college students.",
      "Equipped with IPS backup power so practical exams and typing sessions continue uninterrupted.",
      "Enrollment includes free access to our digital test exam portal and government certificate preparation."
    ],
    content: {
      introduction: "We are thrilled to announce a major milestone at Smart Computer and Stationary. To support the overwhelming enthusiasm from local students and job seekers preparing for recruitment tests, we have expanded our air-conditioned computer training lab with high-speed workstations and dedicated evening batches.",
      sections: [
        {
          heading: "Designed for Uninterrupted Learning",
          body: "Power outages or network fluctuations shouldn't derail your practice. Our lab is equipped with high-capacity pure sine wave inverter backup and dedicated high-speed optical fiber, ensuring zero downtime during hands-on sessions."
        },
        {
          heading: "How to Reserve Your Workstation",
          body: "Because we maintain a strict 1-student-per-PC policy, seat availability in each batch is strictly capped. Prospective students can register directly in our shop or reserve their preferred time slot via WhatsApp at 01711-652361."
        }
      ]
    }
  }
];
