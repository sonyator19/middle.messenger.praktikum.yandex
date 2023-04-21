import Block from "../../utils/Block";
import { Link } from "../../components/link";
import signup from './signup.hbs';
import { SignUpForm } from "./signUpForm";
import AuthController from "../../controllers/AuthController";

export class SignUpPage extends Block {
    constructor() {
        super();
    }

    init() {  
        this.children.signUpForm = new SignUpForm({
            events: {
                submit: (e: Event): void => this.onSubmit(e),
            },
        });

        this.children.link = new Link({
            to: '/',
            label: 'Войти',
        });
    }

    onSubmit(e: Event): void {
        e.preventDefault();
        const data: any  = Object.fromEntries(new FormData(e.target).entries());
        AuthController.signup(data);
    }

    render() {
        return this.compile(signup, { ...this.props });
    }
}
