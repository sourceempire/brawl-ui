# Brawl component library

## Theme variables

<!--THEME_START-->
```css
/** Colors **/

/* Used on Call To Actions and buttons. Meant to draw attention. Don’t overuse. Preferably only one element per view should use the primary color. */
--color-primary: hsl(39, 100%, 47%);
--color-primary-hover: hsl(39, 100%, 57%);
--color-primary-active: hsl(39, 100%, 67%);

/* Used to provide a graphical accent to make views interesting. Draws attention and can be used on both elements and texts. Don’t use on CTAs. */
--color-accent: hsl(143, 65%, 65%);
--color-accent-hover: hsl(143, 65%, 75%);
--color-accent-active: hsl(143, 65%, 85%);

/* Used as the main background, or when necessary, as darker elements. */
--color-background: hsl(240, 19%, 17%);
--color-background-hover: hsl(240, 19%, 27%);
--color-background-active: hsl(240, 19%, 37%);

/* Used for normal buttons (i.e. not primay or accent buttons), inputs and similar elements. */
--color-secondary: hsl(238, 19%, 26%);
--color-secondary-hover: hsl(238, 19%, 36%);
--color-secondary-active: hsl(238, 19%, 46%);

/* Used on surfaces such as cards and larger blocks. */
--color-surface: hsl(240, 19%, 21%);
--color-surface-hover: hsl(240, 19%, 31%);
--color-surface-active: hsl(240, 19%, 41%);



/** Font styles **/
--font-default: 'DM Sans', sans-serif;
--font-stylised: 'Orbitron', sans-serif;

--font-header: bold 20px var(--font-default);
--font-stylized-header: bold 18px var(--font-stylised);
--font-title: bold 13px var(--font-default);
--font-body: normal 13px var(--font-default);
--font-menu: normal 13px var(--font-default);
--font-button: normal 12px var(--font-default);
--font-note: normal 12px var(--font-default);

/** Spacing **/
--spacing-base: 6px;
--spacing-base-x2: calc(var(--spacing-base) * 2);
--spacing-base-x3: calc(var(--spacing-base) * 3);
--spacing-base-x4: calc(var(--spacing-base) * 4);
--spacing-base-x5: calc(var(--spacing-base) * 5);
--spacing-base-x6: calc(var(--spacing-base) * 6);
--spacing-base-x7: calc(var(--spacing-base) * 7);
--spacing-base-x8: calc(var(--spacing-base) * 8);
```
<!--THEME_END-->