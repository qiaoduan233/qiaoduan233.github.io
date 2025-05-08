// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Thanks for stopping by! ☀️  Here are my lead-author publications — hope you enjoy exploring them! Have a nice day ~~~~",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Here are my current and past projects — hope you enjoy them! Have a wonderful day ~~~ 🌈✨",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-ph-d-at-cambridge-rainbow",
          title: 'Started Ph.D. at Cambridge! :rainbow: 🍀',
          description: "",
          section: "News",},{id: "news-presented-my-work-on-galaxy-mergers-in-the-epoch-of-reionization-at-the-crisol-conference-spain",
          title: 'Presented my work on Galaxy Mergers in the Epoch of Reionization at the...',
          description: "",
          section: "News",},{id: "projects-galaxy-mergers",
          title: 'Galaxy Mergers',
          description: "Galaxy Mergers in the Epoch of Reionization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-gsmf",
          title: 'GSMF',
          description: "Galaxy Stellar Mass Functions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6C%6C%65%72.%64%75%61%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=b19XRvYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
