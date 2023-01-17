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

const metadata = { "headings": [], "source": "\nOpenAI's Whisper is an exciting new model for automatic speech recognition (ASR). It features a simple architecture based on [transformers](https://en.wikipedia.org/wiki/Transformer_\\(machine_learning_model\\)), the same technology that drove recent advancements in natural language processing (NLP), and was trained on 680,000 hours of audio from a wide range of languages. The result is a new leader in open-source solutions for ASR.\n\nThe researchers at [Deepgram](https://deepgram.com/) have enjoyed testing Whisper and seeing how it works, and we wanted to make it as easy as possible for you to try it out too. One of the things we've learned in our experiments is that, as with many deep-learning tools, Whisper performs best when it has access to a GPU. While [downloading and installing Whisper](https://blog.deepgram.com/how-to-run-openai-whisper-in-command-line/) may be straightforward, configuring it to properly utilize a GPU (if you have one!) is a potential roadblock.\n\nGoogle Colab provides a great preconfigured environment for trying out new tools like Whisper, so we've set up a [simple notebook](https://colab.research.google.com/drive/1ZjgNUs2r0x2A-ITG7LS2BC7J8Bo2oqt5?usp=sharing) there to let you see what Whisper can do. We set up the notebook so that you don't need anything extra to run it, you can just click through and go. The notebook will:\n\n*   Install Whisper\n*   Download audio from YouTube\n*   Transcribe that audio with Whisper\n\n    ![Whisper transcription](https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656318-8a5b0e46-70b7-4017-aff3-43339334e60d_ribevw.png)\n*   Playback the audio in segments so you can check Whisper's work\n\n    ![Audio segments](https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656477-c9112775-ae9a-414a-847e-fa823b0b9a0b_ertwwq.png)\n*   And finally... quantitatively evaluate Whisper's performance by computing the Word Error Rate (WER) for the transcription\n\nWe think the files we chose are fun, but if you have files that you want to test Whisper on, it should be easy to upload them and drop them in!\n\n[Try the Colab](https://colab.research.google.com/github/deepgram-devs/try-whisper-in-google-collab/blob/main/try_whisper_in_three_easy_steps.ipynb)\n\n", "html": '<p>OpenAI\u2019s Whisper is an exciting new model for automatic speech recognition (ASR). It features a simple architecture based on <a href="https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)">transformers</a>, the same technology that drove recent advancements in natural language processing (NLP), and was trained on 680,000 hours of audio from a wide range of languages. The result is a new leader in open-source solutions for ASR.</p>\n<p>The researchers at <a href="https://deepgram.com/">Deepgram</a> have enjoyed testing Whisper and seeing how it works, and we wanted to make it as easy as possible for you to try it out too. One of the things we\u2019ve learned in our experiments is that, as with many deep-learning tools, Whisper performs best when it has access to a GPU. While <a href="https://blog.deepgram.com/how-to-run-openai-whisper-in-command-line/">downloading and installing Whisper</a> may be straightforward, configuring it to properly utilize a GPU (if you have one!) is a potential roadblock.</p>\n<p>Google Colab provides a great preconfigured environment for trying out new tools like Whisper, so we\u2019ve set up a <a href="https://colab.research.google.com/drive/1ZjgNUs2r0x2A-ITG7LS2BC7J8Bo2oqt5?usp=sharing">simple notebook</a> there to let you see what Whisper can do. We set up the notebook so that you don\u2019t need anything extra to run it, you can just click through and go. The notebook will:</p>\n<ul>\n<li>\n<p>Install Whisper</p>\n</li>\n<li>\n<p>Download audio from YouTube</p>\n</li>\n<li>\n<p>Transcribe that audio with Whisper</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656318-8a5b0e46-70b7-4017-aff3-43339334e60d_ribevw.png" alt="Whisper transcription"></p>\n</li>\n<li>\n<p>Playback the audio in segments so you can check Whisper\u2019s work</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656477-c9112775-ae9a-414a-847e-fa823b0b9a0b_ertwwq.png" alt="Audio segments"></p>\n</li>\n<li>\n<p>And finally\u2026 quantitatively evaluate Whisper\u2019s performance by computing the Word Error Rate (WER) for the transcription</p>\n</li>\n</ul>\n<p>We think the files we chose are fun, but if you have files that you want to test Whisper on, it should be easy to upload them and drop them in!</p>\n<p><a href="https://colab.research.google.com/github/deepgram-devs/try-whisper-in-google-collab/blob/main/try_whisper_in_three_easy_steps.ipynb">Try the Colab</a></p>' };
const frontmatter = { "title": "How to Run OpenAI Whisper in Google Colab", "description": "In Deepgram's newest blog, we cover how a preconfigured environment like Google Colab can support new tools like OpenAI Whisper. Learn more here!", "date": "2022-10-17T21:00:38.699Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1665154754/blog/how-to-run-openai-whisper-in-google-colab/2210-OpenAI-Whisper-in-Google-Colab-featured-1200x630_2x_fjnqcv.png", "authors": ["ross-oconnell"], "category": "tutorial", "tags": ["whisper", "colab", "machine-learning"], "shorturls": { "share": "https://dpgr.am/253fd91", "twitter": "https://dpgr.am/a8052ea", "linkedin": "https://dpgr.am/a0c5185", "reddit": "https://dpgr.am/8942ed0", "facebook": "https://dpgr.am/7dc5a4a" }, "astro": { "headings": [], "source": "\nOpenAI's Whisper is an exciting new model for automatic speech recognition (ASR). It features a simple architecture based on [transformers](https://en.wikipedia.org/wiki/Transformer_\\(machine_learning_model\\)), the same technology that drove recent advancements in natural language processing (NLP), and was trained on 680,000 hours of audio from a wide range of languages. The result is a new leader in open-source solutions for ASR.\n\nThe researchers at [Deepgram](https://deepgram.com/) have enjoyed testing Whisper and seeing how it works, and we wanted to make it as easy as possible for you to try it out too. One of the things we've learned in our experiments is that, as with many deep-learning tools, Whisper performs best when it has access to a GPU. While [downloading and installing Whisper](https://blog.deepgram.com/how-to-run-openai-whisper-in-command-line/) may be straightforward, configuring it to properly utilize a GPU (if you have one!) is a potential roadblock.\n\nGoogle Colab provides a great preconfigured environment for trying out new tools like Whisper, so we've set up a [simple notebook](https://colab.research.google.com/drive/1ZjgNUs2r0x2A-ITG7LS2BC7J8Bo2oqt5?usp=sharing) there to let you see what Whisper can do. We set up the notebook so that you don't need anything extra to run it, you can just click through and go. The notebook will:\n\n*   Install Whisper\n*   Download audio from YouTube\n*   Transcribe that audio with Whisper\n\n    ![Whisper transcription](https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656318-8a5b0e46-70b7-4017-aff3-43339334e60d_ribevw.png)\n*   Playback the audio in segments so you can check Whisper's work\n\n    ![Audio segments](https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656477-c9112775-ae9a-414a-847e-fa823b0b9a0b_ertwwq.png)\n*   And finally... quantitatively evaluate Whisper's performance by computing the Word Error Rate (WER) for the transcription\n\nWe think the files we chose are fun, but if you have files that you want to test Whisper on, it should be easy to upload them and drop them in!\n\n[Try the Colab](https://colab.research.google.com/github/deepgram-devs/try-whisper-in-google-collab/blob/main/try_whisper_in_three_easy_steps.ipynb)\n\n", "html": '<p>OpenAI\u2019s Whisper is an exciting new model for automatic speech recognition (ASR). It features a simple architecture based on <a href="https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)">transformers</a>, the same technology that drove recent advancements in natural language processing (NLP), and was trained on 680,000 hours of audio from a wide range of languages. The result is a new leader in open-source solutions for ASR.</p>\n<p>The researchers at <a href="https://deepgram.com/">Deepgram</a> have enjoyed testing Whisper and seeing how it works, and we wanted to make it as easy as possible for you to try it out too. One of the things we\u2019ve learned in our experiments is that, as with many deep-learning tools, Whisper performs best when it has access to a GPU. While <a href="https://blog.deepgram.com/how-to-run-openai-whisper-in-command-line/">downloading and installing Whisper</a> may be straightforward, configuring it to properly utilize a GPU (if you have one!) is a potential roadblock.</p>\n<p>Google Colab provides a great preconfigured environment for trying out new tools like Whisper, so we\u2019ve set up a <a href="https://colab.research.google.com/drive/1ZjgNUs2r0x2A-ITG7LS2BC7J8Bo2oqt5?usp=sharing">simple notebook</a> there to let you see what Whisper can do. We set up the notebook so that you don\u2019t need anything extra to run it, you can just click through and go. The notebook will:</p>\n<ul>\n<li>\n<p>Install Whisper</p>\n</li>\n<li>\n<p>Download audio from YouTube</p>\n</li>\n<li>\n<p>Transcribe that audio with Whisper</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656318-8a5b0e46-70b7-4017-aff3-43339334e60d_ribevw.png" alt="Whisper transcription"></p>\n</li>\n<li>\n<p>Playback the audio in segments so you can check Whisper\u2019s work</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656477-c9112775-ae9a-414a-847e-fa823b0b9a0b_ertwwq.png" alt="Audio segments"></p>\n</li>\n<li>\n<p>And finally\u2026 quantitatively evaluate Whisper\u2019s performance by computing the Word Error Rate (WER) for the transcription</p>\n</li>\n</ul>\n<p>We think the files we chose are fun, but if you have files that you want to test Whisper on, it should be easy to upload them and drop them in!</p>\n<p><a href="https://colab.research.google.com/github/deepgram-devs/try-whisper-in-google-collab/blob/main/try_whisper_in_three_easy_steps.ipynb">Try the Colab</a></p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-to-run-openai-whisper-in-google-colab/index.md" };
function rawContent() {
  return "\nOpenAI's Whisper is an exciting new model for automatic speech recognition (ASR). It features a simple architecture based on [transformers](https://en.wikipedia.org/wiki/Transformer_\\(machine_learning_model\\)), the same technology that drove recent advancements in natural language processing (NLP), and was trained on 680,000 hours of audio from a wide range of languages. The result is a new leader in open-source solutions for ASR.\n\nThe researchers at [Deepgram](https://deepgram.com/) have enjoyed testing Whisper and seeing how it works, and we wanted to make it as easy as possible for you to try it out too. One of the things we've learned in our experiments is that, as with many deep-learning tools, Whisper performs best when it has access to a GPU. While [downloading and installing Whisper](https://blog.deepgram.com/how-to-run-openai-whisper-in-command-line/) may be straightforward, configuring it to properly utilize a GPU (if you have one!) is a potential roadblock.\n\nGoogle Colab provides a great preconfigured environment for trying out new tools like Whisper, so we've set up a [simple notebook](https://colab.research.google.com/drive/1ZjgNUs2r0x2A-ITG7LS2BC7J8Bo2oqt5?usp=sharing) there to let you see what Whisper can do. We set up the notebook so that you don't need anything extra to run it, you can just click through and go. The notebook will:\n\n*   Install Whisper\n*   Download audio from YouTube\n*   Transcribe that audio with Whisper\n\n    ![Whisper transcription](https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656318-8a5b0e46-70b7-4017-aff3-43339334e60d_ribevw.png)\n*   Playback the audio in segments so you can check Whisper's work\n\n    ![Audio segments](https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656477-c9112775-ae9a-414a-847e-fa823b0b9a0b_ertwwq.png)\n*   And finally... quantitatively evaluate Whisper's performance by computing the Word Error Rate (WER) for the transcription\n\nWe think the files we chose are fun, but if you have files that you want to test Whisper on, it should be easy to upload them and drop them in!\n\n[Try the Colab](https://colab.research.google.com/github/deepgram-devs/try-whisper-in-google-collab/blob/main/try_whisper_in_three_easy_steps.ipynb)\n\n";
}
function compiledContent() {
  return '<p>OpenAI\u2019s Whisper is an exciting new model for automatic speech recognition (ASR). It features a simple architecture based on <a href="https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)">transformers</a>, the same technology that drove recent advancements in natural language processing (NLP), and was trained on 680,000 hours of audio from a wide range of languages. The result is a new leader in open-source solutions for ASR.</p>\n<p>The researchers at <a href="https://deepgram.com/">Deepgram</a> have enjoyed testing Whisper and seeing how it works, and we wanted to make it as easy as possible for you to try it out too. One of the things we\u2019ve learned in our experiments is that, as with many deep-learning tools, Whisper performs best when it has access to a GPU. While <a href="https://blog.deepgram.com/how-to-run-openai-whisper-in-command-line/">downloading and installing Whisper</a> may be straightforward, configuring it to properly utilize a GPU (if you have one!) is a potential roadblock.</p>\n<p>Google Colab provides a great preconfigured environment for trying out new tools like Whisper, so we\u2019ve set up a <a href="https://colab.research.google.com/drive/1ZjgNUs2r0x2A-ITG7LS2BC7J8Bo2oqt5?usp=sharing">simple notebook</a> there to let you see what Whisper can do. We set up the notebook so that you don\u2019t need anything extra to run it, you can just click through and go. The notebook will:</p>\n<ul>\n<li>\n<p>Install Whisper</p>\n</li>\n<li>\n<p>Download audio from YouTube</p>\n</li>\n<li>\n<p>Transcribe that audio with Whisper</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656318-8a5b0e46-70b7-4017-aff3-43339334e60d_ribevw.png" alt="Whisper transcription"></p>\n</li>\n<li>\n<p>Playback the audio in segments so you can check Whisper\u2019s work</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656477-c9112775-ae9a-414a-847e-fa823b0b9a0b_ertwwq.png" alt="Audio segments"></p>\n</li>\n<li>\n<p>And finally\u2026 quantitatively evaluate Whisper\u2019s performance by computing the Word Error Rate (WER) for the transcription</p>\n</li>\n</ul>\n<p>We think the files we chose are fun, but if you have files that you want to test Whisper on, it should be easy to upload them and drop them in!</p>\n<p><a href="https://colab.research.google.com/github/deepgram-devs/try-whisper-in-google-collab/blob/main/try_whisper_in_three_easy_steps.ipynb">Try the Colab</a></p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-to-run-openai-whisper-in-google-colab/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>OpenAI’s Whisper is an exciting new model for automatic speech recognition (ASR). It features a simple architecture based on <a href="https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)">transformers</a>, the same technology that drove recent advancements in natural language processing (NLP), and was trained on 680,000 hours of audio from a wide range of languages. The result is a new leader in open-source solutions for ASR.</p>
<p>The researchers at <a href="https://deepgram.com/">Deepgram</a> have enjoyed testing Whisper and seeing how it works, and we wanted to make it as easy as possible for you to try it out too. One of the things we’ve learned in our experiments is that, as with many deep-learning tools, Whisper performs best when it has access to a GPU. While <a href="https://blog.deepgram.com/how-to-run-openai-whisper-in-command-line/">downloading and installing Whisper</a> may be straightforward, configuring it to properly utilize a GPU (if you have one!) is a potential roadblock.</p>
<p>Google Colab provides a great preconfigured environment for trying out new tools like Whisper, so we’ve set up a <a href="https://colab.research.google.com/drive/1ZjgNUs2r0x2A-ITG7LS2BC7J8Bo2oqt5?usp=sharing">simple notebook</a> there to let you see what Whisper can do. We set up the notebook so that you don’t need anything extra to run it, you can just click through and go. The notebook will:</p>
<ul>
<li>
<p>Install Whisper</p>
</li>
<li>
<p>Download audio from YouTube</p>
</li>
<li>
<p>Transcribe that audio with Whisper</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656318-8a5b0e46-70b7-4017-aff3-43339334e60d_ribevw.png" alt="Whisper transcription"></p>
</li>
<li>
<p>Playback the audio in segments so you can check Whisper’s work</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1665177914/blog/how-to-run-openai-whisper-in-google-colab/194656477-c9112775-ae9a-414a-847e-fa823b0b9a0b_ertwwq.png" alt="Audio segments"></p>
</li>
<li>
<p>And finally… quantitatively evaluate Whisper’s performance by computing the Word Error Rate (WER) for the transcription</p>
</li>
</ul>
<p>We think the files we chose are fun, but if you have files that you want to test Whisper on, it should be easy to upload them and drop them in!</p>
<p><a href="https://colab.research.google.com/github/deepgram-devs/try-whisper-in-google-collab/blob/main/try_whisper_in_three_easy_steps.ipynb">Try the Colab</a></p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/how-to-run-openai-whisper-in-google-colab/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
