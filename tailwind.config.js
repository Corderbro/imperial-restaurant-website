module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Imperial Neon Sign Color Palette
        'neon-red': '#FF1744',      // Bright electric red
        'neon-red-light': '#FF6B7A',
        'neon-red-dark': '#D50000',
        'neon-yellow': '#FFEB3B',   // Bright electric yellow
        'neon-yellow-light': '#FFF176',
        'neon-yellow-dark': '#FBC02D',
        'neon-blue': '#2196F3',     // Bright electric blue
        'neon-blue-light': '#64B5F6',
        'neon-blue-dark': '#1976D2',
        'neon-green': '#4CAF50',    // Bright electric green
        'neon-green-light': '#81C784',
        'neon-green-dark': '#388E3C',
        'neon-purple': '#9C27B0',   // Bright electric purple
        'neon-purple-light': '#BA68C8',
        'neon-purple-dark': '#7B1FA2',
        'neon-orange': '#FF9800',   // Bright electric orange
        'neon-orange-light': '#FFB74D',
        'neon-orange-dark': '#F57C00',
        'dark': '#1A1A1A',
        'warm-white': '#FAFAFA',
        'warm-gray': '#6B7280',
        'soft-gray': '#F3F4F6',
        'cream': '#FEF7ED'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow-red': '0 0 20px rgba(255, 23, 68, 0.4)',
        'glow-yellow': '0 0 20px rgba(255, 235, 59, 0.4)',
        'glow-blue': '0 0 20px rgba(33, 150, 243, 0.4)',
        'glow-green': '0 0 20px rgba(76, 175, 80, 0.4)',
        'glow-purple': '0 0 20px rgba(156, 39, 176, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
