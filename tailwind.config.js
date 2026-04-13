// tailwind.config.js
theme: {
  extend: {
    keyframes: {
      skew: {
        '0%, 100%': { transform: 'skewX(0deg)' },
        '50%': { transform: 'skewX(5deg)' },
      },
    },
    animation: {
      skew: 'skew 0.2s ease-in-out infinite',
    }
  }
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-1%, -1%)' },
          '30%': { transform: 'translate(1%, 1%)' },
          '50%': { transform: 'translate(-0.5%, 1.5%)' },
          '70%': { transform: 'translate(1.5%, -0.5%)' },
          '90%': { transform: 'translate(-1%, 0.5%)' },
        },
        shake: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.1)' },
          '2%': { transform: 'translate(2px, 1px) scale(1.11)' },
          '4%': { transform: 'translate(-1px, -2px) scale(1.1)' },
          '6%': { transform: 'translate(-3px, 1px) scale(1.11)' },
        }
      },
      animation: {
        'grain-move': 'grain 0.8s steps(1) infinite',
        'subtle-shake': 'shake 10s infinite',
      }
    }
  }
}
