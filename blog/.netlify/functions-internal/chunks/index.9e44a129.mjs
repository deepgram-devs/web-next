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

const metadata = { "headings": [{ "depth": 3, "slug": "ai-training-methods-for-speech-recognition", "text": "AI Training Methods for Speech Recognition" }, { "depth": 3, "slug": "speech-recognition-in-the-wild", "text": "Speech Recognition in the Wild" }, { "depth": 3, "slug": "great-speech-recognition-is-hard", "text": "Great Speech Recognition is Hard" }], "source": `\r
Recently there have been a number of articles published around the use of unsupervised learning for speech recognition. We asked members of our research team for their take on this type of training, and if it yields more accurate results. The short answer is No. Read further to learn why. \r
\r
### **AI Training Methods for Speech Recognition**\r
\r
Artificial intelligence (AI) and neural networks "learn" by three general methods.  As it relates to speech recognition, speech model improvement or accuracy improvement is accomplished by the following training:\r
\r
*   **Supervised** learning is when you provide your model with labeled training data sets.  Labeled training datasets comprise of both the audio AND the ground truth transcript; i.e. human transcribed text. This tells your model what features of the audio are important to learn; i.e. this audio waveform is this part of this word.  For humans, this is the same as telling a baby that the spherical object is a ball.\r
*   **Self-supervised or Unsupervised** is when you provide your model with audio and text files that are not paired. The model then "extracts" information from the audio or text and clusters the data into groups. This is effectively the same approach our human brains make by pattern matching.  The model is able to group a bunch of features but still has no idea what they relate to.  For humans, this is the same as your baby determining that all spherical objects are the same but the baby does not know they are balls.\r
*   **Semi-supervised** is a combination of supervised and unsupervised training. One approach is to perform pseudo-labeling where your model generates the labels for your unlabeled training data; e.g This phone call has a negative, neutral or positive sentiment. This is helpful when you have a vast amount of data to label. Then this labeling is validated by human transcriptionists.  If we continue our baby example, you have told the baby that the spherical object is a ball, now the baby believes all spherical objects are balls, including oranges, cocoa puffs and ladybugs. An adult then needs to help the baby and correct their misconceptions.\r
\r
### **Speech Recognition in the Wild**\r
\r
To create speech models that can survive in the wild (eg. make accurate predictions on datasets they have never encountered before) you need to have a combination of supervised and unsupervised learning techniques. Without these two approaches, models can "overfit" or become biased, making inaccurate predictions. The wide variety of audio in a business setting makes the task of speech recognition extremely difficult as uncommon words, phrases and acronyms are used across companies. When you graduate from 30 second command and control phrases (e.g. Hey Google, what time is it?) to 30 minute phone calls about "fixing your 'spotty wifi' (Spotify) premium account service," training on labeled datasets you care about becomes essential to model success. \r
\r
### **Great Speech Recognition is Hard**\r
\r
There isn't a shortcut to enterprise grade speech recognition. Having a large volume of labeled training data (audio and text) is critical to AI model success. This is why Deepgram has invested heavily not only in our [End to End Deep Neural Network](https://offers.deepgram.com/how-deepgram-works-whitepaper), [model training](https://deepgram.com/product/train/) and [API deployment capabilities](https://developers.deepgram.com/), but also focused on [data collection and labeling](https://deepgram.com/product/label/). To put this in context, we have already labeled over 200K+ hours of business audio data. That is 3x Facebook, Microsoft and 22x that of Mozilla's Common Voice public data set ([source](https://venturebeat.com/2021/05/13/soniox-taps-unsupervised-learning-to-build-speech-recognition-systems/)). Supervised, unsupervised and semi-supervised training techniques are constantly improving. At Deepgram we will continue to invest in our speech training methodologies as we know an incremental improvement to our Deep Neural Network can have an outsized impact on our customers' model performance. [Contact us](https://deepgram.com/contact-us/) to learn more about our [AI Speech Platform](https://deepgram.com/product/overview/) or check out our [careers page](https://deepgram.com/company/careers/) if you are interested in joining the team.\r
`, "html": '<p>Recently there have been a number of articles published around the use of unsupervised learning for speech recognition. We asked members of our research team for their take on this type of training, and if it yields more accurate results. The short answer is No. Read further to learn why.</p>\n<h3 id="ai-training-methods-for-speech-recognition"><strong>AI Training Methods for Speech Recognition</strong></h3>\n<p>Artificial intelligence (AI) and neural networks \u201Clearn\u201D by three general methods.  As it relates to speech recognition, speech model improvement or accuracy improvement is accomplished by the following training:</p>\n<ul>\n<li><strong>Supervised</strong> learning is when you provide your model with labeled training data sets.  Labeled training datasets comprise of both the audio AND the ground truth transcript; i.e. human transcribed text. This tells your model what features of the audio are important to learn; i.e. this audio waveform is this part of this word.  For humans, this is the same as telling a baby that the spherical object is a ball.</li>\n<li><strong>Self-supervised or Unsupervised</strong> is when you provide your model with audio and text files that are not paired. The model then \u201Cextracts\u201D information from the audio or text and clusters the data into groups. This is effectively the same approach our human brains make by pattern matching.  The model is able to group a bunch of features but still has no idea what they relate to.  For humans, this is the same as your baby determining that all spherical objects are the same but the baby does not know they are balls.</li>\n<li><strong>Semi-supervised</strong> is a combination of supervised and unsupervised training. One approach is to perform pseudo-labeling where your model generates the labels for your unlabeled training data; e.g This phone call has a negative, neutral or positive sentiment. This is helpful when you have a vast amount of data to label. Then this labeling is validated by human transcriptionists.  If we continue our baby example, you have told the baby that the spherical object is a ball, now the baby believes all spherical objects are balls, including oranges, cocoa puffs and ladybugs. An adult then needs to help the baby and correct their misconceptions.</li>\n</ul>\n<h3 id="speech-recognition-in-the-wild"><strong>Speech Recognition in the Wild</strong></h3>\n<p>To create speech models that can survive in the wild (eg. make accurate predictions on datasets they have never encountered before) you need to have a combination of supervised and unsupervised learning techniques. Without these two approaches, models can \u201Coverfit\u201D or become biased, making inaccurate predictions. The wide variety of audio in a business setting makes the task of speech recognition extremely difficult as uncommon words, phrases and acronyms are used across companies. When you graduate from 30 second command and control phrases (e.g. Hey Google, what time is it?) to 30 minute phone calls about \u201Cfixing your \u2018spotty wifi\u2019 (Spotify) premium account service,\u201D training on labeled datasets you care about becomes essential to model success.</p>\n<h3 id="great-speech-recognition-is-hard"><strong>Great Speech Recognition is Hard</strong></h3>\n<p>There isn\u2019t a shortcut to enterprise grade speech recognition. Having a large volume of labeled training data (audio and text) is critical to AI model success. This is why Deepgram has invested heavily not only in our <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">End to End Deep Neural Network</a>, <a href="https://deepgram.com/product/train/">model training</a> and <a href="https://developers.deepgram.com/">API deployment capabilities</a>, but also focused on <a href="https://deepgram.com/product/label/">data collection and labeling</a>. To put this in context, we have already labeled over 200K+ hours of business audio data. That is 3x Facebook, Microsoft and 22x that of Mozilla\u2019s Common Voice public data set (<a href="https://venturebeat.com/2021/05/13/soniox-taps-unsupervised-learning-to-build-speech-recognition-systems/">source</a>). Supervised, unsupervised and semi-supervised training techniques are constantly improving. At Deepgram we will continue to invest in our speech training methodologies as we know an incremental improvement to our Deep Neural Network can have an outsized impact on our customers\u2019 model performance. <a href="https://deepgram.com/contact-us/">Contact us</a> to learn more about our <a href="https://deepgram.com/product/overview/">AI Speech Platform</a> or check out our <a href="https://deepgram.com/company/careers/">careers page</a> if you are interested in joining the team.</p>' };
const frontmatter = { "title": "Does Unsupervised Learning Create Superior Speech Recognition?", "description": "Learn about the three major AI speech model training methods used and which method yields more accurate results.", "date": "2021-06-02T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981373/blog/does-unsupervised-learning-create-superior-speech-recognition/does-unsupervised-learning-create%402x.jpg", "authors": ["katie-byrne"], "category": "ai-and-engineering", "tags": ["speech-models", "deep-learning", "machine-learning"], "seo": { "title": "Does unsupervised learning create superior speech recognition?", "description": "Learn about the three major AI speech model training methods used and which method yields more accurate results." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981373/blog/does-unsupervised-learning-create-superior-speech-recognition/does-unsupervised-learning-create%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/cf7c30a", "twitter": "https://dpgr.am/e74f6e7", "linkedin": "https://dpgr.am/aec3d90", "reddit": "https://dpgr.am/67b5505", "facebook": "https://dpgr.am/4ab06b0" }, "astro": { "headings": [{ "depth": 3, "slug": "ai-training-methods-for-speech-recognition", "text": "AI Training Methods for Speech Recognition" }, { "depth": 3, "slug": "speech-recognition-in-the-wild", "text": "Speech Recognition in the Wild" }, { "depth": 3, "slug": "great-speech-recognition-is-hard", "text": "Great Speech Recognition is Hard" }], "source": `\r
Recently there have been a number of articles published around the use of unsupervised learning for speech recognition. We asked members of our research team for their take on this type of training, and if it yields more accurate results. The short answer is No. Read further to learn why. \r
\r
### **AI Training Methods for Speech Recognition**\r
\r
Artificial intelligence (AI) and neural networks "learn" by three general methods.  As it relates to speech recognition, speech model improvement or accuracy improvement is accomplished by the following training:\r
\r
*   **Supervised** learning is when you provide your model with labeled training data sets.  Labeled training datasets comprise of both the audio AND the ground truth transcript; i.e. human transcribed text. This tells your model what features of the audio are important to learn; i.e. this audio waveform is this part of this word.  For humans, this is the same as telling a baby that the spherical object is a ball.\r
*   **Self-supervised or Unsupervised** is when you provide your model with audio and text files that are not paired. The model then "extracts" information from the audio or text and clusters the data into groups. This is effectively the same approach our human brains make by pattern matching.  The model is able to group a bunch of features but still has no idea what they relate to.  For humans, this is the same as your baby determining that all spherical objects are the same but the baby does not know they are balls.\r
*   **Semi-supervised** is a combination of supervised and unsupervised training. One approach is to perform pseudo-labeling where your model generates the labels for your unlabeled training data; e.g This phone call has a negative, neutral or positive sentiment. This is helpful when you have a vast amount of data to label. Then this labeling is validated by human transcriptionists.  If we continue our baby example, you have told the baby that the spherical object is a ball, now the baby believes all spherical objects are balls, including oranges, cocoa puffs and ladybugs. An adult then needs to help the baby and correct their misconceptions.\r
\r
### **Speech Recognition in the Wild**\r
\r
To create speech models that can survive in the wild (eg. make accurate predictions on datasets they have never encountered before) you need to have a combination of supervised and unsupervised learning techniques. Without these two approaches, models can "overfit" or become biased, making inaccurate predictions. The wide variety of audio in a business setting makes the task of speech recognition extremely difficult as uncommon words, phrases and acronyms are used across companies. When you graduate from 30 second command and control phrases (e.g. Hey Google, what time is it?) to 30 minute phone calls about "fixing your 'spotty wifi' (Spotify) premium account service," training on labeled datasets you care about becomes essential to model success. \r
\r
### **Great Speech Recognition is Hard**\r
\r
There isn't a shortcut to enterprise grade speech recognition. Having a large volume of labeled training data (audio and text) is critical to AI model success. This is why Deepgram has invested heavily not only in our [End to End Deep Neural Network](https://offers.deepgram.com/how-deepgram-works-whitepaper), [model training](https://deepgram.com/product/train/) and [API deployment capabilities](https://developers.deepgram.com/), but also focused on [data collection and labeling](https://deepgram.com/product/label/). To put this in context, we have already labeled over 200K+ hours of business audio data. That is 3x Facebook, Microsoft and 22x that of Mozilla's Common Voice public data set ([source](https://venturebeat.com/2021/05/13/soniox-taps-unsupervised-learning-to-build-speech-recognition-systems/)). Supervised, unsupervised and semi-supervised training techniques are constantly improving. At Deepgram we will continue to invest in our speech training methodologies as we know an incremental improvement to our Deep Neural Network can have an outsized impact on our customers' model performance. [Contact us](https://deepgram.com/contact-us/) to learn more about our [AI Speech Platform](https://deepgram.com/product/overview/) or check out our [careers page](https://deepgram.com/company/careers/) if you are interested in joining the team.\r
`, "html": '<p>Recently there have been a number of articles published around the use of unsupervised learning for speech recognition. We asked members of our research team for their take on this type of training, and if it yields more accurate results. The short answer is No. Read further to learn why.</p>\n<h3 id="ai-training-methods-for-speech-recognition"><strong>AI Training Methods for Speech Recognition</strong></h3>\n<p>Artificial intelligence (AI) and neural networks \u201Clearn\u201D by three general methods.  As it relates to speech recognition, speech model improvement or accuracy improvement is accomplished by the following training:</p>\n<ul>\n<li><strong>Supervised</strong> learning is when you provide your model with labeled training data sets.  Labeled training datasets comprise of both the audio AND the ground truth transcript; i.e. human transcribed text. This tells your model what features of the audio are important to learn; i.e. this audio waveform is this part of this word.  For humans, this is the same as telling a baby that the spherical object is a ball.</li>\n<li><strong>Self-supervised or Unsupervised</strong> is when you provide your model with audio and text files that are not paired. The model then \u201Cextracts\u201D information from the audio or text and clusters the data into groups. This is effectively the same approach our human brains make by pattern matching.  The model is able to group a bunch of features but still has no idea what they relate to.  For humans, this is the same as your baby determining that all spherical objects are the same but the baby does not know they are balls.</li>\n<li><strong>Semi-supervised</strong> is a combination of supervised and unsupervised training. One approach is to perform pseudo-labeling where your model generates the labels for your unlabeled training data; e.g This phone call has a negative, neutral or positive sentiment. This is helpful when you have a vast amount of data to label. Then this labeling is validated by human transcriptionists.  If we continue our baby example, you have told the baby that the spherical object is a ball, now the baby believes all spherical objects are balls, including oranges, cocoa puffs and ladybugs. An adult then needs to help the baby and correct their misconceptions.</li>\n</ul>\n<h3 id="speech-recognition-in-the-wild"><strong>Speech Recognition in the Wild</strong></h3>\n<p>To create speech models that can survive in the wild (eg. make accurate predictions on datasets they have never encountered before) you need to have a combination of supervised and unsupervised learning techniques. Without these two approaches, models can \u201Coverfit\u201D or become biased, making inaccurate predictions. The wide variety of audio in a business setting makes the task of speech recognition extremely difficult as uncommon words, phrases and acronyms are used across companies. When you graduate from 30 second command and control phrases (e.g. Hey Google, what time is it?) to 30 minute phone calls about \u201Cfixing your \u2018spotty wifi\u2019 (Spotify) premium account service,\u201D training on labeled datasets you care about becomes essential to model success.</p>\n<h3 id="great-speech-recognition-is-hard"><strong>Great Speech Recognition is Hard</strong></h3>\n<p>There isn\u2019t a shortcut to enterprise grade speech recognition. Having a large volume of labeled training data (audio and text) is critical to AI model success. This is why Deepgram has invested heavily not only in our <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">End to End Deep Neural Network</a>, <a href="https://deepgram.com/product/train/">model training</a> and <a href="https://developers.deepgram.com/">API deployment capabilities</a>, but also focused on <a href="https://deepgram.com/product/label/">data collection and labeling</a>. To put this in context, we have already labeled over 200K+ hours of business audio data. That is 3x Facebook, Microsoft and 22x that of Mozilla\u2019s Common Voice public data set (<a href="https://venturebeat.com/2021/05/13/soniox-taps-unsupervised-learning-to-build-speech-recognition-systems/">source</a>). Supervised, unsupervised and semi-supervised training techniques are constantly improving. At Deepgram we will continue to invest in our speech training methodologies as we know an incremental improvement to our Deep Neural Network can have an outsized impact on our customers\u2019 model performance. <a href="https://deepgram.com/contact-us/">Contact us</a> to learn more about our <a href="https://deepgram.com/product/overview/">AI Speech Platform</a> or check out our <a href="https://deepgram.com/company/careers/">careers page</a> if you are interested in joining the team.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/does-unsupervised-learning-create-superior-speech-recognition/index.md" };
function rawContent() {
  return `\r
Recently there have been a number of articles published around the use of unsupervised learning for speech recognition. We asked members of our research team for their take on this type of training, and if it yields more accurate results. The short answer is No. Read further to learn why. \r
\r
### **AI Training Methods for Speech Recognition**\r
\r
Artificial intelligence (AI) and neural networks "learn" by three general methods.  As it relates to speech recognition, speech model improvement or accuracy improvement is accomplished by the following training:\r
\r
*   **Supervised** learning is when you provide your model with labeled training data sets.  Labeled training datasets comprise of both the audio AND the ground truth transcript; i.e. human transcribed text. This tells your model what features of the audio are important to learn; i.e. this audio waveform is this part of this word.  For humans, this is the same as telling a baby that the spherical object is a ball.\r
*   **Self-supervised or Unsupervised** is when you provide your model with audio and text files that are not paired. The model then "extracts" information from the audio or text and clusters the data into groups. This is effectively the same approach our human brains make by pattern matching.  The model is able to group a bunch of features but still has no idea what they relate to.  For humans, this is the same as your baby determining that all spherical objects are the same but the baby does not know they are balls.\r
*   **Semi-supervised** is a combination of supervised and unsupervised training. One approach is to perform pseudo-labeling where your model generates the labels for your unlabeled training data; e.g This phone call has a negative, neutral or positive sentiment. This is helpful when you have a vast amount of data to label. Then this labeling is validated by human transcriptionists.  If we continue our baby example, you have told the baby that the spherical object is a ball, now the baby believes all spherical objects are balls, including oranges, cocoa puffs and ladybugs. An adult then needs to help the baby and correct their misconceptions.\r
\r
### **Speech Recognition in the Wild**\r
\r
To create speech models that can survive in the wild (eg. make accurate predictions on datasets they have never encountered before) you need to have a combination of supervised and unsupervised learning techniques. Without these two approaches, models can "overfit" or become biased, making inaccurate predictions. The wide variety of audio in a business setting makes the task of speech recognition extremely difficult as uncommon words, phrases and acronyms are used across companies. When you graduate from 30 second command and control phrases (e.g. Hey Google, what time is it?) to 30 minute phone calls about "fixing your 'spotty wifi' (Spotify) premium account service," training on labeled datasets you care about becomes essential to model success. \r
\r
### **Great Speech Recognition is Hard**\r
\r
There isn't a shortcut to enterprise grade speech recognition. Having a large volume of labeled training data (audio and text) is critical to AI model success. This is why Deepgram has invested heavily not only in our [End to End Deep Neural Network](https://offers.deepgram.com/how-deepgram-works-whitepaper), [model training](https://deepgram.com/product/train/) and [API deployment capabilities](https://developers.deepgram.com/), but also focused on [data collection and labeling](https://deepgram.com/product/label/). To put this in context, we have already labeled over 200K+ hours of business audio data. That is 3x Facebook, Microsoft and 22x that of Mozilla's Common Voice public data set ([source](https://venturebeat.com/2021/05/13/soniox-taps-unsupervised-learning-to-build-speech-recognition-systems/)). Supervised, unsupervised and semi-supervised training techniques are constantly improving. At Deepgram we will continue to invest in our speech training methodologies as we know an incremental improvement to our Deep Neural Network can have an outsized impact on our customers' model performance. [Contact us](https://deepgram.com/contact-us/) to learn more about our [AI Speech Platform](https://deepgram.com/product/overview/) or check out our [careers page](https://deepgram.com/company/careers/) if you are interested in joining the team.\r
`;
}
function compiledContent() {
  return '<p>Recently there have been a number of articles published around the use of unsupervised learning for speech recognition. We asked members of our research team for their take on this type of training, and if it yields more accurate results. The short answer is No. Read further to learn why.</p>\n<h3 id="ai-training-methods-for-speech-recognition"><strong>AI Training Methods for Speech Recognition</strong></h3>\n<p>Artificial intelligence (AI) and neural networks \u201Clearn\u201D by three general methods.  As it relates to speech recognition, speech model improvement or accuracy improvement is accomplished by the following training:</p>\n<ul>\n<li><strong>Supervised</strong> learning is when you provide your model with labeled training data sets.  Labeled training datasets comprise of both the audio AND the ground truth transcript; i.e. human transcribed text. This tells your model what features of the audio are important to learn; i.e. this audio waveform is this part of this word.  For humans, this is the same as telling a baby that the spherical object is a ball.</li>\n<li><strong>Self-supervised or Unsupervised</strong> is when you provide your model with audio and text files that are not paired. The model then \u201Cextracts\u201D information from the audio or text and clusters the data into groups. This is effectively the same approach our human brains make by pattern matching.  The model is able to group a bunch of features but still has no idea what they relate to.  For humans, this is the same as your baby determining that all spherical objects are the same but the baby does not know they are balls.</li>\n<li><strong>Semi-supervised</strong> is a combination of supervised and unsupervised training. One approach is to perform pseudo-labeling where your model generates the labels for your unlabeled training data; e.g This phone call has a negative, neutral or positive sentiment. This is helpful when you have a vast amount of data to label. Then this labeling is validated by human transcriptionists.  If we continue our baby example, you have told the baby that the spherical object is a ball, now the baby believes all spherical objects are balls, including oranges, cocoa puffs and ladybugs. An adult then needs to help the baby and correct their misconceptions.</li>\n</ul>\n<h3 id="speech-recognition-in-the-wild"><strong>Speech Recognition in the Wild</strong></h3>\n<p>To create speech models that can survive in the wild (eg. make accurate predictions on datasets they have never encountered before) you need to have a combination of supervised and unsupervised learning techniques. Without these two approaches, models can \u201Coverfit\u201D or become biased, making inaccurate predictions. The wide variety of audio in a business setting makes the task of speech recognition extremely difficult as uncommon words, phrases and acronyms are used across companies. When you graduate from 30 second command and control phrases (e.g. Hey Google, what time is it?) to 30 minute phone calls about \u201Cfixing your \u2018spotty wifi\u2019 (Spotify) premium account service,\u201D training on labeled datasets you care about becomes essential to model success.</p>\n<h3 id="great-speech-recognition-is-hard"><strong>Great Speech Recognition is Hard</strong></h3>\n<p>There isn\u2019t a shortcut to enterprise grade speech recognition. Having a large volume of labeled training data (audio and text) is critical to AI model success. This is why Deepgram has invested heavily not only in our <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">End to End Deep Neural Network</a>, <a href="https://deepgram.com/product/train/">model training</a> and <a href="https://developers.deepgram.com/">API deployment capabilities</a>, but also focused on <a href="https://deepgram.com/product/label/">data collection and labeling</a>. To put this in context, we have already labeled over 200K+ hours of business audio data. That is 3x Facebook, Microsoft and 22x that of Mozilla\u2019s Common Voice public data set (<a href="https://venturebeat.com/2021/05/13/soniox-taps-unsupervised-learning-to-build-speech-recognition-systems/">source</a>). Supervised, unsupervised and semi-supervised training techniques are constantly improving. At Deepgram we will continue to invest in our speech training methodologies as we know an incremental improvement to our Deep Neural Network can have an outsized impact on our customers\u2019 model performance. <a href="https://deepgram.com/contact-us/">Contact us</a> to learn more about our <a href="https://deepgram.com/product/overview/">AI Speech Platform</a> or check out our <a href="https://deepgram.com/company/careers/">careers page</a> if you are interested in joining the team.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/does-unsupervised-learning-create-superior-speech-recognition/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Recently there have been a number of articles published around the use of unsupervised learning for speech recognition. We asked members of our research team for their take on this type of training, and if it yields more accurate results. The short answer is No. Read further to learn why.</p>
<h3 id="ai-training-methods-for-speech-recognition"><strong>AI Training Methods for Speech Recognition</strong></h3>
<p>Artificial intelligence (AI) and neural networks “learn” by three general methods.  As it relates to speech recognition, speech model improvement or accuracy improvement is accomplished by the following training:</p>
<ul>
<li><strong>Supervised</strong> learning is when you provide your model with labeled training data sets.  Labeled training datasets comprise of both the audio AND the ground truth transcript; i.e. human transcribed text. This tells your model what features of the audio are important to learn; i.e. this audio waveform is this part of this word.  For humans, this is the same as telling a baby that the spherical object is a ball.</li>
<li><strong>Self-supervised or Unsupervised</strong> is when you provide your model with audio and text files that are not paired. The model then “extracts” information from the audio or text and clusters the data into groups. This is effectively the same approach our human brains make by pattern matching.  The model is able to group a bunch of features but still has no idea what they relate to.  For humans, this is the same as your baby determining that all spherical objects are the same but the baby does not know they are balls.</li>
<li><strong>Semi-supervised</strong> is a combination of supervised and unsupervised training. One approach is to perform pseudo-labeling where your model generates the labels for your unlabeled training data; e.g This phone call has a negative, neutral or positive sentiment. This is helpful when you have a vast amount of data to label. Then this labeling is validated by human transcriptionists.  If we continue our baby example, you have told the baby that the spherical object is a ball, now the baby believes all spherical objects are balls, including oranges, cocoa puffs and ladybugs. An adult then needs to help the baby and correct their misconceptions.</li>
</ul>
<h3 id="speech-recognition-in-the-wild"><strong>Speech Recognition in the Wild</strong></h3>
<p>To create speech models that can survive in the wild (eg. make accurate predictions on datasets they have never encountered before) you need to have a combination of supervised and unsupervised learning techniques. Without these two approaches, models can “overfit” or become biased, making inaccurate predictions. The wide variety of audio in a business setting makes the task of speech recognition extremely difficult as uncommon words, phrases and acronyms are used across companies. When you graduate from 30 second command and control phrases (e.g. Hey Google, what time is it?) to 30 minute phone calls about “fixing your ‘spotty wifi’ (Spotify) premium account service,” training on labeled datasets you care about becomes essential to model success.</p>
<h3 id="great-speech-recognition-is-hard"><strong>Great Speech Recognition is Hard</strong></h3>
<p>There isn’t a shortcut to enterprise grade speech recognition. Having a large volume of labeled training data (audio and text) is critical to AI model success. This is why Deepgram has invested heavily not only in our <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">End to End Deep Neural Network</a>, <a href="https://deepgram.com/product/train/">model training</a> and <a href="https://developers.deepgram.com/">API deployment capabilities</a>, but also focused on <a href="https://deepgram.com/product/label/">data collection and labeling</a>. To put this in context, we have already labeled over 200K+ hours of business audio data. That is 3x Facebook, Microsoft and 22x that of Mozilla’s Common Voice public data set (<a href="https://venturebeat.com/2021/05/13/soniox-taps-unsupervised-learning-to-build-speech-recognition-systems/">source</a>). Supervised, unsupervised and semi-supervised training techniques are constantly improving. At Deepgram we will continue to invest in our speech training methodologies as we know an incremental improvement to our Deep Neural Network can have an outsized impact on our customers’ model performance. <a href="https://deepgram.com/contact-us/">Contact us</a> to learn more about our <a href="https://deepgram.com/product/overview/">AI Speech Platform</a> or check out our <a href="https://deepgram.com/company/careers/">careers page</a> if you are interested in joining the team.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/does-unsupervised-learning-create-superior-speech-recognition/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };