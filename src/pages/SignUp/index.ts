import Block from "../../utils/Block";
import { InputChecked } from "../../components/inputChecked";
import { Link } from "../../components/link";
import signup from './signup.hbs';

export class SignUpPage extends Block {
    constructor() {
        super();
    }

    init() {   
        this.children.email = new InputChecked({
            name: 'email',
            label: 'Почта',
            type: 'email',
        });
    
        this.children.login = new InputChecked({
            name: 'login',
            label: 'Логин',
            type: 'text',
        });
    
        this.children.first_name = new InputChecked({
            name: 'first_name',
            label: 'Имя',
            type: 'text',
        });
    
        this.children.second_name = new InputChecked({
            name: 'second_name',
            label: 'Фамилия',
            type: 'text',
        });
    
        this.children.phone = new InputChecked({
            name: 'phone',
            label: 'Телефон',
            type: 'tel',
        });
    
        this.children.password = new InputChecked({
            name: 'password',
            label: 'Пароль',
            type: 'text',
        });
    
        this.children.password_add = new InputChecked({
            name: 'password',
            label: 'Пароль (ещё раз)',
            type: 'text',
        });

        this.children.link = new Link({
            to: '/',
            label: 'Войти',
        });
    }

    render() {
        return this.compile(signup, { ...this.props });
    }
}
