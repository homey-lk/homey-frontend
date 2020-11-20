import Base from '../../../Base.js'
import CSS from './comment-box.css.js'

export default class CommentBox extends Base {
    css = CSS

    loader = `<img src="/assets/img/alt/load-post.gif">`

    content = `
        <!-- Comment - Dummy -->
        <div class="comment">
        <!-- Comment Avatar -->
        <div class="comment-avatar" id="profile-picture">
            ${this.loader}
        </div>
    
        <!-- Comment Box -->
        <div class="comment-box">
            <div class="comment-text">
                comment
            </div>
            <div class="comment-footer">
            <div class="comment-info">
                <span class="comment-author">
                <span class="comment-author">Prameeth Maduwantha</span>
                </span>
                <span class="comment-date">Feb 2, 2013 11:32:04 PM</span>
            </div>
    
            <div class="comment-actions">
                <a href="#">Reply</a>
            </div>
            </div>
        </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
    } //End of constructor

    //getprofilePicture
    async getprofilePicture() {
        try {
            const res = await axios.post(`${this.host}/images/profile/get`, {
                userId: this.getUserId(),
                token: this.getToken()
            })
            this._qs('#profile-picture').innerHTML = `<img 
              src="${
                  res.data.image != ''
                      ? res.data.image
                      : '/assets/img/alt/no-mage.png'
              }" 
              alt="Profile picture"
              />`
        } catch (err) {
            console.log(err)
        }
    } //End of getprofilePicture()

    //viewComment
    async viewComment() {
        if (this.getParam('view') == 'true') {
            const res = await axios.post(
                `${this.host}/feedback/get/${this.getParam('id')}`,
                {
                    ...this.authData()
                }
            )
            this._qs('.comment-text').innerHTML = res.data.feedback
            this._qs('.comment-date').innerHTML = res.data.created
        }
    } //End of viewComment()

    connectedCallback() {
        //viewComment
        this.viewComment()
    } //End of connectedCallback
} //End of class

const elementName = 'comment-box'
// customElements.get(elementName) == undefined?
window.customElements.define(elementName, CommentBox)
// : null
