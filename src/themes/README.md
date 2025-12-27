# Theme System Documentation

## Overview
This theme system uses CSS variables (custom properties) in conjunction with Tailwind CSS to provide a flexible and maintainable theming solution. The system supports both light and dark modes out of the box.

## Available Theme Variables

### Colors
- `--color-primary`: Primary brand color
- `--color-secondary`: Secondary brand color
- `--color-accent`: Accent color for highlights
- `--color-background`: Background color
- `--color-text`: Main text color

### Typography
- `--font-family-sans`: Main font family
- `--font-size-base`: Base font size (1rem)
- `--font-size-sm`: Small text
- `--font-size-lg`: Large text
- `--font-size-xl`: Extra large text
- `--font-size-2xl`: Double extra large text
- `--font-weight-normal`: Normal font weight (400)
- `--font-weight-medium`: Medium font weight (500)
- `--font-weight-bold`: Bold font weight (700)

### Spacing
- `--spacing-xs`: Extra small spacing (0.5rem)
- `--spacing-sm`: Small spacing (1rem)
- `--spacing-md`: Medium spacing (1.5rem)
- `--spacing-lg`: Large spacing (2rem)
- `--spacing-xl`: Extra large spacing (3rem)

### Shadows
- `--shadow-sm`: Small shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow

### Border Radius
- `--radius-sm`: Small border radius
- `--radius-md`: Medium border radius
- `--radius-lg`: Large border radius
- `--radius-full`: Full/circular border radius

## Usage with Tailwind

The theme variables are mapped to Tailwind utility classes:

```html
<!-- Colors -->
<div class="bg-primary text-secondary">
  <span class="text-accent">Highlighted text</span>
</div>

<!-- Typography -->
<p class="font-sans text-base font-medium">
  Sample text
</p>

<!-- Spacing -->
<div class="p-sm mb-lg">
  Spaced content
</div>

<!-- Shadows -->
<div class="shadow-md">
  Card with shadow
</div>

<!-- Border Radius -->
<button class="rounded-lg">
  Rounded button
</button>
```

## Customizing the Theme

To customize the theme, you can:

1. Modify the CSS variables in `src/themes/base.css`
2. Create a new theme file that overrides the base theme
3. Use CSS-in-JS solutions to modify variables at runtime

## Dark Mode

Dark mode is automatically supported through the `prefers-color-scheme` media query. You can override dark mode colors in the media query section of `base.css`. 