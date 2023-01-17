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

const metadata = { "headings": [{ "depth": 2, "slug": "what-is-deepgram", "text": "What is Deepgram?" }, { "depth": 2, "slug": "why-deepgram", "text": "Why Deepgram?" }, { "depth": 3, "slug": "real-time-or-streaming-transcription-feature-in-speech-to-text", "text": "Real-time or Streaming Transcription Feature in Speech-To-Text" }, { "depth": 3, "slug": "recorded-or-batch-audio-feature-in-speech-to-text", "text": "Recorded or Batch Audio Feature in Speech-To-Text" }, { "depth": 3, "slug": "noise-reduction-feature-in-speech-to-text", "text": "Noise Reduction Feature in Speech-To-Text" }, { "depth": 3, "slug": "diarization-feature-in-speech-to-text", "text": "Diarization Feature in Speech-To-Text" }, { "depth": 2, "slug": "how-to-use-deepgram", "text": "How to use Deepgram?" }, { "depth": 2, "slug": "will-we-see-you-at-pycon", "text": "Will We See You at PyCon?" }], "source": "\nDid you know that 90% of the world\u2019s data is not being used for business insights? Most of this data is unstructured, making it difficult to search and organize. Unlike structured data, unstructured data is harder to store in a traditional database where it's mapped to different fields. You can think of it as user-created data like voice and video, which accounts for most unstructured data.\n\nLet\u2019s discover how a voice-to-text AI provider like Deepgram, combined with converting speech-to-text using Python, can alleviate headaches for you and help you tap into missed opportunities that could help you solve some of the world\u2019s biggest problems.\n\n## What is Deepgram?\n\nDeepgram is a speech recognition company that transcribes real-time or recorded audio from voice-to-text. You can see how this is super helpful with unstructured data by gathering from voice and changing it into machine-readable data for making decisions. You can even use Deepgram for video by overlaying on top, collecting subtitles, and running insights or analytics. Here\u2019s an [example of speech recognition analytics in Python you can create](https://blog.deepgram.com/python-talk-time-analytics/).\n\nThis year, we also have a booth at PyCon in Salt Lake City, Utah, and we can\u2019t wait to meet you! You\u2019ll be able to try our technology and chat with people who work for Deepgram.\n\n## Why Deepgram?\n\nDeepgram has a remarkable architecture that makes it stand out from the rest of the other speech recognition providers in the voice-to-text market. At Deepgram, we use End-to-End Deep Learning Speech Recognition, the most cutting-edge and newest technology currently being used. With this innovative speech-to-text architecture, you\u2019ll receive more accurate transcripts and increase the number of trained models for different languages, use cases, dialects, accents, and industry jargon. With End-to-End Deep Learning, it\u2019s continuously \u201Clearning\u201D and improving to provide a better experience.\n\nDeepgram has tons of powerful features as well, including but not limited to:\n\nReal-time or Streaming Transcription\nRecorded or Batch Transcription\nNoise Reduction\nDiarization\nAnd More!\n\nLet\u2019s take a look at these features in more detail.\n\n### Real-time or Streaming Transcription Feature in Speech-To-Text\n\nThe real-time feature allows you to receive a live voice-to-text transcription as the audio is streaming. This feature is crucial because it enables you to receive transcripts faster, makes them more inclusive and accessible, and increases transparency.\n\n### Recorded or Batch Audio Feature in Speech-To-Text\n\nWith the Recorded speech-to-text feature, you can upload a file in many formats and receive a transcription. The recorded transcriptions would be a great place to incorporate storytelling or visualization with Python.\n\n### Noise Reduction Feature in Speech-To-Text\n\nOur Noise Reduction feature helps identify and reduces background noise. This feature is critical as it dramatically improves the accuracy of a transcript.\n\n### Diarization Feature in Speech-To-Text\n\nDeepgram\u2019s Diarization feature recognizes the voice of multiple speakers and assigns a speaker to each work in the transcript. As you can imagine, this is wonderful when there is more than one speaker, and you can analyze a whole conversation.\n\nCheck out [this article](https://deepgram.com/the-definitive-guide-to-speech-recognition/) for our complete list of Deepgram features.\n\n## How to use Deepgram?\n\nTo get started with our Deepgram Python SDK, you can visit our open-sourced [Github repository here](https://github.com/deepgram/python-sdk). The samples in the `README.md` will help you get up and running with real-time streaming and recorded audio. We also created special Python documentation for developers, which you can access [here](https://developers.deepgram.com/sdks-tools/sdks/python-sdk/).\n\nIf you\u2019re interested in learning about different use cases for Deepgram, we just published an article about how [speech-to-text with Deepgram can transform lives around the world](https://blog.deepgram.com/pycon-deepgram-usecases/).\n\n## Will We See You at PyCon?\n\nWe are very excited to help sponsor PyCon this year. When you\u2019re free, you can stop by our booth and try out our Deepgram application to see how our voice-to-text works. In the meantime, please feel free to message us on Twitter at [@DeepgramDevs](https://twitter.com/DeepgramDevs).\n\nWe\u2019re looking forward to connecting with you!\n\n        ", "html": '<p>Did you know that 90% of the world\u2019s data is not being used for business insights? Most of this data is unstructured, making it difficult to search and organize. Unlike structured data, unstructured data is harder to store in a traditional database where it\u2019s mapped to different fields. You can think of it as user-created data like voice and video, which accounts for most unstructured data.</p>\n<p>Let\u2019s discover how a voice-to-text AI provider like Deepgram, combined with converting speech-to-text using Python, can alleviate headaches for you and help you tap into missed opportunities that could help you solve some of the world\u2019s biggest problems.</p>\n<h2 id="what-is-deepgram">What is Deepgram?</h2>\n<p>Deepgram is a speech recognition company that transcribes real-time or recorded audio from voice-to-text. You can see how this is super helpful with unstructured data by gathering from voice and changing it into machine-readable data for making decisions. You can even use Deepgram for video by overlaying on top, collecting subtitles, and running insights or analytics. Here\u2019s an <a href="https://blog.deepgram.com/python-talk-time-analytics/">example of speech recognition analytics in Python you can create</a>.</p>\n<p>This year, we also have a booth at PyCon in Salt Lake City, Utah, and we can\u2019t wait to meet you! You\u2019ll be able to try our technology and chat with people who work for Deepgram.</p>\n<h2 id="why-deepgram">Why Deepgram?</h2>\n<p>Deepgram has a remarkable architecture that makes it stand out from the rest of the other speech recognition providers in the voice-to-text market. At Deepgram, we use End-to-End Deep Learning Speech Recognition, the most cutting-edge and newest technology currently being used. With this innovative speech-to-text architecture, you\u2019ll receive more accurate transcripts and increase the number of trained models for different languages, use cases, dialects, accents, and industry jargon. With End-to-End Deep Learning, it\u2019s continuously \u201Clearning\u201D and improving to provide a better experience.</p>\n<p>Deepgram has tons of powerful features as well, including but not limited to:</p>\n<p>Real-time or Streaming Transcription\nRecorded or Batch Transcription\nNoise Reduction\nDiarization\nAnd More!</p>\n<p>Let\u2019s take a look at these features in more detail.</p>\n<h3 id="real-time-or-streaming-transcription-feature-in-speech-to-text">Real-time or Streaming Transcription Feature in Speech-To-Text</h3>\n<p>The real-time feature allows you to receive a live voice-to-text transcription as the audio is streaming. This feature is crucial because it enables you to receive transcripts faster, makes them more inclusive and accessible, and increases transparency.</p>\n<h3 id="recorded-or-batch-audio-feature-in-speech-to-text">Recorded or Batch Audio Feature in Speech-To-Text</h3>\n<p>With the Recorded speech-to-text feature, you can upload a file in many formats and receive a transcription. The recorded transcriptions would be a great place to incorporate storytelling or visualization with Python.</p>\n<h3 id="noise-reduction-feature-in-speech-to-text">Noise Reduction Feature in Speech-To-Text</h3>\n<p>Our Noise Reduction feature helps identify and reduces background noise. This feature is critical as it dramatically improves the accuracy of a transcript.</p>\n<h3 id="diarization-feature-in-speech-to-text">Diarization Feature in Speech-To-Text</h3>\n<p>Deepgram\u2019s Diarization feature recognizes the voice of multiple speakers and assigns a speaker to each work in the transcript. As you can imagine, this is wonderful when there is more than one speaker, and you can analyze a whole conversation.</p>\n<p>Check out <a href="https://deepgram.com/the-definitive-guide-to-speech-recognition/">this article</a> for our complete list of Deepgram features.</p>\n<h2 id="how-to-use-deepgram">How to use Deepgram?</h2>\n<p>To get started with our Deepgram Python SDK, you can visit our open-sourced <a href="https://github.com/deepgram/python-sdk">Github repository here</a>. The samples in the <code is:raw>README.md</code> will help you get up and running with real-time streaming and recorded audio. We also created special Python documentation for developers, which you can access <a href="https://developers.deepgram.com/sdks-tools/sdks/python-sdk/">here</a>.</p>\n<p>If you\u2019re interested in learning about different use cases for Deepgram, we just published an article about how <a href="https://blog.deepgram.com/pycon-deepgram-usecases/">speech-to-text with Deepgram can transform lives around the world</a>.</p>\n<h2 id="will-we-see-you-at-pycon">Will We See You at PyCon?</h2>\n<p>We are very excited to help sponsor PyCon this year. When you\u2019re free, you can stop by our booth and try out our Deepgram application to see how our voice-to-text works. In the meantime, please feel free to message us on Twitter at <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>.</p>\n<p>We\u2019re looking forward to connecting with you!</p>' };
const frontmatter = { "title": "Using Python With Speech-to-Text (Special PyCon Edition)", "description": "Let's look at how we can use Python and Deepgram's speech recognition technology together in preparation for PyCon US 2022.", "date": "2022-04-21T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1650386018/blog/2022/04/pycon-python-speech-to-text/pycon-posts%402x.jpg", "authors": ["tonya-sims"], "category": "announcement", "tags": ["python"], "seo": { "title": "Using Python With Speech-to-Text (Special PyCon Edition)", "description": "Let's look at how we can use Python and Deepgram's speech recognition technology together in preparation for PyCon US 2022." }, "shorturls": { "share": "https://dpgr.am/6a4d67a", "twitter": "https://dpgr.am/1d02f94", "linkedin": "https://dpgr.am/f232fb0", "reddit": "https://dpgr.am/a7dc3a9", "facebook": "https://dpgr.am/76602c4" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454073/blog/pycon-python-speech-to-text/ograph.png" }, "astro": { "headings": [{ "depth": 2, "slug": "what-is-deepgram", "text": "What is Deepgram?" }, { "depth": 2, "slug": "why-deepgram", "text": "Why Deepgram?" }, { "depth": 3, "slug": "real-time-or-streaming-transcription-feature-in-speech-to-text", "text": "Real-time or Streaming Transcription Feature in Speech-To-Text" }, { "depth": 3, "slug": "recorded-or-batch-audio-feature-in-speech-to-text", "text": "Recorded or Batch Audio Feature in Speech-To-Text" }, { "depth": 3, "slug": "noise-reduction-feature-in-speech-to-text", "text": "Noise Reduction Feature in Speech-To-Text" }, { "depth": 3, "slug": "diarization-feature-in-speech-to-text", "text": "Diarization Feature in Speech-To-Text" }, { "depth": 2, "slug": "how-to-use-deepgram", "text": "How to use Deepgram?" }, { "depth": 2, "slug": "will-we-see-you-at-pycon", "text": "Will We See You at PyCon?" }], "source": "\nDid you know that 90% of the world\u2019s data is not being used for business insights? Most of this data is unstructured, making it difficult to search and organize. Unlike structured data, unstructured data is harder to store in a traditional database where it's mapped to different fields. You can think of it as user-created data like voice and video, which accounts for most unstructured data.\n\nLet\u2019s discover how a voice-to-text AI provider like Deepgram, combined with converting speech-to-text using Python, can alleviate headaches for you and help you tap into missed opportunities that could help you solve some of the world\u2019s biggest problems.\n\n## What is Deepgram?\n\nDeepgram is a speech recognition company that transcribes real-time or recorded audio from voice-to-text. You can see how this is super helpful with unstructured data by gathering from voice and changing it into machine-readable data for making decisions. You can even use Deepgram for video by overlaying on top, collecting subtitles, and running insights or analytics. Here\u2019s an [example of speech recognition analytics in Python you can create](https://blog.deepgram.com/python-talk-time-analytics/).\n\nThis year, we also have a booth at PyCon in Salt Lake City, Utah, and we can\u2019t wait to meet you! You\u2019ll be able to try our technology and chat with people who work for Deepgram.\n\n## Why Deepgram?\n\nDeepgram has a remarkable architecture that makes it stand out from the rest of the other speech recognition providers in the voice-to-text market. At Deepgram, we use End-to-End Deep Learning Speech Recognition, the most cutting-edge and newest technology currently being used. With this innovative speech-to-text architecture, you\u2019ll receive more accurate transcripts and increase the number of trained models for different languages, use cases, dialects, accents, and industry jargon. With End-to-End Deep Learning, it\u2019s continuously \u201Clearning\u201D and improving to provide a better experience.\n\nDeepgram has tons of powerful features as well, including but not limited to:\n\nReal-time or Streaming Transcription\nRecorded or Batch Transcription\nNoise Reduction\nDiarization\nAnd More!\n\nLet\u2019s take a look at these features in more detail.\n\n### Real-time or Streaming Transcription Feature in Speech-To-Text\n\nThe real-time feature allows you to receive a live voice-to-text transcription as the audio is streaming. This feature is crucial because it enables you to receive transcripts faster, makes them more inclusive and accessible, and increases transparency.\n\n### Recorded or Batch Audio Feature in Speech-To-Text\n\nWith the Recorded speech-to-text feature, you can upload a file in many formats and receive a transcription. The recorded transcriptions would be a great place to incorporate storytelling or visualization with Python.\n\n### Noise Reduction Feature in Speech-To-Text\n\nOur Noise Reduction feature helps identify and reduces background noise. This feature is critical as it dramatically improves the accuracy of a transcript.\n\n### Diarization Feature in Speech-To-Text\n\nDeepgram\u2019s Diarization feature recognizes the voice of multiple speakers and assigns a speaker to each work in the transcript. As you can imagine, this is wonderful when there is more than one speaker, and you can analyze a whole conversation.\n\nCheck out [this article](https://deepgram.com/the-definitive-guide-to-speech-recognition/) for our complete list of Deepgram features.\n\n## How to use Deepgram?\n\nTo get started with our Deepgram Python SDK, you can visit our open-sourced [Github repository here](https://github.com/deepgram/python-sdk). The samples in the `README.md` will help you get up and running with real-time streaming and recorded audio. We also created special Python documentation for developers, which you can access [here](https://developers.deepgram.com/sdks-tools/sdks/python-sdk/).\n\nIf you\u2019re interested in learning about different use cases for Deepgram, we just published an article about how [speech-to-text with Deepgram can transform lives around the world](https://blog.deepgram.com/pycon-deepgram-usecases/).\n\n## Will We See You at PyCon?\n\nWe are very excited to help sponsor PyCon this year. When you\u2019re free, you can stop by our booth and try out our Deepgram application to see how our voice-to-text works. In the meantime, please feel free to message us on Twitter at [@DeepgramDevs](https://twitter.com/DeepgramDevs).\n\nWe\u2019re looking forward to connecting with you!\n\n        ", "html": '<p>Did you know that 90% of the world\u2019s data is not being used for business insights? Most of this data is unstructured, making it difficult to search and organize. Unlike structured data, unstructured data is harder to store in a traditional database where it\u2019s mapped to different fields. You can think of it as user-created data like voice and video, which accounts for most unstructured data.</p>\n<p>Let\u2019s discover how a voice-to-text AI provider like Deepgram, combined with converting speech-to-text using Python, can alleviate headaches for you and help you tap into missed opportunities that could help you solve some of the world\u2019s biggest problems.</p>\n<h2 id="what-is-deepgram">What is Deepgram?</h2>\n<p>Deepgram is a speech recognition company that transcribes real-time or recorded audio from voice-to-text. You can see how this is super helpful with unstructured data by gathering from voice and changing it into machine-readable data for making decisions. You can even use Deepgram for video by overlaying on top, collecting subtitles, and running insights or analytics. Here\u2019s an <a href="https://blog.deepgram.com/python-talk-time-analytics/">example of speech recognition analytics in Python you can create</a>.</p>\n<p>This year, we also have a booth at PyCon in Salt Lake City, Utah, and we can\u2019t wait to meet you! You\u2019ll be able to try our technology and chat with people who work for Deepgram.</p>\n<h2 id="why-deepgram">Why Deepgram?</h2>\n<p>Deepgram has a remarkable architecture that makes it stand out from the rest of the other speech recognition providers in the voice-to-text market. At Deepgram, we use End-to-End Deep Learning Speech Recognition, the most cutting-edge and newest technology currently being used. With this innovative speech-to-text architecture, you\u2019ll receive more accurate transcripts and increase the number of trained models for different languages, use cases, dialects, accents, and industry jargon. With End-to-End Deep Learning, it\u2019s continuously \u201Clearning\u201D and improving to provide a better experience.</p>\n<p>Deepgram has tons of powerful features as well, including but not limited to:</p>\n<p>Real-time or Streaming Transcription\nRecorded or Batch Transcription\nNoise Reduction\nDiarization\nAnd More!</p>\n<p>Let\u2019s take a look at these features in more detail.</p>\n<h3 id="real-time-or-streaming-transcription-feature-in-speech-to-text">Real-time or Streaming Transcription Feature in Speech-To-Text</h3>\n<p>The real-time feature allows you to receive a live voice-to-text transcription as the audio is streaming. This feature is crucial because it enables you to receive transcripts faster, makes them more inclusive and accessible, and increases transparency.</p>\n<h3 id="recorded-or-batch-audio-feature-in-speech-to-text">Recorded or Batch Audio Feature in Speech-To-Text</h3>\n<p>With the Recorded speech-to-text feature, you can upload a file in many formats and receive a transcription. The recorded transcriptions would be a great place to incorporate storytelling or visualization with Python.</p>\n<h3 id="noise-reduction-feature-in-speech-to-text">Noise Reduction Feature in Speech-To-Text</h3>\n<p>Our Noise Reduction feature helps identify and reduces background noise. This feature is critical as it dramatically improves the accuracy of a transcript.</p>\n<h3 id="diarization-feature-in-speech-to-text">Diarization Feature in Speech-To-Text</h3>\n<p>Deepgram\u2019s Diarization feature recognizes the voice of multiple speakers and assigns a speaker to each work in the transcript. As you can imagine, this is wonderful when there is more than one speaker, and you can analyze a whole conversation.</p>\n<p>Check out <a href="https://deepgram.com/the-definitive-guide-to-speech-recognition/">this article</a> for our complete list of Deepgram features.</p>\n<h2 id="how-to-use-deepgram">How to use Deepgram?</h2>\n<p>To get started with our Deepgram Python SDK, you can visit our open-sourced <a href="https://github.com/deepgram/python-sdk">Github repository here</a>. The samples in the <code is:raw>README.md</code> will help you get up and running with real-time streaming and recorded audio. We also created special Python documentation for developers, which you can access <a href="https://developers.deepgram.com/sdks-tools/sdks/python-sdk/">here</a>.</p>\n<p>If you\u2019re interested in learning about different use cases for Deepgram, we just published an article about how <a href="https://blog.deepgram.com/pycon-deepgram-usecases/">speech-to-text with Deepgram can transform lives around the world</a>.</p>\n<h2 id="will-we-see-you-at-pycon">Will We See You at PyCon?</h2>\n<p>We are very excited to help sponsor PyCon this year. When you\u2019re free, you can stop by our booth and try out our Deepgram application to see how our voice-to-text works. In the meantime, please feel free to message us on Twitter at <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>.</p>\n<p>We\u2019re looking forward to connecting with you!</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/pycon-python-speech-to-text/index.md" };
function rawContent() {
  return "\nDid you know that 90% of the world\u2019s data is not being used for business insights? Most of this data is unstructured, making it difficult to search and organize. Unlike structured data, unstructured data is harder to store in a traditional database where it's mapped to different fields. You can think of it as user-created data like voice and video, which accounts for most unstructured data.\n\nLet\u2019s discover how a voice-to-text AI provider like Deepgram, combined with converting speech-to-text using Python, can alleviate headaches for you and help you tap into missed opportunities that could help you solve some of the world\u2019s biggest problems.\n\n## What is Deepgram?\n\nDeepgram is a speech recognition company that transcribes real-time or recorded audio from voice-to-text. You can see how this is super helpful with unstructured data by gathering from voice and changing it into machine-readable data for making decisions. You can even use Deepgram for video by overlaying on top, collecting subtitles, and running insights or analytics. Here\u2019s an [example of speech recognition analytics in Python you can create](https://blog.deepgram.com/python-talk-time-analytics/).\n\nThis year, we also have a booth at PyCon in Salt Lake City, Utah, and we can\u2019t wait to meet you! You\u2019ll be able to try our technology and chat with people who work for Deepgram.\n\n## Why Deepgram?\n\nDeepgram has a remarkable architecture that makes it stand out from the rest of the other speech recognition providers in the voice-to-text market. At Deepgram, we use End-to-End Deep Learning Speech Recognition, the most cutting-edge and newest technology currently being used. With this innovative speech-to-text architecture, you\u2019ll receive more accurate transcripts and increase the number of trained models for different languages, use cases, dialects, accents, and industry jargon. With End-to-End Deep Learning, it\u2019s continuously \u201Clearning\u201D and improving to provide a better experience.\n\nDeepgram has tons of powerful features as well, including but not limited to:\n\nReal-time or Streaming Transcription\nRecorded or Batch Transcription\nNoise Reduction\nDiarization\nAnd More!\n\nLet\u2019s take a look at these features in more detail.\n\n### Real-time or Streaming Transcription Feature in Speech-To-Text\n\nThe real-time feature allows you to receive a live voice-to-text transcription as the audio is streaming. This feature is crucial because it enables you to receive transcripts faster, makes them more inclusive and accessible, and increases transparency.\n\n### Recorded or Batch Audio Feature in Speech-To-Text\n\nWith the Recorded speech-to-text feature, you can upload a file in many formats and receive a transcription. The recorded transcriptions would be a great place to incorporate storytelling or visualization with Python.\n\n### Noise Reduction Feature in Speech-To-Text\n\nOur Noise Reduction feature helps identify and reduces background noise. This feature is critical as it dramatically improves the accuracy of a transcript.\n\n### Diarization Feature in Speech-To-Text\n\nDeepgram\u2019s Diarization feature recognizes the voice of multiple speakers and assigns a speaker to each work in the transcript. As you can imagine, this is wonderful when there is more than one speaker, and you can analyze a whole conversation.\n\nCheck out [this article](https://deepgram.com/the-definitive-guide-to-speech-recognition/) for our complete list of Deepgram features.\n\n## How to use Deepgram?\n\nTo get started with our Deepgram Python SDK, you can visit our open-sourced [Github repository here](https://github.com/deepgram/python-sdk). The samples in the `README.md` will help you get up and running with real-time streaming and recorded audio. We also created special Python documentation for developers, which you can access [here](https://developers.deepgram.com/sdks-tools/sdks/python-sdk/).\n\nIf you\u2019re interested in learning about different use cases for Deepgram, we just published an article about how [speech-to-text with Deepgram can transform lives around the world](https://blog.deepgram.com/pycon-deepgram-usecases/).\n\n## Will We See You at PyCon?\n\nWe are very excited to help sponsor PyCon this year. When you\u2019re free, you can stop by our booth and try out our Deepgram application to see how our voice-to-text works. In the meantime, please feel free to message us on Twitter at [@DeepgramDevs](https://twitter.com/DeepgramDevs).\n\nWe\u2019re looking forward to connecting with you!\n\n        ";
}
function compiledContent() {
  return '<p>Did you know that 90% of the world\u2019s data is not being used for business insights? Most of this data is unstructured, making it difficult to search and organize. Unlike structured data, unstructured data is harder to store in a traditional database where it\u2019s mapped to different fields. You can think of it as user-created data like voice and video, which accounts for most unstructured data.</p>\n<p>Let\u2019s discover how a voice-to-text AI provider like Deepgram, combined with converting speech-to-text using Python, can alleviate headaches for you and help you tap into missed opportunities that could help you solve some of the world\u2019s biggest problems.</p>\n<h2 id="what-is-deepgram">What is Deepgram?</h2>\n<p>Deepgram is a speech recognition company that transcribes real-time or recorded audio from voice-to-text. You can see how this is super helpful with unstructured data by gathering from voice and changing it into machine-readable data for making decisions. You can even use Deepgram for video by overlaying on top, collecting subtitles, and running insights or analytics. Here\u2019s an <a href="https://blog.deepgram.com/python-talk-time-analytics/">example of speech recognition analytics in Python you can create</a>.</p>\n<p>This year, we also have a booth at PyCon in Salt Lake City, Utah, and we can\u2019t wait to meet you! You\u2019ll be able to try our technology and chat with people who work for Deepgram.</p>\n<h2 id="why-deepgram">Why Deepgram?</h2>\n<p>Deepgram has a remarkable architecture that makes it stand out from the rest of the other speech recognition providers in the voice-to-text market. At Deepgram, we use End-to-End Deep Learning Speech Recognition, the most cutting-edge and newest technology currently being used. With this innovative speech-to-text architecture, you\u2019ll receive more accurate transcripts and increase the number of trained models for different languages, use cases, dialects, accents, and industry jargon. With End-to-End Deep Learning, it\u2019s continuously \u201Clearning\u201D and improving to provide a better experience.</p>\n<p>Deepgram has tons of powerful features as well, including but not limited to:</p>\n<p>Real-time or Streaming Transcription\nRecorded or Batch Transcription\nNoise Reduction\nDiarization\nAnd More!</p>\n<p>Let\u2019s take a look at these features in more detail.</p>\n<h3 id="real-time-or-streaming-transcription-feature-in-speech-to-text">Real-time or Streaming Transcription Feature in Speech-To-Text</h3>\n<p>The real-time feature allows you to receive a live voice-to-text transcription as the audio is streaming. This feature is crucial because it enables you to receive transcripts faster, makes them more inclusive and accessible, and increases transparency.</p>\n<h3 id="recorded-or-batch-audio-feature-in-speech-to-text">Recorded or Batch Audio Feature in Speech-To-Text</h3>\n<p>With the Recorded speech-to-text feature, you can upload a file in many formats and receive a transcription. The recorded transcriptions would be a great place to incorporate storytelling or visualization with Python.</p>\n<h3 id="noise-reduction-feature-in-speech-to-text">Noise Reduction Feature in Speech-To-Text</h3>\n<p>Our Noise Reduction feature helps identify and reduces background noise. This feature is critical as it dramatically improves the accuracy of a transcript.</p>\n<h3 id="diarization-feature-in-speech-to-text">Diarization Feature in Speech-To-Text</h3>\n<p>Deepgram\u2019s Diarization feature recognizes the voice of multiple speakers and assigns a speaker to each work in the transcript. As you can imagine, this is wonderful when there is more than one speaker, and you can analyze a whole conversation.</p>\n<p>Check out <a href="https://deepgram.com/the-definitive-guide-to-speech-recognition/">this article</a> for our complete list of Deepgram features.</p>\n<h2 id="how-to-use-deepgram">How to use Deepgram?</h2>\n<p>To get started with our Deepgram Python SDK, you can visit our open-sourced <a href="https://github.com/deepgram/python-sdk">Github repository here</a>. The samples in the <code is:raw>README.md</code> will help you get up and running with real-time streaming and recorded audio. We also created special Python documentation for developers, which you can access <a href="https://developers.deepgram.com/sdks-tools/sdks/python-sdk/">here</a>.</p>\n<p>If you\u2019re interested in learning about different use cases for Deepgram, we just published an article about how <a href="https://blog.deepgram.com/pycon-deepgram-usecases/">speech-to-text with Deepgram can transform lives around the world</a>.</p>\n<h2 id="will-we-see-you-at-pycon">Will We See You at PyCon?</h2>\n<p>We are very excited to help sponsor PyCon this year. When you\u2019re free, you can stop by our booth and try out our Deepgram application to see how our voice-to-text works. In the meantime, please feel free to message us on Twitter at <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>.</p>\n<p>We\u2019re looking forward to connecting with you!</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/pycon-python-speech-to-text/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Did you know that 90% of the world’s data is not being used for business insights? Most of this data is unstructured, making it difficult to search and organize. Unlike structured data, unstructured data is harder to store in a traditional database where it’s mapped to different fields. You can think of it as user-created data like voice and video, which accounts for most unstructured data.</p>
<p>Let’s discover how a voice-to-text AI provider like Deepgram, combined with converting speech-to-text using Python, can alleviate headaches for you and help you tap into missed opportunities that could help you solve some of the world’s biggest problems.</p>
<h2 id="what-is-deepgram">What is Deepgram?</h2>
<p>Deepgram is a speech recognition company that transcribes real-time or recorded audio from voice-to-text. You can see how this is super helpful with unstructured data by gathering from voice and changing it into machine-readable data for making decisions. You can even use Deepgram for video by overlaying on top, collecting subtitles, and running insights or analytics. Here’s an <a href="https://blog.deepgram.com/python-talk-time-analytics/">example of speech recognition analytics in Python you can create</a>.</p>
<p>This year, we also have a booth at PyCon in Salt Lake City, Utah, and we can’t wait to meet you! You’ll be able to try our technology and chat with people who work for Deepgram.</p>
<h2 id="why-deepgram">Why Deepgram?</h2>
<p>Deepgram has a remarkable architecture that makes it stand out from the rest of the other speech recognition providers in the voice-to-text market. At Deepgram, we use End-to-End Deep Learning Speech Recognition, the most cutting-edge and newest technology currently being used. With this innovative speech-to-text architecture, you’ll receive more accurate transcripts and increase the number of trained models for different languages, use cases, dialects, accents, and industry jargon. With End-to-End Deep Learning, it’s continuously “learning” and improving to provide a better experience.</p>
<p>Deepgram has tons of powerful features as well, including but not limited to:</p>
<p>Real-time or Streaming Transcription
Recorded or Batch Transcription
Noise Reduction
Diarization
And More!</p>
<p>Let’s take a look at these features in more detail.</p>
<h3 id="real-time-or-streaming-transcription-feature-in-speech-to-text">Real-time or Streaming Transcription Feature in Speech-To-Text</h3>
<p>The real-time feature allows you to receive a live voice-to-text transcription as the audio is streaming. This feature is crucial because it enables you to receive transcripts faster, makes them more inclusive and accessible, and increases transparency.</p>
<h3 id="recorded-or-batch-audio-feature-in-speech-to-text">Recorded or Batch Audio Feature in Speech-To-Text</h3>
<p>With the Recorded speech-to-text feature, you can upload a file in many formats and receive a transcription. The recorded transcriptions would be a great place to incorporate storytelling or visualization with Python.</p>
<h3 id="noise-reduction-feature-in-speech-to-text">Noise Reduction Feature in Speech-To-Text</h3>
<p>Our Noise Reduction feature helps identify and reduces background noise. This feature is critical as it dramatically improves the accuracy of a transcript.</p>
<h3 id="diarization-feature-in-speech-to-text">Diarization Feature in Speech-To-Text</h3>
<p>Deepgram’s Diarization feature recognizes the voice of multiple speakers and assigns a speaker to each work in the transcript. As you can imagine, this is wonderful when there is more than one speaker, and you can analyze a whole conversation.</p>
<p>Check out <a href="https://deepgram.com/the-definitive-guide-to-speech-recognition/">this article</a> for our complete list of Deepgram features.</p>
<h2 id="how-to-use-deepgram">How to use Deepgram?</h2>
<p>To get started with our Deepgram Python SDK, you can visit our open-sourced <a href="https://github.com/deepgram/python-sdk">Github repository here</a>. The samples in the <code>README.md</code> will help you get up and running with real-time streaming and recorded audio. We also created special Python documentation for developers, which you can access <a href="https://developers.deepgram.com/sdks-tools/sdks/python-sdk/">here</a>.</p>
<p>If you’re interested in learning about different use cases for Deepgram, we just published an article about how <a href="https://blog.deepgram.com/pycon-deepgram-usecases/">speech-to-text with Deepgram can transform lives around the world</a>.</p>
<h2 id="will-we-see-you-at-pycon">Will We See You at PyCon?</h2>
<p>We are very excited to help sponsor PyCon this year. When you’re free, you can stop by our booth and try out our Deepgram application to see how our voice-to-text works. In the meantime, please feel free to message us on Twitter at <a href="https://twitter.com/DeepgramDevs">@DeepgramDevs</a>.</p>
<p>We’re looking forward to connecting with you!</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/pycon-python-speech-to-text/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
