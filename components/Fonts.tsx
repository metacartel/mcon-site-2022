import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    /* latin */  
      @font-face {
          font-family: "Basteleur";
          src: url("/fonts/Basteleur/Basteleur-Bold.ttf");
          font-style: bold;
          font-weight: 700;
          font-display: swap;
        }

        @font-face {
          font-family: "Basteleur";
          src: url("/fonts/Basteleur/Basteleur-Moonlight.ttf");
          font-style: moonlight;
          font-weight: 400;
          font-display: swap;
        }
      
      @font-face {
          font-family: "Dagheest";
          src: url("/fonts/Dagheest/FT88-Regular.TTF");
          font-style: regular;
          font-weight: 400;
          font-display: swap;
        }
    `}
  />
);

export default Fonts;
