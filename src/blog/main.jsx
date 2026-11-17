import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogApp from './BlogApp.jsx';
import '../index.css';

// Dual dataLayer push for GTM
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'blog_page_view',
    page_type: 'blog_portal',
    portal_name: 'Smart Computer The Keyword'
  });
}

ReactDOM.createRoot(document.getElementById('blog-root')).render(
  <React.StrictMode>
    <BlogApp />
  </React.StrictMode>
);
