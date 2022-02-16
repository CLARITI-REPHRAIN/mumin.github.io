---
layout: leaderboard
title: MuMiN Leaderboard
---

<div class="table-wrapper centered">
<table id="leaderboard" class="sortable fixed centered small-font">
 <thead>
  <tr>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="The name of the model">Model</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="URL to the paper in which the model was published">Paper</span></th>
   <th id="score-col"><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Average of the scores">Score</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Average of the claim scores">Claim score</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Average of the tweet scores">Tweet score</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Macro-average F1-score">Claim-small</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Macro-average F1-score">Claim-medium</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Macro-average F1-score">Claim-large</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Macro-average F1-score">Tweet-small</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Macro-average F1-score">Tweet-medium</span></th>
   <th><span data-toggle="tooltip" data-placement="bottom" data-container="body" title="Macro-average F1-score">Tweet-large</span></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Hetero-GraphSAGE</td>
   <td><a href="https://arxiv.org/">link</a></td>
   <td class="score"></td>
   <td class="claim-score"></td>
   <td class="tweet-score"></td>
   <td class="claim small">57.95</td>
   <td class="claim medium">57.70</td>
   <td class="claim large">59.80</td>
   <td class="tweet small">56.05</td>
   <td class="tweet medium">54.10</td>
   <td class="tweet large">61.45</td>
  </tr>
  <tr>
   <td>LaBSE</td>
   <td><a href="https://arxiv.org/">link</a></td>
   <td class="score"></td>
   <td class="claim-score"></td>
   <td class="tweet-score"></td>
   <td class="claim-small">62.55</td>
   <td class="claim-medium">55.85</td>
   <td class="claim-large">57.90</td>
   <td class="tweet-small">54.50</td>
   <td class="tweet-medium">57.45</td>
   <td class="tweet-large">52.80</td>
  </tr>
  <tr>
   <td>Majority class</td>
   <td>N/A</td>
   <td class="score"></td>
   <td class="claim-score"></td>
   <td class="tweet-score"></td>
   <td class="claim-small">47.56</td>
   <td class="claim-medium">48.06</td>
   <td class="claim-large">48.13</td>
   <td class="tweet-small">48.77</td>
   <td class="tweet-medium">48.56</td>
   <td class="tweet-large">48.87</td>
  </tr>
  <tr>
   <td>Random</td>
   <td>N/A</td>
   <td class="score"></td>
   <td class="claim-score"></td>
   <td class="tweet-score"></td>
   <td class="claim-small">40.07</td>
   <td class="claim-medium">38.96</td>
   <td class="claim-large">38.79</td>
   <td class="tweet-small">37.18</td>
   <td class="tweet-medium">37.72</td>
   <td class="tweet-large">36.90</td>
  </tr>
 </tbody>
</table>
</div>
