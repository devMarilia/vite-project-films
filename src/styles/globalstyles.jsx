// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  body, html, h1, h2, h3, h4, h5, h6, p, ul, ol, li, a, button, input, textarea, label, select, option, form, fieldset, legend, table, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
  }

   
  #root {
    --color-primary: #fff ;
    --color-navbar: #66127d;
    --text-color-primary: #fafafa;
    --text-color-secondary: grey;
    --text-color-tertiary: #000000;
    --background-mobile-menu: rgb(105,105,105);
    --background-primary: #141414;
    --fonte-principal: Open-Sans, Helvetica, Sans-Serif;
  }
  body {
    overflow: overlay;
    background: #141414;
  }

  
    a {
    text-decoration: none;
    }
    a:hover {
    text-decoration: none;
    }
    ul {
    list-style: none;
    }
    li {
    list-style: none;
    }
  }
  .card-container {
    
    background: red;
    width: 100%;
    display: flex;
    justify-content: center;


    
  flex-wrap: wrap;
}
.conntent {
  width: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
}
.card-container .card {
  border: solid 1px #f2f2f2;
  margin: 5px;
}

.card-container .card .card-body {
  padding: 10px;
}

.card-img {
  height: 100px;
  width: 100px;
  object-fit: cover;
}
    
`;

export default GlobalStyle;
