---
title: "The Importance of Testing with Voice Experiences and Conversational AI - John Kelvie, CEO, Bespoken - Project Voice X"
description: "The Importance of Testing with Voice Experiences and Conversational AI presented by John Kelvie, CEO of Bespoken, presented on day one of Project Voice X. "
date: 2021-12-09
cover: https://res.cloudinary.com/deepgram/image/upload/v1661981398/blog/the-importance-of-testing-with-voice-experiences-and-conversational-ai-john-kelvie-ceo-bespoken-project-voice-x/proj-voice-x-session-john-kelvie-blog-thumb-554x22.png
authors:
  - claudia-ring
category: speech-trends
tags:
  - conversational-ai
  - genesys
  - project-voice-x
seo:
  title: "The Importance of Testing with Voice Experiences and Conversational AI - John Kelvie, CEO, Bespoken - Project Voice X"
  description: "The Importance of Testing with Voice Experiences and Conversational AI presented by John Kelvie, CEO of Bespoken, presented on day one of Project Voice X. "
shorturls:
  share: https://dpgr.am/f82942c
  twitter: https://dpgr.am/153675f
  linkedin: https://dpgr.am/f622203
  reddit: https://dpgr.am/3f8025b
  facebook: https://dpgr.am/2ae1d1c
og:
  image: https://res.cloudinary.com/deepgram/image/upload/v1661981398/blog/the-importance-of-testing-with-voice-experiences-and-conversational-ai-john-kelvie-ceo-bespoken-project-voice-x/proj-voice-x-session-john-kelvie-blog-thumb-554x22.png
---

_This is the transcript for "Voice in Healthcare," presented by Henry O'Connell, CEO at Canary Speech, presented on day one of Project Voice X._ _The transcript below has been modified by the Deepgram team for readability as a blog post, but the original Deepgram ASR-generated transcript was **94% accurate.**  Features like diarization, custom vocabulary (keyword boosting), redaction, punctuation, profanity filtering and numeral formatting are all available through Deepgram's API.  If you want to see if Deepgram is right for your use case, [contact us](https://deepgram.com/contact-us/)._ [John Kelvie:] Thanks, Bradley. It's really nice to be here. It's nice to see Bradley again. When the pandemic started, I guess, March of twenty twenty, I remember seeing Bradley on Twitter, and he was saying, oh, just wait. You all be begging to get back to in-person events. And I thought, no. I'm definitely not gonna be begging for that. But I have to say, Bradley, I... I'm so excited to be here. I'm really excited to get these events going again. It's not necessarily that I love traveling, but I really like having the chance to meet people, and the virtual events just really didn't work very well, so great to see everybody here. And so I'm gonna talk today about a case study that we did. We have carved out this niche for testing, and as we've gone farther along as a company working with voice and we've seen these use cases emerge, we've just seen really great applications of testing, and I would even expand it. We think of it now as just managing the overall conversational AI life cycle. We see that as our responsibility, and we really try to help our customers do that. And so I'm gonna walk you through one of the scenarios where we did do that. But just to start off, I am gonna briefly opine on where AI is today. You know, there are folks who think that this is the current state of it. This is probably... it looks a little bit more menacing than it actually is. But people who think that the AI is really self-learning, autonomous, incredibly intelligent, etcetera, etcetera... we do talk to a lot of customers, and when we talk about how they're gonna train their models, where they're gonna get data from, they're just kinda like, I thought it just trained itself. That's not an uncommon answer. I've even heard people who work at Nuance say that kinda confusingly. You know? And so even though it's quite advanced, I I would say it's a it's a long way off from Skynet. Instead, the mental model I like people to work with is if you just... our new customer of Dialogflow? Think of it as Google dropped off a beautiful child that looks like this for you. This is what you've received. Yes. It's extremely intelligent. It's very capable. It someday will be very skillful and will respond to customer queries in a useful way, but that day is not today. It's not the day that you start using it. It's not the day that you launch it. You need to constantly train and mature this intelligent being so that it does something meaningful for your customers. And it's not gonna take eighteen years, thankfully, but it's probably gonna take... you know, think eighteen months. Think about that longer time frame. Alright. So onto the case study. I'm not gonna use the customer's name for this. We don't yet have permission for that. Hopefully, we will have that shortly. But it's it's a pretty basic one, and I think the simplicity of it is something I really love about it. It illustrates even for sort of basic cases how tricky it can be to do this stuff. So this... the part that we helped the customer with initially was just doing an initial lookup of a user based on a member ID, and so that's an alphanumeric sequence. It's three letters, six numbers, and a dash. Really simple. Right? And then once that's been input, they're doing a lookup into their database, and then they know the first name and last name and ZIP code, and they're gonna verify the user as who they purport to be by matching that information. So they ask them what's your name, what's your date of birth, all this other verifying information, and they have to give the right response. I mean, that sounds easy. That sounds like something in twenty twenty one. This should not be hard. And they used what I would say is a pretty stay... state-of-the-art tech stack. They're using Genesys. We do a lot of work with Genesys. We really love those guys. They're using the Genesys flow architect. I think Voiceflow should really take a lot of business away from that partly 'cause it's not quite as good. And then they have Lex integrated for doing the speech recognition in the NLU, and then they've got a back end that's based on AWS Lambda. So this is this is a a pretty standard tech stack. If you were like, I'm gonna build a call center today, it's very likely that you would see this pop up at the top of your Google searches. You would find a lot of things that suggest this is a great way to go, but it's not. It does absolutely terrible on the alphanumeric recognition. We're not terrible. It does it does poorly on the alphanumeric recognition. On the first name and last name, it does horrendously. Even though you know what the first and last name is, it still can't get it right because Lex is missing features, like recognition hints. It has an inability to measure... or the customer had inability to measure performance accurately and repeatedly. They didn't have the tools in place for those processes, and they didn't have an ability to improve Lex over time. So one sort of theme for this presentation is, you know, you need to have good models, but then you need to have the engines around it that have good capabilities because, you know, you could have... like, let's pick on Google. Obviously, their models are incredible, but they don't have as much tooling for actually tuning those models. And so that can be a limitation if you're using, like, Google's ASR. So what did we see with the member ID? We saw a thirteen... greater than thirteen percent error rate on matching the the correct member ID that the user said. Like I said, really not very good. A lot of users are not being understood with that. And then on the first name and last name, it was a forty one point five percent and fifty six point eight percent, respectively, error rates. So that's the part that's really, you know, horrendous and just really not workable. The type of project... and we hear this a lot from people using Lex and Dialogflow where people are like, gee. I don't know that we can go forward with this. We saw this as a big strategic initiative for our company, but these numbers, this is not gonna work for our customers. They're just gonna get frustrated. We're not gonna be delivering a satisfying customer experience, whatsoever. So then we do some training on it. And in this case, it was just actually... the training is in the form... because there's not actually much that we can do with Lex there, we're actually just applying a fuzzy search algorithm, a really simple algorithm after we get the results from the ASR slash NLU. And and that does actually really help a lot, putting that in place. On the first name, last name, though... I mean, we tried a bunch of stuff with Lex. There really wasn't much that actually improves it. So there's some... in a way, these improvements are substantial, but they don't actually get it to a place where it really becomes usable. Thirty five point one percent error rate, forty eight point eight percent error rate are really not in an acceptable range. So then we said, well, let's try Azure speech. And, you know, in general, that's a product that we like. We think it works really well. By switching to that, what we found was that on that first name and last name, initially, it was seventy five percent correct. And then by just adding in recognition hints... and this almost feels like cheating, but when you say, ok. This is the name we're expecting. If you feed that to Azure first, it then understands it correctly ninety eight point four percent of the time. Same thing on the last name. So vastly reducing the number of errors, really improving that experience, you know, getting it to a range that is gonna feel almost perfect for users. And this is not... I mean, I think most modern ASRs would deliver a performance that are similar to this with their models, so it's not really a model limitation that we're looking in here. Instead, it's about the tooling that's provided by these different vendors. And some of it's a limitation of Lex. Some of it's a limitation of Genesys. But a lot of these tech stacks are really early. They don't have, you know, features like recognition hints. I mean, on one hand, that's been something that's been around for twenty plus years for IVRs. At the same time, though, some of the more newfangled ones... you know, the Dialogflow team has not had a chance to enter... to introduce this yet. Same thing with Lex. So they're sort of behind in a certain way while, at the same time, they have pushed the state of innovation forward. On the member IDs using Azure, here, we did not see a very good performance measure, though. It really struggled with the member IDs. Even with doing an extensive amount of training, it still did not do very well. I personally found this kinda surprising. I mean, we do like, in general, the Azure tool kit. It does give you a lot of power and flexibility, someone who's doing modeling, but this was a limitation that we did run into. I will say at the same time, I think this is probably overcomeable. We're reaching out to some people at Microsoft. There's likely a way to resolve this and get to a better performance level with Azure. That said, it's still... it's interesting to see that Lex here, out of the box, has really done better than Azure. And so that sorta leads us to, well, a couple overall larger points. You know, one, Azure provides more leverage for optimization than Lex. It performs very well for transcription. It does not perform as well on a tightly prescribed domain. And so that leads us to these sort of larger observations. If you're building a conversational application, the things that you should be looking for, the qualities of that system that you build are that it should be trainable, each component with it... within it should be able to be tuned and trained quite easily. It should be testable. It should be easy to measure. You should know what those measurements are. You should know what the accuracy level is. It should be modular. Each component should be able to be easily swapped out for another when and if necessary. I mean, the state of the art in this space is just changing all the time. And there's companies like Deepgram. I'm very interested in their presentation. They're doing really innovative stuff. There's a lot of other companies doing innovative stuff, and so you wanna be able to take the best of what's out there and easily bring it into your system. And then finally, it should be contextual. One thing I like about this case study a lot is you're just talking about... it's really just one intent, and we're really focused on two slots within that single intent. But even within them, you really need two different models. The actual solution that we've ended up using going forward with this specific case is a a grammar that's built with IBM Watson for that member ID. Right? And so that... that's a specific way to solve that slot-filling challenge. But then you get to the first name, last name, and there's a different approach that you wanna take. That's not something people should be afraid of. In fact, that's that's just kind of the nature of the beast. You... even within using a single vendor, you may end up with using different models between those different slots between the different intents.

> So you want it to be contextual. You wanna embrace making very granular decisions and doing really granular processing on these transactions to get results that are really gonna wow customers. And so we see this overall as part of a a larger ecosystem.

We are, as a company, expanding the footprint of our software where we we really see ourselves as a platform that is supporting this whole life cycle. We really see that as essential. And the analytics and the management that are coming out of this, we really see as essential. We're helping customers with this orchestrator piece that sits in the center that'll actually act as a runtime to interact with the different ASRs and NLUs that are out there, and then at the same time, capture all this data. Now, ideally, it would not be necessary for us to supply that orchestration piece. But, again, it's it's not easy. You know, if you use Twilio or Genesys, they don't really supply that. So we see this as a whole platform that then is gonna make it easy to maintain and manage your AI system over time. And so what are some... the benefits of this? You're removing the risk of any single vendor. You're creating a system that can be easily improved and optimized over time, really, nearly endlessly. That's that's not necessarily such a great thing. I mean... but it is optimization, so there's always room for improvement. You're never really gonna get to a hundred percent, and it allows you to hire the best tech for each job. You know? So you might use Lex for one thing, Watson for another, Azure for a third, Deepgram for another. And so just to kinda zoom in on that platform a little bit, this is what we see as that overall cycle where, you know, there's a gathering of data, testing, training, monitoring on an ongoing basis, and then that is basically repeated ad infinitum. I'm not saying that right. But, basically, it's it's repeated indefinitely as your system evolves and until it becomes truly a sort of mature, intelligent adult. And I did set a timer just to remind myself when it's fifteen minutes. So I'm on my last slide here. You wanna go... you wanna take your little intelligent baby, get it walking, running, flying, and this does come back to an ROI. I put in here... we have a nice ROI calculator on our website now. We think it's pretty cool. If you plug in the numbers, the ROI, if you make significant improvements to your accuracy, really huge. It's really huge. So there's an immense benefit from that. You know, for even fairly moderate usage systems, you can really see substantial savings. So it really does matter. This is not just an academic exercise that we're talking about this for. It's gonna make customers happier, and it's gonna really deliver to your bottom line. So that's my talk. Thanks a lot for having me, and I'm John Kelvie. I don't have a slide with my name, but it's j-p-k b-s-t on Twitter, and, you know, look forward to talking with and meeting all you.