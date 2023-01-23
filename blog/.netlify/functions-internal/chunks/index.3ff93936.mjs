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

const metadata = { "headings": [], "source": "\nDevelopers can get started with Deepgram and Recall.ai with just a few lines of code, across variety of use cases\n\nSan Francisco, CA \u2013 [Deepgram](http://www.deepgram.com), a leading AI speech recognition and understanding company, and [Recall.ai](https://www.recall.ai/), a real-time meeting API provider, today announced a partnership to streamline the process for developers to extract data from virtual meetings, making it easier to gain insights from voice data and automate tedious workflows to maximize speed, accuracy and scale, all while using minimal lines of code.\xA0\xA0\n\nRecall.ai provides companies with a single Developer API to access real-time meeting data from a number of different platforms, including Zoom, Google Meet, Microsoft Teams, and more.\xA0 By adding a Recall.ai bot to a meeting, the company can observe what is happening in the background to provide real-time or on-demand data. The Recall.ai and Deepgram partnership enables efficient feedback flows for developers.\xA0\n\n\u201CWhen working with voice data, having an accurate transcription is critical to leveraging the insights captured during a meeting,\u201D said David Gu, CEO of Recall.ai. \u201COur partnership with Deepgram enables us to eliminate the pain points developers encounter when extracting insights from digital meeting spaces, and provide users with unparalleled accuracy, speed and scale for their meeting platforms, at a fraction of the cost and with minimal lines of code.\u201D\n\nReal-time virtual meeting integrations can be difficult to implement at scale, but with Recall.ai\u2019s unified framework, companies can benefit from a single API that makes it easier to trigger actions based on who is speaking, when people join or leave a meeting, and more. Because Recall.ai can integrate with every virtual meeting platform, it reduces the overall development time and ongoing costs. Through this partnership, users can perform the following tasks:\xA0\n\n*   Transcribe conversations of real-time meeting platforms\n*   Create a speaker-separated transcript with usernames\xA0\n*   Accurately transcribe live key phrases, named entities, numerals\n*   Calculate speaker turn counts and talk-time per speaker live\n*   Auto detect and classify languages spoken in meeting recordings\n\n\u201CAt Deepgram, we\u2019re passionate about innovating technology that alleviates developers' workloads,\u201D said Scott Stephenson, CEO of Deepgram. \u201CRecall.ai\u2019s partnership puts control back in the hands of developers, and that control will help catalyze the next generation of voice experiences for customers.\u201D\xA0\n\nTo get started, users can create an account with [Recall.ai](https://www.recall.ai/) and [sign up for Deepgram](https://console.deepgram.com/signup). Once provided access to the API keys, developers can receive their first real-time meeting transcription in 10 minutes or less.\xA0\n\n**About Deepgram**\n\nDeepgram\u2019s AI speech platform is revolutionizing the speech-to-text (STT) market and taking on the big guys. We\u2019re redefining what companies can do with voice technology by offering a platform with AI architectural advantage, not legacy tech retrofitted with AI. We\u2019ve raised over $37 million and have been recognized as an [Inc. Best Workplace (2022)](https://www.inc.com/best-workplaces/2022), a [Forbes Top 50 AI Company to Watch (2021)](https://www.forbes.com/sites/alanohnsman/2021/04/26/ai-50-americas-most-promising-artificial-intelligence-companies/?sh=9fcd89d77cf1), and a [CB Insights Top 100 AI Startup (2021)](https://www.cbinsights.com/research/report/artificial-intelligence-top-startups-2021/), among others. Our tech advantage is end-to-end deep learning, but our strength lies in our diversity of people, ideas, and experiences that allow our company to create amazing voice-enabled experiences for people who are true innovators in the field. We believe every voice should be heard\u2014and understood\u2014from our transcriptions to our customers to our employees. Come join our revolution to unlock the power of voice technology for everyone. We want to hear what you\u2019ve got to say.\xA0\n\nPress Contact\n\n[deepgram @ inkhouse.com](mailto:deepgram@inkhouse.com)\n\n**About Recall.ai**\n\nRecall.ai provides a single API for accessing real-time meeting data from platforms like Zoom, Microsoft Teams, Google Meet, and more. Real-time meeting integrations require a lot of moving parts, so Recall.ai provides a unified framework that simplifies this process. Recall.ai makes it easy to trigger actions based on who is speaking, when people join or leave a meeting, and more, all with a single API for every platform which helps lower development time and upkeep costs. The API can be used with both audio and video streams, even for meeting platforms that do not have a publicly accessible API.\n\n", "html": '<p>Developers can get started with Deepgram and Recall.ai with just a few lines of code, across variety of use cases</p>\n<p>San Francisco, CA \u2013 <a href="http://www.deepgram.com">Deepgram</a>, a leading AI speech recognition and understanding company, and <a href="https://www.recall.ai/">Recall.ai</a>, a real-time meeting API provider, today announced a partnership to streamline the process for developers to extract data from virtual meetings, making it easier to gain insights from voice data and automate tedious workflows to maximize speed, accuracy and scale, all while using minimal lines of code.\xA0\xA0</p>\n<p>Recall.ai provides companies with a single Developer API to access real-time meeting data from a number of different platforms, including Zoom, Google Meet, Microsoft Teams, and more.\xA0 By adding a Recall.ai bot to a meeting, the company can observe what is happening in the background to provide real-time or on-demand data. The Recall.ai and Deepgram partnership enables efficient feedback flows for developers.\xA0</p>\n<p>\u201CWhen working with voice data, having an accurate transcription is critical to leveraging the insights captured during a meeting,\u201D said David Gu, CEO of Recall.ai. \u201COur partnership with Deepgram enables us to eliminate the pain points developers encounter when extracting insights from digital meeting spaces, and provide users with unparalleled accuracy, speed and scale for their meeting platforms, at a fraction of the cost and with minimal lines of code.\u201D</p>\n<p>Real-time virtual meeting integrations can be difficult to implement at scale, but with Recall.ai\u2019s unified framework, companies can benefit from a single API that makes it easier to trigger actions based on who is speaking, when people join or leave a meeting, and more. Because Recall.ai can integrate with every virtual meeting platform, it reduces the overall development time and ongoing costs. Through this partnership, users can perform the following tasks:\xA0</p>\n<ul>\n<li>Transcribe conversations of real-time meeting platforms</li>\n<li>Create a speaker-separated transcript with usernames\xA0</li>\n<li>Accurately transcribe live key phrases, named entities, numerals</li>\n<li>Calculate speaker turn counts and talk-time per speaker live</li>\n<li>Auto detect and classify languages spoken in meeting recordings</li>\n</ul>\n<p>\u201CAt Deepgram, we\u2019re passionate about innovating technology that alleviates developers\u2019 workloads,\u201D said Scott Stephenson, CEO of Deepgram. \u201CRecall.ai\u2019s partnership puts control back in the hands of developers, and that control will help catalyze the next generation of voice experiences for customers.\u201D\xA0</p>\n<p>To get started, users can create an account with <a href="https://www.recall.ai/">Recall.ai</a> and <a href="https://console.deepgram.com/signup">sign up for Deepgram</a>. Once provided access to the API keys, developers can receive their first real-time meeting transcription in 10 minutes or less.\xA0</p>\n<p><strong>About Deepgram</strong></p>\n<p>Deepgram\u2019s AI speech platform is revolutionizing the speech-to-text (STT) market and taking on the big guys. We\u2019re redefining what companies can do with voice technology by offering a platform with AI architectural advantage, not legacy tech retrofitted with AI. We\u2019ve raised over $37 million and have been recognized as an <a href="https://www.inc.com/best-workplaces/2022">Inc. Best Workplace (2022)</a>, a <a href="https://www.forbes.com/sites/alanohnsman/2021/04/26/ai-50-americas-most-promising-artificial-intelligence-companies/?sh=9fcd89d77cf1">Forbes Top 50 AI Company to Watch (2021)</a>, and a <a href="https://www.cbinsights.com/research/report/artificial-intelligence-top-startups-2021/">CB Insights Top 100 AI Startup (2021)</a>, among others. Our tech advantage is end-to-end deep learning, but our strength lies in our diversity of people, ideas, and experiences that allow our company to create amazing voice-enabled experiences for people who are true innovators in the field. We believe every voice should be heard\u2014and understood\u2014from our transcriptions to our customers to our employees. Come join our revolution to unlock the power of voice technology for everyone. We want to hear what you\u2019ve got to say.\xA0</p>\n<p>Press Contact</p>\n<p><a href="mailto:deepgram@inkhouse.com">deepgram @ inkhouse.com</a></p>\n<p><strong>About Recall.ai</strong></p>\n<p>Recall.ai provides a single API for accessing real-time meeting data from platforms like Zoom, Microsoft Teams, Google Meet, and more. Real-time meeting integrations require a lot of moving parts, so Recall.ai provides a unified framework that simplifies this process. Recall.ai makes it easy to trigger actions based on who is speaking, when people join or leave a meeting, and more, all with a single API for every platform which helps lower development time and upkeep costs. The API can be used with both audio and video streams, even for meeting platforms that do not have a publicly accessible API.</p>' };
const frontmatter = { "title": "Deepgram and Recall.ai Partner to Make it Easier for Developers to Extract Insights From Meeting Audio and Automate Tedious Workflows", "description": "Developers can get started with Deepgram and Recall.ai with just a few lines of code, across variety of use cases", "date": "2022-10-11T21:11:46.146Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1665522827/blog/Deepgram%20and%20Recall.ai%20Partnership/2210-dg-recallAI-announcement-featured-1200x630_qzjtq9.png", "authors": ["katie-byrne"], "category": "product-news", "tags": ["recall-ai"], "shorturls": { "share": "https://dpgr.am/e89f348", "twitter": "https://dpgr.am/a2f0e18", "linkedin": "https://dpgr.am/9293d5b", "reddit": "https://dpgr.am/d6b861c", "facebook": "https://dpgr.am/d0a8252" }, "astro": { "headings": [], "source": "\nDevelopers can get started with Deepgram and Recall.ai with just a few lines of code, across variety of use cases\n\nSan Francisco, CA \u2013 [Deepgram](http://www.deepgram.com), a leading AI speech recognition and understanding company, and [Recall.ai](https://www.recall.ai/), a real-time meeting API provider, today announced a partnership to streamline the process for developers to extract data from virtual meetings, making it easier to gain insights from voice data and automate tedious workflows to maximize speed, accuracy and scale, all while using minimal lines of code.\xA0\xA0\n\nRecall.ai provides companies with a single Developer API to access real-time meeting data from a number of different platforms, including Zoom, Google Meet, Microsoft Teams, and more.\xA0 By adding a Recall.ai bot to a meeting, the company can observe what is happening in the background to provide real-time or on-demand data. The Recall.ai and Deepgram partnership enables efficient feedback flows for developers.\xA0\n\n\u201CWhen working with voice data, having an accurate transcription is critical to leveraging the insights captured during a meeting,\u201D said David Gu, CEO of Recall.ai. \u201COur partnership with Deepgram enables us to eliminate the pain points developers encounter when extracting insights from digital meeting spaces, and provide users with unparalleled accuracy, speed and scale for their meeting platforms, at a fraction of the cost and with minimal lines of code.\u201D\n\nReal-time virtual meeting integrations can be difficult to implement at scale, but with Recall.ai\u2019s unified framework, companies can benefit from a single API that makes it easier to trigger actions based on who is speaking, when people join or leave a meeting, and more. Because Recall.ai can integrate with every virtual meeting platform, it reduces the overall development time and ongoing costs. Through this partnership, users can perform the following tasks:\xA0\n\n*   Transcribe conversations of real-time meeting platforms\n*   Create a speaker-separated transcript with usernames\xA0\n*   Accurately transcribe live key phrases, named entities, numerals\n*   Calculate speaker turn counts and talk-time per speaker live\n*   Auto detect and classify languages spoken in meeting recordings\n\n\u201CAt Deepgram, we\u2019re passionate about innovating technology that alleviates developers' workloads,\u201D said Scott Stephenson, CEO of Deepgram. \u201CRecall.ai\u2019s partnership puts control back in the hands of developers, and that control will help catalyze the next generation of voice experiences for customers.\u201D\xA0\n\nTo get started, users can create an account with [Recall.ai](https://www.recall.ai/) and [sign up for Deepgram](https://console.deepgram.com/signup). Once provided access to the API keys, developers can receive their first real-time meeting transcription in 10 minutes or less.\xA0\n\n**About Deepgram**\n\nDeepgram\u2019s AI speech platform is revolutionizing the speech-to-text (STT) market and taking on the big guys. We\u2019re redefining what companies can do with voice technology by offering a platform with AI architectural advantage, not legacy tech retrofitted with AI. We\u2019ve raised over $37 million and have been recognized as an [Inc. Best Workplace (2022)](https://www.inc.com/best-workplaces/2022), a [Forbes Top 50 AI Company to Watch (2021)](https://www.forbes.com/sites/alanohnsman/2021/04/26/ai-50-americas-most-promising-artificial-intelligence-companies/?sh=9fcd89d77cf1), and a [CB Insights Top 100 AI Startup (2021)](https://www.cbinsights.com/research/report/artificial-intelligence-top-startups-2021/), among others. Our tech advantage is end-to-end deep learning, but our strength lies in our diversity of people, ideas, and experiences that allow our company to create amazing voice-enabled experiences for people who are true innovators in the field. We believe every voice should be heard\u2014and understood\u2014from our transcriptions to our customers to our employees. Come join our revolution to unlock the power of voice technology for everyone. We want to hear what you\u2019ve got to say.\xA0\n\nPress Contact\n\n[deepgram @ inkhouse.com](mailto:deepgram@inkhouse.com)\n\n**About Recall.ai**\n\nRecall.ai provides a single API for accessing real-time meeting data from platforms like Zoom, Microsoft Teams, Google Meet, and more. Real-time meeting integrations require a lot of moving parts, so Recall.ai provides a unified framework that simplifies this process. Recall.ai makes it easy to trigger actions based on who is speaking, when people join or leave a meeting, and more, all with a single API for every platform which helps lower development time and upkeep costs. The API can be used with both audio and video streams, even for meeting platforms that do not have a publicly accessible API.\n\n", "html": '<p>Developers can get started with Deepgram and Recall.ai with just a few lines of code, across variety of use cases</p>\n<p>San Francisco, CA \u2013 <a href="http://www.deepgram.com">Deepgram</a>, a leading AI speech recognition and understanding company, and <a href="https://www.recall.ai/">Recall.ai</a>, a real-time meeting API provider, today announced a partnership to streamline the process for developers to extract data from virtual meetings, making it easier to gain insights from voice data and automate tedious workflows to maximize speed, accuracy and scale, all while using minimal lines of code.\xA0\xA0</p>\n<p>Recall.ai provides companies with a single Developer API to access real-time meeting data from a number of different platforms, including Zoom, Google Meet, Microsoft Teams, and more.\xA0 By adding a Recall.ai bot to a meeting, the company can observe what is happening in the background to provide real-time or on-demand data. The Recall.ai and Deepgram partnership enables efficient feedback flows for developers.\xA0</p>\n<p>\u201CWhen working with voice data, having an accurate transcription is critical to leveraging the insights captured during a meeting,\u201D said David Gu, CEO of Recall.ai. \u201COur partnership with Deepgram enables us to eliminate the pain points developers encounter when extracting insights from digital meeting spaces, and provide users with unparalleled accuracy, speed and scale for their meeting platforms, at a fraction of the cost and with minimal lines of code.\u201D</p>\n<p>Real-time virtual meeting integrations can be difficult to implement at scale, but with Recall.ai\u2019s unified framework, companies can benefit from a single API that makes it easier to trigger actions based on who is speaking, when people join or leave a meeting, and more. Because Recall.ai can integrate with every virtual meeting platform, it reduces the overall development time and ongoing costs. Through this partnership, users can perform the following tasks:\xA0</p>\n<ul>\n<li>Transcribe conversations of real-time meeting platforms</li>\n<li>Create a speaker-separated transcript with usernames\xA0</li>\n<li>Accurately transcribe live key phrases, named entities, numerals</li>\n<li>Calculate speaker turn counts and talk-time per speaker live</li>\n<li>Auto detect and classify languages spoken in meeting recordings</li>\n</ul>\n<p>\u201CAt Deepgram, we\u2019re passionate about innovating technology that alleviates developers\u2019 workloads,\u201D said Scott Stephenson, CEO of Deepgram. \u201CRecall.ai\u2019s partnership puts control back in the hands of developers, and that control will help catalyze the next generation of voice experiences for customers.\u201D\xA0</p>\n<p>To get started, users can create an account with <a href="https://www.recall.ai/">Recall.ai</a> and <a href="https://console.deepgram.com/signup">sign up for Deepgram</a>. Once provided access to the API keys, developers can receive their first real-time meeting transcription in 10 minutes or less.\xA0</p>\n<p><strong>About Deepgram</strong></p>\n<p>Deepgram\u2019s AI speech platform is revolutionizing the speech-to-text (STT) market and taking on the big guys. We\u2019re redefining what companies can do with voice technology by offering a platform with AI architectural advantage, not legacy tech retrofitted with AI. We\u2019ve raised over $37 million and have been recognized as an <a href="https://www.inc.com/best-workplaces/2022">Inc. Best Workplace (2022)</a>, a <a href="https://www.forbes.com/sites/alanohnsman/2021/04/26/ai-50-americas-most-promising-artificial-intelligence-companies/?sh=9fcd89d77cf1">Forbes Top 50 AI Company to Watch (2021)</a>, and a <a href="https://www.cbinsights.com/research/report/artificial-intelligence-top-startups-2021/">CB Insights Top 100 AI Startup (2021)</a>, among others. Our tech advantage is end-to-end deep learning, but our strength lies in our diversity of people, ideas, and experiences that allow our company to create amazing voice-enabled experiences for people who are true innovators in the field. We believe every voice should be heard\u2014and understood\u2014from our transcriptions to our customers to our employees. Come join our revolution to unlock the power of voice technology for everyone. We want to hear what you\u2019ve got to say.\xA0</p>\n<p>Press Contact</p>\n<p><a href="mailto:deepgram@inkhouse.com">deepgram @ inkhouse.com</a></p>\n<p><strong>About Recall.ai</strong></p>\n<p>Recall.ai provides a single API for accessing real-time meeting data from platforms like Zoom, Microsoft Teams, Google Meet, and more. Real-time meeting integrations require a lot of moving parts, so Recall.ai provides a unified framework that simplifies this process. Recall.ai makes it easy to trigger actions based on who is speaking, when people join or leave a meeting, and more, all with a single API for every platform which helps lower development time and upkeep costs. The API can be used with both audio and video streams, even for meeting platforms that do not have a publicly accessible API.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-and-recall-ai-partner-to-make-it-easier-for-developers-to-extract-insights-from-meeting-audio-and-automate-tedious-workflows/index.md" };
function rawContent() {
  return "\nDevelopers can get started with Deepgram and Recall.ai with just a few lines of code, across variety of use cases\n\nSan Francisco, CA \u2013 [Deepgram](http://www.deepgram.com), a leading AI speech recognition and understanding company, and [Recall.ai](https://www.recall.ai/), a real-time meeting API provider, today announced a partnership to streamline the process for developers to extract data from virtual meetings, making it easier to gain insights from voice data and automate tedious workflows to maximize speed, accuracy and scale, all while using minimal lines of code.\xA0\xA0\n\nRecall.ai provides companies with a single Developer API to access real-time meeting data from a number of different platforms, including Zoom, Google Meet, Microsoft Teams, and more.\xA0 By adding a Recall.ai bot to a meeting, the company can observe what is happening in the background to provide real-time or on-demand data. The Recall.ai and Deepgram partnership enables efficient feedback flows for developers.\xA0\n\n\u201CWhen working with voice data, having an accurate transcription is critical to leveraging the insights captured during a meeting,\u201D said David Gu, CEO of Recall.ai. \u201COur partnership with Deepgram enables us to eliminate the pain points developers encounter when extracting insights from digital meeting spaces, and provide users with unparalleled accuracy, speed and scale for their meeting platforms, at a fraction of the cost and with minimal lines of code.\u201D\n\nReal-time virtual meeting integrations can be difficult to implement at scale, but with Recall.ai\u2019s unified framework, companies can benefit from a single API that makes it easier to trigger actions based on who is speaking, when people join or leave a meeting, and more. Because Recall.ai can integrate with every virtual meeting platform, it reduces the overall development time and ongoing costs. Through this partnership, users can perform the following tasks:\xA0\n\n*   Transcribe conversations of real-time meeting platforms\n*   Create a speaker-separated transcript with usernames\xA0\n*   Accurately transcribe live key phrases, named entities, numerals\n*   Calculate speaker turn counts and talk-time per speaker live\n*   Auto detect and classify languages spoken in meeting recordings\n\n\u201CAt Deepgram, we\u2019re passionate about innovating technology that alleviates developers' workloads,\u201D said Scott Stephenson, CEO of Deepgram. \u201CRecall.ai\u2019s partnership puts control back in the hands of developers, and that control will help catalyze the next generation of voice experiences for customers.\u201D\xA0\n\nTo get started, users can create an account with [Recall.ai](https://www.recall.ai/) and [sign up for Deepgram](https://console.deepgram.com/signup). Once provided access to the API keys, developers can receive their first real-time meeting transcription in 10 minutes or less.\xA0\n\n**About Deepgram**\n\nDeepgram\u2019s AI speech platform is revolutionizing the speech-to-text (STT) market and taking on the big guys. We\u2019re redefining what companies can do with voice technology by offering a platform with AI architectural advantage, not legacy tech retrofitted with AI. We\u2019ve raised over $37 million and have been recognized as an [Inc. Best Workplace (2022)](https://www.inc.com/best-workplaces/2022), a [Forbes Top 50 AI Company to Watch (2021)](https://www.forbes.com/sites/alanohnsman/2021/04/26/ai-50-americas-most-promising-artificial-intelligence-companies/?sh=9fcd89d77cf1), and a [CB Insights Top 100 AI Startup (2021)](https://www.cbinsights.com/research/report/artificial-intelligence-top-startups-2021/), among others. Our tech advantage is end-to-end deep learning, but our strength lies in our diversity of people, ideas, and experiences that allow our company to create amazing voice-enabled experiences for people who are true innovators in the field. We believe every voice should be heard\u2014and understood\u2014from our transcriptions to our customers to our employees. Come join our revolution to unlock the power of voice technology for everyone. We want to hear what you\u2019ve got to say.\xA0\n\nPress Contact\n\n[deepgram @ inkhouse.com](mailto:deepgram@inkhouse.com)\n\n**About Recall.ai**\n\nRecall.ai provides a single API for accessing real-time meeting data from platforms like Zoom, Microsoft Teams, Google Meet, and more. Real-time meeting integrations require a lot of moving parts, so Recall.ai provides a unified framework that simplifies this process. Recall.ai makes it easy to trigger actions based on who is speaking, when people join or leave a meeting, and more, all with a single API for every platform which helps lower development time and upkeep costs. The API can be used with both audio and video streams, even for meeting platforms that do not have a publicly accessible API.\n\n";
}
function compiledContent() {
  return '<p>Developers can get started with Deepgram and Recall.ai with just a few lines of code, across variety of use cases</p>\n<p>San Francisco, CA \u2013 <a href="http://www.deepgram.com">Deepgram</a>, a leading AI speech recognition and understanding company, and <a href="https://www.recall.ai/">Recall.ai</a>, a real-time meeting API provider, today announced a partnership to streamline the process for developers to extract data from virtual meetings, making it easier to gain insights from voice data and automate tedious workflows to maximize speed, accuracy and scale, all while using minimal lines of code.\xA0\xA0</p>\n<p>Recall.ai provides companies with a single Developer API to access real-time meeting data from a number of different platforms, including Zoom, Google Meet, Microsoft Teams, and more.\xA0 By adding a Recall.ai bot to a meeting, the company can observe what is happening in the background to provide real-time or on-demand data. The Recall.ai and Deepgram partnership enables efficient feedback flows for developers.\xA0</p>\n<p>\u201CWhen working with voice data, having an accurate transcription is critical to leveraging the insights captured during a meeting,\u201D said David Gu, CEO of Recall.ai. \u201COur partnership with Deepgram enables us to eliminate the pain points developers encounter when extracting insights from digital meeting spaces, and provide users with unparalleled accuracy, speed and scale for their meeting platforms, at a fraction of the cost and with minimal lines of code.\u201D</p>\n<p>Real-time virtual meeting integrations can be difficult to implement at scale, but with Recall.ai\u2019s unified framework, companies can benefit from a single API that makes it easier to trigger actions based on who is speaking, when people join or leave a meeting, and more. Because Recall.ai can integrate with every virtual meeting platform, it reduces the overall development time and ongoing costs. Through this partnership, users can perform the following tasks:\xA0</p>\n<ul>\n<li>Transcribe conversations of real-time meeting platforms</li>\n<li>Create a speaker-separated transcript with usernames\xA0</li>\n<li>Accurately transcribe live key phrases, named entities, numerals</li>\n<li>Calculate speaker turn counts and talk-time per speaker live</li>\n<li>Auto detect and classify languages spoken in meeting recordings</li>\n</ul>\n<p>\u201CAt Deepgram, we\u2019re passionate about innovating technology that alleviates developers\u2019 workloads,\u201D said Scott Stephenson, CEO of Deepgram. \u201CRecall.ai\u2019s partnership puts control back in the hands of developers, and that control will help catalyze the next generation of voice experiences for customers.\u201D\xA0</p>\n<p>To get started, users can create an account with <a href="https://www.recall.ai/">Recall.ai</a> and <a href="https://console.deepgram.com/signup">sign up for Deepgram</a>. Once provided access to the API keys, developers can receive their first real-time meeting transcription in 10 minutes or less.\xA0</p>\n<p><strong>About Deepgram</strong></p>\n<p>Deepgram\u2019s AI speech platform is revolutionizing the speech-to-text (STT) market and taking on the big guys. We\u2019re redefining what companies can do with voice technology by offering a platform with AI architectural advantage, not legacy tech retrofitted with AI. We\u2019ve raised over $37 million and have been recognized as an <a href="https://www.inc.com/best-workplaces/2022">Inc. Best Workplace (2022)</a>, a <a href="https://www.forbes.com/sites/alanohnsman/2021/04/26/ai-50-americas-most-promising-artificial-intelligence-companies/?sh=9fcd89d77cf1">Forbes Top 50 AI Company to Watch (2021)</a>, and a <a href="https://www.cbinsights.com/research/report/artificial-intelligence-top-startups-2021/">CB Insights Top 100 AI Startup (2021)</a>, among others. Our tech advantage is end-to-end deep learning, but our strength lies in our diversity of people, ideas, and experiences that allow our company to create amazing voice-enabled experiences for people who are true innovators in the field. We believe every voice should be heard\u2014and understood\u2014from our transcriptions to our customers to our employees. Come join our revolution to unlock the power of voice technology for everyone. We want to hear what you\u2019ve got to say.\xA0</p>\n<p>Press Contact</p>\n<p><a href="mailto:deepgram@inkhouse.com">deepgram @ inkhouse.com</a></p>\n<p><strong>About Recall.ai</strong></p>\n<p>Recall.ai provides a single API for accessing real-time meeting data from platforms like Zoom, Microsoft Teams, Google Meet, and more. Real-time meeting integrations require a lot of moving parts, so Recall.ai provides a unified framework that simplifies this process. Recall.ai makes it easy to trigger actions based on who is speaking, when people join or leave a meeting, and more, all with a single API for every platform which helps lower development time and upkeep costs. The API can be used with both audio and video streams, even for meeting platforms that do not have a publicly accessible API.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-and-recall-ai-partner-to-make-it-easier-for-developers-to-extract-insights-from-meeting-audio-and-automate-tedious-workflows/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Developers can get started with Deepgram and Recall.ai with just a few lines of code, across variety of use cases</p>
<p>San Francisco, CA – <a href="http://www.deepgram.com">Deepgram</a>, a leading AI speech recognition and understanding company, and <a href="https://www.recall.ai/">Recall.ai</a>, a real-time meeting API provider, today announced a partnership to streamline the process for developers to extract data from virtual meetings, making it easier to gain insights from voice data and automate tedious workflows to maximize speed, accuracy and scale, all while using minimal lines of code.  </p>
<p>Recall.ai provides companies with a single Developer API to access real-time meeting data from a number of different platforms, including Zoom, Google Meet, Microsoft Teams, and more.  By adding a Recall.ai bot to a meeting, the company can observe what is happening in the background to provide real-time or on-demand data. The Recall.ai and Deepgram partnership enables efficient feedback flows for developers. </p>
<p>“When working with voice data, having an accurate transcription is critical to leveraging the insights captured during a meeting,” said David Gu, CEO of Recall.ai. “Our partnership with Deepgram enables us to eliminate the pain points developers encounter when extracting insights from digital meeting spaces, and provide users with unparalleled accuracy, speed and scale for their meeting platforms, at a fraction of the cost and with minimal lines of code.”</p>
<p>Real-time virtual meeting integrations can be difficult to implement at scale, but with Recall.ai’s unified framework, companies can benefit from a single API that makes it easier to trigger actions based on who is speaking, when people join or leave a meeting, and more. Because Recall.ai can integrate with every virtual meeting platform, it reduces the overall development time and ongoing costs. Through this partnership, users can perform the following tasks: </p>
<ul>
<li>Transcribe conversations of real-time meeting platforms</li>
<li>Create a speaker-separated transcript with usernames </li>
<li>Accurately transcribe live key phrases, named entities, numerals</li>
<li>Calculate speaker turn counts and talk-time per speaker live</li>
<li>Auto detect and classify languages spoken in meeting recordings</li>
</ul>
<p>“At Deepgram, we’re passionate about innovating technology that alleviates developers’ workloads,” said Scott Stephenson, CEO of Deepgram. “Recall.ai’s partnership puts control back in the hands of developers, and that control will help catalyze the next generation of voice experiences for customers.” </p>
<p>To get started, users can create an account with <a href="https://www.recall.ai/">Recall.ai</a> and <a href="https://console.deepgram.com/signup">sign up for Deepgram</a>. Once provided access to the API keys, developers can receive their first real-time meeting transcription in 10 minutes or less. </p>
<p><strong>About Deepgram</strong></p>
<p>Deepgram’s AI speech platform is revolutionizing the speech-to-text (STT) market and taking on the big guys. We’re redefining what companies can do with voice technology by offering a platform with AI architectural advantage, not legacy tech retrofitted with AI. We’ve raised over $37 million and have been recognized as an <a href="https://www.inc.com/best-workplaces/2022">Inc. Best Workplace (2022)</a>, a <a href="https://www.forbes.com/sites/alanohnsman/2021/04/26/ai-50-americas-most-promising-artificial-intelligence-companies/?sh=9fcd89d77cf1">Forbes Top 50 AI Company to Watch (2021)</a>, and a <a href="https://www.cbinsights.com/research/report/artificial-intelligence-top-startups-2021/">CB Insights Top 100 AI Startup (2021)</a>, among others. Our tech advantage is end-to-end deep learning, but our strength lies in our diversity of people, ideas, and experiences that allow our company to create amazing voice-enabled experiences for people who are true innovators in the field. We believe every voice should be heard—and understood—from our transcriptions to our customers to our employees. Come join our revolution to unlock the power of voice technology for everyone. We want to hear what you’ve got to say. </p>
<p>Press Contact</p>
<p><a href="mailto:deepgram@inkhouse.com">deepgram @ inkhouse.com</a></p>
<p><strong>About Recall.ai</strong></p>
<p>Recall.ai provides a single API for accessing real-time meeting data from platforms like Zoom, Microsoft Teams, Google Meet, and more. Real-time meeting integrations require a lot of moving parts, so Recall.ai provides a unified framework that simplifies this process. Recall.ai makes it easy to trigger actions based on who is speaking, when people join or leave a meeting, and more, all with a single API for every platform which helps lower development time and upkeep costs. The API can be used with both audio and video streams, even for meeting platforms that do not have a publicly accessible API.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-and-recall-ai-partner-to-make-it-easier-for-developers-to-extract-insights-from-meeting-audio-and-automate-tedious-workflows/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };