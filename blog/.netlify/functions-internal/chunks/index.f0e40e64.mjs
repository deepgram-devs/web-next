import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
/* empty css                           */import 'axios';
/* empty css                          *//* empty css                           *//* empty css                          *//* empty css                              *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           *//* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [], "source": "\r\nHi! I'm Sandra Rodgers, one of Deepgram's newest additions to the Dev-Rel team. I'm joining as a Developer Experience Engineer, so I'll be focused on how to give developers the best experience using our product, documentation, SDKs, and more.\r\n\r\nI guess the most important thing to know about me is that I have two adorable, extremely ill-mannered chihuahuas. One of them will attack your feet if you walk towards me, and the other one will bark at you incessantly if you attempt to do anything at all within range of my husband. I can't figure out if their annoying quirks are due to them being rescues (and having major emotional baggage), having bad genes, or my failure as a dog-momma. Whatever the reason, it's always an interesting time at our place when we have guests over for dinner.\r\n\r\nI became a Front-End developer a few years ago after a ten-plus-year career in education. As a teacher, I primarily worked internationally, and I'm grateful for having gotten to see a lot of the world for the first decade of my professional life. Before Deepgram I worked on the User Experience and Development (UXDev) team at a fintech company here where I live in Plano, Texas. I learned a ton on that team, and I was lucky to be surrounded by some talented developers who all had unique interests in the world of front-end development. We were constantly discussing FE topics and debating different approaches to development, and it got me energized about this kind of work.\r\n\r\nHere's a fun story. Even though development is my second career, I dabbled in building for the web back when the internet was a very different place. The first website I built was sometime around 1997 or 1998. I made it on Netscape, and it was about some British indie band I was really into at the time (I went through a lot of music phases back then). To be honest, sometimes I wonder how I managed to put a website on the internet way back then, and I question if I even really did it. It's definitely not on the internet anymore. But I know for a fact that I did, because as soon as I published it I received an email from someone in Sheffield who proceeded to explain to me that my taste in British music was horrible (that's a nicer adjective than what he used), and that I should feel utter shame and self-loathing. He was definitely right about that, but luckily he turned out to be a cool dude, and he sent me a mix-tape with some great Britpop on it. And we stayed in touch and to this day we are friends. So I can honestly say that I published a website in 1998 (1997?), which I find hard to believe myself but which I know to be true because my friend from Sheffield is my proof.\r\n\r\nIf you want to know more about me, feel free to reach out on [Twitter](https://twitter.com/sandra_rodgers_). I'm super excited to be part of the Deepgram team and I can't wait to help make the dev experience a better one for all those who are part of our community!\r\n\r\n        ", "html": '<p>Hi! I\u2019m Sandra Rodgers, one of Deepgram\u2019s newest additions to the Dev-Rel team. I\u2019m joining as a Developer Experience Engineer, so I\u2019ll be focused on how to give developers the best experience using our product, documentation, SDKs, and more.</p>\n<p>I guess the most important thing to know about me is that I have two adorable, extremely ill-mannered chihuahuas. One of them will attack your feet if you walk towards me, and the other one will bark at you incessantly if you attempt to do anything at all within range of my husband. I can\u2019t figure out if their annoying quirks are due to them being rescues (and having major emotional baggage), having bad genes, or my failure as a dog-momma. Whatever the reason, it\u2019s always an interesting time at our place when we have guests over for dinner.</p>\n<p>I became a Front-End developer a few years ago after a ten-plus-year career in education. As a teacher, I primarily worked internationally, and I\u2019m grateful for having gotten to see a lot of the world for the first decade of my professional life. Before Deepgram I worked on the User Experience and Development (UXDev) team at a fintech company here where I live in Plano, Texas. I learned a ton on that team, and I was lucky to be surrounded by some talented developers who all had unique interests in the world of front-end development. We were constantly discussing FE topics and debating different approaches to development, and it got me energized about this kind of work.</p>\n<p>Here\u2019s a fun story. Even though development is my second career, I dabbled in building for the web back when the internet was a very different place. The first website I built was sometime around 1997 or 1998. I made it on Netscape, and it was about some British indie band I was really into at the time (I went through a lot of music phases back then). To be honest, sometimes I wonder how I managed to put a website on the internet way back then, and I question if I even really did it. It\u2019s definitely not on the internet anymore. But I know for a fact that I did, because as soon as I published it I received an email from someone in Sheffield who proceeded to explain to me that my taste in British music was horrible (that\u2019s a nicer adjective than what he used), and that I should feel utter shame and self-loathing. He was definitely right about that, but luckily he turned out to be a cool dude, and he sent me a mix-tape with some great Britpop on it. And we stayed in touch and to this day we are friends. So I can honestly say that I published a website in 1998 (1997?), which I find hard to believe myself but which I know to be true because my friend from Sheffield is my proof.</p>\n<p>If you want to know more about me, feel free to reach out on <a href="https://twitter.com/sandra_rodgers_">Twitter</a>. I\u2019m super excited to be part of the Deepgram team and I can\u2019t wait to help make the dev experience a better one for all those who are part of our community!</p>' };
const frontmatter = { "title": "Sandra Rodgers Joins the Developer Relations Team", "description": "Sandra Rodgers Joins the Developer Relations Team", "date": "2021-11-12T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1636482805/blog/2021/11/meet-sandra-rodgers/dog-computer-cover.jpg", "authors": ["sandra-rodgers"], "category": "devlife", "tags": ["team"], "seo": { "title": "Sandra Rodgers Joins the Developer Relations Team", "description": "Sandra Rodgers Joins the Developer Relations Team" }, "shorturls": { "share": "https://dpgr.am/0542836", "twitter": "https://dpgr.am/11162f2", "linkedin": "https://dpgr.am/d5b8118", "reddit": "https://dpgr.am/9c5854b", "facebook": "https://dpgr.am/9d362da" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661453816/blog/meet-sandra-rodgers/ograph.png" }, "astro": { "headings": [], "source": "\r\nHi! I'm Sandra Rodgers, one of Deepgram's newest additions to the Dev-Rel team. I'm joining as a Developer Experience Engineer, so I'll be focused on how to give developers the best experience using our product, documentation, SDKs, and more.\r\n\r\nI guess the most important thing to know about me is that I have two adorable, extremely ill-mannered chihuahuas. One of them will attack your feet if you walk towards me, and the other one will bark at you incessantly if you attempt to do anything at all within range of my husband. I can't figure out if their annoying quirks are due to them being rescues (and having major emotional baggage), having bad genes, or my failure as a dog-momma. Whatever the reason, it's always an interesting time at our place when we have guests over for dinner.\r\n\r\nI became a Front-End developer a few years ago after a ten-plus-year career in education. As a teacher, I primarily worked internationally, and I'm grateful for having gotten to see a lot of the world for the first decade of my professional life. Before Deepgram I worked on the User Experience and Development (UXDev) team at a fintech company here where I live in Plano, Texas. I learned a ton on that team, and I was lucky to be surrounded by some talented developers who all had unique interests in the world of front-end development. We were constantly discussing FE topics and debating different approaches to development, and it got me energized about this kind of work.\r\n\r\nHere's a fun story. Even though development is my second career, I dabbled in building for the web back when the internet was a very different place. The first website I built was sometime around 1997 or 1998. I made it on Netscape, and it was about some British indie band I was really into at the time (I went through a lot of music phases back then). To be honest, sometimes I wonder how I managed to put a website on the internet way back then, and I question if I even really did it. It's definitely not on the internet anymore. But I know for a fact that I did, because as soon as I published it I received an email from someone in Sheffield who proceeded to explain to me that my taste in British music was horrible (that's a nicer adjective than what he used), and that I should feel utter shame and self-loathing. He was definitely right about that, but luckily he turned out to be a cool dude, and he sent me a mix-tape with some great Britpop on it. And we stayed in touch and to this day we are friends. So I can honestly say that I published a website in 1998 (1997?), which I find hard to believe myself but which I know to be true because my friend from Sheffield is my proof.\r\n\r\nIf you want to know more about me, feel free to reach out on [Twitter](https://twitter.com/sandra_rodgers_). I'm super excited to be part of the Deepgram team and I can't wait to help make the dev experience a better one for all those who are part of our community!\r\n\r\n        ", "html": '<p>Hi! I\u2019m Sandra Rodgers, one of Deepgram\u2019s newest additions to the Dev-Rel team. I\u2019m joining as a Developer Experience Engineer, so I\u2019ll be focused on how to give developers the best experience using our product, documentation, SDKs, and more.</p>\n<p>I guess the most important thing to know about me is that I have two adorable, extremely ill-mannered chihuahuas. One of them will attack your feet if you walk towards me, and the other one will bark at you incessantly if you attempt to do anything at all within range of my husband. I can\u2019t figure out if their annoying quirks are due to them being rescues (and having major emotional baggage), having bad genes, or my failure as a dog-momma. Whatever the reason, it\u2019s always an interesting time at our place when we have guests over for dinner.</p>\n<p>I became a Front-End developer a few years ago after a ten-plus-year career in education. As a teacher, I primarily worked internationally, and I\u2019m grateful for having gotten to see a lot of the world for the first decade of my professional life. Before Deepgram I worked on the User Experience and Development (UXDev) team at a fintech company here where I live in Plano, Texas. I learned a ton on that team, and I was lucky to be surrounded by some talented developers who all had unique interests in the world of front-end development. We were constantly discussing FE topics and debating different approaches to development, and it got me energized about this kind of work.</p>\n<p>Here\u2019s a fun story. Even though development is my second career, I dabbled in building for the web back when the internet was a very different place. The first website I built was sometime around 1997 or 1998. I made it on Netscape, and it was about some British indie band I was really into at the time (I went through a lot of music phases back then). To be honest, sometimes I wonder how I managed to put a website on the internet way back then, and I question if I even really did it. It\u2019s definitely not on the internet anymore. But I know for a fact that I did, because as soon as I published it I received an email from someone in Sheffield who proceeded to explain to me that my taste in British music was horrible (that\u2019s a nicer adjective than what he used), and that I should feel utter shame and self-loathing. He was definitely right about that, but luckily he turned out to be a cool dude, and he sent me a mix-tape with some great Britpop on it. And we stayed in touch and to this day we are friends. So I can honestly say that I published a website in 1998 (1997?), which I find hard to believe myself but which I know to be true because my friend from Sheffield is my proof.</p>\n<p>If you want to know more about me, feel free to reach out on <a href="https://twitter.com/sandra_rodgers_">Twitter</a>. I\u2019m super excited to be part of the Deepgram team and I can\u2019t wait to help make the dev experience a better one for all those who are part of our community!</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/meet-sandra-rodgers/index.md" };
function rawContent() {
  return "\r\nHi! I'm Sandra Rodgers, one of Deepgram's newest additions to the Dev-Rel team. I'm joining as a Developer Experience Engineer, so I'll be focused on how to give developers the best experience using our product, documentation, SDKs, and more.\r\n\r\nI guess the most important thing to know about me is that I have two adorable, extremely ill-mannered chihuahuas. One of them will attack your feet if you walk towards me, and the other one will bark at you incessantly if you attempt to do anything at all within range of my husband. I can't figure out if their annoying quirks are due to them being rescues (and having major emotional baggage), having bad genes, or my failure as a dog-momma. Whatever the reason, it's always an interesting time at our place when we have guests over for dinner.\r\n\r\nI became a Front-End developer a few years ago after a ten-plus-year career in education. As a teacher, I primarily worked internationally, and I'm grateful for having gotten to see a lot of the world for the first decade of my professional life. Before Deepgram I worked on the User Experience and Development (UXDev) team at a fintech company here where I live in Plano, Texas. I learned a ton on that team, and I was lucky to be surrounded by some talented developers who all had unique interests in the world of front-end development. We were constantly discussing FE topics and debating different approaches to development, and it got me energized about this kind of work.\r\n\r\nHere's a fun story. Even though development is my second career, I dabbled in building for the web back when the internet was a very different place. The first website I built was sometime around 1997 or 1998. I made it on Netscape, and it was about some British indie band I was really into at the time (I went through a lot of music phases back then). To be honest, sometimes I wonder how I managed to put a website on the internet way back then, and I question if I even really did it. It's definitely not on the internet anymore. But I know for a fact that I did, because as soon as I published it I received an email from someone in Sheffield who proceeded to explain to me that my taste in British music was horrible (that's a nicer adjective than what he used), and that I should feel utter shame and self-loathing. He was definitely right about that, but luckily he turned out to be a cool dude, and he sent me a mix-tape with some great Britpop on it. And we stayed in touch and to this day we are friends. So I can honestly say that I published a website in 1998 (1997?), which I find hard to believe myself but which I know to be true because my friend from Sheffield is my proof.\r\n\r\nIf you want to know more about me, feel free to reach out on [Twitter](https://twitter.com/sandra_rodgers_). I'm super excited to be part of the Deepgram team and I can't wait to help make the dev experience a better one for all those who are part of our community!\r\n\r\n        ";
}
function compiledContent() {
  return '<p>Hi! I\u2019m Sandra Rodgers, one of Deepgram\u2019s newest additions to the Dev-Rel team. I\u2019m joining as a Developer Experience Engineer, so I\u2019ll be focused on how to give developers the best experience using our product, documentation, SDKs, and more.</p>\n<p>I guess the most important thing to know about me is that I have two adorable, extremely ill-mannered chihuahuas. One of them will attack your feet if you walk towards me, and the other one will bark at you incessantly if you attempt to do anything at all within range of my husband. I can\u2019t figure out if their annoying quirks are due to them being rescues (and having major emotional baggage), having bad genes, or my failure as a dog-momma. Whatever the reason, it\u2019s always an interesting time at our place when we have guests over for dinner.</p>\n<p>I became a Front-End developer a few years ago after a ten-plus-year career in education. As a teacher, I primarily worked internationally, and I\u2019m grateful for having gotten to see a lot of the world for the first decade of my professional life. Before Deepgram I worked on the User Experience and Development (UXDev) team at a fintech company here where I live in Plano, Texas. I learned a ton on that team, and I was lucky to be surrounded by some talented developers who all had unique interests in the world of front-end development. We were constantly discussing FE topics and debating different approaches to development, and it got me energized about this kind of work.</p>\n<p>Here\u2019s a fun story. Even though development is my second career, I dabbled in building for the web back when the internet was a very different place. The first website I built was sometime around 1997 or 1998. I made it on Netscape, and it was about some British indie band I was really into at the time (I went through a lot of music phases back then). To be honest, sometimes I wonder how I managed to put a website on the internet way back then, and I question if I even really did it. It\u2019s definitely not on the internet anymore. But I know for a fact that I did, because as soon as I published it I received an email from someone in Sheffield who proceeded to explain to me that my taste in British music was horrible (that\u2019s a nicer adjective than what he used), and that I should feel utter shame and self-loathing. He was definitely right about that, but luckily he turned out to be a cool dude, and he sent me a mix-tape with some great Britpop on it. And we stayed in touch and to this day we are friends. So I can honestly say that I published a website in 1998 (1997?), which I find hard to believe myself but which I know to be true because my friend from Sheffield is my proof.</p>\n<p>If you want to know more about me, feel free to reach out on <a href="https://twitter.com/sandra_rodgers_">Twitter</a>. I\u2019m super excited to be part of the Deepgram team and I can\u2019t wait to help make the dev experience a better one for all those who are part of our community!</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/meet-sandra-rodgers/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Hi! I’m Sandra Rodgers, one of Deepgram’s newest additions to the Dev-Rel team. I’m joining as a Developer Experience Engineer, so I’ll be focused on how to give developers the best experience using our product, documentation, SDKs, and more.</p>
<p>I guess the most important thing to know about me is that I have two adorable, extremely ill-mannered chihuahuas. One of them will attack your feet if you walk towards me, and the other one will bark at you incessantly if you attempt to do anything at all within range of my husband. I can’t figure out if their annoying quirks are due to them being rescues (and having major emotional baggage), having bad genes, or my failure as a dog-momma. Whatever the reason, it’s always an interesting time at our place when we have guests over for dinner.</p>
<p>I became a Front-End developer a few years ago after a ten-plus-year career in education. As a teacher, I primarily worked internationally, and I’m grateful for having gotten to see a lot of the world for the first decade of my professional life. Before Deepgram I worked on the User Experience and Development (UXDev) team at a fintech company here where I live in Plano, Texas. I learned a ton on that team, and I was lucky to be surrounded by some talented developers who all had unique interests in the world of front-end development. We were constantly discussing FE topics and debating different approaches to development, and it got me energized about this kind of work.</p>
<p>Here’s a fun story. Even though development is my second career, I dabbled in building for the web back when the internet was a very different place. The first website I built was sometime around 1997 or 1998. I made it on Netscape, and it was about some British indie band I was really into at the time (I went through a lot of music phases back then). To be honest, sometimes I wonder how I managed to put a website on the internet way back then, and I question if I even really did it. It’s definitely not on the internet anymore. But I know for a fact that I did, because as soon as I published it I received an email from someone in Sheffield who proceeded to explain to me that my taste in British music was horrible (that’s a nicer adjective than what he used), and that I should feel utter shame and self-loathing. He was definitely right about that, but luckily he turned out to be a cool dude, and he sent me a mix-tape with some great Britpop on it. And we stayed in touch and to this day we are friends. So I can honestly say that I published a website in 1998 (1997?), which I find hard to believe myself but which I know to be true because my friend from Sheffield is my proof.</p>
<p>If you want to know more about me, feel free to reach out on <a href="https://twitter.com/sandra_rodgers_">Twitter</a>. I’m super excited to be part of the Deepgram team and I can’t wait to help make the dev experience a better one for all those who are part of our community!</p>`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
