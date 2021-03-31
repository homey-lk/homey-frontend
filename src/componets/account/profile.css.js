export default CSS = `
  .container {
    margin: 5rem 2.5rem;
  }
  
  .row {
    display: flex;
    flex-direction: row;
  }

  .log-list {
    font-size: 0.7rem;
    margin: 0.5rem;
    color: darkblue;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .loader {
    width: 80%;
    height: 1rem;
    animation: dp-loader 5s infinite ease-in-out;
    transition: all 1s ease; 
    border-radius: 1rem;
  }

  .form-field {
  }

  @keyframes loader {
    from {background-image: linear-gradient(to right, #858585, #7c7c7c, #747474, #6b6b6b, #636363);}
    to {background-image: linear-gradient(to left, #858585, #7c7c7c, #747474, #6b6b6b, #636363);}
  }

  .first-aside {
    position: relative;
    width: 30%;
    align-items: center;
  }

  .profile-picture-container {
    width: 20vw;
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
  }

  .profile-picture {
    position: relative;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    border: solid #ffffff 6px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    animation: dp-loader 5s infinite ease;
  }

  .uploaded-image {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @keyframes dp-loader {
    0%   { background: #bbbbbb;}
    50%  { background: #767676;}
    100%   { background: #bbbbbb;}
  }

  .progress {
    background: #bbbbbb;
    width: 80%;
    height: 0.2rem;
    border-radius: 1rem;
    margin: 0.2rem 0 0 0;
    display: none;
  }

  .progress-bar {
    width: 0;
    height: 100%;
    position: relative;
    background: #37da07;
  }

  .upload {
    position: absolute;
    display: flex;
    bottom: 2rem;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.7);
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    cursor: pointer;
    transition: all 0.5s ease;
  }

   .img-label {
    text-indent: 0;
    cursor: pointer;
    transition: all 0.5s ease;
   }

  input[type="file"] {
    display: none;
  }

  .name-container {
    text-align: center;
    width: 100%;
  }

  .name {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  .last-login-container {
    flex-direction: column;
    display: flex;
    margin: 1rem auto;
  }

  .last-login-container > .column {
    flex-direction: row;
  }

  .last-login-container > .column, .last-login-container > span {
    margin: 0.2rem auto;
  }

  .last-login-title {
    font-weight: bold;
  }

  .last-login-loader{
    width: 15rem;
    display: flex;
    justify-content: center;
    transform: scale(0.8);
  }

  .form {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    flex-direction: column;
    width: 75%;
    margin: 3rem auto;
  }

  .form-column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .form-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .error-container {
    justify-content: center;
  }

  .error {
    color: red;
    font-weight: bold;
  }

  button {
    height: 2.2rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    font-size: 0.8rem;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    transition: all 1s;
    margin: 1rem auto;
    width: 47.5%;
    position: relative;
  }

  button:hover {
    box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
  }

  #cancel {
    background-image: none;
    color: #000000;
  }

  #cancel:hover {
    box-shadow: 1px 1px 10px 3px rgba(150,150,150,0.5);
  }

  .danger-button {
    background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
  }

  .danger-button:hover {
      box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
  }

  input, select {
    margin: 0.4rem;
    height: 1.5rem;
    outline: none;
    border: 1px solid;
    border-radius: 1rem;
    text-indent: 1rem;
  }

  label {
    text-indent: 0.5rem;
  }

  hr {
    height: 1px;
    width: 90%;
    background-color: #444444;
  }

  .danger-title, .password-title {
    font-size: 1.2rem;
    font-weight: bold;
    text-indent: 0.5rem;
    margin: 1rem 0;
    cursor: pointer;
  }

  .danger-title {
    color: #fc0269;
  }

  #deactivate {
    background-image: linear-gradient(to right top, #755252, #744140, #712f2d, #6c1c1a, #650000);
  }

  #year, #day, #month {
    text-align: center;
    text-indent: unset;
    width: 100%;
  }

  .show-more a {
    text-decoration: underline;
    font-size: 0.9rem;
    color: #120cf4;
    cursor: pointer;
  }

  .popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    z-index: 10;
  }

  .popup > div {
    display: flex;
    background-color: #ffffff;
    padding: 10% 15%;
    flex-direction: column;
    border-radius: 3px;
  }

  .button-group {
    display: flex;
  }

  .collapsible {
    display: none;
    width: 100%;
    height: 0;
    transition: all 1s ease-in-out;
  }

  .collapsed {
    display: flex;
    height: auto;
    flex-direction: column;
  }

  .collapsible-row {
    justify-content: space-around;
    width: 100%;
  }

  .collapse {
    width: 100%;
  }

  .collapse > .row {
    justify-content: space-between;
  }

  .expand {
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }

  .expanded {
    transform: rotate(45deg);
  }
  
  @media(max-Width: 800px){
    .row {
      flex-direction: column;
      justify-Content: center;
    }
    .first-aside {
      position: relative;
      width: 100%;
      align-items: center;
    }
    .column {
      flex-direction: column;
      width: 100%;
    }
    .first-aside {
      width: 100%;
   }
    .profile-picture-container {
      flex-direction: column;
      justify-Content: center;
      width: 10rem;
      height: 10rem;
    }
    .expand {      
      transition: none;
    }
    .expanded {
      transform:none; 
    }
  }

  @media(max-Width: 500px){
    .row {
      flex-direction: column;
      justify-Content: center;
    }
    .first-aside {
      position: relative;
      width: 100%;
      align-items: center;
    }
    .form-row {
      flex-direction: column;
      width: 100%;
    }
    .img-label {
      width: auto;
      height: auto;
    }
    .last-login-container {
      font-size: small;
  }
  }

`