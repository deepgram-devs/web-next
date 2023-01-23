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

const metadata = { "headings": [{ "depth": 2, "slug": "what-developers-can-do-using-summarization", "text": "What Developers Can do Using Summarization?" }, { "depth": 3, "slug": "extractive-summarization", "text": "Extractive Summarization" }, { "depth": 3, "slug": "abstractive-summarization", "text": "Abstractive Summarization" }, { "depth": 2, "slug": "how-deepgram-summarization-works", "text": "How Deepgram Summarization Works" }], "source": "Build voice intelligence applications using our latest Summarization API, such as podcast summaries, auto-generated meeting notes, and sales call summaries, enhancing the overall end-user experience.\xA0\n\nToday, we are very excited to announce that Deepgram has launched the latest Summarization feature as part of our Speech Understanding Features. It uses deep learning techniques and abstractive summarization methods to generate meaningful and relevant summaries and insights from the audio data.\n\n## What Developers Can do Using Summarization?\n\n* Enable agents and sales representatives to generate meaningful call summaries automatically and reduce manual effort.\n* Help listeners identify interesting conversations through auto-generated relevant podcast previews.\n* Enable sales coaches and leaders to navigate through a large number of calls to identify important conversations through auto generated meeting summaries to dive deep into for coaching and monitoring purposes.\n* Make it easier for customers to extract actionable insights from conversations and key points discussed and identify calls of interest through AI generated meeting summaries.\n\nSummarization is one of the most challenging problems in the natural language processing and natural language generation space. It attempts to solve the problem of consuming a large amount of information by creating a meaningful, short, and relevant summary of the input text.\xA0\n\nThere are primarily two methods to summarize the original text: extractive and abstractive.\xA0\n\n### Extractive Summarization\n\nExtractive summarization works by extracting critical sentences from the original text, modeling the sentence's relationship, and merging selected sentences to generate an overall summary of the original text.\n\n### Abstractive Summarization\n\nIn this approach, the model attempts to capture important parts of the input text and generate new sentences to convey the original text's meaning using advanced deep learning and natural language techniques.\n\n## How Deepgram Summarization Works\n\nDeepgram\u2019s Summarization feature first preprocesses the text by splitting it into logical segments. The model also respects sentence boundaries and is sensitive to the context of a sentence or utterance. Then, each input segment is fed individually through the model and the model produces a summarized version of the segment's text. The final JSON output contains a list of meaningful summaries with start and end characters' positions to identify generated summary sections from the source transcript.\n\nSummarization feature is supported for English language and pre-recorded audio and is available for both our on-premises and hosted customers.\n\nTo get started with Summarization, all you need to do is add `summarize=true` in your API call.\n\n```shell\ncurl \\\n --request POST \\\n --url 'https://api.deepgram.com/v1/listen?summarize=true&punctuate=true&tier=enhanced' \\\n --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\\n --header 'content-type: audio/mp3' \\\n --data-binary \u2018@podcast.mp3'\n```\n\nWhen the file is finished processing (often after only a few seconds), you\u2019ll receive a sample JSON response that has the following basic structure:\n\n```json\n\"summaries\": [\n  {\n    \"summary\": \"This episode is brought to you by levels. With levels you can see how different foods affect your health with real time feedback. The levels app interprets your glucose data and provides a simple score after you eat a meal.\",\n    \"start_word\": 0,\n    \"end_word\": 623\n  }\n```\n\nThe outputs from the API can then be used to build downstream workflows, create meeting or call notes in pdf format, power analytics tools, or integrate with other applications.\xA0\n\nTo learn more about our API, please see the Summarization page in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).", "html": '<p>Build voice intelligence applications using our latest Summarization API, such as podcast summaries, auto-generated meeting notes, and sales call summaries, enhancing the overall end-user experience.\xA0</p>\n<p>Today, we are very excited to announce that Deepgram has launched the latest Summarization feature as part of our Speech Understanding Features. It uses deep learning techniques and abstractive summarization methods to generate meaningful and relevant summaries and insights from the audio data.</p>\n<h2 id="what-developers-can-do-using-summarization">What Developers Can do Using Summarization?</h2>\n<ul>\n<li>Enable agents and sales representatives to generate meaningful call summaries automatically and reduce manual effort.</li>\n<li>Help listeners identify interesting conversations through auto-generated relevant podcast previews.</li>\n<li>Enable sales coaches and leaders to navigate through a large number of calls to identify important conversations through auto generated meeting summaries to dive deep into for coaching and monitoring purposes.</li>\n<li>Make it easier for customers to extract actionable insights from conversations and key points discussed and identify calls of interest through AI generated meeting summaries.</li>\n</ul>\n<p>Summarization is one of the most challenging problems in the natural language processing and natural language generation space. It attempts to solve the problem of consuming a large amount of information by creating a meaningful, short, and relevant summary of the input text.\xA0</p>\n<p>There are primarily two methods to summarize the original text: extractive and abstractive.\xA0</p>\n<h3 id="extractive-summarization">Extractive Summarization</h3>\n<p>Extractive summarization works by extracting critical sentences from the original text, modeling the sentence\u2019s relationship, and merging selected sentences to generate an overall summary of the original text.</p>\n<h3 id="abstractive-summarization">Abstractive Summarization</h3>\n<p>In this approach, the model attempts to capture important parts of the input text and generate new sentences to convey the original text\u2019s meaning using advanced deep learning and natural language techniques.</p>\n<h2 id="how-deepgram-summarization-works">How Deepgram Summarization Works</h2>\n<p>Deepgram\u2019s Summarization feature first preprocesses the text by splitting it into logical segments. The model also respects sentence boundaries and is sensitive to the context of a sentence or utterance. Then, each input segment is fed individually through the model and the model produces a summarized version of the segment\u2019s text. The final JSON output contains a list of meaningful summaries with start and end characters\u2019 positions to identify generated summary sections from the source transcript.</p>\n<p>Summarization feature is supported for English language and pre-recorded audio and is available for both our on-premises and hosted customers.</p>\n<p>To get started with Summarization, all you need to do is add <code is:raw>summarize=true</code> in your API call.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?summarize=true&amp;punctuate=true&amp;tier=enhanced&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --header </span><span style="color: #A5D6FF">&#39;content-type: audio/mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --data-binary \u2018@podcast.mp3</span><span style="color: #A5D6FF">&#39;</span></span></code></pre>\n<p>When the file is finished processing (often after only a few seconds), you\u2019ll receive a sample JSON response that has the following basic structure:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #A5D6FF">&quot;summaries&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">  {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;summary&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;This episode is brought to you by levels. With levels you can see how different foods affect your health with real time feedback. The levels app interprets your glucose data and provides a simple score after you eat a meal.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;start_word&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;end_word&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">623</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span></code></pre>\n<p>The outputs from the API can then be used to build downstream workflows, create meeting or call notes in pdf format, power analytics tools, or integrate with other applications.\xA0</p>\n<p>To learn more about our API, please see the Summarization page in our documentation. We welcome your feedback, please share it with us at <a href="https://deepgram.hellonext.co/b/feedback">Product Feedback</a>.</p>' };
const frontmatter = { "title": "Introducing Auto-Generated Summaries for Audio Content", "description": "Need to automatically generate summaries of your audio content? Look no further!", "date": "2022-09-28T14:54:14.428Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1664376933/2209-Introducing-Auto-Generated-Summaries-for-Audio-Content-thumb-554x220_acfu0t.png", "authors": ["pankaj-trivedi"], "category": "product-news", "tags": ["summarization"], "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1664377293/2209-Introducing-Auto-Generated-Summaries-for-Audio-Content-featured-1200x630_l5pnli.png" }, "shorturls": { "share": "https://dpgr.am/76f533c", "twitter": "https://dpgr.am/3846b34", "linkedin": "https://dpgr.am/ffbdfb6", "reddit": "https://dpgr.am/857ac88", "facebook": "https://dpgr.am/f393811" }, "astro": { "headings": [{ "depth": 2, "slug": "what-developers-can-do-using-summarization", "text": "What Developers Can do Using Summarization?" }, { "depth": 3, "slug": "extractive-summarization", "text": "Extractive Summarization" }, { "depth": 3, "slug": "abstractive-summarization", "text": "Abstractive Summarization" }, { "depth": 2, "slug": "how-deepgram-summarization-works", "text": "How Deepgram Summarization Works" }], "source": "Build voice intelligence applications using our latest Summarization API, such as podcast summaries, auto-generated meeting notes, and sales call summaries, enhancing the overall end-user experience.\xA0\n\nToday, we are very excited to announce that Deepgram has launched the latest Summarization feature as part of our Speech Understanding Features. It uses deep learning techniques and abstractive summarization methods to generate meaningful and relevant summaries and insights from the audio data.\n\n## What Developers Can do Using Summarization?\n\n* Enable agents and sales representatives to generate meaningful call summaries automatically and reduce manual effort.\n* Help listeners identify interesting conversations through auto-generated relevant podcast previews.\n* Enable sales coaches and leaders to navigate through a large number of calls to identify important conversations through auto generated meeting summaries to dive deep into for coaching and monitoring purposes.\n* Make it easier for customers to extract actionable insights from conversations and key points discussed and identify calls of interest through AI generated meeting summaries.\n\nSummarization is one of the most challenging problems in the natural language processing and natural language generation space. It attempts to solve the problem of consuming a large amount of information by creating a meaningful, short, and relevant summary of the input text.\xA0\n\nThere are primarily two methods to summarize the original text: extractive and abstractive.\xA0\n\n### Extractive Summarization\n\nExtractive summarization works by extracting critical sentences from the original text, modeling the sentence's relationship, and merging selected sentences to generate an overall summary of the original text.\n\n### Abstractive Summarization\n\nIn this approach, the model attempts to capture important parts of the input text and generate new sentences to convey the original text's meaning using advanced deep learning and natural language techniques.\n\n## How Deepgram Summarization Works\n\nDeepgram\u2019s Summarization feature first preprocesses the text by splitting it into logical segments. The model also respects sentence boundaries and is sensitive to the context of a sentence or utterance. Then, each input segment is fed individually through the model and the model produces a summarized version of the segment's text. The final JSON output contains a list of meaningful summaries with start and end characters' positions to identify generated summary sections from the source transcript.\n\nSummarization feature is supported for English language and pre-recorded audio and is available for both our on-premises and hosted customers.\n\nTo get started with Summarization, all you need to do is add `summarize=true` in your API call.\n\n```shell\ncurl \\\n --request POST \\\n --url 'https://api.deepgram.com/v1/listen?summarize=true&punctuate=true&tier=enhanced' \\\n --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\\n --header 'content-type: audio/mp3' \\\n --data-binary \u2018@podcast.mp3'\n```\n\nWhen the file is finished processing (often after only a few seconds), you\u2019ll receive a sample JSON response that has the following basic structure:\n\n```json\n\"summaries\": [\n  {\n    \"summary\": \"This episode is brought to you by levels. With levels you can see how different foods affect your health with real time feedback. The levels app interprets your glucose data and provides a simple score after you eat a meal.\",\n    \"start_word\": 0,\n    \"end_word\": 623\n  }\n```\n\nThe outputs from the API can then be used to build downstream workflows, create meeting or call notes in pdf format, power analytics tools, or integrate with other applications.\xA0\n\nTo learn more about our API, please see the Summarization page in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).", "html": '<p>Build voice intelligence applications using our latest Summarization API, such as podcast summaries, auto-generated meeting notes, and sales call summaries, enhancing the overall end-user experience.\xA0</p>\n<p>Today, we are very excited to announce that Deepgram has launched the latest Summarization feature as part of our Speech Understanding Features. It uses deep learning techniques and abstractive summarization methods to generate meaningful and relevant summaries and insights from the audio data.</p>\n<h2 id="what-developers-can-do-using-summarization">What Developers Can do Using Summarization?</h2>\n<ul>\n<li>Enable agents and sales representatives to generate meaningful call summaries automatically and reduce manual effort.</li>\n<li>Help listeners identify interesting conversations through auto-generated relevant podcast previews.</li>\n<li>Enable sales coaches and leaders to navigate through a large number of calls to identify important conversations through auto generated meeting summaries to dive deep into for coaching and monitoring purposes.</li>\n<li>Make it easier for customers to extract actionable insights from conversations and key points discussed and identify calls of interest through AI generated meeting summaries.</li>\n</ul>\n<p>Summarization is one of the most challenging problems in the natural language processing and natural language generation space. It attempts to solve the problem of consuming a large amount of information by creating a meaningful, short, and relevant summary of the input text.\xA0</p>\n<p>There are primarily two methods to summarize the original text: extractive and abstractive.\xA0</p>\n<h3 id="extractive-summarization">Extractive Summarization</h3>\n<p>Extractive summarization works by extracting critical sentences from the original text, modeling the sentence\u2019s relationship, and merging selected sentences to generate an overall summary of the original text.</p>\n<h3 id="abstractive-summarization">Abstractive Summarization</h3>\n<p>In this approach, the model attempts to capture important parts of the input text and generate new sentences to convey the original text\u2019s meaning using advanced deep learning and natural language techniques.</p>\n<h2 id="how-deepgram-summarization-works">How Deepgram Summarization Works</h2>\n<p>Deepgram\u2019s Summarization feature first preprocesses the text by splitting it into logical segments. The model also respects sentence boundaries and is sensitive to the context of a sentence or utterance. Then, each input segment is fed individually through the model and the model produces a summarized version of the segment\u2019s text. The final JSON output contains a list of meaningful summaries with start and end characters\u2019 positions to identify generated summary sections from the source transcript.</p>\n<p>Summarization feature is supported for English language and pre-recorded audio and is available for both our on-premises and hosted customers.</p>\n<p>To get started with Summarization, all you need to do is add <code is:raw>summarize=true</code> in your API call.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?summarize=true&amp;punctuate=true&amp;tier=enhanced&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --header </span><span style="color: #A5D6FF">&#39;content-type: audio/mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --data-binary \u2018@podcast.mp3</span><span style="color: #A5D6FF">&#39;</span></span></code></pre>\n<p>When the file is finished processing (often after only a few seconds), you\u2019ll receive a sample JSON response that has the following basic structure:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #A5D6FF">&quot;summaries&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">  {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;summary&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;This episode is brought to you by levels. With levels you can see how different foods affect your health with real time feedback. The levels app interprets your glucose data and provides a simple score after you eat a meal.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;start_word&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;end_word&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">623</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span></code></pre>\n<p>The outputs from the API can then be used to build downstream workflows, create meeting or call notes in pdf format, power analytics tools, or integrate with other applications.\xA0</p>\n<p>To learn more about our API, please see the Summarization page in our documentation. We welcome your feedback, please share it with us at <a href="https://deepgram.hellonext.co/b/feedback">Product Feedback</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-auto-generated-summaries-for-audio-content/index.md" };
function rawContent() {
  return "Build voice intelligence applications using our latest Summarization API, such as podcast summaries, auto-generated meeting notes, and sales call summaries, enhancing the overall end-user experience.\xA0\n\nToday, we are very excited to announce that Deepgram has launched the latest Summarization feature as part of our Speech Understanding Features. It uses deep learning techniques and abstractive summarization methods to generate meaningful and relevant summaries and insights from the audio data.\n\n## What Developers Can do Using Summarization?\n\n* Enable agents and sales representatives to generate meaningful call summaries automatically and reduce manual effort.\n* Help listeners identify interesting conversations through auto-generated relevant podcast previews.\n* Enable sales coaches and leaders to navigate through a large number of calls to identify important conversations through auto generated meeting summaries to dive deep into for coaching and monitoring purposes.\n* Make it easier for customers to extract actionable insights from conversations and key points discussed and identify calls of interest through AI generated meeting summaries.\n\nSummarization is one of the most challenging problems in the natural language processing and natural language generation space. It attempts to solve the problem of consuming a large amount of information by creating a meaningful, short, and relevant summary of the input text.\xA0\n\nThere are primarily two methods to summarize the original text: extractive and abstractive.\xA0\n\n### Extractive Summarization\n\nExtractive summarization works by extracting critical sentences from the original text, modeling the sentence's relationship, and merging selected sentences to generate an overall summary of the original text.\n\n### Abstractive Summarization\n\nIn this approach, the model attempts to capture important parts of the input text and generate new sentences to convey the original text's meaning using advanced deep learning and natural language techniques.\n\n## How Deepgram Summarization Works\n\nDeepgram\u2019s Summarization feature first preprocesses the text by splitting it into logical segments. The model also respects sentence boundaries and is sensitive to the context of a sentence or utterance. Then, each input segment is fed individually through the model and the model produces a summarized version of the segment's text. The final JSON output contains a list of meaningful summaries with start and end characters' positions to identify generated summary sections from the source transcript.\n\nSummarization feature is supported for English language and pre-recorded audio and is available for both our on-premises and hosted customers.\n\nTo get started with Summarization, all you need to do is add `summarize=true` in your API call.\n\n```shell\ncurl \\\n --request POST \\\n --url 'https://api.deepgram.com/v1/listen?summarize=true&punctuate=true&tier=enhanced' \\\n --header 'Authorization: Token YOUR_DEEPGRAM_API_KEY' \\\n --header 'content-type: audio/mp3' \\\n --data-binary \u2018@podcast.mp3'\n```\n\nWhen the file is finished processing (often after only a few seconds), you\u2019ll receive a sample JSON response that has the following basic structure:\n\n```json\n\"summaries\": [\n  {\n    \"summary\": \"This episode is brought to you by levels. With levels you can see how different foods affect your health with real time feedback. The levels app interprets your glucose data and provides a simple score after you eat a meal.\",\n    \"start_word\": 0,\n    \"end_word\": 623\n  }\n```\n\nThe outputs from the API can then be used to build downstream workflows, create meeting or call notes in pdf format, power analytics tools, or integrate with other applications.\xA0\n\nTo learn more about our API, please see the Summarization page in our documentation. We welcome your feedback, please share it with us at [Product Feedback](https://deepgram.hellonext.co/b/feedback).";
}
function compiledContent() {
  return '<p>Build voice intelligence applications using our latest Summarization API, such as podcast summaries, auto-generated meeting notes, and sales call summaries, enhancing the overall end-user experience.\xA0</p>\n<p>Today, we are very excited to announce that Deepgram has launched the latest Summarization feature as part of our Speech Understanding Features. It uses deep learning techniques and abstractive summarization methods to generate meaningful and relevant summaries and insights from the audio data.</p>\n<h2 id="what-developers-can-do-using-summarization">What Developers Can do Using Summarization?</h2>\n<ul>\n<li>Enable agents and sales representatives to generate meaningful call summaries automatically and reduce manual effort.</li>\n<li>Help listeners identify interesting conversations through auto-generated relevant podcast previews.</li>\n<li>Enable sales coaches and leaders to navigate through a large number of calls to identify important conversations through auto generated meeting summaries to dive deep into for coaching and monitoring purposes.</li>\n<li>Make it easier for customers to extract actionable insights from conversations and key points discussed and identify calls of interest through AI generated meeting summaries.</li>\n</ul>\n<p>Summarization is one of the most challenging problems in the natural language processing and natural language generation space. It attempts to solve the problem of consuming a large amount of information by creating a meaningful, short, and relevant summary of the input text.\xA0</p>\n<p>There are primarily two methods to summarize the original text: extractive and abstractive.\xA0</p>\n<h3 id="extractive-summarization">Extractive Summarization</h3>\n<p>Extractive summarization works by extracting critical sentences from the original text, modeling the sentence\u2019s relationship, and merging selected sentences to generate an overall summary of the original text.</p>\n<h3 id="abstractive-summarization">Abstractive Summarization</h3>\n<p>In this approach, the model attempts to capture important parts of the input text and generate new sentences to convey the original text\u2019s meaning using advanced deep learning and natural language techniques.</p>\n<h2 id="how-deepgram-summarization-works">How Deepgram Summarization Works</h2>\n<p>Deepgram\u2019s Summarization feature first preprocesses the text by splitting it into logical segments. The model also respects sentence boundaries and is sensitive to the context of a sentence or utterance. Then, each input segment is fed individually through the model and the model produces a summarized version of the segment\u2019s text. The final JSON output contains a list of meaningful summaries with start and end characters\u2019 positions to identify generated summary sections from the source transcript.</p>\n<p>Summarization feature is supported for English language and pre-recorded audio and is available for both our on-premises and hosted customers.</p>\n<p>To get started with Summarization, all you need to do is add <code is:raw>summarize=true</code> in your API call.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?summarize=true&amp;punctuate=true&amp;tier=enhanced&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --header </span><span style="color: #A5D6FF">&#39;content-type: audio/mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9"> --data-binary \u2018@podcast.mp3</span><span style="color: #A5D6FF">&#39;</span></span></code></pre>\n<p>When the file is finished processing (often after only a few seconds), you\u2019ll receive a sample JSON response that has the following basic structure:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #A5D6FF">&quot;summaries&quot;</span><span style="color: #C9D1D9">: [</span></span>\n<span class="line"><span style="color: #C9D1D9">  {</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;summary&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;This episode is brought to you by levels. With levels you can see how different foods affect your health with real time feedback. The levels app interprets your glucose data and provides a simple score after you eat a meal.&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;start_word&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;end_word&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">623</span></span>\n<span class="line"><span style="color: #C9D1D9">  }</span></span></code></pre>\n<p>The outputs from the API can then be used to build downstream workflows, create meeting or call notes in pdf format, power analytics tools, or integrate with other applications.\xA0</p>\n<p>To learn more about our API, please see the Summarization page in our documentation. We welcome your feedback, please share it with us at <a href="https://deepgram.hellonext.co/b/feedback">Product Feedback</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-auto-generated-summaries-for-audio-content/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Build voice intelligence applications using our latest Summarization API, such as podcast summaries, auto-generated meeting notes, and sales call summaries, enhancing the overall end-user experience. </p>
<p>Today, we are very excited to announce that Deepgram has launched the latest Summarization feature as part of our Speech Understanding Features. It uses deep learning techniques and abstractive summarization methods to generate meaningful and relevant summaries and insights from the audio data.</p>
<h2 id="what-developers-can-do-using-summarization">What Developers Can do Using Summarization?</h2>
<ul>
<li>Enable agents and sales representatives to generate meaningful call summaries automatically and reduce manual effort.</li>
<li>Help listeners identify interesting conversations through auto-generated relevant podcast previews.</li>
<li>Enable sales coaches and leaders to navigate through a large number of calls to identify important conversations through auto generated meeting summaries to dive deep into for coaching and monitoring purposes.</li>
<li>Make it easier for customers to extract actionable insights from conversations and key points discussed and identify calls of interest through AI generated meeting summaries.</li>
</ul>
<p>Summarization is one of the most challenging problems in the natural language processing and natural language generation space. It attempts to solve the problem of consuming a large amount of information by creating a meaningful, short, and relevant summary of the input text. </p>
<p>There are primarily two methods to summarize the original text: extractive and abstractive. </p>
<h3 id="extractive-summarization">Extractive Summarization</h3>
<p>Extractive summarization works by extracting critical sentences from the original text, modeling the sentence’s relationship, and merging selected sentences to generate an overall summary of the original text.</p>
<h3 id="abstractive-summarization">Abstractive Summarization</h3>
<p>In this approach, the model attempts to capture important parts of the input text and generate new sentences to convey the original text’s meaning using advanced deep learning and natural language techniques.</p>
<h2 id="how-deepgram-summarization-works">How Deepgram Summarization Works</h2>
<p>Deepgram’s Summarization feature first preprocesses the text by splitting it into logical segments. The model also respects sentence boundaries and is sensitive to the context of a sentence or utterance. Then, each input segment is fed individually through the model and the model produces a summarized version of the segment’s text. The final JSON output contains a list of meaningful summaries with start and end characters’ positions to identify generated summary sections from the source transcript.</p>
<p>Summarization feature is supported for English language and pre-recorded audio and is available for both our on-premises and hosted customers.</p>
<p>To get started with Summarization, all you need to do is add <code>summarize=true</code> in your API call.</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">curl \\</span></span>
<span class="line"><span style="color: #C9D1D9"> --request POST \\</span></span>
<span class="line"><span style="color: #C9D1D9"> --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?summarize=true&amp;punctuate=true&amp;tier=enhanced&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9"> --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9"> --header </span><span style="color: #A5D6FF">&#39;content-type: audio/mp3&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9"> --data-binary ‘@podcast.mp3</span><span style="color: #A5D6FF">&#39;</span></span></code></pre>
<p>When the file is finished processing (often after only a few seconds), you’ll receive a sample JSON response that has the following basic structure:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #A5D6FF">&quot;summaries&quot;</span><span style="color: #C9D1D9">: [</span></span>
<span class="line"><span style="color: #C9D1D9">  {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;summary&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;This episode is brought to you by levels. With levels you can see how different foods affect your health with real time feedback. The levels app interprets your glucose data and provides a simple score after you eat a meal.&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;start_word&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">0</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #7EE787">&quot;end_word&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">623</span></span>
<span class="line"><span style="color: #C9D1D9">  }</span></span></code></pre>
<p>The outputs from the API can then be used to build downstream workflows, create meeting or call notes in pdf format, power analytics tools, or integrate with other applications. </p>
<p>To learn more about our API, please see the Summarization page in our documentation. We welcome your feedback, please share it with us at <a href="https://deepgram.hellonext.co/b/feedback">Product Feedback</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-auto-generated-summaries-for-audio-content/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };