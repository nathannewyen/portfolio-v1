module.exports = {
  siteTitle: 'Nhan Nguyen | Software Engineer',
  siteDescription:
    'Nhan Nguyen is a software engineer based in Dallas, TX who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Nhan Nguyen, Nhan, Nguyen, nhan13574, software engineer, front-end engineer, web developer, javascript, southeastern',
  siteUrl: 'https://nathan-portfolio-heroku.herokuapp.com/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Nhan Nguyen',
  location: 'Dallas, TX',
  email: 'nhan13574@gmail.com',
  github: 'https://github.com/nathannewyen',
  twitterHandle: '@natenguyen3112',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nathannewyen',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nhannguyen3112/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/nathanswork',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nathan.newyen',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/natenguyen3112',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  }),
};
