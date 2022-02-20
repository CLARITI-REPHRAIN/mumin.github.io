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

See [Getting Started](https://mumin-dataset.github.io/gettingstarted/) for a
quickstart as well as an in-depth tutorial, including the building and training
of multiple misinformation classifiers on MuMiN. See [the
leaderboard](https://mumin-dataset.github.io/leaderboard/) for a list of the
best performing models. For new submissions, please email
[ryan.mcconville@bristol.ac.uk](mailto:ryan.mcconville@bristol.ac.uk).

You can also check out the following MuMiN-related Github repositories:

- [MuMiN-build](https://github.com/MuMiN-dataset/mumin-build), containing the
  source code for our Python package, `mumin`, which allows easy compilation
  and export of the dataset.
- [MuMiN-baseline](https://github.com/MuMiN-dataset/mumin-baseline), containing
  the source code for all our baseline experiments, the scores of which are in
  the [leaderboard](https://mumin-dataset.github.io/leaderboard/).
- [MuMiN-trawl](https://github.com/MuMiN-dataset/mumin-trawl), containing our
  data collection and linking system, which can be used to extend the MuMiN
  dataset.
