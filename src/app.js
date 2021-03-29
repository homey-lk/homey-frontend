import Base from "/componets/Base.js";
import CSS from "/app.css.js";
import Router from "/assets/js/Router.js";

import "/componets/home/navigation-bar.js";
import "/componets/home/footer.js";

const router = new Router();

export default class App extends Base {
  css = CSS;
  content = `
    <navigation-bar id="navigationBar"></navigation-bar>
        <div id="login-form"></div>
            <div id="container" class="container"></div>
        <div id="pop-up"></div>
    <footer-c></footer-c>
`;
  constructor() {
    super();
    this.mount();

    this.state.routeFound = false;
    addEventListener("route-found", () => (this.state.routeFound = true));

    // Load home component
    router.get("/", async () => {
      await import("/componets/home/main/main.js").then(
        (this._qs(".container").innerHTML = `<main-comp></main-comp>`)
      );
    });

    // Method to load dynamic froms
    const loadForm = async (form) => {
      // this.setPath('/' + form)
      this.setLoader();

      window.scrollTo(0, 0);

      await import("/componets/home/" + form + "-form.js")
        .then(() => {
          this._qs("#login-form").innerHTML =
            `<` + form + `-form></` + form + `-form>`;

          // Listen for exit-login-form Event for unset the visilility of Login Form
          addEventListener("exit-form", () => {
            this._qs("#login-form").innerHTML = "";
            dispatchEvent(
              new CustomEvent("load-comp", {
                detail: {
                  parh: "/",
                  comp: "home/main/main",
                  compName: "main-comp",
                },
              })
            );
          });
          this.stopLoader();
        })
        .catch((err) => {
          dispatchEvent(
            new CustomEvent("pop-up", {
              detail: { pop: "error", msg: err },
            })
          );
          this.stopLoader();
        });
    }; // End of Method to load dynamic froms

    // Listen for login-form Event to set visible Login Form
    addEventListener("load-login-form", () =>
      !(sessionStorage.login == "true" || localStorage.login == "true")
        ? loadForm("login")
        : this.setPath("/")
    );
    addEventListener("load-signup-form", () =>
      !(sessionStorage.login == "true" || localStorage.login == "true")
        ? loadForm("signup")
        : this.setPath("/")
    );
    addEventListener("reset-password-form", () =>
      !(sessionStorage.login == "true" || localStorage.login == "true")
        ? loadForm("reset-password")
        : this.setPath("/")
    );
    addEventListener("confirm-form", () =>
      !(sessionStorage.login == "true" || localStorage.login == "true")
        ? loadForm("confirm")
        : this.setPath("/")
    );

    window.addEventListener("popstate", (e) => {
      // Load login form component
      router.get("/login", () => dispatchEvent(new Event("load-login-form")));

      // Load login form component
      router.get("/forum", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `${window.location.pathname}`,
              comp: `forum/forum`,
              compName: "forum-comp",
            },
          })
        )
      );

      // Load signup form component
      router.get("/signup", () => dispatchEvent(new Event("load-signup-form")));

      // Load reset-password form component
      router.get("/reset-password", () =>
        dispatchEvent(new Event("reset-password-form"))
      );

      // Load confirm form component
      router.get("/confirm", () => dispatchEvent(new Event("confirm-form")));

      // Load avalibale property component
      router.get("/properties", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/properties`,
              comp: `property/available-property`,
              compName: "available-property",
            },
          })
        )
      );

      // Load add new property component
      router.get("/add-new-property", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/add-new-property`,
              comp: `property/add-new-property`,
              compName: "add-new-property",
            },
          })
        )
      );

      // Load own-properties component
      router.get("/own-properties", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/own-properties`,
              comp: `property/own-properties`,
              compName: "own-properties",
            },
          })
        )
      );

      // Load reserved-properties component
      router.get("/reserved-properties", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/reserved-properties`,
              comp: `property/reserved-properties`,
              compName: "reserved-properties",
            },
          })
        )
      );

      // Load profile component
      router.get("/profile", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `${window.location.pathname}`,
              comp: `account/profile`,
              compName: "profile-comp",
            },
          })
        )
      );

      // Load wallet component
      router.get("/wallet", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `${window.location.pathname}`,
              comp: `account/wallet`,
              compName: "wallet-comp",
            },
          })
        )
      );

      // Load avalibale property full details
      router.get("/property", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `${window.location.pathname}`,
              comp: `property/property-details`,
              compName: "property-details",
            },
          })
        )
      );

      // Load favourite full details
      router.get("/favourite", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `${window.location.pathname}`,
              comp: `property/favourite`,
              compName: "favourite-comp",
            },
          })
        )
      );

      // Load forum
      router.get("/forum", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `${window.location.pathname}`,
              comp: `forum/forum`,
              compName: "forum-comp",
            },
          })
        )
      );

      // Load payment gateway component
      router.get("/payment/received", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/payment/received`,
              comp: `payments/payment-received`,
              compName: "payment-received",
            },
          })
        )
      );

      // Load payment paid component
      router.get("/payment/paid", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/payment/paid`,
              comp: `payments/payment-paid`,
              compName: "payment-paid",
            },
          })
        )
      );

      // Load payment all component
      router.get("/payment/all", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/payment/all`,
              comp: `payments/payment-all`,
              compName: "payment-all",
            },
          })
        )
      );

      // Load payment cashout component
      router.get("/payment/cashout", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/payment/cashout`,
              comp: `payments/payment-cashout`,
              compName: "payment-cashout",
            },
          })
        )
      );

      // Load payment cashout component
      router.get("/payment/bank-account", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/payment/bank-account`,
              comp: `payments/payment-bank-account`,
              compName: "payment-bank-account",
            },
          })
        )
      );

      // +++DEV+++ Only for develompent
      router.get("/dev", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/dev`,
              comp: `../dev`,
              compName: "dev-dev",
            },
          })
        )
      );

      // +ADMIN+ +TODO this part can be move another file set when only admin user logged IN
      // Load admin component
      router.get("/admin", () =>
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `${window.location.pathname}`,
              comp: `admin/admin-dashboard`,
              compName: "admin-dashboard",
            },
          })
        )
      );

      router.init();
    });

    // Load login form component
    router.get("/login", () => dispatchEvent(new Event("load-login-form")));

    // Load signup form component
    router.get("/signup", () => dispatchEvent(new Event("load-signup-form")));

    // Load reset-password form component
    router.get("/reset-password", () =>
      dispatchEvent(new Event("reset-password-form"))
    );

    // Load confirm form component
    router.get("/confirm", () => dispatchEvent(new Event("confirm-form")));

    // Load avalibale property component
    router.get("/properties", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/properties`,
            comp: `property/available-property`,
            compName: "available-property",
          },
        })
      )
    );

    // Load add new property component
    router.get("/add-new-property", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/add-new-property`,
            comp: `property/add-new-property`,
            compName: "add-new-property",
          },
        })
      )
    );

    // Load own-properties component
    router.get("/own-properties", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/own-properties`,
            comp: `property/own-properties`,
            compName: "own-properties",
          },
        })
      )
    );

    // Load reserved-properties component
    router.get("/reserved-properties", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/reserved-properties`,
            comp: `property/reserved-properties`,
            compName: "reserved-properties",
          },
        })
      )
    );

    // Load profile component
    router.get("/profile", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `${window.location.pathname}`,
            comp: `account/profile`,
            compName: "profile-comp",
          },
        })
      )
    );

    // Load wallet component
    router.get("/wallet", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `${window.location.pathname}`,
            comp: `account/wallet`,
            compName: "wallet-comp",
          },
        })
      )
    );

    // Load avalibale property full details
    router.get("/property", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `${window.location.pathname}`,
            comp: `property/property-details`,
            compName: "property-details",
          },
        })
      )
    );

    // Load favourite full details
    router.get("/favourite", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `${window.location.pathname}`,
            comp: `property/favourite`,
            compName: "favourite-comp",
          },
        })
      )
    );

    // Load forum
    router.get("/forum", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `${window.location.pathname}`,
            comp: `forum/forum`,
            compName: "forum-comp",
          },
        })
      )
    );

    // Load payment recived component
    router.get("/payment/received", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/received`,
            comp: `payments/payment-received`,
            compName: "payment-received",
          },
        })
      )
    );

    // Load payment paid component
    router.get("/payment/paid", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/paid`,
            comp: `payments/payment-paid`,
            compName: "payment-paid",
          },
        })
      )
    );

    // Load payment all component
    router.get("/payment/all", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/all`,
            comp: `payments/payment-all`,
            compName: "payment-all",
          },
        })
      )
    );

    // Load payment cashout component
    router.get("/payment/cashout", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/cashout`,
            comp: `payments/payment-cashout`,
            compName: "payment-cashout",
          },
        })
      )
    );

    // Load payment cashout component
    router.get("/payment/bank-account", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/bank-account`,
            comp: `payments/payment-bank-account`,
            compName: "payment-bank-account",
          },
        })
      )
    );

    // +++DEV+++ Only for develompent
    router.get("/dev", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/dev`,
            comp: `../dev`,
            compName: "dev-dev",
          },
        })
      )
    );

    // +ADMIN+ +TODO this part can be move another file set when only admin user logged IN
    // Load admin component
    router.get("/admin", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `${window.location.pathname}`,
            comp: `admin/admin-dashboard`,
            compName: "admin-dashboard",
          },
        })
      )
    );
  } //End of constructor

  //count vistors
  async countVisitors() {
    if (localStorage.countvisit != "true" && !this.isLogin()) {
      const res = await axios.get(`${this.host}/User/count-new`);
      if (res.status == 200) localStorage.countvisit = "true";
    }
  } //end of countVisitors

  connectedCallback() {
    // Event Listner for pop-up
    addEventListener("pop-up", async (res) => {
      await import(`/componets/popup/popup.js`).then(
        () =>
          (this._qs("#pop-up").innerHTML = `<pop-up type=${
            res.detail.pop
          } duration=${
            res.detail.duration == undefined ? 10 : res.detail.duration
          }><div slot="message">${res.detail.msg}</div></pop-up>`)
      );
    });

    //Event listner for Load a component
    addEventListener("load-comp", async (e) => {
      this.setLoader();
      this.setPath(e.detail.path);
      await import("/componets/" + e.detail.comp + ".js")
        .then(() => {
          this._qs("#container").innerHTML =
            `<` + e.detail.compName + `></` + e.detail.compName + `>`;
          this.stopLoader();
        })
        .catch((err) => {
          console.log(err);
          this.stopLoader();
          this.setPath("/");
        });
    }); //End of the Event listner for Load a component

    // Add event listener for an error Page
    addEventListener(
      "customError",
      async (e) =>
        await import(`/componets/errors/Error${e.detail.err}.js`).then(
          (this._qs("#container").innerHTML = `<err-404></err-404>`)
        )
    );

    router.init();

    //count vistors
    this.countVisitors();
  } //End of connectedCallback
} //End of Class

window.customElements.define("app-comp", App);

document.getElementById("root").innerHTML = "<app-comp></app-comp>";

// // Register ServiceWorker
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .then((registration) => {
//         // console.log("Service Worker is registered", registration.scope);
//       })
//       .catch((err) => {
//         console.error("Registration failed:", err);
//       });
//   });
// }
