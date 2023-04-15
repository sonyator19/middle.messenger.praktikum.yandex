// import AuthAPI from "../api/AuthAPI";
import { AuthAPI } from "../api/AuthAPI";
import store from "../utils/Store";
import Router from "../utils/Router";
import MessagesController from "./MessagesController";

export interface SignupData {
  "first_name": string,
  "second_name": string,
  "login": string,
  "email": string,
  "password": string,
  "phone": string
}

export interface SigninData {
  "login": string,
  "password": string
}

class AuthController {
  private api = new AuthAPI();

  async signup(signupData: SignupData) {
    try {
      await this.api.signup(signupData);
      await this.fetchUser();
      Router.go("/messenger");
    } catch (e) {
      console.error("signup:", e);
    }
  }

  async signin(signinData: SigninData) {
    try {
      await this.api.signin(signinData);
      await this.fetchUser();
      Router.go("/messenger");
    } catch (e) {
      console.error("signin:", e);
      Router.go("/");
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
