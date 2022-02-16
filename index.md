---
layout: page
mathjax: true
title: MuMiN
subtitle: A Large-Scale Multilingual Multimodal Fact-Checked Misinformation Social Network Dataset
use-site-title: true
meta-description: A Large-Scale Multilingual Multimodal Fact-Checked Misinformation Social Network Dataset
---

The MuMiN dataset is a challenging misinformation benchmark for automatic
misinformation detection models. The dataset is structured as a heterogeneous
graph and features 21,565,018 tweets and 1,986,354 users, belonging to 26,048
Twitter threads, discussing 12,914 fact-checked claims from 115 fact-checking
organisations in 41 different languages, spanning a decade.

The dataset has three different sizes and features two graph classification
tasks:

- Claim classification: Given a claim and its surrounding subgraph extracted
  from social media, predict whether the verdict of the claim is
  `misinformation` or `factual`.
- Tweet classification: Given a source tweet (i.e., not a reply, quote tweet or
  retweet) to be fact-checked, predict whether the tweet discusses a claim
  whose verdict is `misinformation` or `factual`.

See [the leaderboard](https://mumin-dataset.github.io/leaderboard/) for a list
of the best performing models. If you have a new submission then send an email
to [ryan.mcconville@bristol.ac.uk](mailto:ryan.mcconville@bristol.ac.uk).
