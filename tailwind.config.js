const content = [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
]

const theme = {
    fontSize: {
        sm: '12px',
        base: '14px',
        lg: '18px',
        xl: '36px'
    },
    screens: {
        xs: { max: '475px' },
        sm: { max: '640px' },
        md: { max: '890px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' }
    }
}

module.exports = {
    theme,
    content,
    variants: {},
    plugins: ['macros']
}
