import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding:{
        '2xl':'120px',
        xl:'100px',
        lg:'80px',
        md:'40px',
        sm:'20px'
      },
      colors:{
        'primary' : '#CB997E',
        'primary-dark' :'#B98B71',
        'primary-bg':'#FFEFE3',
        'login-bg':'#DDBEA9',
        'secondary' : '#6B705C',
        'secondary-dark' : '#494C3E',
        'emergency':'#FF4955',
        'emergency-dark':'#E0404B',
        's-status':'#39B5E0',
        'light-text':'#A5A58D',
        'grey' :'#B8B8B7',
        
      },

    },
  },
  plugins: [],
};
export default config;
