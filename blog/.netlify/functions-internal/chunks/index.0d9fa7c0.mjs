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

const metadata = { "headings": [{ "depth": 2, "slug": "what-are-idioms", "text": "What Are Idioms?" }], "source": `This is a wonderfully idiomatic way to affirm the undeniable fact that there are many things in life over which we have no control. Synonyms include such affirmations as: "That's the way life is" and "what can you do about it? Often: "whatchagonnado?"

> Example: "I got fired for stealing staplers from the stationary closet. I guess that's the way the cookie crumbles."

The phrase in question seems to have appeared in the English vernacular in the early 20th century. Like so many idiomatic phrases its origins are obscure. The music duo Billy & Lillie helped popularize the phrase with their 1960 single: "That's The Way The Cookie Crumbles (Ah So)" - evidencing the fascinating truth that Rock music has helped shape English.

 ![billy](https://res.cloudinary.com/deepgram/image/upload/v1661976805/blog/what-does-thats-the-way-the-cookie-crumbles-mean/billy-lillie-ultra-original-sweden-ep_1_61e940590d.jpg) 

It is, however, worthwhile to look at the origins of the word "cookie." Finding out just how many English words are Dutch in origin would surprise many. The word cookie, is one such word. It is related to the word "cake" which itself is a word the English speakers of the early middle ages borrowed from the Vikings. Both the word "cake" and the word "cookie" are derivatives of an older Germanic word meaning a flat, mostly unleavened, baked or fried dough food item. However, naming things-the act of saying this is this, and that is that, is powerful. For example, [in the UK "cookies" have VAT](https://www.crunch.co.uk/knowledge/tax/cake-or-biscuit-vats-the-difference/) on them, but "cakes" do not.

 ![jaffa](https://res.cloudinary.com/deepgram/image/upload/v1661976806/blog/what-does-thats-the-way-the-cookie-crumbles-mean/jaffa.jpg) 

*Is it a cake? is it a cookie? Lingustically they're arguably the same, but as far as the taxman is concerned, they're a cake-in the UK.*

Cookies and all baked goods changed in character after the 1860s when pelleted yeasts where invented. Prior to this date, and especially before the 17th century, it was hard (if not impossible) to make sweet AND leavened pastries. Much of the calories eaten in the Western world, were made of breads that looked nothing like our breads.

## What Are Idioms?

Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven't left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same. Header image: Grace Coolidge enjoys a girl scout cookie in 1923.`, "html": '<p>This is a wonderfully idiomatic way to affirm the undeniable fact that there are many things in life over which we have no control. Synonyms include such affirmations as: \u201CThat\u2019s the way life is\u201D and \u201Cwhat can you do about it? Often: \u201Cwhatchagonnado?\u201D</p>\n<blockquote>\n<p>Example: \u201CI got fired for stealing staplers from the stationary closet. I guess that\u2019s the way the cookie crumbles.\u201D</p>\n</blockquote>\n<p>The phrase in question seems to have appeared in the English vernacular in the early 20th century. Like so many idiomatic phrases its origins are obscure. The music duo Billy & Lillie helped popularize the phrase with their 1960 single: \u201CThat\u2019s The Way The Cookie Crumbles (Ah So)\u201D - evidencing the fascinating truth that Rock music has helped shape English.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976805/blog/what-does-thats-the-way-the-cookie-crumbles-mean/billy-lillie-ultra-original-sweden-ep_1_61e940590d.jpg" alt="billy"></p>\n<p>It is, however, worthwhile to look at the origins of the word \u201Ccookie.\u201D Finding out just how many English words are Dutch in origin would surprise many. The word cookie, is one such word. It is related to the word \u201Ccake\u201D which itself is a word the English speakers of the early middle ages borrowed from the Vikings. Both the word \u201Ccake\u201D and the word \u201Ccookie\u201D are derivatives of an older Germanic word meaning a flat, mostly unleavened, baked or fried dough food item. However, naming things-the act of saying this is this, and that is that, is powerful. For example, <a href="https://www.crunch.co.uk/knowledge/tax/cake-or-biscuit-vats-the-difference/">in the UK \u201Ccookies\u201D have VAT</a> on them, but \u201Ccakes\u201D do not.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976806/blog/what-does-thats-the-way-the-cookie-crumbles-mean/jaffa.jpg" alt="jaffa"></p>\n<p><em>Is it a cake? is it a cookie? Lingustically they\u2019re arguably the same, but as far as the taxman is concerned, they\u2019re a cake-in the UK.</em></p>\n<p>Cookies and all baked goods changed in character after the 1860s when pelleted yeasts where invented. Prior to this date, and especially before the 17th century, it was hard (if not impossible) to make sweet AND leavened pastries. Much of the calories eaten in the Western world, were made of breads that looked nothing like our breads.</p>\n<h2 id="what-are-idioms">What Are Idioms?</h2>\n<p>Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven\u2019t left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same. Header image: Grace Coolidge enjoys a girl scout cookie in 1923.</p>' };
const frontmatter = { "title": "That\u2019s the Way the Cookie Crumbles \u2014 What Does it Mean?", "description": `What does "that's the way the cookie crumbles" mean? Find out here!`, "date": "2019-01-28T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981341/blog/what-does-thats-the-way-the-cookie-crumbles-mean/the-way-the-cookie-crumbles%402x.jpg", "authors": ["morris-gevirtz"], "category": "linguistics", "tags": ["language"], "seo": { "title": "That\u2019s the Way the Cookie Crumbles \u2014 What Does it Mean?", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981341/blog/what-does-thats-the-way-the-cookie-crumbles-mean/the-way-the-cookie-crumbles%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/c75cdb3", "twitter": "https://dpgr.am/84926e5", "linkedin": "https://dpgr.am/d5e69d2", "reddit": "https://dpgr.am/2160c8e", "facebook": "https://dpgr.am/17ae8dc" }, "astro": { "headings": [{ "depth": 2, "slug": "what-are-idioms", "text": "What Are Idioms?" }], "source": `This is a wonderfully idiomatic way to affirm the undeniable fact that there are many things in life over which we have no control. Synonyms include such affirmations as: "That's the way life is" and "what can you do about it? Often: "whatchagonnado?"

> Example: "I got fired for stealing staplers from the stationary closet. I guess that's the way the cookie crumbles."

The phrase in question seems to have appeared in the English vernacular in the early 20th century. Like so many idiomatic phrases its origins are obscure. The music duo Billy & Lillie helped popularize the phrase with their 1960 single: "That's The Way The Cookie Crumbles (Ah So)" - evidencing the fascinating truth that Rock music has helped shape English.

 ![billy](https://res.cloudinary.com/deepgram/image/upload/v1661976805/blog/what-does-thats-the-way-the-cookie-crumbles-mean/billy-lillie-ultra-original-sweden-ep_1_61e940590d.jpg) 

It is, however, worthwhile to look at the origins of the word "cookie." Finding out just how many English words are Dutch in origin would surprise many. The word cookie, is one such word. It is related to the word "cake" which itself is a word the English speakers of the early middle ages borrowed from the Vikings. Both the word "cake" and the word "cookie" are derivatives of an older Germanic word meaning a flat, mostly unleavened, baked or fried dough food item. However, naming things-the act of saying this is this, and that is that, is powerful. For example, [in the UK "cookies" have VAT](https://www.crunch.co.uk/knowledge/tax/cake-or-biscuit-vats-the-difference/) on them, but "cakes" do not.

 ![jaffa](https://res.cloudinary.com/deepgram/image/upload/v1661976806/blog/what-does-thats-the-way-the-cookie-crumbles-mean/jaffa.jpg) 

*Is it a cake? is it a cookie? Lingustically they're arguably the same, but as far as the taxman is concerned, they're a cake-in the UK.*

Cookies and all baked goods changed in character after the 1860s when pelleted yeasts where invented. Prior to this date, and especially before the 17th century, it was hard (if not impossible) to make sweet AND leavened pastries. Much of the calories eaten in the Western world, were made of breads that looked nothing like our breads.

## What Are Idioms?

Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven't left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same. Header image: Grace Coolidge enjoys a girl scout cookie in 1923.`, "html": '<p>This is a wonderfully idiomatic way to affirm the undeniable fact that there are many things in life over which we have no control. Synonyms include such affirmations as: \u201CThat\u2019s the way life is\u201D and \u201Cwhat can you do about it? Often: \u201Cwhatchagonnado?\u201D</p>\n<blockquote>\n<p>Example: \u201CI got fired for stealing staplers from the stationary closet. I guess that\u2019s the way the cookie crumbles.\u201D</p>\n</blockquote>\n<p>The phrase in question seems to have appeared in the English vernacular in the early 20th century. Like so many idiomatic phrases its origins are obscure. The music duo Billy & Lillie helped popularize the phrase with their 1960 single: \u201CThat\u2019s The Way The Cookie Crumbles (Ah So)\u201D - evidencing the fascinating truth that Rock music has helped shape English.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976805/blog/what-does-thats-the-way-the-cookie-crumbles-mean/billy-lillie-ultra-original-sweden-ep_1_61e940590d.jpg" alt="billy"></p>\n<p>It is, however, worthwhile to look at the origins of the word \u201Ccookie.\u201D Finding out just how many English words are Dutch in origin would surprise many. The word cookie, is one such word. It is related to the word \u201Ccake\u201D which itself is a word the English speakers of the early middle ages borrowed from the Vikings. Both the word \u201Ccake\u201D and the word \u201Ccookie\u201D are derivatives of an older Germanic word meaning a flat, mostly unleavened, baked or fried dough food item. However, naming things-the act of saying this is this, and that is that, is powerful. For example, <a href="https://www.crunch.co.uk/knowledge/tax/cake-or-biscuit-vats-the-difference/">in the UK \u201Ccookies\u201D have VAT</a> on them, but \u201Ccakes\u201D do not.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976806/blog/what-does-thats-the-way-the-cookie-crumbles-mean/jaffa.jpg" alt="jaffa"></p>\n<p><em>Is it a cake? is it a cookie? Lingustically they\u2019re arguably the same, but as far as the taxman is concerned, they\u2019re a cake-in the UK.</em></p>\n<p>Cookies and all baked goods changed in character after the 1860s when pelleted yeasts where invented. Prior to this date, and especially before the 17th century, it was hard (if not impossible) to make sweet AND leavened pastries. Much of the calories eaten in the Western world, were made of breads that looked nothing like our breads.</p>\n<h2 id="what-are-idioms">What Are Idioms?</h2>\n<p>Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven\u2019t left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same. Header image: Grace Coolidge enjoys a girl scout cookie in 1923.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-thats-the-way-the-cookie-crumbles-mean/index.md" };
function rawContent() {
  return `This is a wonderfully idiomatic way to affirm the undeniable fact that there are many things in life over which we have no control. Synonyms include such affirmations as: "That's the way life is" and "what can you do about it? Often: "whatchagonnado?"

> Example: "I got fired for stealing staplers from the stationary closet. I guess that's the way the cookie crumbles."

The phrase in question seems to have appeared in the English vernacular in the early 20th century. Like so many idiomatic phrases its origins are obscure. The music duo Billy & Lillie helped popularize the phrase with their 1960 single: "That's The Way The Cookie Crumbles (Ah So)" - evidencing the fascinating truth that Rock music has helped shape English.

 ![billy](https://res.cloudinary.com/deepgram/image/upload/v1661976805/blog/what-does-thats-the-way-the-cookie-crumbles-mean/billy-lillie-ultra-original-sweden-ep_1_61e940590d.jpg) 

It is, however, worthwhile to look at the origins of the word "cookie." Finding out just how many English words are Dutch in origin would surprise many. The word cookie, is one such word. It is related to the word "cake" which itself is a word the English speakers of the early middle ages borrowed from the Vikings. Both the word "cake" and the word "cookie" are derivatives of an older Germanic word meaning a flat, mostly unleavened, baked or fried dough food item. However, naming things-the act of saying this is this, and that is that, is powerful. For example, [in the UK "cookies" have VAT](https://www.crunch.co.uk/knowledge/tax/cake-or-biscuit-vats-the-difference/) on them, but "cakes" do not.

 ![jaffa](https://res.cloudinary.com/deepgram/image/upload/v1661976806/blog/what-does-thats-the-way-the-cookie-crumbles-mean/jaffa.jpg) 

*Is it a cake? is it a cookie? Lingustically they're arguably the same, but as far as the taxman is concerned, they're a cake-in the UK.*

Cookies and all baked goods changed in character after the 1860s when pelleted yeasts where invented. Prior to this date, and especially before the 17th century, it was hard (if not impossible) to make sweet AND leavened pastries. Much of the calories eaten in the Western world, were made of breads that looked nothing like our breads.

## What Are Idioms?

Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven't left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same. Header image: Grace Coolidge enjoys a girl scout cookie in 1923.`;
}
function compiledContent() {
  return '<p>This is a wonderfully idiomatic way to affirm the undeniable fact that there are many things in life over which we have no control. Synonyms include such affirmations as: \u201CThat\u2019s the way life is\u201D and \u201Cwhat can you do about it? Often: \u201Cwhatchagonnado?\u201D</p>\n<blockquote>\n<p>Example: \u201CI got fired for stealing staplers from the stationary closet. I guess that\u2019s the way the cookie crumbles.\u201D</p>\n</blockquote>\n<p>The phrase in question seems to have appeared in the English vernacular in the early 20th century. Like so many idiomatic phrases its origins are obscure. The music duo Billy & Lillie helped popularize the phrase with their 1960 single: \u201CThat\u2019s The Way The Cookie Crumbles (Ah So)\u201D - evidencing the fascinating truth that Rock music has helped shape English.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976805/blog/what-does-thats-the-way-the-cookie-crumbles-mean/billy-lillie-ultra-original-sweden-ep_1_61e940590d.jpg" alt="billy"></p>\n<p>It is, however, worthwhile to look at the origins of the word \u201Ccookie.\u201D Finding out just how many English words are Dutch in origin would surprise many. The word cookie, is one such word. It is related to the word \u201Ccake\u201D which itself is a word the English speakers of the early middle ages borrowed from the Vikings. Both the word \u201Ccake\u201D and the word \u201Ccookie\u201D are derivatives of an older Germanic word meaning a flat, mostly unleavened, baked or fried dough food item. However, naming things-the act of saying this is this, and that is that, is powerful. For example, <a href="https://www.crunch.co.uk/knowledge/tax/cake-or-biscuit-vats-the-difference/">in the UK \u201Ccookies\u201D have VAT</a> on them, but \u201Ccakes\u201D do not.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976806/blog/what-does-thats-the-way-the-cookie-crumbles-mean/jaffa.jpg" alt="jaffa"></p>\n<p><em>Is it a cake? is it a cookie? Lingustically they\u2019re arguably the same, but as far as the taxman is concerned, they\u2019re a cake-in the UK.</em></p>\n<p>Cookies and all baked goods changed in character after the 1860s when pelleted yeasts where invented. Prior to this date, and especially before the 17th century, it was hard (if not impossible) to make sweet AND leavened pastries. Much of the calories eaten in the Western world, were made of breads that looked nothing like our breads.</p>\n<h2 id="what-are-idioms">What Are Idioms?</h2>\n<p>Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven\u2019t left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same. Header image: Grace Coolidge enjoys a girl scout cookie in 1923.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-thats-the-way-the-cookie-crumbles-mean/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>This is a wonderfully idiomatic way to affirm the undeniable fact that there are many things in life over which we have no control. Synonyms include such affirmations as: “That’s the way life is” and “what can you do about it? Often: “whatchagonnado?”</p>
<blockquote>
<p>Example: “I got fired for stealing staplers from the stationary closet. I guess that’s the way the cookie crumbles.”</p>
</blockquote>
<p>The phrase in question seems to have appeared in the English vernacular in the early 20th century. Like so many idiomatic phrases its origins are obscure. The music duo Billy & Lillie helped popularize the phrase with their 1960 single: “That’s The Way The Cookie Crumbles (Ah So)” - evidencing the fascinating truth that Rock music has helped shape English.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976805/blog/what-does-thats-the-way-the-cookie-crumbles-mean/billy-lillie-ultra-original-sweden-ep_1_61e940590d.jpg" alt="billy"></p>
<p>It is, however, worthwhile to look at the origins of the word “cookie.” Finding out just how many English words are Dutch in origin would surprise many. The word cookie, is one such word. It is related to the word “cake” which itself is a word the English speakers of the early middle ages borrowed from the Vikings. Both the word “cake” and the word “cookie” are derivatives of an older Germanic word meaning a flat, mostly unleavened, baked or fried dough food item. However, naming things-the act of saying this is this, and that is that, is powerful. For example, <a href="https://www.crunch.co.uk/knowledge/tax/cake-or-biscuit-vats-the-difference/">in the UK “cookies” have VAT</a> on them, but “cakes” do not.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976806/blog/what-does-thats-the-way-the-cookie-crumbles-mean/jaffa.jpg" alt="jaffa"></p>
<p><em>Is it a cake? is it a cookie? Lingustically they’re arguably the same, but as far as the taxman is concerned, they’re a cake-in the UK.</em></p>
<p>Cookies and all baked goods changed in character after the 1860s when pelleted yeasts where invented. Prior to this date, and especially before the 17th century, it was hard (if not impossible) to make sweet AND leavened pastries. Much of the calories eaten in the Western world, were made of breads that looked nothing like our breads.</p>
<h2 id="what-are-idioms">What Are Idioms?</h2>
<p>Idioms are phrases in language that are used to convey emotions about certain topics. They are fascinating to everyday language speakers and linguists for a couple of reasons. They exist in a space between grammar and single words-this means that they somewhat conform to grammatical rules, yet have to be learned phrase by phrase just like most words need to be learned. Idioms also preserve in them the history of how and where they came to be. Certain idioms haven’t left their villages in rural England. Others are universal. Variations in one idiom tell us about where they have been in time and place. They remind us of times long-gone and places near and far-when and where the world was different but people were the same. Header image: Grace Coolidge enjoys a girl scout cookie in 1923.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-does-thats-the-way-the-cookie-crumbles-mean/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };