/**
 * Smart Computer & Stationery - Interactive Application Logic
 * Modern, responsive, and student-focused digital service hub
 */

// Global Configuration
const CONFIG = {
  phone: "+8801711652361",
  whatsappNumber: "8801711652361", // Standard international format without '+' for wa.me
  storeName: "Smart Computer & Stationery",
  location: "Beside School & College Canteen Gate",
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

// Stationery and Tk 99 Corner Products Data
const PRODUCTS = [
  {
    id: 1,
    title: "Multi-Function OTG Adapter & Cable Protector",
    category: "gadget",
    tag: "Tk 99 Special",
    price: 99,
    originalPrice: 150,
    icon: "fa-usb",
    desc: "Type-C and Micro USB supported. Essential for fast file transfer from flash drive to smartphone.",
    badgeColor: "bg-red-500"
  },
  {
    id: 2,
    title: "Sticky Notes Combo + Neon Highlighter Pack",
    category: "stationery",
    tag: "Tk 99 Special",
    price: 99,
    originalPrice: 140,
    icon: "fa-highlighter",
    desc: "3-color fluorescent highlighters and memo pad set for textbook marking and note-taking.",
    badgeColor: "bg-amber-500"
  },
  {
    id: 3,
    title: "Complete Mathematical Geometry Box Set",
    category: "geometry",
    tag: "Student Choice",
    price: 99,
    originalPrice: 130,
    icon: "fa-compass-drafting",
    desc: "Complete math set with compass, divider, ruler, protractor, and pencil for exams and class.",
    badgeColor: "bg-blue-600"
  },
  {
    id: 4,
    title: "Premium Spiral Notebook (200 Pages Ruled)",
    category: "notebook",
    tag: "Bestseller",
    price: 99,
    originalPrice: 130,
    icon: "fa-book-open",
    desc: "Smooth white paper with durable spiral binding, ideal for college and coaching lecture notes.",
    badgeColor: "bg-sky-500"
  },
  {
    id: 5,
    title: "Art Paper & Watercolor Brush Kit",
    category: "art",
    tag: "Tk 99 Special",
    price: 99,
    originalPrice: 150,
    icon: "fa-palette",
    desc: "12-color paint cakes and 3-size paintbrush set for school drawing classes and art projects.",
    badgeColor: "bg-purple-600"
  },
  {
    id: 6,
    title: "Scientific Calculator Backup Battery + Steel Ruler",
    category: "gadget",
    tag: "Exam Special",
    price: 99,
    originalPrice: 140,
    icon: "fa-calculator",
    desc: "Never let your calculator die in an exam hall! Original long-life cell with 30cm steel ruler.",
    badgeColor: "bg-rose-500"
  },
  {
    id: 7,
    title: "Smooth Gel Pen Dozen Pack (12-Pen Combo)",
    category: "stationery",
    tag: "Tk 99 Special",
    price: 99,
    originalPrice: 140,
    icon: "fa-pen-nib",
    desc: "0.5mm smooth-flow gel pens. The ultimate choice for fast, clean, and fatigue-free handwriting.",
    badgeColor: "bg-indigo-600"
  },
  {
    id: 8,
    title: "Metal Keyring & Pocket LED Torch Light",
    category: "gadget",
    tag: "Tk 99 Special",
    price: 99,
    originalPrice: 150,
    icon: "fa-lightbulb",
    desc: "Rechargeable mini pocket light and stylish student keyring. A handy gadget for your backpack.",
    badgeColor: "bg-blue-600"
  },
  {
    id: 9,
    title: "Casio Original Scientific Calculator (FX-991CW)",
    category: "gadget",
    tag: "Original 3-Year Warranty",
    price: 1850,
    originalPrice: 2100,
    icon: "fa-microchip",
    desc: "Advanced high-speed calculation features recommended for college, engineering, and university admissions.",
    badgeColor: "bg-blue-600"
  },
  {
    id: 10,
    title: "A4 Size Premium Paper Ream (80 GSM - 500 Sheets)",
    category: "stationery",
    tag: "Office & Student",
    price: 360,
    originalPrice: 400,
    icon: "fa-copy",
    desc: "Bright white premium paper ream for lab reports, project documentation, thesis, and photocopying.",
    badgeColor: "bg-slate-700"
  }
];

// Live Job Circulars and Admission Notice Board Data
const NOTICES = [
  {
    id: "job-1",
    type: "govt",
    title: "Bangladesh Railway Assistant Station Master & Various Posts Recruitment",
    organization: "Bangladesh Railway",
    posts: "560 Posts",
    deadline: "30 Nov 2026",
    daysLeft: 6,
    fee: "Tk 223",
    urgent: true,
    desc: "Eligibility: Graduate or equivalent degree from any recognized university."
  },
  {
    id: "adm-1",
    type: "admission",
    title: "Online Class XI Admission & College Choice Selection Open",
    organization: "Ministry of Education (Dhaka Board)",
    posts: "Nationwide",
    deadline: "15 Dec 2026",
    daysLeft: 12,
    fee: "Tk 150",
    urgent: false,
    desc: "Online choice selection for minimum 5 and maximum 10 colleges for SSC graduates."
  },
  {
    id: "job-2",
    type: "govt",
    title: "Primary Assistant Teacher Recruitment Circular (All Divisions)",
    organization: "Directorate of Primary Education",
    posts: "13,750 Posts",
    deadline: "25 Dec 2026",
    daysLeft: 18,
    fee: "Tk 112",
    urgent: false,
    desc: "Candidates with a bachelor's degree with 2nd division or equivalent CGPA are eligible."
  },
  {
    id: "adm-2",
    type: "admission",
    title: "Dhaka University (DU) Undergraduate 1st Year Admission Test",
    organization: "University of Dhaka",
    posts: "A, B, C, Fine Arts Units",
    deadline: "05 Jan 2027",
    daysLeft: 24,
    fee: "Tk 1,050",
    urgent: false,
    desc: "Online application submission and admit card download assistance for Arts, Science, and Business units."
  },
  {
    id: "job-3",
    type: "ntrca",
    title: "19th Non-Government Teachers' Registration Examination (NTRCA)",
    organization: "NTRCA Dhaka",
    posts: "School & College Levels",
    deadline: "10 Dec 2026",
    daysLeft: 9,
    fee: "Tk 350",
    urgent: true,
    desc: "100% accurate online application processing and subject registration."
  },
  {
    id: "job-4",
    type: "govt",
    title: "Bangladesh Police Trainee Recruit Constable (TRC) Recruitment",
    organization: "Police Headquarters",
    posts: "4,000 Posts",
    deadline: "20 Dec 2026",
    daysLeft: 15,
    fee: "Tk 40",
    urgent: false,
    desc: "Physical endurance test registration and online form submission for SSC pass candidates."
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
          <p class="text-lg font-medium">No Notices Found</p>
          <p class="text-sm text-gray-400">Please choose a different keyword or category.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(notice => {
      const isUrgent = notice.urgent;
      const typeLabel = notice.type === "govt" ? "Govt Job" : (notice.type === "admission" ? "Admission" : "Teacher Registration");
      const badgeStyle = notice.type === "govt" ? "bg-blue-100 text-blue-800 border-blue-300" : (notice.type === "admission" ? "bg-sky-100 text-sky-800 border-sky-300" : "bg-purple-100 text-purple-800 border-purple-300");

      return `
        <div class="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between relative group">
          ${isUrgent ? `
            <div class="absolute -top-3 right-5 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md animate-pulse flex items-center gap-1.5">
              <i class="fa-solid fa-bolt"></i> Deadline Approaching!
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

            <h4 class="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-700 transition leading-snug mb-2">
              ${notice.title}
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">
              ${notice.desc}
            </p>

            <div class="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-gray-100 mb-4">
              <div>
                <span class="text-gray-500 block">Positions / Seats:</span>
                <span class="font-bold text-gray-800">${notice.posts}</span>
              </div>
              <div>
                <span class="text-gray-500 block">Govt Fee:</span>
                <span class="font-bold text-blue-700">${notice.fee}</span>
              </div>
              <div class="col-span-2 pt-1 border-t border-gray-200/60 flex items-center justify-between">
                <span class="text-gray-500">Application Deadline:</span>
                <span class="font-bold text-red-600 flex items-center gap-1">
                  <i class="fa-regular fa-calendar-xmark"></i> ${notice.deadline}
                  <span class="bg-red-50 text-red-700 text-[11px] px-1.5 py-0.5 rounded font-semibold ml-1">(${notice.daysLeft} days left)</span>
                </span>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <button onclick="applyJobNotice('${notice.title.replace(/'/g, "\\'")}', '${notice.organization}')"
              class="w-full py-2.5 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#0B192C] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#0B192C] transition-all flex items-center justify-center gap-2 shadow hover:shadow-blue-500/20">
              <i class="fa-brands fa-whatsapp text-lg text-sky-300"></i>
              <span>Apply via Our Center</span>
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
        b.classList.remove("bg-blue-700", "text-white");
        b.classList.add("bg-white", "text-gray-700", "border-gray-300");
      });
      btn.classList.add("bg-blue-700", "text-white");
      btn.classList.remove("bg-white", "text-gray-700", "border-gray-300");

      const filterType = btn.getAttribute("data-filter");
      renderNotices(filterType, searchInput ? searchInput.value : "");
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeBtn = document.querySelector(".notice-filter-btn.bg-blue-700");
      const currentFilter = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
      renderNotices(currentFilter, e.target.value);
    });
  }
}

// 3. Tk 99 Corner & Stationery Products
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
        <div class="bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group">
          <div>
            <div class="relative bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-xl p-8 mb-4 flex items-center justify-center text-blue-900 overflow-hidden">
              <span class="absolute top-2.5 left-2.5 text-[11px] font-bold text-white px-2.5 py-0.8 rounded-full ${prod.badgeColor} shadow">
                ${prod.tag}
              </span>
              <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-blue-700">
                <i class="fa-solid ${prod.icon} text-3xl text-blue-700"></i>
              </div>
            </div>

            <h4 class="font-bold text-base text-gray-900 group-hover:text-blue-700 transition leading-snug mb-2">
              ${prod.title}
            </h4>
            <p class="text-xs text-gray-500 mb-4 leading-relaxed">
              ${prod.desc}
            </p>
          </div>

          <div>
            <div class="flex items-baseline gap-2 mb-3">
              <span class="text-2xl font-extrabold text-blue-900">Tk ${prod.price}</span>
              ${prod.originalPrice ? `
                <span class="text-xs text-gray-400 line-through">Tk ${prod.originalPrice}</span>
                <span class="text-xs text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">
                  Tk ${prod.originalPrice - prod.price} OFF
                </span>
              ` : ''}
            </div>

            <button onclick="orderStationery('${prod.title.replace(/'/g, "\\'")}', ${prod.price})"
              class="w-full py-2.5 px-3 bg-blue-50 hover:bg-blue-700 text-blue-800 hover:text-white rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-blue-200 hover:border-blue-700">
              <i class="fa-brands fa-whatsapp text-base"></i>
              <span>Book on WhatsApp</span>
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
        b.classList.remove("bg-blue-700", "text-white");
        b.classList.add("bg-white", "text-gray-700", "border-gray-200");
      });
      btn.classList.add("bg-blue-700", "text-white");
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
    let serviceLabel = "Laser Photocopy";

    switch (service) {
      case "bw_copy":
        ratePerPage = (pages * copies >= 50) ? CONFIG.rates.bw_copy_bulk : CONFIG.rates.bw_copy;
        serviceLabel = "B&W Photocopy";
        break;
      case "bw_print":
        ratePerPage = CONFIG.rates.bw_print;
        serviceLabel = "B&W Laser Print";
        break;
      case "color_print":
        ratePerPage = CONFIG.rates.color_print;
        serviceLabel = "Color Laser Print";
        break;
      case "glossy_photo":
        ratePerPage = CONFIG.rates.glossy_photo;
        serviceLabel = "Lab Glossy Photo";
        break;
    }

    // Sheet count calculation for double-sided
    const sheets = isDoubleSided ? Math.ceil(pages / 2) : pages;
    
    // Binding cost per set
    let bindingCost = 0;
    let bindingLabel = "No Binding";
    switch (bindingType) {
      case "staple":
        bindingCost = CONFIG.rates.staple;
        bindingLabel = "Stapler Pin";
        break;
      case "spiral":
        bindingCost = CONFIG.rates.spiral;
        bindingLabel = "Plastic Spiral Binding";
        break;
      case "lamination":
        bindingCost = CONFIG.rates.lamination;
        bindingLabel = "Waterproof Lamination";
        break;
    }

    // Total Cost = (pages * ratePerPage + bindingCost) * copies
    const printCostPerSet = pages * ratePerPage;
    const totalPerSet = printCostPerSet + bindingCost;
    const grandTotal = Math.round(totalPerSet * copies);

    // Update UI
    totalCostDisplay.textContent = `Tk ${grandTotal}`;
    if (perPageDisplay) {
      perPageDisplay.textContent = `Tk ${ratePerPage.toFixed(1)}/page`;
    }

    if (summaryDisplay) {
      summaryDisplay.textContent = `${serviceLabel} (${pages} pages x ${copies} sets) + ${bindingLabel}`;
    }

    // Update WhatsApp button URL
    if (whatsappCalcBtn) {
      const message = encodeURIComponent(
        `Hello Smart Computer & Stationery! I calculated my printing cost on your website:\n\n` +
        `• Service: ${serviceLabel}\n` +
        `• Pages: ${pages}\n` +
        `• Copies: ${copies} sets\n` +
        `• Print Type: ${isDoubleSided ? "Double-Sided" : "Single-Sided"}\n` +
        `• Binding: ${bindingLabel}\n` +
        `• Estimated Total: Tk ${grandTotal}\n\n` +
        `I am sending my files, please let me know when they are ready!`
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
    const copies = document.getElementById("qo-copies").value || "1";
    const notes = document.getElementById("qo-notes").value.trim();

    let text = `Hello Smart Computer & Stationery! I would like to order printing / online services:\n\n`;
    if (name) text += `• Name/Student: ${name}\n`;
    text += `• Service Needed: ${service}\n`;
    text += `• Copies: ${copies}\n`;
    if (notes) text += `• Special Instructions: ${notes}\n`;
    text += `\nI have attached my file(s). Please confirm once ready!`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank");

    showToast("Opening WhatsApp! Please attach your file and send.");
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
        `Hello! I would like to enroll in Smart Computer Training Academy:\n\n` +
        `• Course Name: ${course}\n` +
        `• Student Name: ${studentName}\n` +
        `• Mobile Phone: ${phone}\n` +
        `• School/College/Institution: ${institute}\n` +
        `• Preferred Shift: ${shift}\n\n` +
        `Please confirm batch schedule and enrollment procedure.`
      );

      closeModal();
      window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, "_blank");
      showToast("Your application is ready! Please send it on WhatsApp.");
    });
  }
}

// 7. Interactive Helper Actions (Job apply, Stationery order)
window.applyJobNotice = function(jobTitle, organization) {
  const message = encodeURIComponent(
    `Hello Smart Computer! I would like to apply online for "${jobTitle}" (${organization}).\n` +
    `Please let me know what documents (photo, certificates, NID) I should bring or send on WhatsApp!`
  );
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, "_blank");
};

window.orderStationery = function(productTitle, price) {
  const message = encodeURIComponent(
    `Hello Smart Computer & Stationery! I would like to book/order "${productTitle}" (Tk ${price}). I will collect it from the store beside the Canteen Gate. Is it in stock?`
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
    toast.className = "fixed bottom-6 right-6 z-50 bg-[#0B192C] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-blue-500/40 flex items-center gap-3 transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-blue-500/20 text-[#38B6FF] flex items-center justify-center flex-shrink-0">
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
