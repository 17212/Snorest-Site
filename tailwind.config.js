/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}" // added components since they are in root
    ],
    theme: {
        extend: {
            colors: {
                "accent": "#C5A059",
                "surface": "#050505",
                "surface-card": "#121212",
                "surface-highlight": "#1E1E1E",
                "apple-gray": "#86868b",
            },
            fontFamily: {
                "sans": ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
                "arabic": ["IBM Plex Sans Arabic", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
            },
            boxShadow: {
                'glow': '0 0 30px rgba(197, 160, 89, 0.1)',
                'inner-glow': 'inset 0 0 40px rgba(255, 255, 255, 0.03)',
                'card-hover': '0 30px 60px -12px rgba(0,0,0,0.8)',
                'apple-card': '0 8px 30px rgba(0,0,0,0.4)',
            },
            animation: {
                'slow-pan': 'pan 40s ease-in-out infinite alternate',
                'reveal-card': 'reveal-card 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards',
                'modal-enter': 'modal-enter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'modal-exit': 'modal-exit 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-out': 'fadeOut 0.4s ease-out forwards',
                'slide-in-left': 'slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-right': 'slideInRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                pan: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.15)' },
                },
                'reveal-card': {
                    '0%': { opacity: '0', transform: 'translateY(40px) scale(0.96)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                'modal-enter': {
                    '0%': { opacity: '0', transform: 'scale(0.96) translateY(30px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                },
                'modal-exit': {
                    '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                    '100%': { opacity: '0', transform: 'scale(0.96) translateY(30px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-60px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(60px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                }
            }
        },
    },
    plugins: [],
}
