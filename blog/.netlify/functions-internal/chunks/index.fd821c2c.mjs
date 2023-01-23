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

const metadata = { "headings": [{ "depth": 2, "slug": "why-buy-nuance-hello-healthcare--upsell-potential", "text": "Why Buy Nuance? Hello Healthcare & Upsell potential." }, { "depth": 2, "slug": "what-product-leaders-of-voice-enabled-applications-need-to-know-about-the-microsoft-acquisition-of-nuance", "text": "What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance" }, { "depth": 2, "slug": "impact-to-the-broader-asr-market", "text": "Impact to the Broader ASR Market" }], "source": "\r\nMicrosoft's offer to purchase Nuance Communications for $19.7B validates Automatic Speech Recognition (ASR) has become an essential technology for business. It's exciting to see an AI powerhouse like Microsoft, which has amazing talent and tools in house, finding extreme value in acquiring speech solutions at this scale. Overall, this acquisition is a great sign for AI companies like Deepgram and the Speech Recognition industry. \r\n\r\n## **Why Buy Nuance? Hello Healthcare & Upsell potential.**\r\n\r\nMicrosoft has provided their own Speech To Text (STT) solution for years, however due to [difficulty of using the service](https://www.techradar.com/reviews/microsoft-azure-speech-to-text-review), lack of scale, and preference for working well with its own hardware and software solutions (Cortana, Bing and the Teams communication app), it has not gained substantial traction beyond their ecosystem. Nuance on the contrary is the leader in the medical transcription market which was estimated to be 1.32B in 2019 and [expected to grow to 4.89B by 2027](https://www.fortunebusinessinsights.com/industry-reports/medical-transcription-software-market-101572).  With the acquisition of Nuance, Microsoft immediately expands their STT reach into the healthcare community, and also opens up the possibility of expanding their Azure cloud storage revenues, as stored audio files are not small.\r\n\r\n## **What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance**\r\n\r\nWhile this acquisition will benefit Microsoft, the core architecture of STT does not have a high likelihood of improving. Microsoft and Nuance STT are both based on the same [legacy tri-gram model](https://deepgram.com/product/overview/) so neither architecture will dramatically change, but perhaps have incremental improvements. There will also be challenges for these two companies to integrate the artifacts for two speech processing pipelines as they have different libraries, acoustic models, language lexicons, style guides, etc. As a comparison, Deepgram built our speech recognition solution from scratch using a completely different architecture. Deepgram uses an end to end Deep Learning Neural Network, which in simple terms means we perform audio to text transcription in one AI-enabled step and we can continually improve our accuracy. Due to our architectural differences, Deepgram customers do not have to compromise accuracy vs. speed, speed vs. costs or cost vs. scalability.\r\n\r\n## **Impact to the Broader ASR Market**\r\n\r\nSo what does this do to the broader speech market? It elevates the conversation around Speech Recognition to higher levels within the organization. Businesses will be looking to see why ASR is a growth strategy for Microsoft and consider it as an important technology strategy to gather customer insights, improve employee engagement and accelerate their growth.  This acquisition also shows that ASR and voice technology growth is not only for consumer needs (Siri, Alexa, Cortana) but an important aspect of business needs. The recent report from Opus Research [2021 State of Speech Report](https://deepgram.com/state-of-asr-report/) validates the strategic importance of ASR and voice technology for businesses. Microsoft's acquisition of Nuance is just the tip of the iceberg, as speech recognition is more pervasive and extends beyond the patient experience to the customer and employee experience. We always believed that ASR is going to change the world and that every company will need speech recognition to get closer to their customers, find new insights for products and services, and better personalize their customer experiences. The best is yet to come.\r\n", "html": '<p>Microsoft\u2019s offer to purchase Nuance Communications for $19.7B validates Automatic Speech Recognition (ASR) has become an essential technology for business. It\u2019s exciting to see an AI powerhouse like Microsoft, which has amazing talent and tools in house, finding extreme value in acquiring speech solutions at this scale. Overall, this acquisition is a great sign for AI companies like Deepgram and the Speech Recognition industry.</p>\n<h2 id="why-buy-nuance-hello-healthcare--upsell-potential"><strong>Why Buy Nuance? Hello Healthcare & Upsell potential.</strong></h2>\n<p>Microsoft has provided their own Speech To Text (STT) solution for years, however due to <a href="https://www.techradar.com/reviews/microsoft-azure-speech-to-text-review">difficulty of using the service</a>, lack of scale, and preference for working well with its own hardware and software solutions (Cortana, Bing and the Teams communication app), it has not gained substantial traction beyond their ecosystem. Nuance on the contrary is the leader in the medical transcription market which was estimated to be 1.32B in 2019 and <a href="https://www.fortunebusinessinsights.com/industry-reports/medical-transcription-software-market-101572">expected to grow to 4.89B by 2027</a>.  With the acquisition of Nuance, Microsoft immediately expands their STT reach into the healthcare community, and also opens up the possibility of expanding their Azure cloud storage revenues, as stored audio files are not small.</p>\n<h2 id="what-product-leaders-of-voice-enabled-applications-need-to-know-about-the-microsoft-acquisition-of-nuance"><strong>What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance</strong></h2>\n<p>While this acquisition will benefit Microsoft, the core architecture of STT does not have a high likelihood of improving. Microsoft and Nuance STT are both based on the same <a href="https://deepgram.com/product/overview/">legacy tri-gram model</a> so neither architecture will dramatically change, but perhaps have incremental improvements. There will also be challenges for these two companies to integrate the artifacts for two speech processing pipelines as they have different libraries, acoustic models, language lexicons, style guides, etc. As a comparison, Deepgram built our speech recognition solution from scratch using a completely different architecture. Deepgram uses an end to end Deep Learning Neural Network, which in simple terms means we perform audio to text transcription in one AI-enabled step and we can continually improve our accuracy. Due to our architectural differences, Deepgram customers do not have to compromise accuracy vs. speed, speed vs. costs or cost vs. scalability.</p>\n<h2 id="impact-to-the-broader-asr-market"><strong>Impact to the Broader ASR Market</strong></h2>\n<p>So what does this do to the broader speech market? It elevates the conversation around Speech Recognition to higher levels within the organization. Businesses will be looking to see why ASR is a growth strategy for Microsoft and consider it as an important technology strategy to gather customer insights, improve employee engagement and accelerate their growth.  This acquisition also shows that ASR and voice technology growth is not only for consumer needs (Siri, Alexa, Cortana) but an important aspect of business needs. The recent report from Opus Research <a href="https://deepgram.com/state-of-asr-report/">2021 State of Speech Report</a> validates the strategic importance of ASR and voice technology for businesses. Microsoft\u2019s acquisition of Nuance is just the tip of the iceberg, as speech recognition is more pervasive and extends beyond the patient experience to the customer and employee experience. We always believed that ASR is going to change the world and that every company will need speech recognition to get closer to their customers, find new insights for products and services, and better personalize their customer experiences. The best is yet to come.</p>' };
const frontmatter = { "title": "How Does Microsoft\u2019s Purchase of Nuance Communications Affect the Market?", "description": "Microsoft's offer to purchase Nuance Communications for $19.7B validates Automatic Speech Recognition (ASR) has become an essential technology for business. ", "date": "2021-04-15T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981368/blog/how-does-microsofts-purchase-of-nuance-communications-affect-the-market/how-does-msft-purchase-nuance-affect-market%402x.jpg", "authors": ["scott-stephenson"], "category": "speech-trends", "tags": ["voice-strategy", "voice-tech"], "seo": { "title": "How Does Microsoft\u2019s Purchase of Nuance Communications Affect the Market?", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981368/blog/how-does-microsofts-purchase-of-nuance-communications-affect-the-market/how-does-msft-purchase-nuance-affect-market%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/9644796", "twitter": "https://dpgr.am/363d87a", "linkedin": "https://dpgr.am/3722112", "reddit": "https://dpgr.am/c507d18", "facebook": "https://dpgr.am/a4d15aa" }, "astro": { "headings": [{ "depth": 2, "slug": "why-buy-nuance-hello-healthcare--upsell-potential", "text": "Why Buy Nuance? Hello Healthcare & Upsell potential." }, { "depth": 2, "slug": "what-product-leaders-of-voice-enabled-applications-need-to-know-about-the-microsoft-acquisition-of-nuance", "text": "What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance" }, { "depth": 2, "slug": "impact-to-the-broader-asr-market", "text": "Impact to the Broader ASR Market" }], "source": "\r\nMicrosoft's offer to purchase Nuance Communications for $19.7B validates Automatic Speech Recognition (ASR) has become an essential technology for business. It's exciting to see an AI powerhouse like Microsoft, which has amazing talent and tools in house, finding extreme value in acquiring speech solutions at this scale. Overall, this acquisition is a great sign for AI companies like Deepgram and the Speech Recognition industry. \r\n\r\n## **Why Buy Nuance? Hello Healthcare & Upsell potential.**\r\n\r\nMicrosoft has provided their own Speech To Text (STT) solution for years, however due to [difficulty of using the service](https://www.techradar.com/reviews/microsoft-azure-speech-to-text-review), lack of scale, and preference for working well with its own hardware and software solutions (Cortana, Bing and the Teams communication app), it has not gained substantial traction beyond their ecosystem. Nuance on the contrary is the leader in the medical transcription market which was estimated to be 1.32B in 2019 and [expected to grow to 4.89B by 2027](https://www.fortunebusinessinsights.com/industry-reports/medical-transcription-software-market-101572).  With the acquisition of Nuance, Microsoft immediately expands their STT reach into the healthcare community, and also opens up the possibility of expanding their Azure cloud storage revenues, as stored audio files are not small.\r\n\r\n## **What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance**\r\n\r\nWhile this acquisition will benefit Microsoft, the core architecture of STT does not have a high likelihood of improving. Microsoft and Nuance STT are both based on the same [legacy tri-gram model](https://deepgram.com/product/overview/) so neither architecture will dramatically change, but perhaps have incremental improvements. There will also be challenges for these two companies to integrate the artifacts for two speech processing pipelines as they have different libraries, acoustic models, language lexicons, style guides, etc. As a comparison, Deepgram built our speech recognition solution from scratch using a completely different architecture. Deepgram uses an end to end Deep Learning Neural Network, which in simple terms means we perform audio to text transcription in one AI-enabled step and we can continually improve our accuracy. Due to our architectural differences, Deepgram customers do not have to compromise accuracy vs. speed, speed vs. costs or cost vs. scalability.\r\n\r\n## **Impact to the Broader ASR Market**\r\n\r\nSo what does this do to the broader speech market? It elevates the conversation around Speech Recognition to higher levels within the organization. Businesses will be looking to see why ASR is a growth strategy for Microsoft and consider it as an important technology strategy to gather customer insights, improve employee engagement and accelerate their growth.  This acquisition also shows that ASR and voice technology growth is not only for consumer needs (Siri, Alexa, Cortana) but an important aspect of business needs. The recent report from Opus Research [2021 State of Speech Report](https://deepgram.com/state-of-asr-report/) validates the strategic importance of ASR and voice technology for businesses. Microsoft's acquisition of Nuance is just the tip of the iceberg, as speech recognition is more pervasive and extends beyond the patient experience to the customer and employee experience. We always believed that ASR is going to change the world and that every company will need speech recognition to get closer to their customers, find new insights for products and services, and better personalize their customer experiences. The best is yet to come.\r\n", "html": '<p>Microsoft\u2019s offer to purchase Nuance Communications for $19.7B validates Automatic Speech Recognition (ASR) has become an essential technology for business. It\u2019s exciting to see an AI powerhouse like Microsoft, which has amazing talent and tools in house, finding extreme value in acquiring speech solutions at this scale. Overall, this acquisition is a great sign for AI companies like Deepgram and the Speech Recognition industry.</p>\n<h2 id="why-buy-nuance-hello-healthcare--upsell-potential"><strong>Why Buy Nuance? Hello Healthcare & Upsell potential.</strong></h2>\n<p>Microsoft has provided their own Speech To Text (STT) solution for years, however due to <a href="https://www.techradar.com/reviews/microsoft-azure-speech-to-text-review">difficulty of using the service</a>, lack of scale, and preference for working well with its own hardware and software solutions (Cortana, Bing and the Teams communication app), it has not gained substantial traction beyond their ecosystem. Nuance on the contrary is the leader in the medical transcription market which was estimated to be 1.32B in 2019 and <a href="https://www.fortunebusinessinsights.com/industry-reports/medical-transcription-software-market-101572">expected to grow to 4.89B by 2027</a>.  With the acquisition of Nuance, Microsoft immediately expands their STT reach into the healthcare community, and also opens up the possibility of expanding their Azure cloud storage revenues, as stored audio files are not small.</p>\n<h2 id="what-product-leaders-of-voice-enabled-applications-need-to-know-about-the-microsoft-acquisition-of-nuance"><strong>What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance</strong></h2>\n<p>While this acquisition will benefit Microsoft, the core architecture of STT does not have a high likelihood of improving. Microsoft and Nuance STT are both based on the same <a href="https://deepgram.com/product/overview/">legacy tri-gram model</a> so neither architecture will dramatically change, but perhaps have incremental improvements. There will also be challenges for these two companies to integrate the artifacts for two speech processing pipelines as they have different libraries, acoustic models, language lexicons, style guides, etc. As a comparison, Deepgram built our speech recognition solution from scratch using a completely different architecture. Deepgram uses an end to end Deep Learning Neural Network, which in simple terms means we perform audio to text transcription in one AI-enabled step and we can continually improve our accuracy. Due to our architectural differences, Deepgram customers do not have to compromise accuracy vs. speed, speed vs. costs or cost vs. scalability.</p>\n<h2 id="impact-to-the-broader-asr-market"><strong>Impact to the Broader ASR Market</strong></h2>\n<p>So what does this do to the broader speech market? It elevates the conversation around Speech Recognition to higher levels within the organization. Businesses will be looking to see why ASR is a growth strategy for Microsoft and consider it as an important technology strategy to gather customer insights, improve employee engagement and accelerate their growth.  This acquisition also shows that ASR and voice technology growth is not only for consumer needs (Siri, Alexa, Cortana) but an important aspect of business needs. The recent report from Opus Research <a href="https://deepgram.com/state-of-asr-report/">2021 State of Speech Report</a> validates the strategic importance of ASR and voice technology for businesses. Microsoft\u2019s acquisition of Nuance is just the tip of the iceberg, as speech recognition is more pervasive and extends beyond the patient experience to the customer and employee experience. We always believed that ASR is going to change the world and that every company will need speech recognition to get closer to their customers, find new insights for products and services, and better personalize their customer experiences. The best is yet to come.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-does-microsofts-purchase-of-nuance-communications-affect-the-market/index.md" };
function rawContent() {
  return "\r\nMicrosoft's offer to purchase Nuance Communications for $19.7B validates Automatic Speech Recognition (ASR) has become an essential technology for business. It's exciting to see an AI powerhouse like Microsoft, which has amazing talent and tools in house, finding extreme value in acquiring speech solutions at this scale. Overall, this acquisition is a great sign for AI companies like Deepgram and the Speech Recognition industry. \r\n\r\n## **Why Buy Nuance? Hello Healthcare & Upsell potential.**\r\n\r\nMicrosoft has provided their own Speech To Text (STT) solution for years, however due to [difficulty of using the service](https://www.techradar.com/reviews/microsoft-azure-speech-to-text-review), lack of scale, and preference for working well with its own hardware and software solutions (Cortana, Bing and the Teams communication app), it has not gained substantial traction beyond their ecosystem. Nuance on the contrary is the leader in the medical transcription market which was estimated to be 1.32B in 2019 and [expected to grow to 4.89B by 2027](https://www.fortunebusinessinsights.com/industry-reports/medical-transcription-software-market-101572).  With the acquisition of Nuance, Microsoft immediately expands their STT reach into the healthcare community, and also opens up the possibility of expanding their Azure cloud storage revenues, as stored audio files are not small.\r\n\r\n## **What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance**\r\n\r\nWhile this acquisition will benefit Microsoft, the core architecture of STT does not have a high likelihood of improving. Microsoft and Nuance STT are both based on the same [legacy tri-gram model](https://deepgram.com/product/overview/) so neither architecture will dramatically change, but perhaps have incremental improvements. There will also be challenges for these two companies to integrate the artifacts for two speech processing pipelines as they have different libraries, acoustic models, language lexicons, style guides, etc. As a comparison, Deepgram built our speech recognition solution from scratch using a completely different architecture. Deepgram uses an end to end Deep Learning Neural Network, which in simple terms means we perform audio to text transcription in one AI-enabled step and we can continually improve our accuracy. Due to our architectural differences, Deepgram customers do not have to compromise accuracy vs. speed, speed vs. costs or cost vs. scalability.\r\n\r\n## **Impact to the Broader ASR Market**\r\n\r\nSo what does this do to the broader speech market? It elevates the conversation around Speech Recognition to higher levels within the organization. Businesses will be looking to see why ASR is a growth strategy for Microsoft and consider it as an important technology strategy to gather customer insights, improve employee engagement and accelerate their growth.  This acquisition also shows that ASR and voice technology growth is not only for consumer needs (Siri, Alexa, Cortana) but an important aspect of business needs. The recent report from Opus Research [2021 State of Speech Report](https://deepgram.com/state-of-asr-report/) validates the strategic importance of ASR and voice technology for businesses. Microsoft's acquisition of Nuance is just the tip of the iceberg, as speech recognition is more pervasive and extends beyond the patient experience to the customer and employee experience. We always believed that ASR is going to change the world and that every company will need speech recognition to get closer to their customers, find new insights for products and services, and better personalize their customer experiences. The best is yet to come.\r\n";
}
function compiledContent() {
  return '<p>Microsoft\u2019s offer to purchase Nuance Communications for $19.7B validates Automatic Speech Recognition (ASR) has become an essential technology for business. It\u2019s exciting to see an AI powerhouse like Microsoft, which has amazing talent and tools in house, finding extreme value in acquiring speech solutions at this scale. Overall, this acquisition is a great sign for AI companies like Deepgram and the Speech Recognition industry.</p>\n<h2 id="why-buy-nuance-hello-healthcare--upsell-potential"><strong>Why Buy Nuance? Hello Healthcare & Upsell potential.</strong></h2>\n<p>Microsoft has provided their own Speech To Text (STT) solution for years, however due to <a href="https://www.techradar.com/reviews/microsoft-azure-speech-to-text-review">difficulty of using the service</a>, lack of scale, and preference for working well with its own hardware and software solutions (Cortana, Bing and the Teams communication app), it has not gained substantial traction beyond their ecosystem. Nuance on the contrary is the leader in the medical transcription market which was estimated to be 1.32B in 2019 and <a href="https://www.fortunebusinessinsights.com/industry-reports/medical-transcription-software-market-101572">expected to grow to 4.89B by 2027</a>.  With the acquisition of Nuance, Microsoft immediately expands their STT reach into the healthcare community, and also opens up the possibility of expanding their Azure cloud storage revenues, as stored audio files are not small.</p>\n<h2 id="what-product-leaders-of-voice-enabled-applications-need-to-know-about-the-microsoft-acquisition-of-nuance"><strong>What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance</strong></h2>\n<p>While this acquisition will benefit Microsoft, the core architecture of STT does not have a high likelihood of improving. Microsoft and Nuance STT are both based on the same <a href="https://deepgram.com/product/overview/">legacy tri-gram model</a> so neither architecture will dramatically change, but perhaps have incremental improvements. There will also be challenges for these two companies to integrate the artifacts for two speech processing pipelines as they have different libraries, acoustic models, language lexicons, style guides, etc. As a comparison, Deepgram built our speech recognition solution from scratch using a completely different architecture. Deepgram uses an end to end Deep Learning Neural Network, which in simple terms means we perform audio to text transcription in one AI-enabled step and we can continually improve our accuracy. Due to our architectural differences, Deepgram customers do not have to compromise accuracy vs. speed, speed vs. costs or cost vs. scalability.</p>\n<h2 id="impact-to-the-broader-asr-market"><strong>Impact to the Broader ASR Market</strong></h2>\n<p>So what does this do to the broader speech market? It elevates the conversation around Speech Recognition to higher levels within the organization. Businesses will be looking to see why ASR is a growth strategy for Microsoft and consider it as an important technology strategy to gather customer insights, improve employee engagement and accelerate their growth.  This acquisition also shows that ASR and voice technology growth is not only for consumer needs (Siri, Alexa, Cortana) but an important aspect of business needs. The recent report from Opus Research <a href="https://deepgram.com/state-of-asr-report/">2021 State of Speech Report</a> validates the strategic importance of ASR and voice technology for businesses. Microsoft\u2019s acquisition of Nuance is just the tip of the iceberg, as speech recognition is more pervasive and extends beyond the patient experience to the customer and employee experience. We always believed that ASR is going to change the world and that every company will need speech recognition to get closer to their customers, find new insights for products and services, and better personalize their customer experiences. The best is yet to come.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-does-microsofts-purchase-of-nuance-communications-affect-the-market/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Microsoft’s offer to purchase Nuance Communications for $19.7B validates Automatic Speech Recognition (ASR) has become an essential technology for business. It’s exciting to see an AI powerhouse like Microsoft, which has amazing talent and tools in house, finding extreme value in acquiring speech solutions at this scale. Overall, this acquisition is a great sign for AI companies like Deepgram and the Speech Recognition industry.</p>
<h2 id="why-buy-nuance-hello-healthcare--upsell-potential"><strong>Why Buy Nuance? Hello Healthcare & Upsell potential.</strong></h2>
<p>Microsoft has provided their own Speech To Text (STT) solution for years, however due to <a href="https://www.techradar.com/reviews/microsoft-azure-speech-to-text-review">difficulty of using the service</a>, lack of scale, and preference for working well with its own hardware and software solutions (Cortana, Bing and the Teams communication app), it has not gained substantial traction beyond their ecosystem. Nuance on the contrary is the leader in the medical transcription market which was estimated to be 1.32B in 2019 and <a href="https://www.fortunebusinessinsights.com/industry-reports/medical-transcription-software-market-101572">expected to grow to 4.89B by 2027</a>.  With the acquisition of Nuance, Microsoft immediately expands their STT reach into the healthcare community, and also opens up the possibility of expanding their Azure cloud storage revenues, as stored audio files are not small.</p>
<h2 id="what-product-leaders-of-voice-enabled-applications-need-to-know-about-the-microsoft-acquisition-of-nuance"><strong>What product leaders of voice enabled applications need to know about the Microsoft acquisition of Nuance</strong></h2>
<p>While this acquisition will benefit Microsoft, the core architecture of STT does not have a high likelihood of improving. Microsoft and Nuance STT are both based on the same <a href="https://deepgram.com/product/overview/">legacy tri-gram model</a> so neither architecture will dramatically change, but perhaps have incremental improvements. There will also be challenges for these two companies to integrate the artifacts for two speech processing pipelines as they have different libraries, acoustic models, language lexicons, style guides, etc. As a comparison, Deepgram built our speech recognition solution from scratch using a completely different architecture. Deepgram uses an end to end Deep Learning Neural Network, which in simple terms means we perform audio to text transcription in one AI-enabled step and we can continually improve our accuracy. Due to our architectural differences, Deepgram customers do not have to compromise accuracy vs. speed, speed vs. costs or cost vs. scalability.</p>
<h2 id="impact-to-the-broader-asr-market"><strong>Impact to the Broader ASR Market</strong></h2>
<p>So what does this do to the broader speech market? It elevates the conversation around Speech Recognition to higher levels within the organization. Businesses will be looking to see why ASR is a growth strategy for Microsoft and consider it as an important technology strategy to gather customer insights, improve employee engagement and accelerate their growth.  This acquisition also shows that ASR and voice technology growth is not only for consumer needs (Siri, Alexa, Cortana) but an important aspect of business needs. The recent report from Opus Research <a href="https://deepgram.com/state-of-asr-report/">2021 State of Speech Report</a> validates the strategic importance of ASR and voice technology for businesses. Microsoft’s acquisition of Nuance is just the tip of the iceberg, as speech recognition is more pervasive and extends beyond the patient experience to the customer and employee experience. We always believed that ASR is going to change the world and that every company will need speech recognition to get closer to their customers, find new insights for products and services, and better personalize their customer experiences. The best is yet to come.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-does-microsofts-purchase-of-nuance-communications-affect-the-market/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };