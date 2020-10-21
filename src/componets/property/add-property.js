import Base from './../Base.js'

export default class AddProperty extends Base {

  css = `
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  * input {
    border-radius: 10px;
  }
  * textarea {
    border-radius: 10px;
  }
  /****************
  Typography
  ****************/
  label {
    font-weight: bold;
  }
  /**********************
  Layout 
  **************************/
  body {
    padding-top: 30px;
  }
  .container {
    position: absolute;
    width: 90%;
    margin-top:5%;
    margin-left: 28%;
    max-width: 770.98px;
    color: #000;
    padding: 15px;
    z-index:10;
  }
  
  /* add Prop */
  .properties form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .property {
    width: 30%;
  }
  
  .property input {
    width: 100%;
    margin-bottom: 20px;
    height: 30px;
  }
  .property_description {
    width: 100%;
    margin-bottom: 20px;
  }
  .property_description textarea {
    width: 100%;
  }
  .select_properties {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .select_property {
    width: 15%;
  }
  .select_property input {
    margin-right: 15px;
  }
  
  input:checked + label {
    color: #ff4000;
  }
  :checked {
    margin-left: 2px;
  }
  
  input[type='checkbox']:checked {
    box-shadow: 0 0 0 2px #ff4000;
  }
  
  .image_property {
    width: 100%;
    margin-bottom: 20px;
  }
  .image_property-md {
    width: 70%;
  }
  .image_upload {
    display: flex;
    border-radius: 10px 0 0 10px;
  }
  .image_upload-md label {
    width: 80%;
    border: 1px solid #004e64;
    background: white;
  }
  .image_upload-lg label {
    width: 100%;
    border: 1px solid #004e64;
    background: white;
  }
  #upload-photo {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  
  /* *********************
  Components
   **************************/
  /* Buttons */
  
  .btn {
    display: block;
    border: none;
  
    font-size: 16px;
    font-weight: bolder;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-align: center;
    color: #fff;
    padding: 0.5em 2em;
    border-radius: 20px;
    transition: 0.3s;
    text-transform: uppercase;
  }
  .btn-primary {
    border: 2px solid #34a832;
    background-color: #34a832;
  }
  .btn-primary:hover {
    color: #001f3f;
    box-shadow: 6px 6px #ff4000;
    transition: 0.5s;
  }
  .btn-upload {
    border-radius: 0 10px 10px 0;
    background: #34a832;
  }
  .btn-lg {
    width: 100%;
  }
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
  

` 

content = `
<div class="container">
<section class="properties">
    <form action="">
        <div class="property">
            <label for="">Title</label>
            <input type="text" name="" id="">
        </div>
        <div class="property">
            <label for="">Price</label>
            <input type="text" name="" id="">
        </div>
        <div class="property">
            <label for="">KeyMoney</label>
            <input type="text" name="" id="">
        </div>
        <div class="property">
            <label for="">Minimum Period</label>
            <input type="text" name="" id="">
        </div>
        <div class="property">
            <label for="">Available From</label>
            <input type="date" name="" id="">
        </div>
        <div class="property">
            <label for="">Property Type</label>
            <select name="property_type">
              <option>Home</option>
              <option>Annex</option>
              <option>Room</option>
            </select>
        </div>
        <div class="property_description">
            <label for="">Description</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        
        <div class="select_properties">
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
        </div>
        <div class="image_property image_property-md">
            <h3>Images</h3>
            <div class="image_upload image_upload-md">
                <label for="upload-photo"></label>
                <input type="file" name="photo" id="upload-photo" />
                <input type="submit"value="Upload Images" class="btn btn-upload">
            </div>
            
        </div>
        <button class="btn btn-primary btn-lg">Add Property</button>

    </form>
    
</section>
</div>
`
  constructor() {
    super()
    this.mount()
  }

}

window.customElements.define('add-property', AddProperty)
