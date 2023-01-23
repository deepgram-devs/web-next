import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
import 'axios';
/* empty css                           *//* empty css                           *//* empty css                           */import '@storyblok/js';
/* empty css                           *//* empty css                          */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import 'camelcase';
import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "your-one-stop-shop-for-automatic-speech-recognition-asr-development", "text": "Your one-stop-shop for Automatic Speech Recognition (ASR) development" }], "source": "## Your one-stop-shop for Automatic Speech Recognition (ASR) development\n\nWe are pleased to announce a new portal to provide a better developer experience. This is your one-stop-shop for all voice engineering and ASR development needs. The new site is located at [developers.deepgram.com](https://developers.deepgram.com/) and is organized into four main sections:\n\n1. **Get Started** - Overview of Deepgram's technology, processes, and solutions\n2. **Guides** - The heart of the documentation on all the features available for real-time streaming and batch transcription.\n3. **API references** - All the APIs and how to get an API key.\n4. **Security** -  Our stance and guidelines for information security and data privacy.\n\nWe will be updating this site regularly to add more information for developers. Please let us know if you would like to see other information or have questions: [support@deepgram.com](mailto:deepgram.comnull). \n\n![](https://res.cloudinary.com/deepgram/image/upload/v1661976834/blog/introducing-the-new-deepgram-developer-portal/developer-screenshot-300x137.jpg)", "html": '<h2 id="your-one-stop-shop-for-automatic-speech-recognition-asr-development">Your one-stop-shop for Automatic Speech Recognition (ASR) development</h2>\n<p>We are pleased to announce a new portal to provide a better developer experience. This is your one-stop-shop for all voice engineering and ASR development needs. The new site is located at <a href="https://developers.deepgram.com/">developers.deepgram.com</a> and is organized into four main sections:</p>\n<ol>\n<li><strong>Get Started</strong> - Overview of Deepgram\u2019s technology, processes, and solutions</li>\n<li><strong>Guides</strong> - The heart of the documentation on all the features available for real-time streaming and batch transcription.</li>\n<li><strong>API references</strong> - All the APIs and how to get an API key.</li>\n<li><strong>Security</strong> -  Our stance and guidelines for information security and data privacy.</li>\n</ol>\n<p>We will be updating this site regularly to add more information for developers. Please let us know if you would like to see other information or have questions: <a href="mailto:deepgram.comnull">support@deepgram.com</a>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976834/blog/introducing-the-new-deepgram-developer-portal/developer-screenshot-300x137.jpg" alt=""></p>' };
const frontmatter = { "title": "Introducing the New Deepgram Developer Portal", "description": "Deepgrams new developer's portal. Your one-stop-shop for developing with the most accurate, fastest and cost effective speech recognition platform.", "date": "2021-01-20T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981359/blog/introducing-the-new-deepgram-developer-portal/introducing-new-dg-dev-portal%402x.jpg", "authors": ["keith-lam"], "category": "product-news", "tags": ["announcements"], "seo": { "title": "Introducing the New Deepgram Developer Portal", "description": "Deepgrams new developer's portal. Your one-stop-shop for developing with the most accurate, fastest and cost effective speech recognition platform." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981359/blog/introducing-the-new-deepgram-developer-portal/introducing-new-dg-dev-portal%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/666ea82", "twitter": "https://dpgr.am/a58ca75", "linkedin": "https://dpgr.am/57654d2", "reddit": "https://dpgr.am/82adb0e", "facebook": "https://dpgr.am/6e2bdb4" }, "astro": { "headings": [{ "depth": 2, "slug": "your-one-stop-shop-for-automatic-speech-recognition-asr-development", "text": "Your one-stop-shop for Automatic Speech Recognition (ASR) development" }], "source": "## Your one-stop-shop for Automatic Speech Recognition (ASR) development\n\nWe are pleased to announce a new portal to provide a better developer experience. This is your one-stop-shop for all voice engineering and ASR development needs. The new site is located at [developers.deepgram.com](https://developers.deepgram.com/) and is organized into four main sections:\n\n1. **Get Started** - Overview of Deepgram's technology, processes, and solutions\n2. **Guides** - The heart of the documentation on all the features available for real-time streaming and batch transcription.\n3. **API references** - All the APIs and how to get an API key.\n4. **Security** -  Our stance and guidelines for information security and data privacy.\n\nWe will be updating this site regularly to add more information for developers. Please let us know if you would like to see other information or have questions: [support@deepgram.com](mailto:deepgram.comnull). \n\n![](https://res.cloudinary.com/deepgram/image/upload/v1661976834/blog/introducing-the-new-deepgram-developer-portal/developer-screenshot-300x137.jpg)", "html": '<h2 id="your-one-stop-shop-for-automatic-speech-recognition-asr-development">Your one-stop-shop for Automatic Speech Recognition (ASR) development</h2>\n<p>We are pleased to announce a new portal to provide a better developer experience. This is your one-stop-shop for all voice engineering and ASR development needs. The new site is located at <a href="https://developers.deepgram.com/">developers.deepgram.com</a> and is organized into four main sections:</p>\n<ol>\n<li><strong>Get Started</strong> - Overview of Deepgram\u2019s technology, processes, and solutions</li>\n<li><strong>Guides</strong> - The heart of the documentation on all the features available for real-time streaming and batch transcription.</li>\n<li><strong>API references</strong> - All the APIs and how to get an API key.</li>\n<li><strong>Security</strong> -  Our stance and guidelines for information security and data privacy.</li>\n</ol>\n<p>We will be updating this site regularly to add more information for developers. Please let us know if you would like to see other information or have questions: <a href="mailto:deepgram.comnull">support@deepgram.com</a>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976834/blog/introducing-the-new-deepgram-developer-portal/developer-screenshot-300x137.jpg" alt=""></p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-the-new-deepgram-developer-portal/index.md" };
function rawContent() {
  return "## Your one-stop-shop for Automatic Speech Recognition (ASR) development\n\nWe are pleased to announce a new portal to provide a better developer experience. This is your one-stop-shop for all voice engineering and ASR development needs. The new site is located at [developers.deepgram.com](https://developers.deepgram.com/) and is organized into four main sections:\n\n1. **Get Started** - Overview of Deepgram's technology, processes, and solutions\n2. **Guides** - The heart of the documentation on all the features available for real-time streaming and batch transcription.\n3. **API references** - All the APIs and how to get an API key.\n4. **Security** -  Our stance and guidelines for information security and data privacy.\n\nWe will be updating this site regularly to add more information for developers. Please let us know if you would like to see other information or have questions: [support@deepgram.com](mailto:deepgram.comnull). \n\n![](https://res.cloudinary.com/deepgram/image/upload/v1661976834/blog/introducing-the-new-deepgram-developer-portal/developer-screenshot-300x137.jpg)";
}
function compiledContent() {
  return '<h2 id="your-one-stop-shop-for-automatic-speech-recognition-asr-development">Your one-stop-shop for Automatic Speech Recognition (ASR) development</h2>\n<p>We are pleased to announce a new portal to provide a better developer experience. This is your one-stop-shop for all voice engineering and ASR development needs. The new site is located at <a href="https://developers.deepgram.com/">developers.deepgram.com</a> and is organized into four main sections:</p>\n<ol>\n<li><strong>Get Started</strong> - Overview of Deepgram\u2019s technology, processes, and solutions</li>\n<li><strong>Guides</strong> - The heart of the documentation on all the features available for real-time streaming and batch transcription.</li>\n<li><strong>API references</strong> - All the APIs and how to get an API key.</li>\n<li><strong>Security</strong> -  Our stance and guidelines for information security and data privacy.</li>\n</ol>\n<p>We will be updating this site regularly to add more information for developers. Please let us know if you would like to see other information or have questions: <a href="mailto:deepgram.comnull">support@deepgram.com</a>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976834/blog/introducing-the-new-deepgram-developer-portal/developer-screenshot-300x137.jpg" alt=""></p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-the-new-deepgram-developer-portal/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><h2 id="your-one-stop-shop-for-automatic-speech-recognition-asr-development">Your one-stop-shop for Automatic Speech Recognition (ASR) development</h2>
<p>We are pleased to announce a new portal to provide a better developer experience. This is your one-stop-shop for all voice engineering and ASR development needs. The new site is located at <a href="https://developers.deepgram.com/">developers.deepgram.com</a> and is organized into four main sections:</p>
<ol>
<li><strong>Get Started</strong> - Overview of Deepgram’s technology, processes, and solutions</li>
<li><strong>Guides</strong> - The heart of the documentation on all the features available for real-time streaming and batch transcription.</li>
<li><strong>API references</strong> - All the APIs and how to get an API key.</li>
<li><strong>Security</strong> -  Our stance and guidelines for information security and data privacy.</li>
</ol>
<p>We will be updating this site regularly to add more information for developers. Please let us know if you would like to see other information or have questions: <a href="mailto:deepgram.comnull">support@deepgram.com</a>.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976834/blog/introducing-the-new-deepgram-developer-portal/developer-screenshot-300x137.jpg" alt=""></p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-the-new-deepgram-developer-portal/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };