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
  .content-banner {
    height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px ;

    > span {
      font-size: 1rem;
    line-height: 1rem;
    font-weight: 400;
    color: var(--text-color-secondary);
    }
  }
  .content-card-pages {
    width: 100% ;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 

.content {
  width: 80% ;
  display: flex;
    margin: 1rem;
    border: solid 1px #f2f2f2;
    border-radius: 3px;
    box-shadow: 4px 5px 5px grey;
  margin: 5px;
    
}
.description-page {
  display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 3px ;

   h3 {
      font-size: 1rem;
    }
  article {
      font-size: 13px;
      color: #fff;
    }

   span {
      font-size: 11px;;
    color: gray;
    }
  

}
.card-container .card {
  border: solid 1px #f2f2f2;
  margin: 5px;
}

.card-img {
  height: 141px;
    width: 103px;
    object-fit: cover;
    display: flex;
}



    
`;

export default GlobalStyle;
