export default CSS = `
.backdrop {
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.7);
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
}

#close-popup {
  color: #black;
  font-size: 3rem;
  transform: rotate(45deg);
  cursor: pointer;
  position: absolute;
  right: 31%;
  top:41%;
  margin-top: -1rem;
  transition: all 1s ease;
  z-index:1;
}

#close-popup:hover {
  color: #cccccc;
}

.social-btns{
    height: 20%;
    width: 40%;
    background-color: cadetblue;
  }
  
  .social-btns .btn,
  .social-btns .btn:before,
  .social-btns .btn .fa {
    transition: all 0.35s;
    transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
  }
  .social-btns .btn:before {
    top: 90%;
    left: -110%;
  }
  .social-btns .btn .fa {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .social-btns .btn.facebook:before {
    background-color: #5e8df5;
  }
  .social-btns .btn.facebook .fa {
    color: #3b5998;
  }
  .social-btns .btn.twitter:before {
    background-color: #5ccbfa;
  }
  .social-btns .btn.twitter .fa {
    color: #00aff0;
  }
  
  .social-btns .btn.whatsapp:before {
    background-color: #25D366;
  }
  .social-btns .btn.whatsapp .fa {
    color: #00aff0;
  }
  .social-btns .btn:focus:before,
  .social-btns .btn:hover:before {
    top: -10%;
    left: -10%;
  }
  .social-btns .btn:focus .fa,
  .social-btns .btn:hover .fa {
    /* color: #fff; */
    -webkit-transform: scale(1);
    transform: scale(1.2);
  }
  .social-btns {
    margin: auto;
    font-size: 0;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .social-btns .btn {
    display: inline-block;
    background-color: #fff;
    width: 90px;
    height: 90px;
    line-height: 90px;
    margin: 10px 10px 10px 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 28%;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
    opacity: 0.99;
  }
  .social-btns .btn:before {
    content: "";
    width: 120%;
    height: 120%;
    position: absolute;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .social-btns .btn .fa {
    font-size: 38px;
    vertical-align: middle;
  }

`