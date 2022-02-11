<div id="top"></div>

<!-- project shields -->
<p align="left">
  <!-- discord -->
  <a href="http://discord.gg/W69GTHe3pJ">
    <img src="https://img.shields.io/static/v1?label=Discord&message=chat&color=5865F2&style=flat&logo=discord"/>
  </a>
  <!-- telegram -->
  <a href="https://t.me/nightowlcommunity">
    <img src="https://img.shields.io/static/v1?label=Telegram&message=chat&color=26A5E4&style=flat&logo=telegram"/>
  </a>
  <!-- reddit -->
  <a href="https://www.reddit.com/r/NightOwlCasino">
    <img src="https://img.shields.io/static/v1?label=Reddit&message=forum&color=FF4500&style=flat&logo=reddit"/>
  </a>
  <!-- mit license -->
  <a href="https://github.com/nightowlcasino/NightOwl-Frontend/blob/main/LICENSE">
    <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=A31F34&style=flat"/>
  </a>
</p>

<!-- logo -->
<p align="center">
  <img src="public/logo.png" alt="Logo" width="400"/>
</p>

# NightOwl-Frontend

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#why-react">Why react</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#ergo-hack-iii-goals">Ergo Hack III Goals</a></li>
    <li><a href="#run-the-project">Run the project</a></li>
  </ol>
</details>
  
<!-- ABOUT -->
## About

Frontend will be done with the help of the very well known library **React** due to:
- His fast learning curve that suits well with our agile method of coding
- Fast rendering with the Virtual DOM allowing a smooth betting experience
- Reusable composability

And although privacy and security are usually undervalued aspects for web developing, Night Owl was created a few days before [ErgoHack III - Privacy and Security](https://ergohack.io/), we cant only be focusing on having a resilient and secure backend, frontend also has to meet such requirements!

This is why, we are going to briefly talk about privacy and security for the frontend.

### Why React

The most common React cyberattacks are:
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Distributed Denial of Service (DDoS)
- XML External Entity Attack (XXE)

And after gathering information from different sources [1](https://www.freecodecamp.org/news/best-practices-for-security-of-your-react-js-application/)[2](https://relevant.software/blog/react-js-security-guide/)[3](https://snyk.io/blog/10-react-security-best-practices/), we plan to ensure security and privacy by:
- Making sure that our HTML code is not vulnerable. Three constructive ways to do this are: [Disabling HTML Markups](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled), [Using escape characters](https://www.freecodecamp.org/news/best-practices-for-security-of-your-react-js-application/) and avoiding [DOM manipulation with .innerHTML](https://betterprogramming.pub/dom-manipulation-the-dangers-of-innerhtml-602f4119d905)
- Validating URLs if we were to use any inside the casino using the HTTP or HTTPS protocols.<br /> 
> function validateURL(url) {
>	const parsed = new URL(url)
>	return ['https:', 'http:'].includes(parsed.protocol)
> }
> 
> <a href={validateURL(url) ? url : ''}>This is a link!</a>
- Set up a proper [file management](https://en.reactjs.org/docs/faq-structure.html)
- Use [a linter](https://www.npmjs.com/package/@imaginary-cloud/eslint-config-react)

<!-- ROADMAP -->
## Roadmap

### 2022

#### Q1
- [ ] Being able to connect your personal wallet with the website 
- [ ] Testing of the known Coinflip game via website 
- [ ] Have coinflip game launched, ideally coinflip and roulette

Longer term goals are still being figured out, very hard to estimate any dates at this moment.

<!-- ERGOHACK3 -->
## Ergo Hack III Goals

Although ErgoHack's main focus is not the frontend of a dApp, and unfortunately most of our frontend devs will not be able to attend the event, not much development regarding the frontend will be done at the ErgoHack, however we plan to start creating the basics for the coinflip game while our backend devs are working hard with the help of the Ergo community!

### Run the project
In the project directory, you can run:

> `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

> `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
