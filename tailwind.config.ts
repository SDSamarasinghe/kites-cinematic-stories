import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				'cinematic-gradient': 'var(--cinematic-gradient)',
				'gold-gradient': 'var(--gold-gradient)',
				'hero-overlay': 'var(--hero-overlay)',
				'premium-gradient': 'var(--premium-gradient)',
				'subtle-gradient': 'var(--subtle-gradient)',
				'mesh-gradient': 'var(--mesh-gradient)',
			},
			boxShadow: {
				'cinematic': 'var(--shadow-cinematic)',
				'gold': 'var(--shadow-gold)',
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
			},
			backdropBlur: {
				'glass': '10px',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-delay': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'50%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(43 96% 56% / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(43 96% 56% / 0.6)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-100px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(100px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'parallax-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(2deg)' },
					'66%': { transform: 'translateY(-10px) rotate(-1deg)' }
				},
				'reveal-up': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(80px) scale(0.8)',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'reveal-left': {
					'0%': { 
						opacity: '0', 
						transform: 'translateX(-60px) rotateY(-15deg)',
						filter: 'blur(5px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateX(0) rotateY(0deg)',
						filter: 'blur(0)'
					}
				},
				'reveal-right': {
					'0%': { 
						opacity: '0', 
						transform: 'translateX(60px) rotateY(15deg)',
						filter: 'blur(5px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateX(0) rotateY(0deg)',
						filter: 'blur(0)'
					}
				},
				'morph': {
					'0%, 100%': { 
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
						transform: 'rotate(0deg) scale(1)'
					},
					'50%': { 
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
						transform: 'rotate(180deg) scale(1.1)'
					}
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'magnetic': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'33%': { transform: 'translate(3px, -3px) rotate(1deg)' },
					'66%': { transform: 'translate(-2px, 2px) rotate(-1deg)' }
				},
				'elastic': {
					'0%': { transform: 'scale(1)' },
					'20%': { transform: 'scale(1.15)' },
					'40%': { transform: 'scale(0.95)' },
					'60%': { transform: 'scale(1.05)' },
					'80%': { transform: 'scale(0.98)' },
					'100%': { transform: 'scale(1)' }
				},
				'gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			backgroundSize: {
				'300%': '300% 300%',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-delay': 'fade-in-delay 1s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'parallax-float': 'parallax-float 8s ease-in-out infinite',
				'reveal-up': 'reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'reveal-left': 'reveal-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'reveal-right': 'reveal-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'morph': 'morph 8s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
				'magnetic': 'magnetic 4s ease-in-out infinite',
				'elastic': 'elastic 0.8s ease-out',
				'gradient': 'gradient 5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
