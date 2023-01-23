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

const metadata = { "headings": [], "source": `Automatic Speech Recognition (ASR) is a powerful speech to text solution that can help you get the most out of your audio data. Want to know more? Enter [Automatic Speech Recognition: Past, Present, and Future](https://offers.deepgram.com/what-is-asr-ebook) ebook. A quick yet deep dive into ASR. You'll find out what ASR really is, why it is so important, how exactly it works, and where it's headed.

**What is ASR?** First, the [ebook](https://offers.deepgram.com/what-is-asr-ebook) explains what ASR stands for, and the powerful methods and goals hidden in those three deceptively simple words. It then highlights the difference between structured and unstructured data, and gives you insight into how ASR enables companies to **extract value from the 90% of unstructured data** that would otherwise languish un-researchable in storage.

**Why do you need it?** You might say, I don't deal with audio data.  But what would you gain if you could data mine this conversational data? We list eight revenue generating and cost saving benefits from implementing ASR, and show the almost unlimited potential for ASR to be an important part of your organizational strategy. In the [2021 State of ASR](https://deepgram.com/state-of-asr-report/)report by Opus Research, **over 85% or organizations say speech recognition is "important" or "very important" to future business strategy.**

**How do the three types of ASR work?** There are three types of ASR: the Traditional Method (or Tri-Gram Model,) The Hybrid Method (which adds neural networks and AI,) and the [End-to-End Deep Learning Method](https://f.hubspotusercontent00.net/hubfs/6890003/Whitepapers/Whitepaper%20How%20Deepgram%20Works%20-%20Aug%202020.pdf?__hstc=70535183.6e87c8bcb0b6e961cd8f3630ef1b0074.1606858477151.1609018533129.1609801437749.38&__hssc=&hsCtaTracking=60727426-f1f6-4ead-a813-3a53ba4335fe%7Cbf87d452-4ef3-49a9-8ce8-611a97830b70). The [ebook](https://offers.deepgram.com/what-is-asr-ebook) lays out clearly the pros and cons of each when it comes to extracting value from conversational data in a world of infinitely diverse voices. Once you understand the differences, pros and cons between these three types of ASR, you will understand why we feel End to End Deep Learning ASR is the best method now and for the future.

**What does the future hold?** Lastly, you will learn where we are on the path to a Unified ASR Solution: full language understanding. And how you can position yourself to be ready for the Unified ASR Solution. The use of ASR to extract value from unstructured data is a fresh and rich frontier, awaiting bold explorers. This [ebook](https://offers.deepgram.com/what-is-asr-ebook) is the map you need to start your journey to harvesting its untold, untapped resources.`, "html": '<p>Automatic Speech Recognition (ASR) is a powerful speech to text solution that can help you get the most out of your audio data. Want to know more? Enter <a href="https://offers.deepgram.com/what-is-asr-ebook">Automatic Speech Recognition: Past, Present, and Future</a> ebook. A quick yet deep dive into ASR. You\u2019ll find out what ASR really is, why it is so important, how exactly it works, and where it\u2019s headed.</p>\n<p><strong>What is ASR?</strong> First, the <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> explains what ASR stands for, and the powerful methods and goals hidden in those three deceptively simple words. It then highlights the difference between structured and unstructured data, and gives you insight into how ASR enables companies to <strong>extract value from the 90% of unstructured data</strong> that would otherwise languish un-researchable in storage.</p>\n<p><strong>Why do you need it?</strong> You might say, I don\u2019t deal with audio data.  But what would you gain if you could data mine this conversational data? We list eight revenue generating and cost saving benefits from implementing ASR, and show the almost unlimited potential for ASR to be an important part of your organizational strategy. In the <a href="https://deepgram.com/state-of-asr-report/">2021 State of ASR</a>report by Opus Research, <strong>over 85% or organizations say speech recognition is \u201Cimportant\u201D or \u201Cvery important\u201D to future business strategy.</strong></p>\n<p><strong>How do the three types of ASR work?</strong> There are three types of ASR: the Traditional Method (or Tri-Gram Model,) The Hybrid Method (which adds neural networks and AI,) and the <a href="https://f.hubspotusercontent00.net/hubfs/6890003/Whitepapers/Whitepaper%20How%20Deepgram%20Works%20-%20Aug%202020.pdf?__hstc=70535183.6e87c8bcb0b6e961cd8f3630ef1b0074.1606858477151.1609018533129.1609801437749.38&#x26;__hssc=&#x26;hsCtaTracking=60727426-f1f6-4ead-a813-3a53ba4335fe%7Cbf87d452-4ef3-49a9-8ce8-611a97830b70">End-to-End Deep Learning Method</a>. The <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> lays out clearly the pros and cons of each when it comes to extracting value from conversational data in a world of infinitely diverse voices. Once you understand the differences, pros and cons between these three types of ASR, you will understand why we feel End to End Deep Learning ASR is the best method now and for the future.</p>\n<p><strong>What does the future hold?</strong> Lastly, you will learn where we are on the path to a Unified ASR Solution: full language understanding. And how you can position yourself to be ready for the Unified ASR Solution. The use of ASR to extract value from unstructured data is a fresh and rich frontier, awaiting bold explorers. This <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> is the map you need to start your journey to harvesting its untold, untapped resources.</p>' };
const frontmatter = { "title": "What is Automatic Speech Recognition: Past, Present, and Future? ebook", "description": "Learn about automatic speech recognition (ASR), the 3 different methods out there and why End to End Deep Learning is the future.", "date": "2021-05-03T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981369/blog/what-is-automatic-speech-recognition-past-present-and-future-ebook/what-is-asr-ebook%402x.jpg", "authors": ["shae-burnette"], "category": "speech-trends", "tags": ["voice-tech"], "seo": { "title": "What is Automatic Speech Recognition: Past, Present, and Future? ebook", "description": "Learn about automatic speech recognition (ASR), the 3 different methods out there and why End to End Deep Learning is the future." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981369/blog/what-is-automatic-speech-recognition-past-present-and-future-ebook/what-is-asr-ebook%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/27dc32a", "twitter": "https://dpgr.am/3d6b9d1", "linkedin": "https://dpgr.am/7c49eac", "reddit": "https://dpgr.am/245db6c", "facebook": "https://dpgr.am/6a7a2e6" }, "astro": { "headings": [], "source": `Automatic Speech Recognition (ASR) is a powerful speech to text solution that can help you get the most out of your audio data. Want to know more? Enter [Automatic Speech Recognition: Past, Present, and Future](https://offers.deepgram.com/what-is-asr-ebook) ebook. A quick yet deep dive into ASR. You'll find out what ASR really is, why it is so important, how exactly it works, and where it's headed.

**What is ASR?** First, the [ebook](https://offers.deepgram.com/what-is-asr-ebook) explains what ASR stands for, and the powerful methods and goals hidden in those three deceptively simple words. It then highlights the difference between structured and unstructured data, and gives you insight into how ASR enables companies to **extract value from the 90% of unstructured data** that would otherwise languish un-researchable in storage.

**Why do you need it?** You might say, I don't deal with audio data.  But what would you gain if you could data mine this conversational data? We list eight revenue generating and cost saving benefits from implementing ASR, and show the almost unlimited potential for ASR to be an important part of your organizational strategy. In the [2021 State of ASR](https://deepgram.com/state-of-asr-report/)report by Opus Research, **over 85% or organizations say speech recognition is "important" or "very important" to future business strategy.**

**How do the three types of ASR work?** There are three types of ASR: the Traditional Method (or Tri-Gram Model,) The Hybrid Method (which adds neural networks and AI,) and the [End-to-End Deep Learning Method](https://f.hubspotusercontent00.net/hubfs/6890003/Whitepapers/Whitepaper%20How%20Deepgram%20Works%20-%20Aug%202020.pdf?__hstc=70535183.6e87c8bcb0b6e961cd8f3630ef1b0074.1606858477151.1609018533129.1609801437749.38&__hssc=&hsCtaTracking=60727426-f1f6-4ead-a813-3a53ba4335fe%7Cbf87d452-4ef3-49a9-8ce8-611a97830b70). The [ebook](https://offers.deepgram.com/what-is-asr-ebook) lays out clearly the pros and cons of each when it comes to extracting value from conversational data in a world of infinitely diverse voices. Once you understand the differences, pros and cons between these three types of ASR, you will understand why we feel End to End Deep Learning ASR is the best method now and for the future.

**What does the future hold?** Lastly, you will learn where we are on the path to a Unified ASR Solution: full language understanding. And how you can position yourself to be ready for the Unified ASR Solution. The use of ASR to extract value from unstructured data is a fresh and rich frontier, awaiting bold explorers. This [ebook](https://offers.deepgram.com/what-is-asr-ebook) is the map you need to start your journey to harvesting its untold, untapped resources.`, "html": '<p>Automatic Speech Recognition (ASR) is a powerful speech to text solution that can help you get the most out of your audio data. Want to know more? Enter <a href="https://offers.deepgram.com/what-is-asr-ebook">Automatic Speech Recognition: Past, Present, and Future</a> ebook. A quick yet deep dive into ASR. You\u2019ll find out what ASR really is, why it is so important, how exactly it works, and where it\u2019s headed.</p>\n<p><strong>What is ASR?</strong> First, the <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> explains what ASR stands for, and the powerful methods and goals hidden in those three deceptively simple words. It then highlights the difference between structured and unstructured data, and gives you insight into how ASR enables companies to <strong>extract value from the 90% of unstructured data</strong> that would otherwise languish un-researchable in storage.</p>\n<p><strong>Why do you need it?</strong> You might say, I don\u2019t deal with audio data.  But what would you gain if you could data mine this conversational data? We list eight revenue generating and cost saving benefits from implementing ASR, and show the almost unlimited potential for ASR to be an important part of your organizational strategy. In the <a href="https://deepgram.com/state-of-asr-report/">2021 State of ASR</a>report by Opus Research, <strong>over 85% or organizations say speech recognition is \u201Cimportant\u201D or \u201Cvery important\u201D to future business strategy.</strong></p>\n<p><strong>How do the three types of ASR work?</strong> There are three types of ASR: the Traditional Method (or Tri-Gram Model,) The Hybrid Method (which adds neural networks and AI,) and the <a href="https://f.hubspotusercontent00.net/hubfs/6890003/Whitepapers/Whitepaper%20How%20Deepgram%20Works%20-%20Aug%202020.pdf?__hstc=70535183.6e87c8bcb0b6e961cd8f3630ef1b0074.1606858477151.1609018533129.1609801437749.38&#x26;__hssc=&#x26;hsCtaTracking=60727426-f1f6-4ead-a813-3a53ba4335fe%7Cbf87d452-4ef3-49a9-8ce8-611a97830b70">End-to-End Deep Learning Method</a>. The <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> lays out clearly the pros and cons of each when it comes to extracting value from conversational data in a world of infinitely diverse voices. Once you understand the differences, pros and cons between these three types of ASR, you will understand why we feel End to End Deep Learning ASR is the best method now and for the future.</p>\n<p><strong>What does the future hold?</strong> Lastly, you will learn where we are on the path to a Unified ASR Solution: full language understanding. And how you can position yourself to be ready for the Unified ASR Solution. The use of ASR to extract value from unstructured data is a fresh and rich frontier, awaiting bold explorers. This <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> is the map you need to start your journey to harvesting its untold, untapped resources.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-automatic-speech-recognition-past-present-and-future-ebook/index.md" };
function rawContent() {
  return `Automatic Speech Recognition (ASR) is a powerful speech to text solution that can help you get the most out of your audio data. Want to know more? Enter [Automatic Speech Recognition: Past, Present, and Future](https://offers.deepgram.com/what-is-asr-ebook) ebook. A quick yet deep dive into ASR. You'll find out what ASR really is, why it is so important, how exactly it works, and where it's headed.

**What is ASR?** First, the [ebook](https://offers.deepgram.com/what-is-asr-ebook) explains what ASR stands for, and the powerful methods and goals hidden in those three deceptively simple words. It then highlights the difference between structured and unstructured data, and gives you insight into how ASR enables companies to **extract value from the 90% of unstructured data** that would otherwise languish un-researchable in storage.

**Why do you need it?** You might say, I don't deal with audio data.  But what would you gain if you could data mine this conversational data? We list eight revenue generating and cost saving benefits from implementing ASR, and show the almost unlimited potential for ASR to be an important part of your organizational strategy. In the [2021 State of ASR](https://deepgram.com/state-of-asr-report/)report by Opus Research, **over 85% or organizations say speech recognition is "important" or "very important" to future business strategy.**

**How do the three types of ASR work?** There are three types of ASR: the Traditional Method (or Tri-Gram Model,) The Hybrid Method (which adds neural networks and AI,) and the [End-to-End Deep Learning Method](https://f.hubspotusercontent00.net/hubfs/6890003/Whitepapers/Whitepaper%20How%20Deepgram%20Works%20-%20Aug%202020.pdf?__hstc=70535183.6e87c8bcb0b6e961cd8f3630ef1b0074.1606858477151.1609018533129.1609801437749.38&__hssc=&hsCtaTracking=60727426-f1f6-4ead-a813-3a53ba4335fe%7Cbf87d452-4ef3-49a9-8ce8-611a97830b70). The [ebook](https://offers.deepgram.com/what-is-asr-ebook) lays out clearly the pros and cons of each when it comes to extracting value from conversational data in a world of infinitely diverse voices. Once you understand the differences, pros and cons between these three types of ASR, you will understand why we feel End to End Deep Learning ASR is the best method now and for the future.

**What does the future hold?** Lastly, you will learn where we are on the path to a Unified ASR Solution: full language understanding. And how you can position yourself to be ready for the Unified ASR Solution. The use of ASR to extract value from unstructured data is a fresh and rich frontier, awaiting bold explorers. This [ebook](https://offers.deepgram.com/what-is-asr-ebook) is the map you need to start your journey to harvesting its untold, untapped resources.`;
}
function compiledContent() {
  return '<p>Automatic Speech Recognition (ASR) is a powerful speech to text solution that can help you get the most out of your audio data. Want to know more? Enter <a href="https://offers.deepgram.com/what-is-asr-ebook">Automatic Speech Recognition: Past, Present, and Future</a> ebook. A quick yet deep dive into ASR. You\u2019ll find out what ASR really is, why it is so important, how exactly it works, and where it\u2019s headed.</p>\n<p><strong>What is ASR?</strong> First, the <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> explains what ASR stands for, and the powerful methods and goals hidden in those three deceptively simple words. It then highlights the difference between structured and unstructured data, and gives you insight into how ASR enables companies to <strong>extract value from the 90% of unstructured data</strong> that would otherwise languish un-researchable in storage.</p>\n<p><strong>Why do you need it?</strong> You might say, I don\u2019t deal with audio data.  But what would you gain if you could data mine this conversational data? We list eight revenue generating and cost saving benefits from implementing ASR, and show the almost unlimited potential for ASR to be an important part of your organizational strategy. In the <a href="https://deepgram.com/state-of-asr-report/">2021 State of ASR</a>report by Opus Research, <strong>over 85% or organizations say speech recognition is \u201Cimportant\u201D or \u201Cvery important\u201D to future business strategy.</strong></p>\n<p><strong>How do the three types of ASR work?</strong> There are three types of ASR: the Traditional Method (or Tri-Gram Model,) The Hybrid Method (which adds neural networks and AI,) and the <a href="https://f.hubspotusercontent00.net/hubfs/6890003/Whitepapers/Whitepaper%20How%20Deepgram%20Works%20-%20Aug%202020.pdf?__hstc=70535183.6e87c8bcb0b6e961cd8f3630ef1b0074.1606858477151.1609018533129.1609801437749.38&#x26;__hssc=&#x26;hsCtaTracking=60727426-f1f6-4ead-a813-3a53ba4335fe%7Cbf87d452-4ef3-49a9-8ce8-611a97830b70">End-to-End Deep Learning Method</a>. The <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> lays out clearly the pros and cons of each when it comes to extracting value from conversational data in a world of infinitely diverse voices. Once you understand the differences, pros and cons between these three types of ASR, you will understand why we feel End to End Deep Learning ASR is the best method now and for the future.</p>\n<p><strong>What does the future hold?</strong> Lastly, you will learn where we are on the path to a Unified ASR Solution: full language understanding. And how you can position yourself to be ready for the Unified ASR Solution. The use of ASR to extract value from unstructured data is a fresh and rich frontier, awaiting bold explorers. This <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> is the map you need to start your journey to harvesting its untold, untapped resources.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-automatic-speech-recognition-past-present-and-future-ebook/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Automatic Speech Recognition (ASR) is a powerful speech to text solution that can help you get the most out of your audio data. Want to know more? Enter <a href="https://offers.deepgram.com/what-is-asr-ebook">Automatic Speech Recognition: Past, Present, and Future</a> ebook. A quick yet deep dive into ASR. You’ll find out what ASR really is, why it is so important, how exactly it works, and where it’s headed.</p>
<p><strong>What is ASR?</strong> First, the <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> explains what ASR stands for, and the powerful methods and goals hidden in those three deceptively simple words. It then highlights the difference between structured and unstructured data, and gives you insight into how ASR enables companies to <strong>extract value from the 90% of unstructured data</strong> that would otherwise languish un-researchable in storage.</p>
<p><strong>Why do you need it?</strong> You might say, I don’t deal with audio data.  But what would you gain if you could data mine this conversational data? We list eight revenue generating and cost saving benefits from implementing ASR, and show the almost unlimited potential for ASR to be an important part of your organizational strategy. In the <a href="https://deepgram.com/state-of-asr-report/">2021 State of ASR</a>report by Opus Research, <strong>over 85% or organizations say speech recognition is “important” or “very important” to future business strategy.</strong></p>
<p><strong>How do the three types of ASR work?</strong> There are three types of ASR: the Traditional Method (or Tri-Gram Model,) The Hybrid Method (which adds neural networks and AI,) and the <a href="https://f.hubspotusercontent00.net/hubfs/6890003/Whitepapers/Whitepaper%20How%20Deepgram%20Works%20-%20Aug%202020.pdf?__hstc=70535183.6e87c8bcb0b6e961cd8f3630ef1b0074.1606858477151.1609018533129.1609801437749.38&__hssc=&hsCtaTracking=60727426-f1f6-4ead-a813-3a53ba4335fe%7Cbf87d452-4ef3-49a9-8ce8-611a97830b70">End-to-End Deep Learning Method</a>. The <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> lays out clearly the pros and cons of each when it comes to extracting value from conversational data in a world of infinitely diverse voices. Once you understand the differences, pros and cons between these three types of ASR, you will understand why we feel End to End Deep Learning ASR is the best method now and for the future.</p>
<p><strong>What does the future hold?</strong> Lastly, you will learn where we are on the path to a Unified ASR Solution: full language understanding. And how you can position yourself to be ready for the Unified ASR Solution. The use of ASR to extract value from unstructured data is a fresh and rich frontier, awaiting bold explorers. This <a href="https://offers.deepgram.com/what-is-asr-ebook">ebook</a> is the map you need to start your journey to harvesting its untold, untapped resources.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-automatic-speech-recognition-past-present-and-future-ebook/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };