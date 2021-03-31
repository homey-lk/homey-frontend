export default CSS = `
.block .container {
    position: relative;
    display: inline-block;
    width: 400px;
    height: 300px;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
    margin: 2em;
    background-color: rgba(300,300,300,0.5);
    z-index: -1;
    position: relative;
}
.block .container:hover {
    box-shadow: 0 0 25px -5px;
}

.log-list {
  font-size: 0.7rem;
  margin: 0.5rem;
  color: darkblue;
}

.block {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
}

.details {
    
    background-color: rgba(200, 200, 200, 1);
    padding-bottom: 50px;
}

.details > div:last-child {
    display: flex;
    justify-content: center;
}

span {
    margin: auto;
}

.description {
    margin: 0.5em;
    height: 5em;
    text-align: justify;
}
.heading{
  text-align: center;;
}

button {
    font-weight: bold;
    font-size: 1.1em;
    border:none;
    border-radius: 2px;
    padding: 0.3em;
    display: inline;
    margin:0.1em;
    color: #eeeeee;
    cursor: pointer;
}
button:hover{
    cursor: pointer;
    background-position: right;
    color: black;
    box-shadow: 0 0 20px -5px;
}
.continue{
  position: absolute;
  border-radius: 2rem;
  background-color: rgba(12, 164, 44, 0.8);
}
.payment-history-heading {
  text-align: center;
  position: relative;
}
.heading{
  font-size:1.5em;
}
@media(max-Width:1000px){

  .block {
    display: flex;
    flex-direction: column;
  }
} 

`