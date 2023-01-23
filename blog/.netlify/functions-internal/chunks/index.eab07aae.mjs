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

const metadata = { "headings": [{ "depth": 3, "slug": "speech-recognition-is-hard", "text": "Speech recognition is hard." }, { "depth": 3, "slug": "can-audio-search-work-well", "text": "Can audio search work well?" }, { "depth": 3, "slug": "use-the-way-words-sound", "text": "Use the way words sound" }], "source": `![](https://res.cloudinary.com/deepgram/image/upload/v1661721060/blog/search-through-sound-finding-phrases-in-audio/Screen-Shot-2016-01-25-at-7-42-58-PM.png)

My Co-Founder and I were kicking around the idea of a search engine that would let a person find phrases in a block of audio. We were looking for something that could peer into interviews, podcasts, video lectures\u200A-\u200Athings like that. And if it was done right, you would be able to search through many seasons of a certain TV show and find all the crucial moments like, "You're fired!". We thought, *'This has to exist, right?'*. Surprisingly, no. There wasn't a company out there that really provided the functionality. Certainly not in a way that was useful to us, at least. So we started hacking together a Google-based transcription to see if we can get a barebones prototype going. In a couple days it was running\u200A-\u200A*search for something,* and *most of the time* you got it. Huge pat on the back, right?

### Speech recognition is hard.

Reality hit us when we noticed a problem. Sometimes the phrase was definitely spoken-you could hear it plain as day in the audio stream-but the search missed it. It turns out this is due to the inaccuracy of automatic speech transcription software. We went on a quest to get our hands on some top quality speech recognition bad-assery. What we were met with was another dose of reality; *speech recognition is hard*. More evidence emerges when you dig into the current audio research scene and notice that this topic is still a very active topic. The big tech companies (Google, Microsoft, Apple, etc.) put forth large efforts to get this sort of thing right. Even after that, you generally only get 90% word accuracy. That's on very clean, well recorded speech. With input sources containing conversational speech of questionable quality-say, YouTube videos-the word error rate get pretty bad (more than half is wrong sometimes!).

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

### Can audio search work well?

This got us wondering, *'can we improve the audio search situation?'*. We landed on something we think is pretty good- search based on how a phrase sounds, not on the precise spelling in text. We were sure this would provide better results but we weren't sure just how much better it would be. We dug into research to see if this technique had been tried in a production form. We turned up quite a few papers-most were not totally relevant-but a Google academic paper on searching through political speeches from 2008 was striking. *'What was their method?'*, you might wonder. They used just regular old text transcription with no additional incorporation of the way the audio actually sounded. Bummer, right?

### Use the way words sound

What we were stumbling across was what speech researchers call **keyword search**. There is an existing method for doing this called acoustic keyword spotting, but that requires reprocessing the data every time for each and every search\u200A-\u200Athat's totally impractical. So, yeah, applying this idea is a fairly difficult problem. We didn't really know just how hard at the time, but we know now (eight months of coding our first search engine and starting a company along the way helps beat that into you). [Our API](https://developers.deepgram.com/) allows you to upload audio and have the server process that audio into a giant searchable lattice. With a lattice like this, you can fuzzily go through the entire audio file for your search phrase in a fraction of a second. There is a huge improvement using this method when compared to the text-based approach\u200A-\u200Asearch recall goes from a tepid 45% to a grin-inducing 90%+. Now we have our secret sauce.

- - -

***A year and a half after writing this post, NVIDIA's Jensen Huang demonstrated the power of our search on stage at GTC China:***

<iframe src="https://www.youtube.com/embed/1SxygN_MODg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`, "html": '<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661721060/blog/search-through-sound-finding-phrases-in-audio/Screen-Shot-2016-01-25-at-7-42-58-PM.png" alt=""></p>\n<p>My Co-Founder and I were kicking around the idea of a search engine that would let a person find phrases in a block of audio. We were looking for something that could peer into interviews, podcasts, video lectures\u200A-\u200Athings like that. And if it was done right, you would be able to search through many seasons of a certain TV show and find all the crucial moments like, \u201CYou\u2019re fired!\u201C. We thought, <em>\u2018This has to exist, right?\u2019</em>. Surprisingly, no. There wasn\u2019t a company out there that really provided the functionality. Certainly not in a way that was useful to us, at least. So we started hacking together a Google-based transcription to see if we can get a barebones prototype going. In a couple days it was running\u200A-\u200A<em>search for something,</em> and <em>most of the time</em> you got it. Huge pat on the back, right?</p>\n<h3 id="speech-recognition-is-hard">Speech recognition is hard.</h3>\n<p>Reality hit us when we noticed a problem. Sometimes the phrase was definitely spoken-you could hear it plain as day in the audio stream-but the search missed it. It turns out this is due to the inaccuracy of automatic speech transcription software. We went on a quest to get our hands on some top quality speech recognition bad-assery. What we were met with was another dose of reality; <em>speech recognition is hard</em>. More evidence emerges when you dig into the current audio research scene and notice that this topic is still a very active topic. The big tech companies (Google, Microsoft, Apple, etc.) put forth large efforts to get this sort of thing right. Even after that, you generally only get 90% word accuracy. That\u2019s on very clean, well recorded speech. With input sources containing conversational speech of questionable quality-say, YouTube videos-the word error rate get pretty bad (more than half is wrong sometimes!).</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h3 id="can-audio-search-work-well">Can audio search work well?</h3>\n<p>This got us wondering, <em>\u2018can we improve the audio search situation?\u2019</em>. We landed on something we think is pretty good- search based on how a phrase sounds, not on the precise spelling in text. We were sure this would provide better results but we weren\u2019t sure just how much better it would be. We dug into research to see if this technique had been tried in a production form. We turned up quite a few papers-most were not totally relevant-but a Google academic paper on searching through political speeches from 2008 was striking. <em>\u2018What was their method?\u2019</em>, you might wonder. They used just regular old text transcription with no additional incorporation of the way the audio actually sounded. Bummer, right?</p>\n<h3 id="use-the-way-words-sound">Use the way words sound</h3>\n<p>What we were stumbling across was what speech researchers call <strong>keyword search</strong>. There is an existing method for doing this called acoustic keyword spotting, but that requires reprocessing the data every time for each and every search\u200A-\u200Athat\u2019s totally impractical. So, yeah, applying this idea is a fairly difficult problem. We didn\u2019t really know just how hard at the time, but we know now (eight months of coding our first search engine and starting a company along the way helps beat that into you). <a href="https://developers.deepgram.com/">Our API</a> allows you to upload audio and have the server process that audio into a giant searchable lattice. With a lattice like this, you can fuzzily go through the entire audio file for your search phrase in a fraction of a second. There is a huge improvement using this method when compared to the text-based approach\u200A-\u200Asearch recall goes from a tepid 45% to a grin-inducing 90%+. Now we have our secret sauce.</p>\n<hr>\n<p><em><strong>A year and a half after writing this post, NVIDIA\u2019s Jensen Huang demonstrated the power of our search on stage at GTC China:</strong></em></p>\n<iframe src="https://www.youtube.com/embed/1SxygN_MODg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />' };
const frontmatter = { "title": "Search Through Sound: Finding Phrases in Audio", "description": "Searching through audio is now a reality with Deepgram's ability to find specific phrases in audio.", "date": "2016-01-07T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981169/blog/search-through-sound-finding-phrases-in-audio/search-through-sound%402x.jpg", "authors": ["scott-stephenson"], "category": "dg-insider", "tags": ["search"], "seo": { "title": "Search Through Sound: Finding Phrases in Audio", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981169/blog/search-through-sound-finding-phrases-in-audio/search-through-sound%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/933768f", "twitter": "https://dpgr.am/23223ba", "linkedin": "https://dpgr.am/15d0c34", "reddit": "https://dpgr.am/b782bb0", "facebook": "https://dpgr.am/47817dc" }, "astro": { "headings": [{ "depth": 3, "slug": "speech-recognition-is-hard", "text": "Speech recognition is hard." }, { "depth": 3, "slug": "can-audio-search-work-well", "text": "Can audio search work well?" }, { "depth": 3, "slug": "use-the-way-words-sound", "text": "Use the way words sound" }], "source": `![](https://res.cloudinary.com/deepgram/image/upload/v1661721060/blog/search-through-sound-finding-phrases-in-audio/Screen-Shot-2016-01-25-at-7-42-58-PM.png)

My Co-Founder and I were kicking around the idea of a search engine that would let a person find phrases in a block of audio. We were looking for something that could peer into interviews, podcasts, video lectures\u200A-\u200Athings like that. And if it was done right, you would be able to search through many seasons of a certain TV show and find all the crucial moments like, "You're fired!". We thought, *'This has to exist, right?'*. Surprisingly, no. There wasn't a company out there that really provided the functionality. Certainly not in a way that was useful to us, at least. So we started hacking together a Google-based transcription to see if we can get a barebones prototype going. In a couple days it was running\u200A-\u200A*search for something,* and *most of the time* you got it. Huge pat on the back, right?

### Speech recognition is hard.

Reality hit us when we noticed a problem. Sometimes the phrase was definitely spoken-you could hear it plain as day in the audio stream-but the search missed it. It turns out this is due to the inaccuracy of automatic speech transcription software. We went on a quest to get our hands on some top quality speech recognition bad-assery. What we were met with was another dose of reality; *speech recognition is hard*. More evidence emerges when you dig into the current audio research scene and notice that this topic is still a very active topic. The big tech companies (Google, Microsoft, Apple, etc.) put forth large efforts to get this sort of thing right. Even after that, you generally only get 90% word accuracy. That's on very clean, well recorded speech. With input sources containing conversational speech of questionable quality-say, YouTube videos-the word error rate get pretty bad (more than half is wrong sometimes!).

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

### Can audio search work well?

This got us wondering, *'can we improve the audio search situation?'*. We landed on something we think is pretty good- search based on how a phrase sounds, not on the precise spelling in text. We were sure this would provide better results but we weren't sure just how much better it would be. We dug into research to see if this technique had been tried in a production form. We turned up quite a few papers-most were not totally relevant-but a Google academic paper on searching through political speeches from 2008 was striking. *'What was their method?'*, you might wonder. They used just regular old text transcription with no additional incorporation of the way the audio actually sounded. Bummer, right?

### Use the way words sound

What we were stumbling across was what speech researchers call **keyword search**. There is an existing method for doing this called acoustic keyword spotting, but that requires reprocessing the data every time for each and every search\u200A-\u200Athat's totally impractical. So, yeah, applying this idea is a fairly difficult problem. We didn't really know just how hard at the time, but we know now (eight months of coding our first search engine and starting a company along the way helps beat that into you). [Our API](https://developers.deepgram.com/) allows you to upload audio and have the server process that audio into a giant searchable lattice. With a lattice like this, you can fuzzily go through the entire audio file for your search phrase in a fraction of a second. There is a huge improvement using this method when compared to the text-based approach\u200A-\u200Asearch recall goes from a tepid 45% to a grin-inducing 90%+. Now we have our secret sauce.

- - -

***A year and a half after writing this post, NVIDIA's Jensen Huang demonstrated the power of our search on stage at GTC China:***

<iframe src="https://www.youtube.com/embed/1SxygN_MODg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`, "html": '<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661721060/blog/search-through-sound-finding-phrases-in-audio/Screen-Shot-2016-01-25-at-7-42-58-PM.png" alt=""></p>\n<p>My Co-Founder and I were kicking around the idea of a search engine that would let a person find phrases in a block of audio. We were looking for something that could peer into interviews, podcasts, video lectures\u200A-\u200Athings like that. And if it was done right, you would be able to search through many seasons of a certain TV show and find all the crucial moments like, \u201CYou\u2019re fired!\u201C. We thought, <em>\u2018This has to exist, right?\u2019</em>. Surprisingly, no. There wasn\u2019t a company out there that really provided the functionality. Certainly not in a way that was useful to us, at least. So we started hacking together a Google-based transcription to see if we can get a barebones prototype going. In a couple days it was running\u200A-\u200A<em>search for something,</em> and <em>most of the time</em> you got it. Huge pat on the back, right?</p>\n<h3 id="speech-recognition-is-hard">Speech recognition is hard.</h3>\n<p>Reality hit us when we noticed a problem. Sometimes the phrase was definitely spoken-you could hear it plain as day in the audio stream-but the search missed it. It turns out this is due to the inaccuracy of automatic speech transcription software. We went on a quest to get our hands on some top quality speech recognition bad-assery. What we were met with was another dose of reality; <em>speech recognition is hard</em>. More evidence emerges when you dig into the current audio research scene and notice that this topic is still a very active topic. The big tech companies (Google, Microsoft, Apple, etc.) put forth large efforts to get this sort of thing right. Even after that, you generally only get 90% word accuracy. That\u2019s on very clean, well recorded speech. With input sources containing conversational speech of questionable quality-say, YouTube videos-the word error rate get pretty bad (more than half is wrong sometimes!).</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h3 id="can-audio-search-work-well">Can audio search work well?</h3>\n<p>This got us wondering, <em>\u2018can we improve the audio search situation?\u2019</em>. We landed on something we think is pretty good- search based on how a phrase sounds, not on the precise spelling in text. We were sure this would provide better results but we weren\u2019t sure just how much better it would be. We dug into research to see if this technique had been tried in a production form. We turned up quite a few papers-most were not totally relevant-but a Google academic paper on searching through political speeches from 2008 was striking. <em>\u2018What was their method?\u2019</em>, you might wonder. They used just regular old text transcription with no additional incorporation of the way the audio actually sounded. Bummer, right?</p>\n<h3 id="use-the-way-words-sound">Use the way words sound</h3>\n<p>What we were stumbling across was what speech researchers call <strong>keyword search</strong>. There is an existing method for doing this called acoustic keyword spotting, but that requires reprocessing the data every time for each and every search\u200A-\u200Athat\u2019s totally impractical. So, yeah, applying this idea is a fairly difficult problem. We didn\u2019t really know just how hard at the time, but we know now (eight months of coding our first search engine and starting a company along the way helps beat that into you). <a href="https://developers.deepgram.com/">Our API</a> allows you to upload audio and have the server process that audio into a giant searchable lattice. With a lattice like this, you can fuzzily go through the entire audio file for your search phrase in a fraction of a second. There is a huge improvement using this method when compared to the text-based approach\u200A-\u200Asearch recall goes from a tepid 45% to a grin-inducing 90%+. Now we have our secret sauce.</p>\n<hr>\n<p><em><strong>A year and a half after writing this post, NVIDIA\u2019s Jensen Huang demonstrated the power of our search on stage at GTC China:</strong></em></p>\n<iframe src="https://www.youtube.com/embed/1SxygN_MODg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/search-through-sound-finding-phrases-in-audio/index.md" };
function rawContent() {
  return `![](https://res.cloudinary.com/deepgram/image/upload/v1661721060/blog/search-through-sound-finding-phrases-in-audio/Screen-Shot-2016-01-25-at-7-42-58-PM.png)

My Co-Founder and I were kicking around the idea of a search engine that would let a person find phrases in a block of audio. We were looking for something that could peer into interviews, podcasts, video lectures\u200A-\u200Athings like that. And if it was done right, you would be able to search through many seasons of a certain TV show and find all the crucial moments like, "You're fired!". We thought, *'This has to exist, right?'*. Surprisingly, no. There wasn't a company out there that really provided the functionality. Certainly not in a way that was useful to us, at least. So we started hacking together a Google-based transcription to see if we can get a barebones prototype going. In a couple days it was running\u200A-\u200A*search for something,* and *most of the time* you got it. Huge pat on the back, right?

### Speech recognition is hard.

Reality hit us when we noticed a problem. Sometimes the phrase was definitely spoken-you could hear it plain as day in the audio stream-but the search missed it. It turns out this is due to the inaccuracy of automatic speech transcription software. We went on a quest to get our hands on some top quality speech recognition bad-assery. What we were met with was another dose of reality; *speech recognition is hard*. More evidence emerges when you dig into the current audio research scene and notice that this topic is still a very active topic. The big tech companies (Google, Microsoft, Apple, etc.) put forth large efforts to get this sort of thing right. Even after that, you generally only get 90% word accuracy. That's on very clean, well recorded speech. With input sources containing conversational speech of questionable quality-say, YouTube videos-the word error rate get pretty bad (more than half is wrong sometimes!).

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

### Can audio search work well?

This got us wondering, *'can we improve the audio search situation?'*. We landed on something we think is pretty good- search based on how a phrase sounds, not on the precise spelling in text. We were sure this would provide better results but we weren't sure just how much better it would be. We dug into research to see if this technique had been tried in a production form. We turned up quite a few papers-most were not totally relevant-but a Google academic paper on searching through political speeches from 2008 was striking. *'What was their method?'*, you might wonder. They used just regular old text transcription with no additional incorporation of the way the audio actually sounded. Bummer, right?

### Use the way words sound

What we were stumbling across was what speech researchers call **keyword search**. There is an existing method for doing this called acoustic keyword spotting, but that requires reprocessing the data every time for each and every search\u200A-\u200Athat's totally impractical. So, yeah, applying this idea is a fairly difficult problem. We didn't really know just how hard at the time, but we know now (eight months of coding our first search engine and starting a company along the way helps beat that into you). [Our API](https://developers.deepgram.com/) allows you to upload audio and have the server process that audio into a giant searchable lattice. With a lattice like this, you can fuzzily go through the entire audio file for your search phrase in a fraction of a second. There is a huge improvement using this method when compared to the text-based approach\u200A-\u200Asearch recall goes from a tepid 45% to a grin-inducing 90%+. Now we have our secret sauce.

- - -

***A year and a half after writing this post, NVIDIA's Jensen Huang demonstrated the power of our search on stage at GTC China:***

<iframe src="https://www.youtube.com/embed/1SxygN_MODg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;
}
function compiledContent() {
  return '<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661721060/blog/search-through-sound-finding-phrases-in-audio/Screen-Shot-2016-01-25-at-7-42-58-PM.png" alt=""></p>\n<p>My Co-Founder and I were kicking around the idea of a search engine that would let a person find phrases in a block of audio. We were looking for something that could peer into interviews, podcasts, video lectures\u200A-\u200Athings like that. And if it was done right, you would be able to search through many seasons of a certain TV show and find all the crucial moments like, \u201CYou\u2019re fired!\u201C. We thought, <em>\u2018This has to exist, right?\u2019</em>. Surprisingly, no. There wasn\u2019t a company out there that really provided the functionality. Certainly not in a way that was useful to us, at least. So we started hacking together a Google-based transcription to see if we can get a barebones prototype going. In a couple days it was running\u200A-\u200A<em>search for something,</em> and <em>most of the time</em> you got it. Huge pat on the back, right?</p>\n<h3 id="speech-recognition-is-hard">Speech recognition is hard.</h3>\n<p>Reality hit us when we noticed a problem. Sometimes the phrase was definitely spoken-you could hear it plain as day in the audio stream-but the search missed it. It turns out this is due to the inaccuracy of automatic speech transcription software. We went on a quest to get our hands on some top quality speech recognition bad-assery. What we were met with was another dose of reality; <em>speech recognition is hard</em>. More evidence emerges when you dig into the current audio research scene and notice that this topic is still a very active topic. The big tech companies (Google, Microsoft, Apple, etc.) put forth large efforts to get this sort of thing right. Even after that, you generally only get 90% word accuracy. That\u2019s on very clean, well recorded speech. With input sources containing conversational speech of questionable quality-say, YouTube videos-the word error rate get pretty bad (more than half is wrong sometimes!).</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h3 id="can-audio-search-work-well">Can audio search work well?</h3>\n<p>This got us wondering, <em>\u2018can we improve the audio search situation?\u2019</em>. We landed on something we think is pretty good- search based on how a phrase sounds, not on the precise spelling in text. We were sure this would provide better results but we weren\u2019t sure just how much better it would be. We dug into research to see if this technique had been tried in a production form. We turned up quite a few papers-most were not totally relevant-but a Google academic paper on searching through political speeches from 2008 was striking. <em>\u2018What was their method?\u2019</em>, you might wonder. They used just regular old text transcription with no additional incorporation of the way the audio actually sounded. Bummer, right?</p>\n<h3 id="use-the-way-words-sound">Use the way words sound</h3>\n<p>What we were stumbling across was what speech researchers call <strong>keyword search</strong>. There is an existing method for doing this called acoustic keyword spotting, but that requires reprocessing the data every time for each and every search\u200A-\u200Athat\u2019s totally impractical. So, yeah, applying this idea is a fairly difficult problem. We didn\u2019t really know just how hard at the time, but we know now (eight months of coding our first search engine and starting a company along the way helps beat that into you). <a href="https://developers.deepgram.com/">Our API</a> allows you to upload audio and have the server process that audio into a giant searchable lattice. With a lattice like this, you can fuzzily go through the entire audio file for your search phrase in a fraction of a second. There is a huge improvement using this method when compared to the text-based approach\u200A-\u200Asearch recall goes from a tepid 45% to a grin-inducing 90%+. Now we have our secret sauce.</p>\n<hr>\n<p><em><strong>A year and a half after writing this post, NVIDIA\u2019s Jensen Huang demonstrated the power of our search on stage at GTC China:</strong></em></p>\n<iframe src="https://www.youtube.com/embed/1SxygN_MODg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/search-through-sound-finding-phrases-in-audio/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661721060/blog/search-through-sound-finding-phrases-in-audio/Screen-Shot-2016-01-25-at-7-42-58-PM.png" alt=""></p>
<p>My Co-Founder and I were kicking around the idea of a search engine that would let a person find phrases in a block of audio. We were looking for something that could peer into interviews, podcasts, video lectures - things like that. And if it was done right, you would be able to search through many seasons of a certain TV show and find all the crucial moments like, “You’re fired!“. We thought, <em>‘This has to exist, right?’</em>. Surprisingly, no. There wasn’t a company out there that really provided the functionality. Certainly not in a way that was useful to us, at least. So we started hacking together a Google-based transcription to see if we can get a barebones prototype going. In a couple days it was running - <em>search for something,</em> and <em>most of the time</em> you got it. Huge pat on the back, right?</p>
<h3 id="speech-recognition-is-hard">Speech recognition is hard.</h3>
<p>Reality hit us when we noticed a problem. Sometimes the phrase was definitely spoken-you could hear it plain as day in the audio stream-but the search missed it. It turns out this is due to the inaccuracy of automatic speech transcription software. We went on a quest to get our hands on some top quality speech recognition bad-assery. What we were met with was another dose of reality; <em>speech recognition is hard</em>. More evidence emerges when you dig into the current audio research scene and notice that this topic is still a very active topic. The big tech companies (Google, Microsoft, Apple, etc.) put forth large efforts to get this sort of thing right. Even after that, you generally only get 90% word accuracy. That’s on very clean, well recorded speech. With input sources containing conversational speech of questionable quality-say, YouTube videos-the word error rate get pretty bad (more than half is wrong sometimes!).</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-how-deepgram-works" })}
<h3 id="can-audio-search-work-well">Can audio search work well?</h3>
<p>This got us wondering, <em>‘can we improve the audio search situation?’</em>. We landed on something we think is pretty good- search based on how a phrase sounds, not on the precise spelling in text. We were sure this would provide better results but we weren’t sure just how much better it would be. We dug into research to see if this technique had been tried in a production form. We turned up quite a few papers-most were not totally relevant-but a Google academic paper on searching through political speeches from 2008 was striking. <em>‘What was their method?’</em>, you might wonder. They used just regular old text transcription with no additional incorporation of the way the audio actually sounded. Bummer, right?</p>
<h3 id="use-the-way-words-sound">Use the way words sound</h3>
<p>What we were stumbling across was what speech researchers call <strong>keyword search</strong>. There is an existing method for doing this called acoustic keyword spotting, but that requires reprocessing the data every time for each and every search - that’s totally impractical. So, yeah, applying this idea is a fairly difficult problem. We didn’t really know just how hard at the time, but we know now (eight months of coding our first search engine and starting a company along the way helps beat that into you). <a href="https://developers.deepgram.com/">Our API</a> allows you to upload audio and have the server process that audio into a giant searchable lattice. With a lattice like this, you can fuzzily go through the entire audio file for your search phrase in a fraction of a second. There is a huge improvement using this method when compared to the text-based approach - search recall goes from a tepid 45% to a grin-inducing 90%+. Now we have our secret sauce.</p>
<hr>
<p><em><strong>A year and a half after writing this post, NVIDIA’s Jensen Huang demonstrated the power of our search on stage at GTC China:</strong></em></p>
<iframe src="https://www.youtube.com/embed/1SxygN_MODg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/search-through-sound-finding-phrases-in-audio/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };