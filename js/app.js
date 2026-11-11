/**
 * Smart Computer & Stationery - Interactive Application Logic
 * Modern, responsive, and student-focused digital service hub
 */

// Global Configuration
const CONFIG = {
  phone: "+8801711652361",
  whatsappNumber: "8801711652361", // Standard international format without '+' for wa.me
  storeName: "Smart Computer & Stationery",
  location: "স্কুল অ্যান্ড কলেজ ক্যান্টিন গেট সংলগ্ন",
  rates: {
    bw_copy: 2.0,
    bw_copy_bulk: 1.8, // 50+ copies
    bw_print: 3.0,
    color_print: 8.0,
    glossy_photo: 15.0,
    spiral: 30,
    staple: 2,
    lamination: 20,
    none: 0
  }
};

// Stationery and 99 Taka Corner Products Data
const PRODUCTS = [
  {
    id: 1,
    title: "মাল্টি-ফাংশন OTG অ্যাডাপ্টার ও কেবল প্রোটেক্টর",
    category: "gadget",
    tag: "৯৯ টাকা স্পেশাল",
    price: 99,
    originalPrice: 150,
    icon: "fa-usb",
    desc: "টাইপ-সি এবং মাইক্রো USB সাপোর্টেড। পেনড্রাইভ থেকে ফোনে ফাইল ট্রান্সফারের জন্য জরুরি।",
    badgeColor: "bg-red-500"
  },
  {
    id: 2,
    title: "স্টিকি নোটস কম্বো + নিয়ন হাইলাইটার প্যাক",
    category: "stationery",
    tag: "৯৯ টাকা স্পেশাল",
    price: 99,
    originalPrice: 140,
    icon: "fa-highlighter",
    desc: "বই দাগানো ও গুরুত্বপূর্ণ নোট মনে রাখার জন্য ৩ কালারের ফ্লুরোসেন্ট হাইলাইটার ও প্যাড।",
    badgeColor: "bg-amber-500"
  },
  {
    id: 3,
    title: "ম্যাথমেটিক্যাল জ্যামিতি বক্স সম্পূর্ণ সেট",
    category: "geometry",
    tag: "শিক্ষার্থীদের পছন্দ",
    price: 99,
    originalPrice: 130,
    icon: "fa-compass-drafting",
    desc: "কম্পাস, ডিভাইডার, স্কেল, চাঁদা ও পেন্সিলসহ ক্লাসের জন্য কমপ্লিট ম্যাথ সেট।",
    badgeColor: "bg-teal-600"
  },
  {
    id: 4,
    title: "প্রিমিয়াম স্পাইরাল খাতা (২০০ পৃষ্ঠা রুলড)",
    category: "notebook",
    tag: "বেস্টসেলার",
    price: 99,
    originalPrice: 130,
    icon: "fa-book-open",
    desc: "স্মুথ হোয়াইট পেপার, কলেজ ও কোচিং ক্লাসের নোট তৈরির জন্য আদর্শ স্পাইরাল বাইন্ডিং।",
    badgeColor: "bg-sky-500"
  },
  {
    id: 5,
    title: "আর্ট পেপার ও ওয়াটার কালার ব্রাশ কিট",
    category: "art",
    tag: "৯৯ টাকা স্পেশাল",
    price: 99,
    originalPrice: 150,
    icon: "fa-palette",
    desc: "স্কুলের ড্রয়িং ক্লাস ও প্রজেক্ট প্রদর্শনের জন্য ১২ কালার কেক ও ৩ সাইজের পেইন্ট ব্রাশ।",
    badgeColor: "bg-purple-600"
  },
  {
    id: 6,
    title: "সাইন্টিফিক ক্যালকুলেটর ব্যাকআপ ব্যাটারি + স্কেল",
    category: "gadget",
    tag: "এসএসসি/এইচএসসি স্পেশাল",
    price: 99,
    originalPrice: 140,
    icon: "fa-calculator",
    desc: "পরীক্ষার হলে যাতে ক্যালকুলেটর বন্ধ না হয়! অরিজিনাল লং-লাইফ সেল ও ৩০ সেমি স্টিল স্কেল।",
    badgeColor: "bg-rose-500"
  },
  {
    id: 7,
    title: "স্মুথ জেল পেন ডজন প্যাক (১২টি কলম কম্বো)",
    category: "stationery",
    tag: "৯৯ টাকা স্পেশাল",
    price: 99,
    originalPrice: 140,
    icon: "fa-pen-nib",
    desc: "০.৫ মিমি স্মুথ ফ্লো জেল পেন। দ্রুত ও সুন্দর হাতের লেখার জন্য সেরা চয়েস।",
    badgeColor: "bg-indigo-600"
  },
  {
    id: 8,
    title: "মেটাল কি-রিং ও পকেট এলইডি টর্চ লাইট",
    category: "gadget",
    tag: "৯৯ টাকা স্পেশাল",
    price: 99,
    originalPrice: 150,
    icon: "fa-lightbulb",
    desc: "রিচার্জেবল মিনি পকেট লাইট ও স্টাইলিশ স্টুডেন্ট কি-রিং। ব্যাগে রাখার জন্য দারুণ গ্যাজেট।",
    badgeColor: "bg-emerald-600"
  },
  {
    id: 9,
    title: "ক্যাসিও অরিজিনাল সাইন্টিফিক ক্যালকুলেটর (FX-991CW)",
    category: "gadget",
    tag: "অরিজিনাল ৩ বছর ওয়ারেন্টি",
    price: 1850,
    originalPrice: 2100,
    icon: "fa-microchip",
    desc: "কলেজ ও ভার্সিটি এডমিশন পরীক্ষার্থীদের জন্য দ্রুততম ক্যালকুলেশন ফিচার সম্পন্ন।",
    badgeColor: "bg-blue-600"
  },
  {
    id: 10,
    title: "A4 সাইজ প্রিমিয়াম পেপার রিম (৮০ GSM - ৫০০ শিট)",
    category: "stationery",
    tag: "অফিস ও স্টুডেন্ট",
    price: 360,
    originalPrice: 400,
    icon: "fa-copy",
    desc: "প্রজেক্ট পেপার, ল্যাব রিপোর্ট এবং ফটোকপির জন্য সেরা মানের ব্রাইট হোয়াইট কাগজ।",
    badgeColor: "bg-slate-700"
  }
];

// Live Job Circulars and Admission Notice Board Data
const NOTICES = [
  {
    id: "job-1",
    type: "govt",
    title: "বাংলাদেশ রেলওয়ে সহকারী স্টেশন মাস্টার ও বিভিন্ন পদে নিয়োগ",
    organization: "বাংলাদেশ রেলওয়ে",
    posts: "৫৬০ জন",
    deadline: "৩০ নভেম্বর ২০২৬",
    daysLeft: 6,
    fee: "৳২২৩",
    urgent: true,
    desc: "শিক্ষাগত যোগ্যতা: যেকোনো স্বীকৃত বিশ্ববিদ্যালয় থেকে স্নাতক বা সমমানের ডিগ্রি।"
  },
  {
    id: "adm-1",
    type: "admission",
    title: "একাদশ শ্রেণিতে অনলাইন ভর্তি ও কলেজ চয়েস আবেদন শুরু",
    organization: "শিক্ষা মন্ত্রণালয় (ঢাকা বোর্ড)",
    posts: "সারাদেশ",
    deadline: "১৫ ডিসেম্বর ২০২৬",
    daysLeft: 12,
    fee: "৳১৫০",
    urgent: false,
    desc: "এসএসসি উত্তীর্ণ শিক্ষার্থীদের জন্য সর্বনিম্ন ৫টি ও সর্বোচ্চ ১০টি কলেজ চয়েস সুবিধা।"
  },
  {
    id: "job-2",
    type: "govt",
    title: "প্রাথমিক সহকারী শিক্ষক নিয়োগ সার্কুলার (সকল বিভাগ)",
    organization: "প্রাথমিক শিক্ষা অধিদপ্তর",
    posts: "১৩,৭৫০ জন",
    deadline: "২৫ ডিসেম্বর ২০২৬",
    daysLeft: 18,
    fee: "৳১১২",
    urgent: false,
    desc: "দ্বিতীয় শ্রেণি বা সমমানের সিজিপিএসহ স্নাতক ডিগ্রিধারী প্রার্থীরা আবেদন করতে পারবেন।"
  },
  {
    id: "adm-2",
    type: "admission",
    title: "ঢাকা বিশ্ববিদ্যালয় (DU) স্নাতক প্রথম বর্ষ ভর্তি পরীক্ষা",
    organization: "ঢাকা বিশ্ববিদ্যালয়",
    posts: "ক, খ, গ, চারুকলা ইউনিট",
    deadline: "০৫ জানুয়ারি ২০২৭",
    daysLeft: 24,
    fee: "৳১,০৫০",
    urgent: false,
    desc: "কলা, বিজ্ঞান ও বাণিজ্য ইউনিটের অনলাইন আবেদন এবং প্রবেশপত্র ডাউনলোড সহায়তা।"
  },
  {
    id: "job-3",
    type: "ntrca",
    title: "১৯তম বেসরকারি শিক্ষক নিবন্ধন পরীক্ষা (NTRCA)",
    organization: "এনটিআরসিএ ঢাকা",
    posts: "স্কুল ও কলেজ পর্যায়",
    deadline: "১০ ডিসেম্বর ২০২৬",
    daysLeft: 9,
    fee: "৳৩৫০",
    urgent: true,
    desc: "প্রিলিমিনারি টেস্ট ও প্রফেশনাল অনলাইন আবেদন নির্ভুলভাবে পূরণ করে দেওয়া হয়।"
  },
  {
    id: "job-4",
    type: "govt",
    title: "বাংলাদেশ পুলিশ কনস্টেবল (পুরুষ ও নারী) নতুন নিয়োগ",
    organization: "পুলিশ হেডকোয়ার্টার্স",
    posts: "৪,০০০ জন",
    deadline: "২০ ডিসেম্বর ২০২৬",
    daysLeft: 15,
    fee: "৳৪০",
    urgent: false,
    desc: "এসএসসি পাস প্রার্থীদের জন্য ফিজিক্যাল টেস্ট রেজিস্ট্রেশন ও অনলাইন আবেদন।"
  }
];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initNoticeBoard();
  initStationeryProducts();
  initPrintCalculator();
  initQuickWhatsAppOrder();
  initCourseModal();
  initFAQAccordion();
  initScrollEffects();
});

// 1. Mobile Menu Functionality
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("mobile-menu-close");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu(show) {
    if (show) {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.remove("opacity-0", "-translate-y-4");
      }, 10);
      document.body.style.overflow = "hidden";
    } else {
      mobileMenu.classList.add("opacity-0", "-translate-y-4");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "";
      }, 250);
    }
  }

  menuBtn.addEventListener("click", () => toggleMenu(true));
  if (closeBtn) closeBtn.addEventListener("click", () => toggleMenu(false));

  navLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });
}

// 2. Live Job and Admission Notice Board Component
function initNoticeBoard() {
  const container = document.getElementById("notices-grid");
  const filterBtns = document.querySelectorAll(".notice-filter-btn");
  const searchInput = document.getElementById("notice-search");

  if (!container) return;

  function renderNotices(filter = "all", searchQuery = "") {
    let filtered = NOTICES;

    if (filter !== "all") {
      filtered = filtered.filter(item => item.type === filter);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.organization.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-dashed border-gray-300">
          <i class="fa-solid fa-file-circle-xmark text-4xl text-gray-400 mb-3 block"></i>
          <p class="text-lg font-medium">কোনো বিজ্ঞপ্তি পাওয়া যায়নি</p>
          <p class="text-sm text-gray-400">অনুগ্রহ করে অন্য কি-ওয়ার্ড বা ক্যাটাগরি বেছে নিন।</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(notice => {
      const isUrgent = notice.urgent;
      const typeLabel = notice.type === "govt" ? "সরকারি চাকরি" : (notice.type === "admission" ? "ভর্তি বিজ্ঞপ্তি" : "শিক্ষক নিবন্ধন");
      const badgeStyle = notice.type === "govt" ? "bg-emerald-100 text-emerald-800 border-emerald-300" : (notice.type === "admission" ? "bg-sky-100 text-sky-800 border-sky-300" : "bg-purple-100 text-purple-800 border-purple-300");

      return `
        <div class="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between relative group">
          ${isUrgent ? `
            <div class="absolute -top-3 right-5 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md animate-pulse flex items-center gap-1.5">
              <i class="fa-solid fa-bolt"></i> ডেডলাইন ঘনিয়ে এসেছে!
            </div>
          ` : ''}

          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs px-2.5 py-1 rounded-md font-semibold border ${badgeStyle}">
                ${typeLabel}
              </span>
              <span class="text-xs text-gray-500 font-medium">
                <i class="fa-regular fa-building mr-1"></i>${notice.organization}
              </span>
            </div>

            <h4 class="text-base sm:text-lg font-bold text-gray-900 group-hover:text-teal-700 transition leading-snug mb-2">
              ${notice.title}
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">
              ${notice.desc}
            </p>

            <div class="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-gray-100 mb-4">
              <div>
                <span class="text-gray-500 block">পদসংখ্যা/আসন:</span>
                <span class="font-bold text-gray-800">${notice.posts}</span>
              </div>
              <div>
                <span class="text-gray-500 block">সরকারি ফি:</span>
                <span class="font-bold text-teal-700">${notice.fee}</span>
              </div>
              <div class="col-span-2 pt-1 border-t border-gray-200/60 flex items-center justify-between">
                <span class="text-gray-500">আবেদনের শেষ তারিখ:</span>
                <span class="font-bold text-red-600 flex items-center gap-1">
                  <i class="fa-regular fa-calendar-xmark"></i> ${notice.deadline}
                  <span class="bg-red-50 text-red-700 text-[11px] px-1.5 py-0.5 rounded font-semibold ml-1">(${notice.daysLeft} দিন বাকি)</span>
                </span>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <button onclick="applyJobNotice('${notice.title.replace(/'/g, "\\'")}', '${notice.organization}')"
              class="w-full py-2.5 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#0A3622] to-[#138A72] hover:from-[#138A72] hover:to-[#0A3622] transition-all flex items-center justify-center gap-2 shadow hover:shadow-teal-500/20">
              <i class="fa-brands fa-whatsapp text-lg text-emerald-300"></i>
              <span>আমাদের মাধ্যমে আবেদন করুন</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // Initial render
  renderNotices();

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-teal-700", "text-white");
        b.classList.add("bg-white", "text-gray-700", "border-gray-300");
      });
      btn.classList.add("bg-teal-700", "text-white");
      btn.classList.remove("bg-white", "text-gray-700", "border-gray-300");

      const filterType = btn.getAttribute("data-filter");
      renderNotices(filterType, searchInput ? searchInput.value : "");
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeBtn = document.querySelector(".notice-filter-btn.bg-teal-700");
      const currentFilter = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
      renderNotices(currentFilter, e.target.value);
    });
  }
}

// 3. 99 Taka Corner & Stationery Products
function initStationeryProducts() {
  const container = document.getElementById("stationery-grid");
  const filterBtns = document.querySelectorAll(".product-filter-btn");

  if (!container) return;

  function renderProducts(category = "all") {
    let filtered = PRODUCTS;
    if (category === "99taka") {
      filtered = PRODUCTS.filter(p => p.price === 99);
    } else if (category !== "all") {
      filtered = PRODUCTS.filter(p => p.category === category);
    }

    container.innerHTML = filtered.map(prod => {
      return `
        <div class="bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group">
          <div>
            <div class="relative bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-xl p-8 mb-4 flex items-center justify-center text-teal-800 overflow-hidden">
              <span class="absolute top-2.5 left-2.5 text-[11px] font-bold text-white px-2.5 py-0.8 rounded-full ${prod.badgeColor} shadow">
                ${prod.tag}
              </span>
              <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-teal-700">
                <i class="fa-solid ${prod.icon} text-3xl text-teal-700"></i>
              </div>
            </div>

            <h4 class="font-bold text-base text-gray-900 group-hover:text-teal-700 transition leading-snug mb-2">
              ${prod.title}
            </h4>
            <p class="text-xs text-gray-500 mb-4 leading-relaxed">
              ${prod.desc}
            </p>
          </div>

          <div>
            <div class="flex items-baseline gap-2 mb-3">
              <span class="text-2xl font-extrabold text-teal-800">৳${prod.price}</span>
              ${prod.originalPrice ? `
                <span class="text-xs text-gray-400 line-through">৳${prod.originalPrice}</span>
                <span class="text-xs text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                  ৳${prod.originalPrice - prod.price} সাশ্রয়
                </span>
              ` : ''}
            </div>

            <button onclick="orderStationery('${prod.title.replace(/'/g, "\\'")}', ${prod.price})"
              class="w-full py-2.5 px-3 bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-teal-200 hover:border-teal-700">
              <i class="fa-brands fa-whatsapp text-base"></i>
              <span>হোয়াটসঅ্যাপে বুক করুন</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // Initial render
  renderProducts();

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-teal-700", "text-white");
        b.classList.add("bg-white", "text-gray-700", "border-gray-200");
      });
      btn.classList.add("bg-teal-700", "text-white");
      btn.classList.remove("bg-white", "text-gray-700", "border-gray-200");

      const cat = btn.getAttribute("data-category");
      renderProducts(cat);
    });
  });
}

// 4. Interactive Quick Print Cost Estimator
function initPrintCalculator() {
  const pagesInput = document.getElementById("calc-pages");
  const pagesSlider = document.getElementById("calc-pages-slider");
  const serviceTypeSelect = document.getElementById("calc-service-type");
  const doubleSidedCheck = document.getElementById("calc-double-sided");
  const bindingSelect = document.getElementById("calc-binding");
  const copiesInput = document.getElementById("calc-copies");

  const totalCostDisplay = document.getElementById("calc-total-cost");
  const perPageDisplay = document.getElementById("calc-per-page");
  const summaryDisplay = document.getElementById("calc-summary-text");
  const whatsappCalcBtn = document.getElementById("calc-whatsapp-btn");

  if (!pagesInput || !totalCostDisplay) return;

  function calculate() {
    let pages = parseInt(pagesInput.value) || 1;
    if (pages < 1) pages = 1;

    let copies = parseInt(copiesInput ? copiesInput.value : 1) || 1;
    if (copies < 1) copies = 1;

    const service = serviceTypeSelect.value;
    const isDoubleSided = doubleSidedCheck ? doubleSidedCheck.checked : false;
    const bindingType = bindingSelect.value;

    let ratePerPage = 2.0;
    let serviceLabel = "লেজার ফটোকপি";

    switch (service) {
      case "bw_copy":
        ratePerPage = (pages * copies >= 50) ? CONFIG.rates.bw_copy_bulk : CONFIG.rates.bw_copy;
        serviceLabel = "সাদাকালো ফটোকপি";
        break;
      case "bw_print":
        ratePerPage = CONFIG.rates.bw_print;
        serviceLabel = "সাদাকালো লেজার প্রিন্ট";
        break;
      case "color_print":
        ratePerPage = CONFIG.rates.color_print;
        serviceLabel = "রঙিন কালার প্রিন্ট";
        break;
      case "glossy_photo":
        ratePerPage = CONFIG.rates.glossy_photo;
        serviceLabel = "ল্যাব কোয়ালিটি গ্লসি ফটো";
        break;
    }

    // Sheet count calculation for double-sided
    const sheets = isDoubleSided ? Math.ceil(pages / 2) : pages;
    
    // Binding cost per set
    let bindingCost = 0;
    let bindingLabel = "কোনো বাইন্ডিং ছাড়া";
    switch (bindingType) {
      case "staple":
        bindingCost = CONFIG.rates.staple;
        bindingLabel = "স্ট্যাপলার পিন";
        break;
      case "spiral":
        bindingCost = CONFIG.rates.spiral;
        bindingLabel = "প্লাস্টিক স্পাইরাল বাইন্ডিং";
        break;
      case "lamination":
        bindingCost = CONFIG.rates.lamination;
        bindingLabel = "ওয়াটারপ্রুফ লেমিনেশন";
        break;
    }

    // Total Cost = (pages * ratePerPage + bindingCost) * copies
    const printCostPerSet = pages * ratePerPage;
    const totalPerSet = printCostPerSet + bindingCost;
    const grandTotal = Math.round(totalPerSet * copies);

    // Update UI
    totalCostDisplay.textContent = `৳ ${grandTotal}`;
    if (perPageDisplay) {
      perPageDisplay.textContent = `৳${ratePerPage.toFixed(1)}/পৃষ্ঠা`;
    }

    if (summaryDisplay) {
      summaryDisplay.textContent = `${serviceLabel} (${pages} পৃষ্ঠা x ${copies} সেট) + ${bindingLabel}`;
    }

    // Update WhatsApp button URL
    if (whatsappCalcBtn) {
      const message = encodeURIComponent(
        `হ্যালো Smart Computer & Stationery! আমি ওয়েবসাইট থেকে প্রিন্টিং হিসেব করেছি:\n\n` +
        `• সেবা: ${serviceLabel}\n` +
        `• পৃষ্ঠার সংখ্যা: ${pages} টি\n` +
        `• কপির সংখ্যা: ${copies} সেট\n` +
        `• মুদ্রণ ধরন: ${isDoubleSided ? "ডাবল সাইড (উভয় পিঠ)" : "সিঙ্গেল সাইড (এক পিঠ)"}\n` +
        `• বাইন্ডিং: ${bindingLabel}\n` +
        `• আনুমানিক মোট খরচ: ৳${grandTotal}\n\n` +
        `আমি প্রিন্টের ফাইল পাঠাচ্ছি, দয়া করে রেডি করে জানাবেন!`
      );
      whatsappCalcBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
    }
  }

  // Event Listeners for calculator
  pagesInput.addEventListener("input", (e) => {
    if (pagesSlider) pagesSlider.value = e.target.value;
    calculate();
  });

  if (pagesSlider) {
    pagesSlider.addEventListener("input", (e) => {
      pagesInput.value = e.target.value;
      calculate();
    });
  }

  if (serviceTypeSelect) serviceTypeSelect.addEventListener("change", calculate);
  if (doubleSidedCheck) doubleSidedCheck.addEventListener("change", calculate);
  if (bindingSelect) bindingSelect.addEventListener("change", calculate);
  if (copiesInput) copiesInput.addEventListener("input", calculate);

  // Initial Calculation
  calculate();
}

// 5. Quick WhatsApp File Upload Feature Box
function initQuickWhatsAppOrder() {
  const form = document.getElementById("quick-order-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const service = document.getElementById("qo-service").value;
    const name = document.getElementById("qo-name").value.trim();
    const copies = document.getElementById("qo-copies").value || "১";
    const notes = document.getElementById("qo-notes").value.trim();

    let text = `হ্যালো Smart Computer & Stationery! আমি ফাইল প্রিন্ট/অনলাইন কাজের জন্য মেসেজ দিচ্ছি:\n\n`;
    if (name) text += `• নাম/শিক্ষার্থী: ${name}\n`;
    text += `• প্রয়োজনীয় সেবা: ${service}\n`;
    text += `• কপির সংখ্যা: ${copies}\n`;
    if (notes) text += `• বিশেষ নির্দেশনা: ${notes}\n`;
    text += `\nআমি সাথে ফাইল অ্যাটাচ করছি। দয়া করে প্রস্তুত করে আমাকে জানাবেন!`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank");

    showToast("হোয়াটসঅ্যাপ খোলা হচ্ছে! ফাইল অ্যাটাচ করে পাঠিয়ে দিন।");
  });
}

// 6. Computer Training Academy Enrollment Modal
function initCourseModal() {
  const modal = document.getElementById("course-modal");
  const closeBtn = document.getElementById("close-course-modal");
  const form = document.getElementById("course-enroll-form");
  const courseInput = document.getElementById("modal-course-name");
  const courseDisplay = document.getElementById("modal-course-title-display");

  window.openEnrollModal = function(courseName) {
    if (!modal) return;
    if (courseInput) courseInput.value = courseName;
    if (courseDisplay) courseDisplay.textContent = courseName;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const course = courseInput.value;
      const studentName = document.getElementById("modal-student-name").value;
      const phone = document.getElementById("modal-student-phone").value;
      const institute = document.getElementById("modal-student-institute").value;
      const shift = document.getElementById("modal-student-shift").value;

      const message = encodeURIComponent(
        `হ্যালো! আমি Smart Computer Training Academy-তে ভর্তি হতে আগ্রহী:\n\n` +
        `• কোর্সের নাম: ${course}\n` +
        `• শিক্ষার্থীর নাম: ${studentName}\n` +
        `• মোবাইল নম্বর: ${phone}\n` +
        `• স্কুল/কলেজ/প্রতিষ্ঠান: ${institute}\n` +
        `• পছন্দের শিফট: ${shift}\n\n` +
        `অনুগ্রহ করে ব্যাচের সময়সূচি ও ভর্তির প্রক্রিয়া নিশ্চিত করুন।`
      );

      closeModal();
      window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, "_blank");
      showToast("আপনার আবেদন প্রস্তুত! হোয়াটসঅ্যাপে পাঠিয়ে দিন।");
    });
  }
}

// 7. Interactive Helper Actions (Job apply, Stationery order)
window.applyJobNotice = function(jobTitle, organization) {
  const message = encodeURIComponent(
    `হ্যালো Smart Computer! আমি "${jobTitle}" (${organization})-এর জন্য অনলাইন আবেদন করতে চাই।\n` +
    `আবেদন করতে কী কী ডকুমেন্ট (ছবি, সার্টিফিকেট, NID) নিয়ে আসব বা হোয়াটসঅ্যাপে পাঠাবো জানাবেন প্লিজ!`
  );
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, "_blank");
};

window.orderStationery = function(productTitle, price) {
  const message = encodeURIComponent(
    `হ্যালো Smart Computer & Stationery! আমি "${productTitle}" (৳${price}) আইটেমটি বুক/অর্ডার করতে চাই। ক্যান্টিন গেটের দোকান থেকে এসে সংগ্রহ করবো। স্টক আছে কি?`
  );
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, "_blank");
};

// 8. FAQ Accordion Logic
function initFAQAccordion() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const header = item.querySelector(".faq-header");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (!header || !content) return;

    header.addEventListener("click", () => {
      const isOpen = !content.classList.contains("hidden");

      // Close all others
      items.forEach(otherItem => {
        const otherContent = otherItem.querySelector(".faq-content");
        const otherIcon = otherItem.querySelector(".faq-icon");
        if (otherContent) otherContent.classList.add("hidden");
        if (otherIcon) otherIcon.classList.remove("rotate-180");
      });

      // Toggle current
      if (!isOpen) {
        content.classList.remove("hidden");
        if (icon) icon.classList.add("rotate-180");
      }
    });
  });
}

// 9. Toast Notification Utility
function showToast(text) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "fixed bottom-6 right-6 z-50 bg-[#0A3622] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-teal-500/40 flex items-center gap-3 transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-teal-500/20 text-[#38B6FF] flex items-center justify-center flex-shrink-0">
      <i class="fa-solid fa-circle-check text-lg"></i>
    </div>
    <span class="text-sm font-medium">${text}</span>
  `;

  toast.classList.remove("translate-y-12", "opacity-0", "pointer-events-none");

  setTimeout(() => {
    toast.classList.add("translate-y-12", "opacity-0", "pointer-events-none");
  }, 3500);
}

// 10. Scroll & Sticky Header Effects
function initScrollEffects() {
  const header = document.getElementById("main-header");
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 40) {
        header.classList.add("shadow-lg", "glass-nav");
      } else {
        header.classList.remove("shadow-lg");
      }
    }

    if (backToTop) {
      if (scrollPos > 400) {
        backToTop.classList.remove("opacity-0", "pointer-events-none", "translate-y-6");
      } else {
        backToTop.classList.add("opacity-0", "pointer-events-none", "translate-y-6");
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

