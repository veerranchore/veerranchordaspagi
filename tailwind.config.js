export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '320px',
      'sm': '360px',
      'sm2': '375px',
      'sm3': '390px',
      'sm4': '412px',
      'sm5': '430px',
      'md': '480px',
      'md2': '600px',
      'lg': '768px',
      'lg2': '820px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1366px',
      '4xl': '1440px',
      '5xl': '1600px',
      '6xl': '1920px',
      '7xl': '2560px',
      '8xl': '3840px',
    },
    extend: {
      colors: {
        "primary": "#3d6b4f",
        "military-yellow": "#F2B705",
        "background-light": "#f6f7f7",
        "background-dark": "#161c18",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"]
      },
      fontSize: {
        // Optimized for all devices
        'xs': ['10px', '12px'],
        'sm': ['11px', '14px'],
        'base': ['12px', '16px'],
        'lg': ['13px', '18px'],
        'xl': ['14px', '20px'],
        '2xl': ['16px', '22px'],
        '3xl': ['18px', '24px'],
        '4xl': ['20px', '28px'],
        '5xl': ['24px', '32px'],
        '6xl': ['28px', '36px'],
        '7xl': ['32px', '40px'],
        '8xl': ['36px', '44px'],
        '9xl': ['40px', '48px'],
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        'xs': '2px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
