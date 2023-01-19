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
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [], "source": `\r
Today, we're happy to announce a strategic investment and technology development agreement with [In-Q-Tel](https://www.iqt.org/) (IQT). IQT is a non-profit, strategic investor that helps accelerate the development and delivery of cutting-edge technologies to U.S. government agencies. Established in 1999, IQT has the goal of identifying and partnering with startups that are developing innovative technologies that can better protect and preserve the United States' security. We're proud to partner with IQT to bring Deepgram's automatic speech recognition technology to our nation's government agencies. Our agreement with IQT will allow their government partners to securely utilize our end-to-end deep learning-based platform for efficient and accurate speech recognition and transcription. "Deepgram's use of an AI enabled, neural network architecture leveraging custom speech recognition models trained on vast amounts of audio data allows them to rapidly achieve much more accurate transcriptions for non-standard audio environments vs solutions like Google Voice and Apple Siri", offered George Hoyem, Managing Partner, Investments, IQT. "Using state of the art transfer learning also enables Deepgram to quickly build speech to text capabilities for new and novel language variants on relatively small amounts of training data, resulting in huge time savings for our government partners." We are excited to be a part of the IQT portfolio and are looking forward to expanding our relationship with the organization and its government partners.\r
`, "html": '<p>Today, we\u2019re happy to announce a strategic investment and technology development agreement with <a href="https://www.iqt.org/">In-Q-Tel</a> (IQT). IQT is a non-profit, strategic investor that helps accelerate the development and delivery of cutting-edge technologies to U.S. government agencies. Established in 1999, IQT has the goal of identifying and partnering with startups that are developing innovative technologies that can better protect and preserve the United States\u2019 security. We\u2019re proud to partner with IQT to bring Deepgram\u2019s automatic speech recognition technology to our nation\u2019s government agencies. Our agreement with IQT will allow their government partners to securely utilize our end-to-end deep learning-based platform for efficient and accurate speech recognition and transcription. \u201CDeepgram\u2019s use of an AI enabled, neural network architecture leveraging custom speech recognition models trained on vast amounts of audio data allows them to rapidly achieve much more accurate transcriptions for non-standard audio environments vs solutions like Google Voice and Apple Siri\u201D, offered George Hoyem, Managing Partner, Investments, IQT. \u201CUsing state of the art transfer learning also enables Deepgram to quickly build speech to text capabilities for new and novel language variants on relatively small amounts of training data, resulting in huge time savings for our government partners.\u201D We are excited to be a part of the IQT portfolio and are looking forward to expanding our relationship with the organization and its government partners.</p>' };
const frontmatter = { "title": "Deepgram Enters Strategic Investment Agreement with In-Q-Tel", "description": "Announcing a strategic investment and technology development agreement with In-Q-Tel (IQT).", "date": "2020-06-04T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981353/blog/deepgram-enters-strategic-investment-agreement-with-in-q-tel-2/dg-enters-strategic-investment-w-inqtel%402x.jpg", "authors": ["scott-stephenson"], "category": "dg-insider", "tags": ["voice-tech", "voice-strategy"], "seo": { "title": "Deepgram Enters Strategic Investment Agreement with In-Q-Tel", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981353/blog/deepgram-enters-strategic-investment-agreement-with-in-q-tel-2/dg-enters-strategic-investment-w-inqtel%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/f0d45a9", "twitter": "https://dpgr.am/accb5cd", "linkedin": "https://dpgr.am/1333969", "reddit": "https://dpgr.am/0450c97", "facebook": "https://dpgr.am/87dcf92" }, "astro": { "headings": [], "source": `\r
Today, we're happy to announce a strategic investment and technology development agreement with [In-Q-Tel](https://www.iqt.org/) (IQT). IQT is a non-profit, strategic investor that helps accelerate the development and delivery of cutting-edge technologies to U.S. government agencies. Established in 1999, IQT has the goal of identifying and partnering with startups that are developing innovative technologies that can better protect and preserve the United States' security. We're proud to partner with IQT to bring Deepgram's automatic speech recognition technology to our nation's government agencies. Our agreement with IQT will allow their government partners to securely utilize our end-to-end deep learning-based platform for efficient and accurate speech recognition and transcription. "Deepgram's use of an AI enabled, neural network architecture leveraging custom speech recognition models trained on vast amounts of audio data allows them to rapidly achieve much more accurate transcriptions for non-standard audio environments vs solutions like Google Voice and Apple Siri", offered George Hoyem, Managing Partner, Investments, IQT. "Using state of the art transfer learning also enables Deepgram to quickly build speech to text capabilities for new and novel language variants on relatively small amounts of training data, resulting in huge time savings for our government partners." We are excited to be a part of the IQT portfolio and are looking forward to expanding our relationship with the organization and its government partners.\r
`, "html": '<p>Today, we\u2019re happy to announce a strategic investment and technology development agreement with <a href="https://www.iqt.org/">In-Q-Tel</a> (IQT). IQT is a non-profit, strategic investor that helps accelerate the development and delivery of cutting-edge technologies to U.S. government agencies. Established in 1999, IQT has the goal of identifying and partnering with startups that are developing innovative technologies that can better protect and preserve the United States\u2019 security. We\u2019re proud to partner with IQT to bring Deepgram\u2019s automatic speech recognition technology to our nation\u2019s government agencies. Our agreement with IQT will allow their government partners to securely utilize our end-to-end deep learning-based platform for efficient and accurate speech recognition and transcription. \u201CDeepgram\u2019s use of an AI enabled, neural network architecture leveraging custom speech recognition models trained on vast amounts of audio data allows them to rapidly achieve much more accurate transcriptions for non-standard audio environments vs solutions like Google Voice and Apple Siri\u201D, offered George Hoyem, Managing Partner, Investments, IQT. \u201CUsing state of the art transfer learning also enables Deepgram to quickly build speech to text capabilities for new and novel language variants on relatively small amounts of training data, resulting in huge time savings for our government partners.\u201D We are excited to be a part of the IQT portfolio and are looking forward to expanding our relationship with the organization and its government partners.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-enters-strategic-investment-agreement-with-in-q-tel-2/index.md" };
function rawContent() {
  return `\r
Today, we're happy to announce a strategic investment and technology development agreement with [In-Q-Tel](https://www.iqt.org/) (IQT). IQT is a non-profit, strategic investor that helps accelerate the development and delivery of cutting-edge technologies to U.S. government agencies. Established in 1999, IQT has the goal of identifying and partnering with startups that are developing innovative technologies that can better protect and preserve the United States' security. We're proud to partner with IQT to bring Deepgram's automatic speech recognition technology to our nation's government agencies. Our agreement with IQT will allow their government partners to securely utilize our end-to-end deep learning-based platform for efficient and accurate speech recognition and transcription. "Deepgram's use of an AI enabled, neural network architecture leveraging custom speech recognition models trained on vast amounts of audio data allows them to rapidly achieve much more accurate transcriptions for non-standard audio environments vs solutions like Google Voice and Apple Siri", offered George Hoyem, Managing Partner, Investments, IQT. "Using state of the art transfer learning also enables Deepgram to quickly build speech to text capabilities for new and novel language variants on relatively small amounts of training data, resulting in huge time savings for our government partners." We are excited to be a part of the IQT portfolio and are looking forward to expanding our relationship with the organization and its government partners.\r
`;
}
function compiledContent() {
  return '<p>Today, we\u2019re happy to announce a strategic investment and technology development agreement with <a href="https://www.iqt.org/">In-Q-Tel</a> (IQT). IQT is a non-profit, strategic investor that helps accelerate the development and delivery of cutting-edge technologies to U.S. government agencies. Established in 1999, IQT has the goal of identifying and partnering with startups that are developing innovative technologies that can better protect and preserve the United States\u2019 security. We\u2019re proud to partner with IQT to bring Deepgram\u2019s automatic speech recognition technology to our nation\u2019s government agencies. Our agreement with IQT will allow their government partners to securely utilize our end-to-end deep learning-based platform for efficient and accurate speech recognition and transcription. \u201CDeepgram\u2019s use of an AI enabled, neural network architecture leveraging custom speech recognition models trained on vast amounts of audio data allows them to rapidly achieve much more accurate transcriptions for non-standard audio environments vs solutions like Google Voice and Apple Siri\u201D, offered George Hoyem, Managing Partner, Investments, IQT. \u201CUsing state of the art transfer learning also enables Deepgram to quickly build speech to text capabilities for new and novel language variants on relatively small amounts of training data, resulting in huge time savings for our government partners.\u201D We are excited to be a part of the IQT portfolio and are looking forward to expanding our relationship with the organization and its government partners.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-enters-strategic-investment-agreement-with-in-q-tel-2/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Today, we’re happy to announce a strategic investment and technology development agreement with <a href="https://www.iqt.org/">In-Q-Tel</a> (IQT). IQT is a non-profit, strategic investor that helps accelerate the development and delivery of cutting-edge technologies to U.S. government agencies. Established in 1999, IQT has the goal of identifying and partnering with startups that are developing innovative technologies that can better protect and preserve the United States’ security. We’re proud to partner with IQT to bring Deepgram’s automatic speech recognition technology to our nation’s government agencies. Our agreement with IQT will allow their government partners to securely utilize our end-to-end deep learning-based platform for efficient and accurate speech recognition and transcription. “Deepgram’s use of an AI enabled, neural network architecture leveraging custom speech recognition models trained on vast amounts of audio data allows them to rapidly achieve much more accurate transcriptions for non-standard audio environments vs solutions like Google Voice and Apple Siri”, offered George Hoyem, Managing Partner, Investments, IQT. “Using state of the art transfer learning also enables Deepgram to quickly build speech to text capabilities for new and novel language variants on relatively small amounts of training data, resulting in huge time savings for our government partners.” We are excited to be a part of the IQT portfolio and are looking forward to expanding our relationship with the organization and its government partners.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-enters-strategic-investment-agreement-with-in-q-tel-2/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
