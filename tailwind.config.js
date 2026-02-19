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
        'xs': ['10px', '14px'],
        'sm': ['12px', '16px'],
        'base': ['14px', '20px'],
        'lg': ['16px', '24px'],
        'xl': ['18px', '28px'],
        '2xl': ['20px', '28px'],
        '3xl': ['24px', '32px'],
        '4xl': ['28px', '36px'],
        '5xl': ['32px', '40px'],
        '6xl': ['36px', '44px'],
        '7xl': ['40px', '48px'],
        '8xl': ['48px', '56px'],
        '9xl': ['56px', '64px'],
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
    },
  },
  plugins: [],
}
