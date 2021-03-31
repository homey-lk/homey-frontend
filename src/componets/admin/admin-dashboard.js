import Base from "./../Base.js";
import CSS from "./admin-dashboard.css.js";

export default class AdminDashboard extends Base {
  css = CSS;

  content = `
    <header class="container" role="banner">
    <h1 class="logo">
    <a>Admin <span>Homey</span></a>
    </h1>
    <div class="nav-wrap">
    <nav class="main-nav" role="navigation">
    <ul class="unstyled list-hover-slide">
    <li><a id="dashBoard">Dashboard</a></li>
    <li><a id="pending">Pendings</a></li>
    <li><a id="properties">Properties</a></li>
    <li><a id="users">Users</a></li>
    <li><a id="logs">Logs</a></li>
    <li><a id="admin-accounts">Admin Accounts</a></li>
    <li><a id="report">Reports</a></li>
    </ul>
    </nav>
    <ul class="links list-inline unstyled list-hover-slide">
    <li><a>Settings</a></li>
    </ul>
    </div>
    </header>
    <div id="content">
        <div id="breadcrumb" class="breadcrumb">
        </div>
        <div id="mainContainer">
        </div>
    </div>
`;
  constructor() {
    super();
    this.mount();

    if (!this.isLogin()) {
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            parh: "/",
            comp: "home/main/main",
            compName: "main-comp",
          },
        })
      );
      return;
    }
    // // Remove nav-bar
    // const navbar = document
    //     .querySelector('app-comp')
    //     .shadowRoot.querySelector('navigation-bar')
    // navbar != null ? navbar.parentNode.removeChild(navbar) : null
  } //End of the constructor

  //Listners for view hide sidbar
  // sideBar() {
  //     this._qs('#hamburger-icon').addEventListener('click', () => {
  //         this._qs('.container').style.left = '0'
  //         this._qs('#backdrop').style.display = 'block'

  //         this._qs('#backdrop').addEventListener('click', () => {
  //             this._qs('.container').style.left = '-100%'
  //             this._qs('#backdrop').style.display = 'none'
  //         })
  //     })
  // } //End of sideBar()

  // load comp
  async loadContent(comp) {
    await import(`./comps/${comp}.js`)
      .then(() => {
        this.setPath(`/admin/${comp.substr(0, comp.length - 5)}`); //remove '-comp' string piece to set path
        this._qs("#mainContainer").innerHTML = `<${comp}></${comp}>`;

        //Set breadcrumbs
        this.setBreadCrumbs(window.location.pathname.split("/"));
      })
      .catch((err) => this.popup(err.message, "error", 10));
  } //End of loadComp()

  // redirect Admin URIs
  redirectURI() {
    const uri = window.location.pathname.split("/");
    if (uri[2] == undefined || uri[2] == "dashboard")
      this.loadContent("dashboard-comp");
    this._qs("#dashBoard").style.backgroundColor = "#df4500";
    this._qs(`#${uri[2]}`) != null ? this._qs(`#${uri[2]}`).click() : null;
    //Set breadcrumbs
    this.setBreadCrumbs(uri);
  } // End of redirectURI

  //Set breadcrumbs
  setBreadCrumbs(uri) {
    let breadCrumb = "";
    uri.forEach((link) => {
      if (link == "") breadCrumb += "Homey ";
      else breadCrumb += ` » <a>${link}`;
    });
    this._qs("#breadcrumb").innerHTML = breadCrumb;
  } //End of setBreadCrumbs()

  //connectedCallback
  connectedCallback() {
    // Display hide sidebar
    // this.sideBar()

    const navLinks = [
      { link: "#dashBoard", comp: "dashboard-comp" },
      { link: "#pending", comp: "pending-comp" },
      { link: "#properties", comp: "properties-comp" },
      { link: "#users", comp: "users-comp" },
      { link: "#logs", comp: "logs-comp" },
      { link: "#admin-accounts", comp: "admin-accounts-comp" },
      { link: "#report", comp: "report-comp" },
    ];

    navLinks.forEach((item) => {
      this._qs(item.link).addEventListener("click", () => {
        this.loadContent(item.comp);
        navLinks.forEach(
          (elm) => (this._qs(elm.link).style.backgroundColor = "unset")
        );
        this._qs(item.link).style.backgroundColor = "#df4500";
      });
    });

    // redirect URI
    this.redirectURI();
  } //End of connectedCallback()
} //End of Class

const elementName = "admin-dashboard";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, AdminDashboard)
  : null;
