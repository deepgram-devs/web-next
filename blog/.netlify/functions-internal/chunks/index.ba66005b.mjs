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

const metadata = { "headings": [{ "depth": 2, "slug": "about-callbi-speech-analytics", "text": "About Callbi Speech Analytics" }, { "depth": 2, "slug": "about-deepgram", "text": "About Deepgram" }], "source": `[Callbi](https://callbi.io/), based in South Africa, has expanded the availability of speech analytics by offering an economical speech analytics solution for contact centers with from twenty agents to thousands of agents. Now they are expanding to the UK, US, Western Europe, and Australia, powered by Deepgram's highly accurate automatic speech recognition solution. Callbi will be able to take advantage of our [24 languages and dialects](https://deepgram.com/product/languages/) and our continuous improvements in accuracy and [feature enhancements](https://deepgram.com/product/speech-to-text-api-overview/). For speech analytics, accuracy is the key. Inaccurate audio transcriptions mean poor insights and outcomes.

Deepgram provides Callbi with the highest accuracy plus transcription speeds that allow contact centers to easily transcribe all their calls within the day for faster insights to make critical decisions. Cost has been a barrier to many smaller contact centers that want to implement speech analytics. With this partnership, we are lowering the cost of speech analytics, so large and small contact centers can achieve the benefits that were normally reserved for large enterprises. We both believe that access to new technology should be simple, fast, and easy. See how fast, accurate, and cost-effective, speech analytics can be with Callbi and Deepgram.

## **About Callbi Speech Analytics**

Callbi is a global, easy to use, cloud-based SaaS contact center speech analytics solution that dominates the South African market. Callbi is recorder agnostic and needs no API integration with call recorder platforms, enabling non-technical users to get started within hours rather than months. It is a low-cost, highly effective solution that enables contact centers to maximize revenue, improve efficiencies and effectiveness, to reduce costs and to mitigate business risks. Callbi is a member of [Alphawave Group](https://alphawave.co.za), with over 350 employees specializing in the development and deployment of leading-edge technologies used all over the world. Callbi is easy to deploy, easy to learn, and easy to drive fast ROI. For more information or to arrange a demonstration please visit https://callbi.io.

## **About Deepgram** 

Deepgram is the leader in scalable speech recognition. With our easy-to-use API, developers easily convert audio to text and build experiences that increase revenues and maximize employee productivity. Unlike previous generations, Deepgram has taken an entirely new approach to speech recognition, ditching brittle methods-heuristics-based speech processing- for an end-to-end deep learning AI architecture. With this patented approach, users can access the industry's fastest, most accurate and highly scalable AI technology with a simple API call. Deepgram takes the heavy lifting out of noisy, multi-speaker, hard-to-understand audio transcriptions, so companies can focus on what they do best.

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>`, "html": '<p><a href="https://callbi.io/">Callbi</a>, based in South Africa, has expanded the availability of speech analytics by offering an economical speech analytics solution for contact centers with from twenty agents to thousands of agents. Now they are expanding to the UK, US, Western Europe, and Australia, powered by Deepgram\u2019s highly accurate automatic speech recognition solution. Callbi will be able to take advantage of our <a href="https://deepgram.com/product/languages/">24 languages and dialects</a> and our continuous improvements in accuracy and <a href="https://deepgram.com/product/speech-to-text-api-overview/">feature enhancements</a>. For speech analytics, accuracy is the key. Inaccurate audio transcriptions mean poor insights and outcomes.</p>\n<p>Deepgram provides Callbi with the highest accuracy plus transcription speeds that allow contact centers to easily transcribe all their calls within the day for faster insights to make critical decisions. Cost has been a barrier to many smaller contact centers that want to implement speech analytics. With this partnership, we are lowering the cost of speech analytics, so large and small contact centers can achieve the benefits that were normally reserved for large enterprises. We both believe that access to new technology should be simple, fast, and easy. See how fast, accurate, and cost-effective, speech analytics can be with Callbi and Deepgram.</p>\n<h2 id="about-callbi-speech-analytics"><strong>About Callbi Speech Analytics</strong></h2>\n<p>Callbi is a global, easy to use, cloud-based SaaS contact center speech analytics solution that dominates the South African market. Callbi is recorder agnostic and needs no API integration with call recorder platforms, enabling non-technical users to get started within hours rather than months. It is a low-cost, highly effective solution that enables contact centers to maximize revenue, improve efficiencies and effectiveness, to reduce costs and to mitigate business risks. Callbi is a member of <a href="https://alphawave.co.za">Alphawave Group</a>, with over 350 employees specializing in the development and deployment of leading-edge technologies used all over the world. Callbi is easy to deploy, easy to learn, and easy to drive fast ROI. For more information or to arrange a demonstration please visit <a href="https://callbi.io">https://callbi.io</a>.</p>\n<h2 id="about-deepgram"><strong>About Deepgram</strong></h2>\n<p>Deepgram is the leader in scalable speech recognition. With our easy-to-use API, developers easily convert audio to text and build experiences that increase revenues and maximize employee productivity. Unlike previous generations, Deepgram has taken an entirely new approach to speech recognition, ditching brittle methods-heuristics-based speech processing- for an end-to-end deep learning AI architecture. With this patented approach, users can access the industry\u2019s fastest, most accurate and highly scalable AI technology with a simple API call. Deepgram takes the heavy lifting out of noisy, multi-speaker, hard-to-understand audio transcriptions, so companies can focus on what they do best.</p>\n<WhitepaperPromo whitepaper="latest" />' };
const frontmatter = { "title": "Democratizing Speech Analytics: Deepgram + Callbi", "description": "Callbi has partnered with Deepgram to provide speech analytics in call centers with thousands of agents around the world. Learn more.", "date": "2022-06-21T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981424/blog/democratizing-speech-analytics-deepgram-callbi/deepgram-callbi-thumb-554x220%402x.png", "authors": ["keith-lam"], "category": "dg-insider", "tags": ["contact-center"], "seo": { "title": "Democratizing Speech Analytics: Deepgram + Callbi", "description": "Callbi has partnered with Deepgram to provide speech analytics in call centers with thousands of agents around the world. Learn more." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981424/blog/democratizing-speech-analytics-deepgram-callbi/deepgram-callbi-thumb-554x220%402x.png" }, "shorturls": { "share": "https://dpgr.am/517f490", "twitter": "https://dpgr.am/e544cbc", "linkedin": "https://dpgr.am/95207e4", "reddit": "https://dpgr.am/ab7519b", "facebook": "https://dpgr.am/1487945" }, "astro": { "headings": [{ "depth": 2, "slug": "about-callbi-speech-analytics", "text": "About Callbi Speech Analytics" }, { "depth": 2, "slug": "about-deepgram", "text": "About Deepgram" }], "source": `[Callbi](https://callbi.io/), based in South Africa, has expanded the availability of speech analytics by offering an economical speech analytics solution for contact centers with from twenty agents to thousands of agents. Now they are expanding to the UK, US, Western Europe, and Australia, powered by Deepgram's highly accurate automatic speech recognition solution. Callbi will be able to take advantage of our [24 languages and dialects](https://deepgram.com/product/languages/) and our continuous improvements in accuracy and [feature enhancements](https://deepgram.com/product/speech-to-text-api-overview/). For speech analytics, accuracy is the key. Inaccurate audio transcriptions mean poor insights and outcomes.

Deepgram provides Callbi with the highest accuracy plus transcription speeds that allow contact centers to easily transcribe all their calls within the day for faster insights to make critical decisions. Cost has been a barrier to many smaller contact centers that want to implement speech analytics. With this partnership, we are lowering the cost of speech analytics, so large and small contact centers can achieve the benefits that were normally reserved for large enterprises. We both believe that access to new technology should be simple, fast, and easy. See how fast, accurate, and cost-effective, speech analytics can be with Callbi and Deepgram.

## **About Callbi Speech Analytics**

Callbi is a global, easy to use, cloud-based SaaS contact center speech analytics solution that dominates the South African market. Callbi is recorder agnostic and needs no API integration with call recorder platforms, enabling non-technical users to get started within hours rather than months. It is a low-cost, highly effective solution that enables contact centers to maximize revenue, improve efficiencies and effectiveness, to reduce costs and to mitigate business risks. Callbi is a member of [Alphawave Group](https://alphawave.co.za), with over 350 employees specializing in the development and deployment of leading-edge technologies used all over the world. Callbi is easy to deploy, easy to learn, and easy to drive fast ROI. For more information or to arrange a demonstration please visit https://callbi.io.

## **About Deepgram** 

Deepgram is the leader in scalable speech recognition. With our easy-to-use API, developers easily convert audio to text and build experiences that increase revenues and maximize employee productivity. Unlike previous generations, Deepgram has taken an entirely new approach to speech recognition, ditching brittle methods-heuristics-based speech processing- for an end-to-end deep learning AI architecture. With this patented approach, users can access the industry's fastest, most accurate and highly scalable AI technology with a simple API call. Deepgram takes the heavy lifting out of noisy, multi-speaker, hard-to-understand audio transcriptions, so companies can focus on what they do best.

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>`, "html": '<p><a href="https://callbi.io/">Callbi</a>, based in South Africa, has expanded the availability of speech analytics by offering an economical speech analytics solution for contact centers with from twenty agents to thousands of agents. Now they are expanding to the UK, US, Western Europe, and Australia, powered by Deepgram\u2019s highly accurate automatic speech recognition solution. Callbi will be able to take advantage of our <a href="https://deepgram.com/product/languages/">24 languages and dialects</a> and our continuous improvements in accuracy and <a href="https://deepgram.com/product/speech-to-text-api-overview/">feature enhancements</a>. For speech analytics, accuracy is the key. Inaccurate audio transcriptions mean poor insights and outcomes.</p>\n<p>Deepgram provides Callbi with the highest accuracy plus transcription speeds that allow contact centers to easily transcribe all their calls within the day for faster insights to make critical decisions. Cost has been a barrier to many smaller contact centers that want to implement speech analytics. With this partnership, we are lowering the cost of speech analytics, so large and small contact centers can achieve the benefits that were normally reserved for large enterprises. We both believe that access to new technology should be simple, fast, and easy. See how fast, accurate, and cost-effective, speech analytics can be with Callbi and Deepgram.</p>\n<h2 id="about-callbi-speech-analytics"><strong>About Callbi Speech Analytics</strong></h2>\n<p>Callbi is a global, easy to use, cloud-based SaaS contact center speech analytics solution that dominates the South African market. Callbi is recorder agnostic and needs no API integration with call recorder platforms, enabling non-technical users to get started within hours rather than months. It is a low-cost, highly effective solution that enables contact centers to maximize revenue, improve efficiencies and effectiveness, to reduce costs and to mitigate business risks. Callbi is a member of <a href="https://alphawave.co.za">Alphawave Group</a>, with over 350 employees specializing in the development and deployment of leading-edge technologies used all over the world. Callbi is easy to deploy, easy to learn, and easy to drive fast ROI. For more information or to arrange a demonstration please visit <a href="https://callbi.io">https://callbi.io</a>.</p>\n<h2 id="about-deepgram"><strong>About Deepgram</strong></h2>\n<p>Deepgram is the leader in scalable speech recognition. With our easy-to-use API, developers easily convert audio to text and build experiences that increase revenues and maximize employee productivity. Unlike previous generations, Deepgram has taken an entirely new approach to speech recognition, ditching brittle methods-heuristics-based speech processing- for an end-to-end deep learning AI architecture. With this patented approach, users can access the industry\u2019s fastest, most accurate and highly scalable AI technology with a simple API call. Deepgram takes the heavy lifting out of noisy, multi-speaker, hard-to-understand audio transcriptions, so companies can focus on what they do best.</p>\n<WhitepaperPromo whitepaper="latest" />' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/democratizing-speech-analytics-deepgram-callbi/index.md" };
function rawContent() {
  return `[Callbi](https://callbi.io/), based in South Africa, has expanded the availability of speech analytics by offering an economical speech analytics solution for contact centers with from twenty agents to thousands of agents. Now they are expanding to the UK, US, Western Europe, and Australia, powered by Deepgram's highly accurate automatic speech recognition solution. Callbi will be able to take advantage of our [24 languages and dialects](https://deepgram.com/product/languages/) and our continuous improvements in accuracy and [feature enhancements](https://deepgram.com/product/speech-to-text-api-overview/). For speech analytics, accuracy is the key. Inaccurate audio transcriptions mean poor insights and outcomes.

Deepgram provides Callbi with the highest accuracy plus transcription speeds that allow contact centers to easily transcribe all their calls within the day for faster insights to make critical decisions. Cost has been a barrier to many smaller contact centers that want to implement speech analytics. With this partnership, we are lowering the cost of speech analytics, so large and small contact centers can achieve the benefits that were normally reserved for large enterprises. We both believe that access to new technology should be simple, fast, and easy. See how fast, accurate, and cost-effective, speech analytics can be with Callbi and Deepgram.

## **About Callbi Speech Analytics**

Callbi is a global, easy to use, cloud-based SaaS contact center speech analytics solution that dominates the South African market. Callbi is recorder agnostic and needs no API integration with call recorder platforms, enabling non-technical users to get started within hours rather than months. It is a low-cost, highly effective solution that enables contact centers to maximize revenue, improve efficiencies and effectiveness, to reduce costs and to mitigate business risks. Callbi is a member of [Alphawave Group](https://alphawave.co.za), with over 350 employees specializing in the development and deployment of leading-edge technologies used all over the world. Callbi is easy to deploy, easy to learn, and easy to drive fast ROI. For more information or to arrange a demonstration please visit https://callbi.io.

## **About Deepgram** 

Deepgram is the leader in scalable speech recognition. With our easy-to-use API, developers easily convert audio to text and build experiences that increase revenues and maximize employee productivity. Unlike previous generations, Deepgram has taken an entirely new approach to speech recognition, ditching brittle methods-heuristics-based speech processing- for an end-to-end deep learning AI architecture. With this patented approach, users can access the industry's fastest, most accurate and highly scalable AI technology with a simple API call. Deepgram takes the heavy lifting out of noisy, multi-speaker, hard-to-understand audio transcriptions, so companies can focus on what they do best.

<WhitepaperPromo whitepaper="latest"></WhitepaperPromo>`;
}
function compiledContent() {
  return '<p><a href="https://callbi.io/">Callbi</a>, based in South Africa, has expanded the availability of speech analytics by offering an economical speech analytics solution for contact centers with from twenty agents to thousands of agents. Now they are expanding to the UK, US, Western Europe, and Australia, powered by Deepgram\u2019s highly accurate automatic speech recognition solution. Callbi will be able to take advantage of our <a href="https://deepgram.com/product/languages/">24 languages and dialects</a> and our continuous improvements in accuracy and <a href="https://deepgram.com/product/speech-to-text-api-overview/">feature enhancements</a>. For speech analytics, accuracy is the key. Inaccurate audio transcriptions mean poor insights and outcomes.</p>\n<p>Deepgram provides Callbi with the highest accuracy plus transcription speeds that allow contact centers to easily transcribe all their calls within the day for faster insights to make critical decisions. Cost has been a barrier to many smaller contact centers that want to implement speech analytics. With this partnership, we are lowering the cost of speech analytics, so large and small contact centers can achieve the benefits that were normally reserved for large enterprises. We both believe that access to new technology should be simple, fast, and easy. See how fast, accurate, and cost-effective, speech analytics can be with Callbi and Deepgram.</p>\n<h2 id="about-callbi-speech-analytics"><strong>About Callbi Speech Analytics</strong></h2>\n<p>Callbi is a global, easy to use, cloud-based SaaS contact center speech analytics solution that dominates the South African market. Callbi is recorder agnostic and needs no API integration with call recorder platforms, enabling non-technical users to get started within hours rather than months. It is a low-cost, highly effective solution that enables contact centers to maximize revenue, improve efficiencies and effectiveness, to reduce costs and to mitigate business risks. Callbi is a member of <a href="https://alphawave.co.za">Alphawave Group</a>, with over 350 employees specializing in the development and deployment of leading-edge technologies used all over the world. Callbi is easy to deploy, easy to learn, and easy to drive fast ROI. For more information or to arrange a demonstration please visit <a href="https://callbi.io">https://callbi.io</a>.</p>\n<h2 id="about-deepgram"><strong>About Deepgram</strong></h2>\n<p>Deepgram is the leader in scalable speech recognition. With our easy-to-use API, developers easily convert audio to text and build experiences that increase revenues and maximize employee productivity. Unlike previous generations, Deepgram has taken an entirely new approach to speech recognition, ditching brittle methods-heuristics-based speech processing- for an end-to-end deep learning AI architecture. With this patented approach, users can access the industry\u2019s fastest, most accurate and highly scalable AI technology with a simple API call. Deepgram takes the heavy lifting out of noisy, multi-speaker, hard-to-understand audio transcriptions, so companies can focus on what they do best.</p>\n<WhitepaperPromo whitepaper="latest" />';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/democratizing-speech-analytics-deepgram-callbi/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p><a href="https://callbi.io/">Callbi</a>, based in South Africa, has expanded the availability of speech analytics by offering an economical speech analytics solution for contact centers with from twenty agents to thousands of agents. Now they are expanding to the UK, US, Western Europe, and Australia, powered by Deepgram’s highly accurate automatic speech recognition solution. Callbi will be able to take advantage of our <a href="https://deepgram.com/product/languages/">24 languages and dialects</a> and our continuous improvements in accuracy and <a href="https://deepgram.com/product/speech-to-text-api-overview/">feature enhancements</a>. For speech analytics, accuracy is the key. Inaccurate audio transcriptions mean poor insights and outcomes.</p>
<p>Deepgram provides Callbi with the highest accuracy plus transcription speeds that allow contact centers to easily transcribe all their calls within the day for faster insights to make critical decisions. Cost has been a barrier to many smaller contact centers that want to implement speech analytics. With this partnership, we are lowering the cost of speech analytics, so large and small contact centers can achieve the benefits that were normally reserved for large enterprises. We both believe that access to new technology should be simple, fast, and easy. See how fast, accurate, and cost-effective, speech analytics can be with Callbi and Deepgram.</p>
<h2 id="about-callbi-speech-analytics"><strong>About Callbi Speech Analytics</strong></h2>
<p>Callbi is a global, easy to use, cloud-based SaaS contact center speech analytics solution that dominates the South African market. Callbi is recorder agnostic and needs no API integration with call recorder platforms, enabling non-technical users to get started within hours rather than months. It is a low-cost, highly effective solution that enables contact centers to maximize revenue, improve efficiencies and effectiveness, to reduce costs and to mitigate business risks. Callbi is a member of <a href="https://alphawave.co.za">Alphawave Group</a>, with over 350 employees specializing in the development and deployment of leading-edge technologies used all over the world. Callbi is easy to deploy, easy to learn, and easy to drive fast ROI. For more information or to arrange a demonstration please visit <a href="https://callbi.io">https://callbi.io</a>.</p>
<h2 id="about-deepgram"><strong>About Deepgram</strong></h2>
<p>Deepgram is the leader in scalable speech recognition. With our easy-to-use API, developers easily convert audio to text and build experiences that increase revenues and maximize employee productivity. Unlike previous generations, Deepgram has taken an entirely new approach to speech recognition, ditching brittle methods-heuristics-based speech processing- for an end-to-end deep learning AI architecture. With this patented approach, users can access the industry’s fastest, most accurate and highly scalable AI technology with a simple API call. Deepgram takes the heavy lifting out of noisy, multi-speaker, hard-to-understand audio transcriptions, so companies can focus on what they do best.</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "latest" })}`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/democratizing-speech-analytics-deepgram-callbi/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
