/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat' : 'Montserrat',
        'Poppins': 'Poppins'
      },
      animation: {
        blob: "blob 7s infinite",
        scrollVertical : "scrollVertical 12s linear infinite",
        scrollVerticalOpposite : "scrollVerticalOpposite 12s linear infinite",
        scrollHorizontal : "scrollHorizontal 12s linear infinite",
        scrollHorizontalOpposite : "scrollHorizontalOpposite 12s linear infinite",
        leftScroll: "leftScroll 35s linear infinite",
        rightScroll: "rightScroll 35s linear infinite",
      },
      keyframes: {

        scrollVertical: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          }
        },

        scrollVerticalOpposite: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100%)",
          }
        },

        scrollHorizontal: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          }
        },

        scrollHorizontalOpposite: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          }
        },

        leftScroll: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          }
        },

        rightScroll: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          }
        },
      },
      screens: {
        'phone': '375px'
      },
      width: {
        '5%':'5%',
        '7%':'7%',
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '25%':'25%',
        '30%':'30%',
        '40%':'40%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '75%':'75%',
        '90%':'90%',
        '100%':'100%',
      },
      height: {
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '30%':'30%',
        '40%':'40%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '75%':'75%',
        '90%':'90%',
        '100%':'100%',
        '100': '415px',
        '115': '450px',
        '120': '500px'
      },
      fontSize: {
        's': '10px',
        'xs': '7px',
        'xxs': '5px',
        'xxxs': '4px'
      }
    },
  },
  plugins: [],
}

