/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '96rem'
      },
      colors: {
        primary: {
          50: '#f0f1ff',
          100: '#e4e6ff',
          200: '#cdd1ff',
          300: '#a7aeff',
          400: '#8085ff',
          500: '#5162FF', // base color
          600: '#3a45db',
          700: '#2d35b7',
          800: '#252c94',
          900: '#1e2370',
          950: '#13164d'
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#52525b', // base color
          600: '#434343',
          700: '#383838',
          800: '#313131',
          900: '#1a1a1a',
          950: '#0a0a0a'
        },
        accent: {
          50: '#f0f1ff',
          100: '#e4e6ff',
          200: '#cdd1ff',
          300: '#a7aeff',
          400: '#8085ff',
          500: '#5162FF', // base color
          600: '#3a45db',
          700: '#2d35b7',
          800: '#252c94',
          900: '#1e2370',
          950: '#13164d'
        },
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        cream: 'var(--color-cream)',
        mint: 'var(--color-mint)',
        'mint-icon': '#9ce0d6',
        badge: 'var(--color-badge)',
        badgeText: 'var(--color-badge-text)',
      },
      fontFamily: {
        sans: ['var(--font-family-sans)'],
        title: ['var(--font-family-title)'],
        body: ['var(--font-family-body)'],
        mono: ['var(--font-family-mono)']
      },
      fontSize: {
        base: 'var(--font-size-base)',
        sm: 'var(--font-size-sm)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        h1: ['var(--font-size-h1)', {
          lineHeight: '3.75rem'
        }],
        h2: ['var(--font-size-h2)', {
          lineHeight: '2.625rem'
        }],
        h3: ['var(--font-size-h3)', {
          lineHeight: '2.25rem'
        }],
        h4: ['var(--font-size-h4)', {
          lineHeight: '2rem'
        }],
        h5: ['var(--font-size-h5)', {
          lineHeight: '1.75rem'
        }],
        h6: ['var(--font-size-h6)', {
          lineHeight: '1.5rem'
        }],
        mini: ['var(--font-size-mini)', {
          lineHeight: '1.5rem'
        }]
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
      typography: {
        DEFAULT: {
          css: {
            fontFamily: ['var(--font-family-body)', 'system-ui', 'sans-serif'].join(','),
            '--tw-prose-code': 'var(--font-family-mono)',
            code: {
              fontFamily: ['var(--font-family-mono)', 'monospace'].join(','),
            },
            'pre code': {
              fontFamily: ['var(--font-family-mono)', 'monospace'].join(','),
            },
            'code::before': false,
            'code::after': false,
          },
        },
        sm: {
          css: {
            fontFamily: ['var(--font-family-body)', 'system-ui', 'sans-serif'].join(','),
            '--tw-prose-code': 'var(--font-family-mono)',
            code: {
              fontFamily: ['var(--font-family-mono)', 'monospace'].join(','),
            },
            'pre code': {
              fontFamily: ['var(--font-family-mono)', 'monospace'].join(','),
            },
            'code::before': false,
            'code::after': false,
          },
        },
        lg: {
          css: {
            fontFamily: ['var(--font-family-body)', 'system-ui', 'sans-serif'].join(','),
            '--tw-prose-code': 'var(--font-family-mono)',
            code: {
              fontFamily: ['var(--font-family-mono)', 'monospace'].join(','),
            },
            'pre code': {
              fontFamily: ['var(--font-family-mono)', 'monospace'].join(','),
            },
            'code::before': false,
            'code::after': false,
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      target: 'modern',
    }),
  ],
}
