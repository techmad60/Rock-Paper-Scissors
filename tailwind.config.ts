import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "triangle":"url('/images/bg-triangle.svg')"
      },
      letterSpacing: {
        widest: "0.5em",
      },
      boxShadow: {
        'rock': '1px 5px  hsl(348, 78.38%, 36.27%)',
        'paper': '1px 5px hsl(229.06, 66.53%, 46.86%)',
        'scissors': '1px 5px hsl(30.34, 80.91%, 43.14%)',
        'lizard': '1px 5px hsl(261, 73%, 60%)',
        'spock': '1px 5px hsl(189, 59%, 53%)',
        'insets': '1px 5px inset hsl(228.89, 24.77%, 78.63%)'
      },
      colors: {
        'background': " hsl(214, 47%, 23%)",
        'rock-1': "hsl(349, 71%, 52%)",
        'paper-1': "hsl(230, 89%, 62%)",
        'scissors-1': "hsl(39, 89%, 49%)",
        'lizard-1': "hsl(261, 73%, 60%)",
        'spock-1': "hsl(189, 59%, 53%)",

        'rock-2': "hsl(349, 70%, 56%)",
        'paper-2': " hsl(230, 89%, 65%)",
        'scissors-2': "hsl(40, 84%, 53%)",
        'lizard-2': "hsl(261, 72%, 63%)",
        'spock-2': "(189, 58%, 57%)",
        'dark-text' : "hsl(229, 25%, 31%)" ,
        'score-text': "hsl(229, 64%, 46%)",
        'header-outline': "hsl(217, 16%, 45%)"
      },
    },
  },
  plugins: [],
};
export default config;
