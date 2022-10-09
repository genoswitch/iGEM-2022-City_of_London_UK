To convert LaTeX to html (with MathJax syntax)

> pandoc modelling.tex --mathjax -o modelling.html

To create a standalone HTML file:
> pandoc -s modelling.tex --mathjax -o modelling-standalone.html

We are using the non-standalone conversion in the page (with the header element from the standalone one)

- The non-standalone version does not include the LaTeX header.