# CSS Variable-Driven Tailwind Theme System Specification

## Overview
This specification outlines the implementation plan for creating a flexible theming system using CSS variables (custom properties) in conjunction with Tailwind CSS. The goal is to extract theme configuration into a dedicated file for easier maintenance and customization.

## Objectives
- Create a maintainable and scalable theming system
- Separate theme configuration from Tailwind configuration
- Enable easy theme customization through CSS variables
- Support multiple color schemes (light/dark mode)
- Maintain type safety with TypeScript

## Implementation Steps

### 1. Create Theme Configuration Structure
- Create a new `src/themes` directory
- Implement base theme file (`src/themes/base.css`)
- Define CSS variables for:
  - Colors
  - Typography
  - Spacing
  - Shadows
  - Border radius
  - Transitions

### 2. Define Theme Interface
Create `src/themes/types.ts`:
```typescript
interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  // Add other color variables
}

interface ThemeConfig {
  colors: ThemeColors;
  typography: {
    fontFamily: string;
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}
```

### 3. Implement Base Theme
Example structure in `src/themes/base.css`:
```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-accent: #f59e0b;
  --color-background: #ffffff;
  --color-text: #1f2937;

  /* Typography */
  --font-family-sans: 'Inter', sans-serif;
  --font-size-base: 1rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #1f2937;
    --color-text: #f3f4f6;
    /* Add other dark mode variable overrides */
  }
}
```

### 4. Update Tailwind Configuration
Modify `tailwind.config.cjs` to use CSS variables:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        sans: ['var(--font-family-sans)'],
      },
      fontSize: {
        base: 'var(--font-size-base)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
}
```

### 5. Integration Steps
1. Import theme CSS in the main layout file
2. Update existing color references to use new theme variables
3. Add theme switching functionality (if required)
4. Update component styles to use theme variables

### 6. Documentation
- Document theme structure and available variables
- Provide examples of theme customization
- Include instructions for adding new themes
- Document dark mode implementation

## Testing Plan
1. Verify theme application across all components
2. Test dark mode functionality
3. Validate theme switching (if implemented)
4. Cross-browser testing
5. Responsive design verification

## Future Considerations
- Theme presets for quick switching
- CSS-in-JS integration
- Theme editor UI
- Runtime theme customization
- Performance optimization

## Dependencies
- Tailwind CSS
- PostCSS
- TypeScript (for type safety)

## Timeline
1. Theme structure setup: 1 day
2. Base theme implementation: 2 days
3. Tailwind configuration updates: 1 day
4. Component updates: 2-3 days
5. Testing and refinement: 1-2 days

Total estimated time: 7-9 days 