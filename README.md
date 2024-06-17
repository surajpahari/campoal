## Campoal's About Page

Frontend design implementation for the About Page of Campoal, The World Petition Platform. This project was created as an assignment to demonstrate the ability to develop and style a user-friendly, informative, and visually appealing web page for a web application.

## Table of Contents
- [Gettting Started](#getting-started)
- [An Overview of Code Structure](#an-overview-of-code-structure)
- [Libraries and tools used](#libraries-and-tools-used)
- [Design Decisions](#design-decisions)



## Getting Started
To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/surajpahari/campoal.git
   cd campoal

2. **Install Dependencies**
   ```bash
   npx install
   
3. **Run the development server**
   ```bash
   npm run dev
After launching the application, you can access it at http://localhost:3000 on your preferred web browser.

## An Overview of Code Structure

```
├── app
│   ├── components(components for the layout)
│   │   ├── footer.js
│   │   ├── GlobalButton.js
│   │   └── navbar.js
│   ├── LandingPage
│   │   ├── components
│   │   │   ├── ContactSection.js
│   │   │   ├── IntroSection.js
│   │   │   ├── (.....other landing page component..)
│   │   └── page.js
│   ├── layout.js
│   └── page.js
├── public
│   ├── backgrounds/
│   ├── favicons/
│   ├── footers/
│   ├── frames/
│   ├── icons/
│   ├── images/
│   ├── logo.svg
│   ├── signs/
│   ├── socials/
├── README.md
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tailwind.config.js


Code structure simply follows the convention of netxjs app router.
```

## Libraries and Tools used.
1. [Next.js](https://nextjs.org/s.dev/)
- A React framework  that abstracts and automatically configures tooling needed for React, like bundling, compiling, and more.


2. [TailwindCSS](https://tailwindcss.com/)
- Css framework to rapidly build modern website.


## Design Decisions

Decided to use next.js for its abstraction and tailwind for its utility-frist approach and responsive design.Other than these no major decisions were made.


