# Frontend Mentor - Skilled e-learning landing page solution

This is a solution to the [Skilled e-learning landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Desktop](./public/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/justinconnell/fm-skilled-e-learning-landing-page)
- Live Site URL: [GitHub Page](https://justinconnell.github.io/fm-skilled-e-learning-landing-page)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Vite](https://vitejs.dev/) - Development workflow
- [React](https://reactjs.org/) - JS library

### What I learned

For this challenge I learned Sass and leveraged the ability to use functions and mixins to 'DRY' up the CSS code.
I also took a workshop on SMACSS presented by [Jonathan Snook](https://frontendmasters.com/courses/smacss/) (founder of SMACSS)
with the goal of applying some of the SMACSS principles to the CSS code organisation and architecture. I decided to use the 
following ideas I learned about SMACSS for this project:

- Separation of concerns in terms of keeping layout separate to component styling
- Keep changes to base HTML to a minimal
- Use class names and avoid ids - this makes the style more scalable

Naming is hard. To this end I decided to use BEM. With BEM, the CSS tends to grow and is rather verbose, but this is an acceptable
tradeoff in favour of improved code readability - after all we write code for people and not machines.

Vite is a great developer workflow tool and configuring Sass was as simple as installing it as a dev dependency and then adding
an import to the root 'style.scss' file. There is no need to configure Sass compilers etc when using Vite. With Vite
I am able to run a dev server and get realtime feedback on the code changes as I make them.

I used React to separate out the page into it's constituent components. Furthermore, I also separated the content into as data file
that could be used to dynamically build the underlying HTML, this results in a 'DRYer' HTML codebase. 

### Continued development

I will be applying the principles learned from SMACSS to CSS code architecture going forward - Also I will focus more
on structuring HTML using semantic markup and learn more about what modern HTML elements can be used that provide more
meaning to the underlying document elements.

BEM is definitely a keeper and I will continue using BEM for future projects - my opinion is that it's a great tool for
decoupling CSS from HTML.

I plan to continue using Vite and React and developing my skills in that area.

### Useful resources

[Frontend Masters SMACSS course by Jonathan Snook](https://frontendmasters.com/courses/smacss/)

[Frontend Masters Sass Fundamentals course by Mike North](https://frontendmasters.com/courses/sass/)

## Author

- GitHub - [Justin](https://github.com/justinconnell)
- Frontend Mentor - [@justinconnell](https://www.frontendmentor.io/profile/justinconnell)
- Twitter - [@justin2code](https://twitter.com/justin2code)

## Acknowledgments

[Jonathan Snook](https://frontendmasters.com/courses/smacss/) - Thanks for presenting the workshop at Frontend Masters,
this workshop has inspired me to treat CSS as a legitimate coding language and to take a more engineering-centric approach
to structuring and authoring CSS.

[Mike North](https://frontendmasters.com/courses/sass/) - Thanks for delivering the 'Frontend Masters Sass Fundamentals' course
, this course gave me enough base knowledge to implement functions, mixins and nest the Scss code appropriately.
