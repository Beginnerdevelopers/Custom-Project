# Essential Stuff

## Html import links

Google font

``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&family=Open+Sans:wght@400;500&display=swap"
  rel="stylesheet">
```

Material icon

``` html
<link rel="stylesheet"
href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
```

---

## CSS Variables

### Colors

``` css
--white: hsl(0, 0%, 100%);
--black: hsl(0, 0%, 0);
```

Dark colors

``` css
--background-dark: hsl(260, 14%, 8%);
--on-background-dark: hsl(280, 17%, 90%);
--surface-dark: hsl(260, 14%, 8%);
--on-surface-dark: hsl(280, 17%, 90%);
--on-surface-variant-dark: hsl(270, 11%, 79%);
--surface-container-low-dark: hsl(264, 8%, 12%);
--surface-container-dark: hsl(257, 10%, 14%);
--surface-bright-dark: hsl(270, 5%, 23%);
--primary-dark: hsl(258, 100%, 87%);
--on-primary-dark: hsl(259, 58%, 28%);
--outline-dark: hsl(264, 5%, 58%);
--outline-variant-dark: hsl(264, 7%, 29%);
```

Light colors

``` css
--background-light: hsl(293, 100%, 98%);
--on-background-light: hsl(264, 8%, 12%);
--surface-light: hsl(293, 100%, 98%);
--on-surface-light: hsl(264, 8%, 12%);
--on-surface-variant-light: hsl(264, 7%, 29%);
--surface-container-low-light: hsl(278, 44%, 96%);
--surface-container-light: hsl(276, 38%, 95%);
--surface-bright-light: hsl(293, 100%, 98%);
--primary-light: hsl(256, 34%, 48%);
--on-primary-light: hsl(0, 0%, 100%);
--outline-light: hsl(270, 4%, 47%);
--outline-variant-light: hsl(270, 11%, 79%);
```

### Typography

Font family

``` css
--font-primary: 'Open Sans', sans-serif;
--font-secondary: 'Noto Sans', sans-serif;
```

Font size

``` css
--base-font-size: 62.5%;
--display-large: 5.7rem;
--display-medium: 4.5rem;
--display-small: 3.6rem;
--headline-large: 3.2rem;
--headline-medium: 2.8rem;
--headline-small: 2.4rem;
--title-large: 2rem;
--title-medium: 1.6rem;
--title-small: 1.4rem;
--label-large: 1.4rem;
--label-medium: 1.2rem;
--label-small: 1.1rem;
--body-large: 1.6rem;
--body-medium: 1.4rem;
--body-small: 1.2rem;
```

Font weight

``` css
--weight-regular: 400;
--weight-medium: 500;
```

### Border Radius

``` css
--shape-corner-extra-small: 4px;
--shape-corner-small: 8px;
--shape-corner-medium: 12px;
--shape-corner-large: 16px;
--shape-corner-full: 500px;
--shape-corner-circle: 50%;
```

### Box shadow

``` css
--elevation-1: 0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d;
```

### Others

``` css
--section-padding: 24px;
--top-bar-height: 64px;
```

### Transition

Duration

``` css
--motion-duration-short-1: 100ms;
```

Easing

``` css
--motion-easing-linear: cubic-bezier(0, 0, 1, 1);
```
