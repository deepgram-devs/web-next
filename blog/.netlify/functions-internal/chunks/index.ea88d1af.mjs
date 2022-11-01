import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../entry.mjs';
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

const metadata = { "headings": [{ "depth": 2, "slug": "introducing-the-first-automl-model-training-for-speech-recognition", "text": "Introducing the first AutoML Model Training for Speech Recognition" }, { "depth": 2, "slug": "why-automl", "text": "Why AutoML?" }, { "depth": 2, "slug": "about-deepgram-automl", "text": "About Deepgram AutoML" }, { "depth": 2, "slug": "how-deepgram-automl-works", "text": "How Deepgram AutoML works" }], "source": `Artificial intelligence has made astonishing technological advances in recent years and more companies are turning to AI to improve internal functions and unlock the potential of enterprise datasets. [IDC](https://www.cio.com/article/3519273/key-to-sustained-digital-transformation-in-2020-people.html) has characterized AI as "inescapable" and estimates that by 2025, at least 90% of new enterprise apps will embed AI. But getting to the right models to effectively power AI is hard - and especially hard for speech. Building a model is tedious, requiring multiple stages of training and refinement, and deep learning expertise is hard to find. Compound that with the endless variations of speech, lack of high-quality training data, and astronomical computing costs, it's no wonder homegrown and off-the-shelf speech recognition has been slow to succeed.

## **Introducing the first AutoML Model Training for Speech Recognition**

That's why today we're excited to announce Deepgram AutoML, a new training capability that streamlines AI model development, reducing manual cycles for data scientists while giving them the best accuracy humanly possible. With our approach organizations can deploy not only one, but 10's or 1000's of models trained to the needs of their specific company, target industries or largest customers in an automated way.

## **Why AutoML?**

AutoML is often referred to as "AI creating other AI." Rather than relying on humans to painstakingly create and hand-tune a wide variety of AI models, AutoML is a mechanism by which new AI models can be constructed and tuned automatically. While AutoML exists for NLP, image and vision, it has never been deployed for [automatic speech recognition (ASR)](https://blog.deepgram.com/what-is-asr/)-until now. As the first company to offer this innovative technology for ASR, we're furthering our mission to be the de facto speech company, offering the world's fastest, most accurate and scalable speech solution. AutoML training capabilities are one of many ways Deepgram enables customers to extract value from their audio and deliver on the vision of an AI-enabled Enterprise.

Our AutoML model training functionality is another proof point in how we continue to innovate and offer advanced solutions that far surpass what our competitors provide. With this, we're solving the challenges of building and training effective AI models, while delivering over 90% accuracy, 120 times faster delivery and at half the cost of Big Tech solutions. You can now get the best ASR solution with less hassle, time and money.

## **About Deepgram AutoML**

Our state-of-the-art AutoML for speech recognition is now available to engineers, data scientists and others looking to implement speech recognition or replace clunky ASR models that haven't worked. Deepgram AutoML utilizes GPU resources more effectively and automates processes so a speech recognition model is more effective with a smaller amount of effort. With Deepgram AutoML data scientists no longer have to:

* Select input audio features to denoise audio
* Tune hyperparameters of Hidden Markov Models or Neural Networks
* Modify underlying algorithms or architectures to maintain a custom vocabulary list
* Apply model ensembling with keyword boosting or stacking

Deepgram AutoML reduces the time and effort needed to deploy speech recognition, enabling humans to spend more cycles on overall strategy and processes to successfully integrate AI into their organization. Humans have been, and always will be, an essential part of automating speech recognition as they are the only ones who can define what accuracy means, derive intuitions about their data, and create or curate new training data. Deepgram AutoML pushes the frontier of how AI helps humans evolve next generation AI.

## **How Deepgram AutoML works**

Customers first begin by selecting a specific audio source. Next, they select a Deepgram base model to use: general, phone call or meeting. Then, customers select a training method and submit their model for training. After the model training process completes, customers review model performance (e.g., accuracy improvement). If additional gains are required, further training teaches models to recognize specific audio examples. Finally, customers select the top-performing model and with one click deploy it to cloud.

AutoML is the next frontier for artificial intelligence to allow teams to reach unprecedented levels of accuracy needed to solve business problems. We could not be more excited to be the first to provide AutoML for ASR.

Get started with [Deepgram](https://www.deepgram.com/) Beginner and Intermediate models by creating a [free account](https://try.deepgram.com/) or [contact us](https://deepgram.com/contact-us) to get started with AutoML!

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`, "html": '<p>Artificial intelligence has made astonishing technological advances in recent years and more companies are turning to AI to improve internal functions and unlock the potential of enterprise datasets. <a href="https://www.cio.com/article/3519273/key-to-sustained-digital-transformation-in-2020-people.html">IDC</a> has characterized AI as \u201Cinescapable\u201D and estimates that by 2025, at least 90% of new enterprise apps will embed AI. But getting to the right models to effectively power AI is hard - and especially hard for speech. Building a model is tedious, requiring multiple stages of training and refinement, and deep learning expertise is hard to find. Compound that with the endless variations of speech, lack of high-quality training data, and astronomical computing costs, it\u2019s no wonder homegrown and off-the-shelf speech recognition has been slow to succeed.</p>\n<h2 id="introducing-the-first-automl-model-training-for-speech-recognition"><strong>Introducing the first AutoML Model Training for Speech Recognition</strong></h2>\n<p>That\u2019s why today we\u2019re excited to announce Deepgram AutoML, a new training capability that streamlines AI model development, reducing manual cycles for data scientists while giving them the best accuracy humanly possible. With our approach organizations can deploy not only one, but 10\u2019s or 1000\u2019s of models trained to the needs of their specific company, target industries or largest customers in an automated way.</p>\n<h2 id="why-automl"><strong>Why AutoML?</strong></h2>\n<p>AutoML is often referred to as \u201CAI creating other AI.\u201D Rather than relying on humans to painstakingly create and hand-tune a wide variety of AI models, AutoML is a mechanism by which new AI models can be constructed and tuned automatically. While AutoML exists for NLP, image and vision, it has never been deployed for <a href="https://blog.deepgram.com/what-is-asr/">automatic speech recognition (ASR)</a>-until now. As the first company to offer this innovative technology for ASR, we\u2019re furthering our mission to be the de facto speech company, offering the world\u2019s fastest, most accurate and scalable speech solution. AutoML training capabilities are one of many ways Deepgram enables customers to extract value from their audio and deliver on the vision of an AI-enabled Enterprise.</p>\n<p>Our AutoML model training functionality is another proof point in how we continue to innovate and offer advanced solutions that far surpass what our competitors provide. With this, we\u2019re solving the challenges of building and training effective AI models, while delivering over 90% accuracy, 120 times faster delivery and at half the cost of Big Tech solutions. You can now get the best ASR solution with less hassle, time and money.</p>\n<h2 id="about-deepgram-automl"><strong>About Deepgram AutoML</strong></h2>\n<p>Our state-of-the-art AutoML for speech recognition is now available to engineers, data scientists and others looking to implement speech recognition or replace clunky ASR models that haven\u2019t worked. Deepgram AutoML utilizes GPU resources more effectively and automates processes so a speech recognition model is more effective with a smaller amount of effort. With Deepgram AutoML data scientists no longer have to:</p>\n<ul>\n<li>Select input audio features to denoise audio</li>\n<li>Tune hyperparameters of Hidden Markov Models or Neural Networks</li>\n<li>Modify underlying algorithms or architectures to maintain a custom vocabulary list</li>\n<li>Apply model ensembling with keyword boosting or stacking</li>\n</ul>\n<p>Deepgram AutoML reduces the time and effort needed to deploy speech recognition, enabling humans to spend more cycles on overall strategy and processes to successfully integrate AI into their organization. Humans have been, and always will be, an essential part of automating speech recognition as they are the only ones who can define what accuracy means, derive intuitions about their data, and create or curate new training data. Deepgram AutoML pushes the frontier of how AI helps humans evolve next generation AI.</p>\n<h2 id="how-deepgram-automl-works"><strong>How Deepgram AutoML works</strong></h2>\n<p>Customers first begin by selecting a specific audio source. Next, they select a Deepgram base model to use: general, phone call or meeting. Then, customers select a training method and submit their model for training. After the model training process completes, customers review model performance (e.g., accuracy improvement). If additional gains are required, further training teaches models to recognize specific audio examples. Finally, customers select the top-performing model and with one click deploy it to cloud.</p>\n<p>AutoML is the next frontier for artificial intelligence to allow teams to reach unprecedented levels of accuracy needed to solve business problems. We could not be more excited to be the first to provide AutoML for ASR.</p>\n<p>Get started with <a href="https://www.deepgram.com/">Deepgram</a> Beginner and Intermediate models by creating a <a href="https://try.deepgram.com/">free account</a> or <a href="https://deepgram.com/contact-us">contact us</a> to get started with AutoML!</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />' };
const frontmatter = { "title": "Deepgram Pioneers Novel Training Approach Setting New Standard for AI Companies", "description": "Deepgram sets a new standard for AI companies by pioneering novel training approach.", "date": "2020-08-27T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981355/blog/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/dg-pioneers-novel-training%402x.jpg", "authors": ["scott-stephenson"], "category": "product-news", "tags": ["machine-learning"], "seo": { "title": "Deepgram Pioneers Novel Training Approach Setting New Standard for AI Companies", "description": "Deepgram sets a new standard for AI companies by pioneering novel training approach." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981355/blog/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/dg-pioneers-novel-training%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/955cb45", "twitter": "https://dpgr.am/d7c00e6", "linkedin": "https://dpgr.am/a03d53c", "reddit": "https://dpgr.am/f03b590", "facebook": "https://dpgr.am/f96d435" }, "astro": { "headings": [{ "depth": 2, "slug": "introducing-the-first-automl-model-training-for-speech-recognition", "text": "Introducing the first AutoML Model Training for Speech Recognition" }, { "depth": 2, "slug": "why-automl", "text": "Why AutoML?" }, { "depth": 2, "slug": "about-deepgram-automl", "text": "About Deepgram AutoML" }, { "depth": 2, "slug": "how-deepgram-automl-works", "text": "How Deepgram AutoML works" }], "source": `Artificial intelligence has made astonishing technological advances in recent years and more companies are turning to AI to improve internal functions and unlock the potential of enterprise datasets. [IDC](https://www.cio.com/article/3519273/key-to-sustained-digital-transformation-in-2020-people.html) has characterized AI as "inescapable" and estimates that by 2025, at least 90% of new enterprise apps will embed AI. But getting to the right models to effectively power AI is hard - and especially hard for speech. Building a model is tedious, requiring multiple stages of training and refinement, and deep learning expertise is hard to find. Compound that with the endless variations of speech, lack of high-quality training data, and astronomical computing costs, it's no wonder homegrown and off-the-shelf speech recognition has been slow to succeed.

## **Introducing the first AutoML Model Training for Speech Recognition**

That's why today we're excited to announce Deepgram AutoML, a new training capability that streamlines AI model development, reducing manual cycles for data scientists while giving them the best accuracy humanly possible. With our approach organizations can deploy not only one, but 10's or 1000's of models trained to the needs of their specific company, target industries or largest customers in an automated way.

## **Why AutoML?**

AutoML is often referred to as "AI creating other AI." Rather than relying on humans to painstakingly create and hand-tune a wide variety of AI models, AutoML is a mechanism by which new AI models can be constructed and tuned automatically. While AutoML exists for NLP, image and vision, it has never been deployed for [automatic speech recognition (ASR)](https://blog.deepgram.com/what-is-asr/)-until now. As the first company to offer this innovative technology for ASR, we're furthering our mission to be the de facto speech company, offering the world's fastest, most accurate and scalable speech solution. AutoML training capabilities are one of many ways Deepgram enables customers to extract value from their audio and deliver on the vision of an AI-enabled Enterprise.

Our AutoML model training functionality is another proof point in how we continue to innovate and offer advanced solutions that far surpass what our competitors provide. With this, we're solving the challenges of building and training effective AI models, while delivering over 90% accuracy, 120 times faster delivery and at half the cost of Big Tech solutions. You can now get the best ASR solution with less hassle, time and money.

## **About Deepgram AutoML**

Our state-of-the-art AutoML for speech recognition is now available to engineers, data scientists and others looking to implement speech recognition or replace clunky ASR models that haven't worked. Deepgram AutoML utilizes GPU resources more effectively and automates processes so a speech recognition model is more effective with a smaller amount of effort. With Deepgram AutoML data scientists no longer have to:

* Select input audio features to denoise audio
* Tune hyperparameters of Hidden Markov Models or Neural Networks
* Modify underlying algorithms or architectures to maintain a custom vocabulary list
* Apply model ensembling with keyword boosting or stacking

Deepgram AutoML reduces the time and effort needed to deploy speech recognition, enabling humans to spend more cycles on overall strategy and processes to successfully integrate AI into their organization. Humans have been, and always will be, an essential part of automating speech recognition as they are the only ones who can define what accuracy means, derive intuitions about their data, and create or curate new training data. Deepgram AutoML pushes the frontier of how AI helps humans evolve next generation AI.

## **How Deepgram AutoML works**

Customers first begin by selecting a specific audio source. Next, they select a Deepgram base model to use: general, phone call or meeting. Then, customers select a training method and submit their model for training. After the model training process completes, customers review model performance (e.g., accuracy improvement). If additional gains are required, further training teaches models to recognize specific audio examples. Finally, customers select the top-performing model and with one click deploy it to cloud.

AutoML is the next frontier for artificial intelligence to allow teams to reach unprecedented levels of accuracy needed to solve business problems. We could not be more excited to be the first to provide AutoML for ASR.

Get started with [Deepgram](https://www.deepgram.com/) Beginner and Intermediate models by creating a [free account](https://try.deepgram.com/) or [contact us](https://deepgram.com/contact-us) to get started with AutoML!

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`, "html": '<p>Artificial intelligence has made astonishing technological advances in recent years and more companies are turning to AI to improve internal functions and unlock the potential of enterprise datasets. <a href="https://www.cio.com/article/3519273/key-to-sustained-digital-transformation-in-2020-people.html">IDC</a> has characterized AI as \u201Cinescapable\u201D and estimates that by 2025, at least 90% of new enterprise apps will embed AI. But getting to the right models to effectively power AI is hard - and especially hard for speech. Building a model is tedious, requiring multiple stages of training and refinement, and deep learning expertise is hard to find. Compound that with the endless variations of speech, lack of high-quality training data, and astronomical computing costs, it\u2019s no wonder homegrown and off-the-shelf speech recognition has been slow to succeed.</p>\n<h2 id="introducing-the-first-automl-model-training-for-speech-recognition"><strong>Introducing the first AutoML Model Training for Speech Recognition</strong></h2>\n<p>That\u2019s why today we\u2019re excited to announce Deepgram AutoML, a new training capability that streamlines AI model development, reducing manual cycles for data scientists while giving them the best accuracy humanly possible. With our approach organizations can deploy not only one, but 10\u2019s or 1000\u2019s of models trained to the needs of their specific company, target industries or largest customers in an automated way.</p>\n<h2 id="why-automl"><strong>Why AutoML?</strong></h2>\n<p>AutoML is often referred to as \u201CAI creating other AI.\u201D Rather than relying on humans to painstakingly create and hand-tune a wide variety of AI models, AutoML is a mechanism by which new AI models can be constructed and tuned automatically. While AutoML exists for NLP, image and vision, it has never been deployed for <a href="https://blog.deepgram.com/what-is-asr/">automatic speech recognition (ASR)</a>-until now. As the first company to offer this innovative technology for ASR, we\u2019re furthering our mission to be the de facto speech company, offering the world\u2019s fastest, most accurate and scalable speech solution. AutoML training capabilities are one of many ways Deepgram enables customers to extract value from their audio and deliver on the vision of an AI-enabled Enterprise.</p>\n<p>Our AutoML model training functionality is another proof point in how we continue to innovate and offer advanced solutions that far surpass what our competitors provide. With this, we\u2019re solving the challenges of building and training effective AI models, while delivering over 90% accuracy, 120 times faster delivery and at half the cost of Big Tech solutions. You can now get the best ASR solution with less hassle, time and money.</p>\n<h2 id="about-deepgram-automl"><strong>About Deepgram AutoML</strong></h2>\n<p>Our state-of-the-art AutoML for speech recognition is now available to engineers, data scientists and others looking to implement speech recognition or replace clunky ASR models that haven\u2019t worked. Deepgram AutoML utilizes GPU resources more effectively and automates processes so a speech recognition model is more effective with a smaller amount of effort. With Deepgram AutoML data scientists no longer have to:</p>\n<ul>\n<li>Select input audio features to denoise audio</li>\n<li>Tune hyperparameters of Hidden Markov Models or Neural Networks</li>\n<li>Modify underlying algorithms or architectures to maintain a custom vocabulary list</li>\n<li>Apply model ensembling with keyword boosting or stacking</li>\n</ul>\n<p>Deepgram AutoML reduces the time and effort needed to deploy speech recognition, enabling humans to spend more cycles on overall strategy and processes to successfully integrate AI into their organization. Humans have been, and always will be, an essential part of automating speech recognition as they are the only ones who can define what accuracy means, derive intuitions about their data, and create or curate new training data. Deepgram AutoML pushes the frontier of how AI helps humans evolve next generation AI.</p>\n<h2 id="how-deepgram-automl-works"><strong>How Deepgram AutoML works</strong></h2>\n<p>Customers first begin by selecting a specific audio source. Next, they select a Deepgram base model to use: general, phone call or meeting. Then, customers select a training method and submit their model for training. After the model training process completes, customers review model performance (e.g., accuracy improvement). If additional gains are required, further training teaches models to recognize specific audio examples. Finally, customers select the top-performing model and with one click deploy it to cloud.</p>\n<p>AutoML is the next frontier for artificial intelligence to allow teams to reach unprecedented levels of accuracy needed to solve business problems. We could not be more excited to be the first to provide AutoML for ASR.</p>\n<p>Get started with <a href="https://www.deepgram.com/">Deepgram</a> Beginner and Intermediate models by creating a <a href="https://try.deepgram.com/">free account</a> or <a href="https://deepgram.com/contact-us">contact us</a> to get started with AutoML!</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/index.md" };
function rawContent() {
  return `Artificial intelligence has made astonishing technological advances in recent years and more companies are turning to AI to improve internal functions and unlock the potential of enterprise datasets. [IDC](https://www.cio.com/article/3519273/key-to-sustained-digital-transformation-in-2020-people.html) has characterized AI as "inescapable" and estimates that by 2025, at least 90% of new enterprise apps will embed AI. But getting to the right models to effectively power AI is hard - and especially hard for speech. Building a model is tedious, requiring multiple stages of training and refinement, and deep learning expertise is hard to find. Compound that with the endless variations of speech, lack of high-quality training data, and astronomical computing costs, it's no wonder homegrown and off-the-shelf speech recognition has been slow to succeed.

## **Introducing the first AutoML Model Training for Speech Recognition**

That's why today we're excited to announce Deepgram AutoML, a new training capability that streamlines AI model development, reducing manual cycles for data scientists while giving them the best accuracy humanly possible. With our approach organizations can deploy not only one, but 10's or 1000's of models trained to the needs of their specific company, target industries or largest customers in an automated way.

## **Why AutoML?**

AutoML is often referred to as "AI creating other AI." Rather than relying on humans to painstakingly create and hand-tune a wide variety of AI models, AutoML is a mechanism by which new AI models can be constructed and tuned automatically. While AutoML exists for NLP, image and vision, it has never been deployed for [automatic speech recognition (ASR)](https://blog.deepgram.com/what-is-asr/)-until now. As the first company to offer this innovative technology for ASR, we're furthering our mission to be the de facto speech company, offering the world's fastest, most accurate and scalable speech solution. AutoML training capabilities are one of many ways Deepgram enables customers to extract value from their audio and deliver on the vision of an AI-enabled Enterprise.

Our AutoML model training functionality is another proof point in how we continue to innovate and offer advanced solutions that far surpass what our competitors provide. With this, we're solving the challenges of building and training effective AI models, while delivering over 90% accuracy, 120 times faster delivery and at half the cost of Big Tech solutions. You can now get the best ASR solution with less hassle, time and money.

## **About Deepgram AutoML**

Our state-of-the-art AutoML for speech recognition is now available to engineers, data scientists and others looking to implement speech recognition or replace clunky ASR models that haven't worked. Deepgram AutoML utilizes GPU resources more effectively and automates processes so a speech recognition model is more effective with a smaller amount of effort. With Deepgram AutoML data scientists no longer have to:

* Select input audio features to denoise audio
* Tune hyperparameters of Hidden Markov Models or Neural Networks
* Modify underlying algorithms or architectures to maintain a custom vocabulary list
* Apply model ensembling with keyword boosting or stacking

Deepgram AutoML reduces the time and effort needed to deploy speech recognition, enabling humans to spend more cycles on overall strategy and processes to successfully integrate AI into their organization. Humans have been, and always will be, an essential part of automating speech recognition as they are the only ones who can define what accuracy means, derive intuitions about their data, and create or curate new training data. Deepgram AutoML pushes the frontier of how AI helps humans evolve next generation AI.

## **How Deepgram AutoML works**

Customers first begin by selecting a specific audio source. Next, they select a Deepgram base model to use: general, phone call or meeting. Then, customers select a training method and submit their model for training. After the model training process completes, customers review model performance (e.g., accuracy improvement). If additional gains are required, further training teaches models to recognize specific audio examples. Finally, customers select the top-performing model and with one click deploy it to cloud.

AutoML is the next frontier for artificial intelligence to allow teams to reach unprecedented levels of accuracy needed to solve business problems. We could not be more excited to be the first to provide AutoML for ASR.

Get started with [Deepgram](https://www.deepgram.com/) Beginner and Intermediate models by creating a [free account](https://try.deepgram.com/) or [contact us](https://deepgram.com/contact-us) to get started with AutoML!

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`;
}
function compiledContent() {
  return '<p>Artificial intelligence has made astonishing technological advances in recent years and more companies are turning to AI to improve internal functions and unlock the potential of enterprise datasets. <a href="https://www.cio.com/article/3519273/key-to-sustained-digital-transformation-in-2020-people.html">IDC</a> has characterized AI as \u201Cinescapable\u201D and estimates that by 2025, at least 90% of new enterprise apps will embed AI. But getting to the right models to effectively power AI is hard - and especially hard for speech. Building a model is tedious, requiring multiple stages of training and refinement, and deep learning expertise is hard to find. Compound that with the endless variations of speech, lack of high-quality training data, and astronomical computing costs, it\u2019s no wonder homegrown and off-the-shelf speech recognition has been slow to succeed.</p>\n<h2 id="introducing-the-first-automl-model-training-for-speech-recognition"><strong>Introducing the first AutoML Model Training for Speech Recognition</strong></h2>\n<p>That\u2019s why today we\u2019re excited to announce Deepgram AutoML, a new training capability that streamlines AI model development, reducing manual cycles for data scientists while giving them the best accuracy humanly possible. With our approach organizations can deploy not only one, but 10\u2019s or 1000\u2019s of models trained to the needs of their specific company, target industries or largest customers in an automated way.</p>\n<h2 id="why-automl"><strong>Why AutoML?</strong></h2>\n<p>AutoML is often referred to as \u201CAI creating other AI.\u201D Rather than relying on humans to painstakingly create and hand-tune a wide variety of AI models, AutoML is a mechanism by which new AI models can be constructed and tuned automatically. While AutoML exists for NLP, image and vision, it has never been deployed for <a href="https://blog.deepgram.com/what-is-asr/">automatic speech recognition (ASR)</a>-until now. As the first company to offer this innovative technology for ASR, we\u2019re furthering our mission to be the de facto speech company, offering the world\u2019s fastest, most accurate and scalable speech solution. AutoML training capabilities are one of many ways Deepgram enables customers to extract value from their audio and deliver on the vision of an AI-enabled Enterprise.</p>\n<p>Our AutoML model training functionality is another proof point in how we continue to innovate and offer advanced solutions that far surpass what our competitors provide. With this, we\u2019re solving the challenges of building and training effective AI models, while delivering over 90% accuracy, 120 times faster delivery and at half the cost of Big Tech solutions. You can now get the best ASR solution with less hassle, time and money.</p>\n<h2 id="about-deepgram-automl"><strong>About Deepgram AutoML</strong></h2>\n<p>Our state-of-the-art AutoML for speech recognition is now available to engineers, data scientists and others looking to implement speech recognition or replace clunky ASR models that haven\u2019t worked. Deepgram AutoML utilizes GPU resources more effectively and automates processes so a speech recognition model is more effective with a smaller amount of effort. With Deepgram AutoML data scientists no longer have to:</p>\n<ul>\n<li>Select input audio features to denoise audio</li>\n<li>Tune hyperparameters of Hidden Markov Models or Neural Networks</li>\n<li>Modify underlying algorithms or architectures to maintain a custom vocabulary list</li>\n<li>Apply model ensembling with keyword boosting or stacking</li>\n</ul>\n<p>Deepgram AutoML reduces the time and effort needed to deploy speech recognition, enabling humans to spend more cycles on overall strategy and processes to successfully integrate AI into their organization. Humans have been, and always will be, an essential part of automating speech recognition as they are the only ones who can define what accuracy means, derive intuitions about their data, and create or curate new training data. Deepgram AutoML pushes the frontier of how AI helps humans evolve next generation AI.</p>\n<h2 id="how-deepgram-automl-works"><strong>How Deepgram AutoML works</strong></h2>\n<p>Customers first begin by selecting a specific audio source. Next, they select a Deepgram base model to use: general, phone call or meeting. Then, customers select a training method and submit their model for training. After the model training process completes, customers review model performance (e.g., accuracy improvement). If additional gains are required, further training teaches models to recognize specific audio examples. Finally, customers select the top-performing model and with one click deploy it to cloud.</p>\n<p>AutoML is the next frontier for artificial intelligence to allow teams to reach unprecedented levels of accuracy needed to solve business problems. We could not be more excited to be the first to provide AutoML for ASR.</p>\n<p>Get started with <a href="https://www.deepgram.com/">Deepgram</a> Beginner and Intermediate models by creating a <a href="https://try.deepgram.com/">free account</a> or <a href="https://deepgram.com/contact-us">contact us</a> to get started with AutoML!</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-pioneers-novel-training-approach-setting-new-standard-for-ai-companies-2/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Artificial intelligence has made astonishing technological advances in recent years and more companies are turning to AI to improve internal functions and unlock the potential of enterprise datasets. <a href="https://www.cio.com/article/3519273/key-to-sustained-digital-transformation-in-2020-people.html">IDC</a> has characterized AI as “inescapable” and estimates that by 2025, at least 90% of new enterprise apps will embed AI. But getting to the right models to effectively power AI is hard - and especially hard for speech. Building a model is tedious, requiring multiple stages of training and refinement, and deep learning expertise is hard to find. Compound that with the endless variations of speech, lack of high-quality training data, and astronomical computing costs, it’s no wonder homegrown and off-the-shelf speech recognition has been slow to succeed.</p>
<h2 id="introducing-the-first-automl-model-training-for-speech-recognition"><strong>Introducing the first AutoML Model Training for Speech Recognition</strong></h2>
<p>That’s why today we’re excited to announce Deepgram AutoML, a new training capability that streamlines AI model development, reducing manual cycles for data scientists while giving them the best accuracy humanly possible. With our approach organizations can deploy not only one, but 10’s or 1000’s of models trained to the needs of their specific company, target industries or largest customers in an automated way.</p>
<h2 id="why-automl"><strong>Why AutoML?</strong></h2>
<p>AutoML is often referred to as “AI creating other AI.” Rather than relying on humans to painstakingly create and hand-tune a wide variety of AI models, AutoML is a mechanism by which new AI models can be constructed and tuned automatically. While AutoML exists for NLP, image and vision, it has never been deployed for <a href="https://blog.deepgram.com/what-is-asr/">automatic speech recognition (ASR)</a>-until now. As the first company to offer this innovative technology for ASR, we’re furthering our mission to be the de facto speech company, offering the world’s fastest, most accurate and scalable speech solution. AutoML training capabilities are one of many ways Deepgram enables customers to extract value from their audio and deliver on the vision of an AI-enabled Enterprise.</p>
<p>Our AutoML model training functionality is another proof point in how we continue to innovate and offer advanced solutions that far surpass what our competitors provide. With this, we’re solving the challenges of building and training effective AI models, while delivering over 90% accuracy, 120 times faster delivery and at half the cost of Big Tech solutions. You can now get the best ASR solution with less hassle, time and money.</p>
<h2 id="about-deepgram-automl"><strong>About Deepgram AutoML</strong></h2>
<p>Our state-of-the-art AutoML for speech recognition is now available to engineers, data scientists and others looking to implement speech recognition or replace clunky ASR models that haven’t worked. Deepgram AutoML utilizes GPU resources more effectively and automates processes so a speech recognition model is more effective with a smaller amount of effort. With Deepgram AutoML data scientists no longer have to:</p>
<ul>
<li>Select input audio features to denoise audio</li>
<li>Tune hyperparameters of Hidden Markov Models or Neural Networks</li>
<li>Modify underlying algorithms or architectures to maintain a custom vocabulary list</li>
<li>Apply model ensembling with keyword boosting or stacking</li>
</ul>
<p>Deepgram AutoML reduces the time and effort needed to deploy speech recognition, enabling humans to spend more cycles on overall strategy and processes to successfully integrate AI into their organization. Humans have been, and always will be, an essential part of automating speech recognition as they are the only ones who can define what accuracy means, derive intuitions about their data, and create or curate new training data. Deepgram AutoML pushes the frontier of how AI helps humans evolve next generation AI.</p>
<h2 id="how-deepgram-automl-works"><strong>How Deepgram AutoML works</strong></h2>
<p>Customers first begin by selecting a specific audio source. Next, they select a Deepgram base model to use: general, phone call or meeting. Then, customers select a training method and submit their model for training. After the model training process completes, customers review model performance (e.g., accuracy improvement). If additional gains are required, further training teaches models to recognize specific audio examples. Finally, customers select the top-performing model and with one click deploy it to cloud.</p>
<p>AutoML is the next frontier for artificial intelligence to allow teams to reach unprecedented levels of accuracy needed to solve business problems. We could not be more excited to be the first to provide AutoML for ASR.</p>
<p>Get started with <a href="https://www.deepgram.com/">Deepgram</a> Beginner and Intermediate models by creating a <a href="https://try.deepgram.com/">free account</a> or <a href="https://deepgram.com/contact-us">contact us</a> to get started with AutoML!</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-how-deepgram-works" })}`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
