import { AuthAPI } from "../api/AuthAPI";
import store from "../utils/Store";
import Router from "../utils/Router";
import MessagesController from "./MessagesController";

export interface SignupData {
  "email": string,
  "login": string,
  "first_name": string,
  "second_name": string,
  "phone": string,
  "password": string
}

export interface SigninData {
  "login": string,
  "password": string
}

class AuthController {
  private api = new AuthAPI();

  signup(data: SignupData) {
    this.api.signup(data)
      .then(() => {
        Router.go('/profile');
      })
      .catch(console.log);
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      Router.go("/messenger");
    } catch (error) {
      console.error("signin:", error);
      // store.set('user.hasError', true);
    }
  }

  async logout() {
    try {
      MessagesController.closeAll();
      await this.api.logout();
      Router.go("/");
    } catch (e) {
      console.error("logout:", e);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set("user", user);
  }
}

export default new AuthController();
