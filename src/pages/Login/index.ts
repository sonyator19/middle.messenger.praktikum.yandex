import Block from "../../utils/Block";
import login from './login.hbs';
import { Link } from "../../components/link";
import Router from "../../utils/Router";
import AuthController from "../../controllers/AuthController";
import { LoginForm } from "./loginForm";
import { Input } from "../../components/input";

export class LoginPage extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.loginForm = new LoginForm({
            events: {
                submit: (e: {
                    preventDefault: () => void;
                    target: HTMLFormElement | undefined;
                }): void => this.onSubmit(e),
            },
        });

        this.children.link = new Link({
            to: '/sign-up',
            label: 'Нет аккаунта?',
        });
    }

    onSubmit(e: Event): void {
        const values = Object.values(this.children)
        .filter(child => child instanceof Input)
        .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))
  
        const data = Object.fromEntries(values);
        console.log(data);
    
        AuthController.signin(data);
        Router.go("/messenger");
    }

    render() {
        return this.compile(login, { ...this.props });
    }
}
