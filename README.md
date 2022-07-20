# DiatomiX

DEX on Algorand using ARC 0014 standard orders

- **Demo**: https://beta.k8s.diatomix.xyz
- **User documentation**: [GitBook](https://docs.diatomix.xyz/)

Source code: 

- [Web App](https://github.com/Diatomix/Diatomix-frontend/tree/beta)
- [ARC 0017 Indexer](https://github.com/scholtz/arc0017-indexer)
- [Charting Data](https://github.com/scholtz/AsaCharts)

Frontend runs the react.js framework with PrimeReact UI library.

CICD pipeline builed docker image on every push.

Beta branch is dev head: https://github.com/Diatomix/Diatomix-frontend/tree/beta

## Debug

First install: ```npm install```

To run debug mode: ```npm start```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Folder structure

- src/ Main source folder
- public/ Public folder
- docker/ Docker builder


- src/assets - Images
- src/components - Components
- src/effects - Effects for components
- src/generated - Generated GraphQL scripts
- src/locales - Localisation
- src/pages - Pages
- src/scripts - TypeScript native common scripts
- src/themes - Themes
