## Overview

This repo is a single page app built using AngularJS for a knowledge sharing Q+A portal inspired by Stack Overflow. 

## Getting Started

`git clone https://github.com/nuvolo/knowledge-overflow.git`
`git checkout -b feature/my-feature-name`
`npm install`

Start hacking!

## Deploy

This single page application requires ServiceNow globals to operate such as `g_ck`. It currently lives in a UI Page deployed to ServiceNow. To deploy:

`npx webpack`

Load [the Knowledge Overflow scoped app](https://github.com/nuvolo/knowledgeoverflow) into a ServiceNow environment (probably nuvolodev). 

Upload the `dist/bundle.js` into the UI script `x_nuvo_ko.KnowledgeOverflowBundle`