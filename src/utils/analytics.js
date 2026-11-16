/**
 * Google Analytics 4 (GA4) Integration for Smart Computer & Stationary
 *
 * Automatically tracks page views and provides event handlers for business leads:
 * - Direct phone calls
 * - WhatsApp inquiries & file dispatch
 * - Course enrollment submissions
 * - Job & admission circular clicks
 * - Printing cost calculations
 */

export const GA_MEASUREMENT_ID = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GA_MEASUREMENT_ID) ||
  (typeof window !== 'undefined' && window.GA_MEASUREMENT_ID) ||
  'G-CJ1RPJGERL';

/**
 * Initialize Google Analytics 4 gtag.js script dynamically.
 * Safe to call even if no ID is configured yet (will log a helpful tip in development).
 */
export function initGA(customId = '') {
  if (typeof window === 'undefined') return;

  const trackingId = (customId || GA_MEASUREMENT_ID || '').trim();

  // If already loaded in index.html, avoid duplicate script injection
  if (typeof window.gtag === 'function' || document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    if (import.meta.env.DEV) {
      console.info(`[Google Analytics] Active with ID: ${trackingId}`);
    }
    return;
  }

  // If no tracking ID or dummy placeholder, do not make broken network requests
  if (!trackingId || trackingId === 'G-XXXXXXXXXX') {
    if (import.meta.env.DEV) {
      console.info(
        '[Google Analytics] Inactive: No valid Measurement ID found. ' +
        'Set VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX in your .env file to enable live tracking.'
      );
    }
    return;
  }

  // Prevent duplicate script injection
  if (document.getElementById('ga-gtag-script')) return;

  // Setup dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', trackingId, {
    page_path: window.location.pathname,
    page_title: document.title,
    send_page_view: true,
  });

  // Inject official Google Tag Manager gtag script
  const script = document.createElement('script');
  script.id = 'ga-gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(trackingId)}`;
  document.head.appendChild(script);

  if (import.meta.env.DEV) {
    console.info(`[Google Analytics] Initialized successfully with ID: ${trackingId}`);
  }
}

/**
 * Dispatch generic event to Google Analytics
 */
export function trackEvent(action, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  } else if (import.meta.env.DEV) {
    console.debug(`[Google Analytics Event] ${action}:`, params);
  }
}

/**
 * Specialized Trackers for High-Value Customer Actions
 */

// 1. Phone Call clicks
export function trackCallClick(source = 'floating_button') {
  trackEvent('contact_phone_call', {
    event_category: 'Direct Lead',
    event_label: '01711-652361',
    click_source: source,
  });
}

// 2. WhatsApp message / dispatch clicks
export function trackWhatsAppClick(source = 'floating_button', details = {}) {
  trackEvent('contact_whatsapp', {
    event_category: 'Direct Lead',
    source_component: source,
    ...details,
  });
}

// 3. Document Dispatch via WhatsApp
export function trackDocumentDispatch(fileType = 'unknown') {
  trackEvent('document_dispatch_click', {
    event_category: 'Printing Service',
    file_type: fileType,
  });
}

// 4. Job / Admission Notice interactions
export function trackNoticeInteraction(noticeTitle, organization, action = 'apply_click') {
  trackEvent('notice_click', {
    event_category: 'Circulars & Notices',
    notice_title: noticeTitle,
    organization: organization,
    interaction_type: action,
  });
}

// 5. Training Academy Course Enrollment
export function trackCourseEnrollment(courseTitle, stage = 'modal_opened', studentData = {}) {
  trackEvent('course_enrollment', {
    event_category: 'Computer Training',
    course_name: courseTitle,
    enrollment_stage: stage,
    ...studentData,
  });
}

// 6. Print Cost Calculator usage & orders
export function trackPrintCalculatorUsage(serviceLabel, pages, copies, totalCost, action = 'estimate_calculated') {
  trackEvent('print_calculator_action', {
    event_category: 'Printing Tools',
    service: serviceLabel,
    total_pages: pages * copies,
    estimated_amount: totalCost,
    action: action,
  });
}
