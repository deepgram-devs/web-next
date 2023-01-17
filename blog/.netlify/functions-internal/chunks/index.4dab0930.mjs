import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../entry.mjs';
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
/* empty css                          *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import 'camelcase';
/* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "challenge-discovering-that-unique-gem", "text": "Challenge: Discovering that Unique Gem" }, { "depth": 2, "slug": "better-speech-processing-better-outcomes", "text": "Better Speech Processing, Better Outcomes" }, { "depth": 2, "slug": "faster-better-and-more-reliable-compliance", "text": "Faster, Better, and More Reliable Compliance" }], "source": `Randall-Reilly is *the* recruiting powerhouse for fast growing companies. They utilize more than 30 web properties, an assortment of strategic media channels, and in-house high-tech call center campaigns to rapidly find, promote, and assist candidates through the recruiting and partnering processes of innovative companies. By engaging the services of Randall-Reilly, one of the largest ridesharing companies can scale their partnering process without losing focus on the important things - finding the right people.

## Challenge: Discovering that Unique Gem

Finding the right people starts simply - often with a phone call. But when you handle an enormous amount of calls, you're faced with a massive challenge: sorting through millions of minutes of recorded audio in hopes of discovering a unique gem buried within complex and diverse conversations.

Randell-Reilly analyzes millions of minutes of phone interviews in an effort to identify specific call characteristics consistent with the ridesharing company's quest to partner with high quality safe drivers.

> "They receive an enormous number of driver-partner applications per year. Analyzing their phone contact processes is key to finding amazing safe drivers. Working with Deepgram is the most effective way to do it." \u2014*Dennis Evanson, Head of Quality Assurance, Randall-Reilly*

## Better Speech Processing, Better Outcomes

> "We tried Google's Cloud Speech API and Nuance Dragon, and investigated several other products from companies including Amazon, Tethr, Prosodica and Zoom. Deepgram had the best accuracy and program by far." \u2014Brett Evanson, CTO, Randall-Reilly

After facing inaccurate results produced by leading providers, and struggling through cumbersome process designs, Randall-Reilly turned to Deepgram. They found that **last generation solutions simply couldn't offer the services, accuracy, design, or speed needed to review every single call**. Deepgram's neural networks, however, easily provided the scale, speed, and accuracy that they required to programmatically analyze phone interviews.

> Before Deepgram, Randall-Reilly found that when it audited its speech-to-text query results from other vendors, only 80% of the search results produced confirmable matches. <mark>*Using Deepgram they were able to increase audit-confirmed results to levels exceeding 95% accuracy.*</mark>

<WhitepaperPromo whitepaper="deepgram-whitepaper-state-of-voice-2022"></WhitepaperPromo>

## Faster, Better, and More Reliable Compliance

> "The reason we went with Deepgram is because it's a way that we can touch and have some level of QA assessment on every single call. **It gives us the ability to scale compliance operations without hiring a hundred people**. We're able to get more comfortable with compliance in a more flexible and efficient manner; rather than wading through speech-to-text and its inherent inaccuracies, Deepgram's approach is a faster and more accurate assessment."

While speaking with potential driver-partner candidates, Randell-Reilly's agents guide potential drivers through rigorous approval process. Deepgram's fast and accurate assessments of those conversations provides an optimized method for Randall-Reilly to gain a suitable comfort level concerning both the depth and effectiveness of its compliance efforts. Being able to quickly and reliably measure how well clients do at meeting both client and regulatory standards puts them miles ahead of other standard assessment methods. Deepgram is a crucial part of their process in streamlining both regulatory and client-mandated processes.

> "As a company we are very concerned that we are doing and saying what our clients want, and doing it in the most efficient manner. Deepgram helps us track that effort efficiently and speedily. We love working with Deepgram. They're crucial in our automated analysis of every recorded interview, and in our capacity to make sure that \\[our client's] needs are being met." \u2014Corbin McCabe, Randell-Reilly, General Manager

[Find out](https://deepgram.com/) how you can achieve what Randell-Reilly did.`, "html": '<p>Randall-Reilly is <em>the</em> recruiting powerhouse for fast growing companies. They utilize more than 30 web properties, an assortment of strategic media channels, and in-house high-tech call center campaigns to rapidly find, promote, and assist candidates through the recruiting and partnering processes of innovative companies. By engaging the services of Randall-Reilly, one of the largest ridesharing companies can scale their partnering process without losing focus on the important things - finding the right people.</p>\n<h2 id="challenge-discovering-that-unique-gem">Challenge: Discovering that Unique Gem</h2>\n<p>Finding the right people starts simply - often with a phone call. But when you handle an enormous amount of calls, you\u2019re faced with a massive challenge: sorting through millions of minutes of recorded audio in hopes of discovering a unique gem buried within complex and diverse conversations.</p>\n<p>Randell-Reilly analyzes millions of minutes of phone interviews in an effort to identify specific call characteristics consistent with the ridesharing company\u2019s quest to partner with high quality safe drivers.</p>\n<blockquote>\n<p>\u201CThey receive an enormous number of driver-partner applications per year. Analyzing their phone contact processes is key to finding amazing safe drivers. Working with Deepgram is the most effective way to do it.\u201D \u2014<em>Dennis Evanson, Head of Quality Assurance, Randall-Reilly</em></p>\n</blockquote>\n<h2 id="better-speech-processing-better-outcomes">Better Speech Processing, Better Outcomes</h2>\n<blockquote>\n<p>\u201CWe tried Google\u2019s Cloud Speech API and Nuance Dragon, and investigated several other products from companies including Amazon, Tethr, Prosodica and Zoom. Deepgram had the best accuracy and program by far.\u201D \u2014Brett Evanson, CTO, Randall-Reilly</p>\n</blockquote>\n<p>After facing inaccurate results produced by leading providers, and struggling through cumbersome process designs, Randall-Reilly turned to Deepgram. They found that <strong>last generation solutions simply couldn\u2019t offer the services, accuracy, design, or speed needed to review every single call</strong>. Deepgram\u2019s neural networks, however, easily provided the scale, speed, and accuracy that they required to programmatically analyze phone interviews.</p>\n<blockquote>\n<p>Before Deepgram, Randall-Reilly found that when it audited its speech-to-text query results from other vendors, only 80% of the search results produced confirmable matches. <mark><em>Using Deepgram they were able to increase audit-confirmed results to levels exceeding 95% accuracy.</em></mark></p>\n</blockquote>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-state-of-voice-2022" />\n<h2 id="faster-better-and-more-reliable-compliance">Faster, Better, and More Reliable Compliance</h2>\n<blockquote>\n<p>\u201CThe reason we went with Deepgram is because it\u2019s a way that we can touch and have some level of QA assessment on every single call. <strong>It gives us the ability to scale compliance operations without hiring a hundred people</strong>. We\u2019re able to get more comfortable with compliance in a more flexible and efficient manner; rather than wading through speech-to-text and its inherent inaccuracies, Deepgram\u2019s approach is a faster and more accurate assessment.\u201D</p>\n</blockquote>\n<p>While speaking with potential driver-partner candidates, Randell-Reilly\u2019s agents guide potential drivers through rigorous approval process. Deepgram\u2019s fast and accurate assessments of those conversations provides an optimized method for Randall-Reilly to gain a suitable comfort level concerning both the depth and effectiveness of its compliance efforts. Being able to quickly and reliably measure how well clients do at meeting both client and regulatory standards puts them miles ahead of other standard assessment methods. Deepgram is a crucial part of their process in streamlining both regulatory and client-mandated processes.</p>\n<blockquote>\n<p>\u201CAs a company we are very concerned that we are doing and saying what our clients want, and doing it in the most efficient manner. Deepgram helps us track that effort efficiently and speedily. We love working with Deepgram. They\u2019re crucial in our automated analysis of every recorded interview, and in our capacity to make sure that [our client\u2019s] needs are being met.\u201D \u2014Corbin McCabe, Randell-Reilly, General Manager</p>\n</blockquote>\n<p><a href="https://deepgram.com/">Find out</a> how you can achieve what Randell-Reilly did.</p>' };
const frontmatter = { "title": "How Randall-Reilly Uses Deepgram to Match Drivers to a Leading Ridesharing Company", "description": "Randall-Reilly is the recruiting powerhouse for fast growing companies. Learn about how they use Deepgram here.", "date": "2018-08-31T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981312/blog/customer-story-rideshare-smartrhino-deepgram/how-randall-reilly-uses-dg%402x.jpg", "authors": ["scott-stephenson"], "category": "dg-insider", "tags": ["customer-story"], "seo": { "title": "How Randall-Reilly Uses Deepgram to Match Drivers to a Leading Ridesharing Company", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981312/blog/customer-story-rideshare-smartrhino-deepgram/how-randall-reilly-uses-dg%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/ddf7163", "twitter": "https://dpgr.am/176e9af", "linkedin": "https://dpgr.am/9b0d80a", "reddit": "https://dpgr.am/9a076a2", "facebook": "https://dpgr.am/9598d32" }, "astro": { "headings": [{ "depth": 2, "slug": "challenge-discovering-that-unique-gem", "text": "Challenge: Discovering that Unique Gem" }, { "depth": 2, "slug": "better-speech-processing-better-outcomes", "text": "Better Speech Processing, Better Outcomes" }, { "depth": 2, "slug": "faster-better-and-more-reliable-compliance", "text": "Faster, Better, and More Reliable Compliance" }], "source": `Randall-Reilly is *the* recruiting powerhouse for fast growing companies. They utilize more than 30 web properties, an assortment of strategic media channels, and in-house high-tech call center campaigns to rapidly find, promote, and assist candidates through the recruiting and partnering processes of innovative companies. By engaging the services of Randall-Reilly, one of the largest ridesharing companies can scale their partnering process without losing focus on the important things - finding the right people.

## Challenge: Discovering that Unique Gem

Finding the right people starts simply - often with a phone call. But when you handle an enormous amount of calls, you're faced with a massive challenge: sorting through millions of minutes of recorded audio in hopes of discovering a unique gem buried within complex and diverse conversations.

Randell-Reilly analyzes millions of minutes of phone interviews in an effort to identify specific call characteristics consistent with the ridesharing company's quest to partner with high quality safe drivers.

> "They receive an enormous number of driver-partner applications per year. Analyzing their phone contact processes is key to finding amazing safe drivers. Working with Deepgram is the most effective way to do it." \u2014*Dennis Evanson, Head of Quality Assurance, Randall-Reilly*

## Better Speech Processing, Better Outcomes

> "We tried Google's Cloud Speech API and Nuance Dragon, and investigated several other products from companies including Amazon, Tethr, Prosodica and Zoom. Deepgram had the best accuracy and program by far." \u2014Brett Evanson, CTO, Randall-Reilly

After facing inaccurate results produced by leading providers, and struggling through cumbersome process designs, Randall-Reilly turned to Deepgram. They found that **last generation solutions simply couldn't offer the services, accuracy, design, or speed needed to review every single call**. Deepgram's neural networks, however, easily provided the scale, speed, and accuracy that they required to programmatically analyze phone interviews.

> Before Deepgram, Randall-Reilly found that when it audited its speech-to-text query results from other vendors, only 80% of the search results produced confirmable matches. <mark>*Using Deepgram they were able to increase audit-confirmed results to levels exceeding 95% accuracy.*</mark>

<WhitepaperPromo whitepaper="deepgram-whitepaper-state-of-voice-2022"></WhitepaperPromo>

## Faster, Better, and More Reliable Compliance

> "The reason we went with Deepgram is because it's a way that we can touch and have some level of QA assessment on every single call. **It gives us the ability to scale compliance operations without hiring a hundred people**. We're able to get more comfortable with compliance in a more flexible and efficient manner; rather than wading through speech-to-text and its inherent inaccuracies, Deepgram's approach is a faster and more accurate assessment."

While speaking with potential driver-partner candidates, Randell-Reilly's agents guide potential drivers through rigorous approval process. Deepgram's fast and accurate assessments of those conversations provides an optimized method for Randall-Reilly to gain a suitable comfort level concerning both the depth and effectiveness of its compliance efforts. Being able to quickly and reliably measure how well clients do at meeting both client and regulatory standards puts them miles ahead of other standard assessment methods. Deepgram is a crucial part of their process in streamlining both regulatory and client-mandated processes.

> "As a company we are very concerned that we are doing and saying what our clients want, and doing it in the most efficient manner. Deepgram helps us track that effort efficiently and speedily. We love working with Deepgram. They're crucial in our automated analysis of every recorded interview, and in our capacity to make sure that \\[our client's] needs are being met." \u2014Corbin McCabe, Randell-Reilly, General Manager

[Find out](https://deepgram.com/) how you can achieve what Randell-Reilly did.`, "html": '<p>Randall-Reilly is <em>the</em> recruiting powerhouse for fast growing companies. They utilize more than 30 web properties, an assortment of strategic media channels, and in-house high-tech call center campaigns to rapidly find, promote, and assist candidates through the recruiting and partnering processes of innovative companies. By engaging the services of Randall-Reilly, one of the largest ridesharing companies can scale their partnering process without losing focus on the important things - finding the right people.</p>\n<h2 id="challenge-discovering-that-unique-gem">Challenge: Discovering that Unique Gem</h2>\n<p>Finding the right people starts simply - often with a phone call. But when you handle an enormous amount of calls, you\u2019re faced with a massive challenge: sorting through millions of minutes of recorded audio in hopes of discovering a unique gem buried within complex and diverse conversations.</p>\n<p>Randell-Reilly analyzes millions of minutes of phone interviews in an effort to identify specific call characteristics consistent with the ridesharing company\u2019s quest to partner with high quality safe drivers.</p>\n<blockquote>\n<p>\u201CThey receive an enormous number of driver-partner applications per year. Analyzing their phone contact processes is key to finding amazing safe drivers. Working with Deepgram is the most effective way to do it.\u201D \u2014<em>Dennis Evanson, Head of Quality Assurance, Randall-Reilly</em></p>\n</blockquote>\n<h2 id="better-speech-processing-better-outcomes">Better Speech Processing, Better Outcomes</h2>\n<blockquote>\n<p>\u201CWe tried Google\u2019s Cloud Speech API and Nuance Dragon, and investigated several other products from companies including Amazon, Tethr, Prosodica and Zoom. Deepgram had the best accuracy and program by far.\u201D \u2014Brett Evanson, CTO, Randall-Reilly</p>\n</blockquote>\n<p>After facing inaccurate results produced by leading providers, and struggling through cumbersome process designs, Randall-Reilly turned to Deepgram. They found that <strong>last generation solutions simply couldn\u2019t offer the services, accuracy, design, or speed needed to review every single call</strong>. Deepgram\u2019s neural networks, however, easily provided the scale, speed, and accuracy that they required to programmatically analyze phone interviews.</p>\n<blockquote>\n<p>Before Deepgram, Randall-Reilly found that when it audited its speech-to-text query results from other vendors, only 80% of the search results produced confirmable matches. <mark><em>Using Deepgram they were able to increase audit-confirmed results to levels exceeding 95% accuracy.</em></mark></p>\n</blockquote>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-state-of-voice-2022" />\n<h2 id="faster-better-and-more-reliable-compliance">Faster, Better, and More Reliable Compliance</h2>\n<blockquote>\n<p>\u201CThe reason we went with Deepgram is because it\u2019s a way that we can touch and have some level of QA assessment on every single call. <strong>It gives us the ability to scale compliance operations without hiring a hundred people</strong>. We\u2019re able to get more comfortable with compliance in a more flexible and efficient manner; rather than wading through speech-to-text and its inherent inaccuracies, Deepgram\u2019s approach is a faster and more accurate assessment.\u201D</p>\n</blockquote>\n<p>While speaking with potential driver-partner candidates, Randell-Reilly\u2019s agents guide potential drivers through rigorous approval process. Deepgram\u2019s fast and accurate assessments of those conversations provides an optimized method for Randall-Reilly to gain a suitable comfort level concerning both the depth and effectiveness of its compliance efforts. Being able to quickly and reliably measure how well clients do at meeting both client and regulatory standards puts them miles ahead of other standard assessment methods. Deepgram is a crucial part of their process in streamlining both regulatory and client-mandated processes.</p>\n<blockquote>\n<p>\u201CAs a company we are very concerned that we are doing and saying what our clients want, and doing it in the most efficient manner. Deepgram helps us track that effort efficiently and speedily. We love working with Deepgram. They\u2019re crucial in our automated analysis of every recorded interview, and in our capacity to make sure that [our client\u2019s] needs are being met.\u201D \u2014Corbin McCabe, Randell-Reilly, General Manager</p>\n</blockquote>\n<p><a href="https://deepgram.com/">Find out</a> how you can achieve what Randell-Reilly did.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/customer-story-rideshare-smartrhino-deepgram/index.md" };
function rawContent() {
  return `Randall-Reilly is *the* recruiting powerhouse for fast growing companies. They utilize more than 30 web properties, an assortment of strategic media channels, and in-house high-tech call center campaigns to rapidly find, promote, and assist candidates through the recruiting and partnering processes of innovative companies. By engaging the services of Randall-Reilly, one of the largest ridesharing companies can scale their partnering process without losing focus on the important things - finding the right people.

## Challenge: Discovering that Unique Gem

Finding the right people starts simply - often with a phone call. But when you handle an enormous amount of calls, you're faced with a massive challenge: sorting through millions of minutes of recorded audio in hopes of discovering a unique gem buried within complex and diverse conversations.

Randell-Reilly analyzes millions of minutes of phone interviews in an effort to identify specific call characteristics consistent with the ridesharing company's quest to partner with high quality safe drivers.

> "They receive an enormous number of driver-partner applications per year. Analyzing their phone contact processes is key to finding amazing safe drivers. Working with Deepgram is the most effective way to do it." \u2014*Dennis Evanson, Head of Quality Assurance, Randall-Reilly*

## Better Speech Processing, Better Outcomes

> "We tried Google's Cloud Speech API and Nuance Dragon, and investigated several other products from companies including Amazon, Tethr, Prosodica and Zoom. Deepgram had the best accuracy and program by far." \u2014Brett Evanson, CTO, Randall-Reilly

After facing inaccurate results produced by leading providers, and struggling through cumbersome process designs, Randall-Reilly turned to Deepgram. They found that **last generation solutions simply couldn't offer the services, accuracy, design, or speed needed to review every single call**. Deepgram's neural networks, however, easily provided the scale, speed, and accuracy that they required to programmatically analyze phone interviews.

> Before Deepgram, Randall-Reilly found that when it audited its speech-to-text query results from other vendors, only 80% of the search results produced confirmable matches. <mark>*Using Deepgram they were able to increase audit-confirmed results to levels exceeding 95% accuracy.*</mark>

<WhitepaperPromo whitepaper="deepgram-whitepaper-state-of-voice-2022"></WhitepaperPromo>

## Faster, Better, and More Reliable Compliance

> "The reason we went with Deepgram is because it's a way that we can touch and have some level of QA assessment on every single call. **It gives us the ability to scale compliance operations without hiring a hundred people**. We're able to get more comfortable with compliance in a more flexible and efficient manner; rather than wading through speech-to-text and its inherent inaccuracies, Deepgram's approach is a faster and more accurate assessment."

While speaking with potential driver-partner candidates, Randell-Reilly's agents guide potential drivers through rigorous approval process. Deepgram's fast and accurate assessments of those conversations provides an optimized method for Randall-Reilly to gain a suitable comfort level concerning both the depth and effectiveness of its compliance efforts. Being able to quickly and reliably measure how well clients do at meeting both client and regulatory standards puts them miles ahead of other standard assessment methods. Deepgram is a crucial part of their process in streamlining both regulatory and client-mandated processes.

> "As a company we are very concerned that we are doing and saying what our clients want, and doing it in the most efficient manner. Deepgram helps us track that effort efficiently and speedily. We love working with Deepgram. They're crucial in our automated analysis of every recorded interview, and in our capacity to make sure that \\[our client's] needs are being met." \u2014Corbin McCabe, Randell-Reilly, General Manager

[Find out](https://deepgram.com/) how you can achieve what Randell-Reilly did.`;
}
function compiledContent() {
  return '<p>Randall-Reilly is <em>the</em> recruiting powerhouse for fast growing companies. They utilize more than 30 web properties, an assortment of strategic media channels, and in-house high-tech call center campaigns to rapidly find, promote, and assist candidates through the recruiting and partnering processes of innovative companies. By engaging the services of Randall-Reilly, one of the largest ridesharing companies can scale their partnering process without losing focus on the important things - finding the right people.</p>\n<h2 id="challenge-discovering-that-unique-gem">Challenge: Discovering that Unique Gem</h2>\n<p>Finding the right people starts simply - often with a phone call. But when you handle an enormous amount of calls, you\u2019re faced with a massive challenge: sorting through millions of minutes of recorded audio in hopes of discovering a unique gem buried within complex and diverse conversations.</p>\n<p>Randell-Reilly analyzes millions of minutes of phone interviews in an effort to identify specific call characteristics consistent with the ridesharing company\u2019s quest to partner with high quality safe drivers.</p>\n<blockquote>\n<p>\u201CThey receive an enormous number of driver-partner applications per year. Analyzing their phone contact processes is key to finding amazing safe drivers. Working with Deepgram is the most effective way to do it.\u201D \u2014<em>Dennis Evanson, Head of Quality Assurance, Randall-Reilly</em></p>\n</blockquote>\n<h2 id="better-speech-processing-better-outcomes">Better Speech Processing, Better Outcomes</h2>\n<blockquote>\n<p>\u201CWe tried Google\u2019s Cloud Speech API and Nuance Dragon, and investigated several other products from companies including Amazon, Tethr, Prosodica and Zoom. Deepgram had the best accuracy and program by far.\u201D \u2014Brett Evanson, CTO, Randall-Reilly</p>\n</blockquote>\n<p>After facing inaccurate results produced by leading providers, and struggling through cumbersome process designs, Randall-Reilly turned to Deepgram. They found that <strong>last generation solutions simply couldn\u2019t offer the services, accuracy, design, or speed needed to review every single call</strong>. Deepgram\u2019s neural networks, however, easily provided the scale, speed, and accuracy that they required to programmatically analyze phone interviews.</p>\n<blockquote>\n<p>Before Deepgram, Randall-Reilly found that when it audited its speech-to-text query results from other vendors, only 80% of the search results produced confirmable matches. <mark><em>Using Deepgram they were able to increase audit-confirmed results to levels exceeding 95% accuracy.</em></mark></p>\n</blockquote>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-state-of-voice-2022" />\n<h2 id="faster-better-and-more-reliable-compliance">Faster, Better, and More Reliable Compliance</h2>\n<blockquote>\n<p>\u201CThe reason we went with Deepgram is because it\u2019s a way that we can touch and have some level of QA assessment on every single call. <strong>It gives us the ability to scale compliance operations without hiring a hundred people</strong>. We\u2019re able to get more comfortable with compliance in a more flexible and efficient manner; rather than wading through speech-to-text and its inherent inaccuracies, Deepgram\u2019s approach is a faster and more accurate assessment.\u201D</p>\n</blockquote>\n<p>While speaking with potential driver-partner candidates, Randell-Reilly\u2019s agents guide potential drivers through rigorous approval process. Deepgram\u2019s fast and accurate assessments of those conversations provides an optimized method for Randall-Reilly to gain a suitable comfort level concerning both the depth and effectiveness of its compliance efforts. Being able to quickly and reliably measure how well clients do at meeting both client and regulatory standards puts them miles ahead of other standard assessment methods. Deepgram is a crucial part of their process in streamlining both regulatory and client-mandated processes.</p>\n<blockquote>\n<p>\u201CAs a company we are very concerned that we are doing and saying what our clients want, and doing it in the most efficient manner. Deepgram helps us track that effort efficiently and speedily. We love working with Deepgram. They\u2019re crucial in our automated analysis of every recorded interview, and in our capacity to make sure that [our client\u2019s] needs are being met.\u201D \u2014Corbin McCabe, Randell-Reilly, General Manager</p>\n</blockquote>\n<p><a href="https://deepgram.com/">Find out</a> how you can achieve what Randell-Reilly did.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/customer-story-rideshare-smartrhino-deepgram/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Randall-Reilly is <em>the</em> recruiting powerhouse for fast growing companies. They utilize more than 30 web properties, an assortment of strategic media channels, and in-house high-tech call center campaigns to rapidly find, promote, and assist candidates through the recruiting and partnering processes of innovative companies. By engaging the services of Randall-Reilly, one of the largest ridesharing companies can scale their partnering process without losing focus on the important things - finding the right people.</p>
<h2 id="challenge-discovering-that-unique-gem">Challenge: Discovering that Unique Gem</h2>
<p>Finding the right people starts simply - often with a phone call. But when you handle an enormous amount of calls, you’re faced with a massive challenge: sorting through millions of minutes of recorded audio in hopes of discovering a unique gem buried within complex and diverse conversations.</p>
<p>Randell-Reilly analyzes millions of minutes of phone interviews in an effort to identify specific call characteristics consistent with the ridesharing company’s quest to partner with high quality safe drivers.</p>
<blockquote>
<p>“They receive an enormous number of driver-partner applications per year. Analyzing their phone contact processes is key to finding amazing safe drivers. Working with Deepgram is the most effective way to do it.” —<em>Dennis Evanson, Head of Quality Assurance, Randall-Reilly</em></p>
</blockquote>
<h2 id="better-speech-processing-better-outcomes">Better Speech Processing, Better Outcomes</h2>
<blockquote>
<p>“We tried Google’s Cloud Speech API and Nuance Dragon, and investigated several other products from companies including Amazon, Tethr, Prosodica and Zoom. Deepgram had the best accuracy and program by far.” —Brett Evanson, CTO, Randall-Reilly</p>
</blockquote>
<p>After facing inaccurate results produced by leading providers, and struggling through cumbersome process designs, Randall-Reilly turned to Deepgram. They found that <strong>last generation solutions simply couldn’t offer the services, accuracy, design, or speed needed to review every single call</strong>. Deepgram’s neural networks, however, easily provided the scale, speed, and accuracy that they required to programmatically analyze phone interviews.</p>
<blockquote>
<p>Before Deepgram, Randall-Reilly found that when it audited its speech-to-text query results from other vendors, only 80% of the search results produced confirmable matches. <mark><em>Using Deepgram they were able to increase audit-confirmed results to levels exceeding 95% accuracy.</em></mark></p>
</blockquote>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-state-of-voice-2022" })}
<h2 id="faster-better-and-more-reliable-compliance">Faster, Better, and More Reliable Compliance</h2>
<blockquote>
<p>“The reason we went with Deepgram is because it’s a way that we can touch and have some level of QA assessment on every single call. <strong>It gives us the ability to scale compliance operations without hiring a hundred people</strong>. We’re able to get more comfortable with compliance in a more flexible and efficient manner; rather than wading through speech-to-text and its inherent inaccuracies, Deepgram’s approach is a faster and more accurate assessment.”</p>
</blockquote>
<p>While speaking with potential driver-partner candidates, Randell-Reilly’s agents guide potential drivers through rigorous approval process. Deepgram’s fast and accurate assessments of those conversations provides an optimized method for Randall-Reilly to gain a suitable comfort level concerning both the depth and effectiveness of its compliance efforts. Being able to quickly and reliably measure how well clients do at meeting both client and regulatory standards puts them miles ahead of other standard assessment methods. Deepgram is a crucial part of their process in streamlining both regulatory and client-mandated processes.</p>
<blockquote>
<p>“As a company we are very concerned that we are doing and saying what our clients want, and doing it in the most efficient manner. Deepgram helps us track that effort efficiently and speedily. We love working with Deepgram. They’re crucial in our automated analysis of every recorded interview, and in our capacity to make sure that [our client’s] needs are being met.” —Corbin McCabe, Randell-Reilly, General Manager</p>
</blockquote>
<p><a href="https://deepgram.com/">Find out</a> how you can achieve what Randell-Reilly did.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/customer-story-rideshare-smartrhino-deepgram/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
