import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    /* axios.post("/signin").then((res) => {
      console.log(res);
    }).catch((err) => console.log(err)); */
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
