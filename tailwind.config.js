module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.jsx'],
	darkMode: false,
	// or 'media' or 'class'
	theme: {
		extend: {
			keyframes: {
				loader: {
				  '0%, 50%, 100%': {transform: 'translateX(0) scale(1)'},
				  '25%': {transform: 'translateX(-100px) scale(0.3)'},
				  '75%': {transform: 'translateX(100px) scale(0.3)'}
  				}
			},
			animation: {
				loader: 'loader 3s ease-in-out infinite'
			}
		},
		colors: {
			brand: '#785af1',
			green: '#39b493',
			orange: '#f57f17',
			white: '#ffffff',
			black: '#000000',
			'light-white': '#eeeeee',
			danger: '#f11e1e',
			gray: '#e0e0e0',
			'kinda-black': '#101020',
			'kinda-indigo': '#18182e',
			'backdrop': 'rgba(0,0,0,0.3)',
			'off-white': 'rgba(255, 255, 255, 0.4)',
			'not-black': 'rgba(0,0,0,0.1)',
			'midnight': '#21243D',
			'input': '#e8000000',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}