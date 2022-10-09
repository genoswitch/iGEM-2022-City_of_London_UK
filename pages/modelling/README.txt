To convert LaTeX to html (with MathJax syntax)

> pandoc modelling.tex --mathjax -o modelling.html

To create a standalone HTML file:
> pandoc -s modelling.tex --mathjax -o modelling-standalone.html