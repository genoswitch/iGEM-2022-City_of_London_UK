window.MathJax = {
  startup: {
    ready: () => {
      MathJax.config.chtml.fontURL =
        'https://static.igem.wiki/teams/4508/wiki/site-res/mathjax-fonts';
      MathJax.config.chtml.font.options.fontURL =
        'https://static.igem.wiki/teams/4508/wiki/site-res/mathjax-fonts';
      MathJax.startup.defaultReady();
    },
  },
};
