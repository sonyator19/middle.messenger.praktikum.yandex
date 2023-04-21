import Block from "../../utils/Block";
import login from './login.hbs';
import { Link } from "../../components/link";
import AuthController from "../../controllers/AuthController";
import { LoginForm } from "./loginForm";

export class LoginPage extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.loginForm = new LoginForm({
            events: {
              submit: (e: {
                preventDefault: () => void;
                target: HTMLFormElement | null | undefined;
              }): void => this.onSubmit(e),
            },
        });

        this.children.link = new Link({
            to: '/sign-up',
            label: 'Нет аккаунта?',
        });
    }

    onSubmit(e: Event): void {
        e.preventDefault();
        const data: any = Object.fromEntries(
            new FormData(e.target).entries()
        );
        AuthController.signin(data);
    }

    render() {
        return this.compile(login, { ...this.props });
    }
}
