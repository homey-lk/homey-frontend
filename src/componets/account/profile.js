import Base from '../Base.js'
import CSS from './profile.css.js'

export default class Profiel extends Base {

  css =  CSS


  content = `
    <div class="container">
        <div class="row">
            <div class="column first-aside">
                <div class="profile-picture-container">
                    <img  class="profile-picture" src="/assets/img/1.png" />
                </div>
                <div class="name-container">
                    <span class="name">Dimuthu Lakmal</span>
                </div>
                <div class="last-login-container">
                    <span class="last-login-title">Last Login </span>
                    <div class="row">
                        <span class="last-login-date">2020-10-20</span>
                        <span class="last-login-time">@ 15:43:23</span>
                    </div>
                    <span class="last-location">From Sri Lanka</span>
                    <span class="show-more"><a>Show More...</a></span>
                </div>
            </div>
            <div class="column">
                <div class="form">
                    <div class="form-row">
                        <div class="form-column">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" value="Dimuthu" />
                        </div>
                        <div class="form-column">
                            <label for="LastName">First Name</label>
                            <input type="text" id="LastName" value="Lakmal" />
                        </div>
                    </div>
                    <div class="form-column">
                        <label for="address-1">Address Line 1</label>
                        <input type="text" id="address-1" value="No.141" />
                        <label for="address-2">Address Line 2</label>
                        <input type="text" id="address-1" value="" />
                        <label for="address-3">Address Line 3</label>
                        <input type="text" id="address-3" value="Mediyawa" />
                        <div class="form-row">
                            <div class="form-column">
                                <label for="city">City</label>
                                <input type="text" id="city" value="Eppawala" />
                            </div>
                            <div class="form-column">
                                <label for="district">District</label>
                                <input type="text" id="district" value="Anuradhapura" />
                            </div>
                        </div>
                    </div>
                    <div class="form-column">
                        <label for="nic">NIC</label>
                        <input type="text" id="nic" value="981421485V" />
                    </div>
                    <div class="form-column">
                        <label >Date of birth</label>
                        <div class="form-row">
                            <input type="text" id="year" value="1998" />
                            <input type="text" id="month" value="May" />
                            <input type="text" id="day" value="21" />
                        </div>
                    </div>
                    <div class="form-row">
                            <button id="update">Update Profile</button>
                            <button id="cancel">Cancel</button>
                    </div>
                    <div class="form-column">
                        <hr/>
                    </div>
                    <div class="form-column">
                        <span class="password-title">Change password</span>
                    </div>
                    <div class="form-column">
                        <label for="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" value="" />
                    </div>
                    <div class="form-column">
                        <label for="newPassword">New Password</label>
                        <input type="password" id="newPassword" value="" />
                    </div>
                    <div class="form-column">
                        <label for="confirmPassword">Confirm New Password</label>
                        <input type="password" id="confirmPassword" value="" />
                    </div>
                    <div class="form-column">
                            <button id="changePassword">Change Password</button>
                    </div>

                    <div class="form-column">
                        <hr/>
                    </div>
                    <div class="form-column">
                        <span class="danger-title">Danger Zone</span>
                    </div>
                    <div class="form-row">
                            <button class="danger-button" id="remove">Delete Account</button>
                            <button class="danger-button" id="deactivate">Deactivate Account</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
`
    constructor() {
      super()
      this.mount()

    }

  }

  window.customElements.define('profile-comp', Profiel)