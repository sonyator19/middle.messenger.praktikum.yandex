import Block from "../../../utils/Block";
import signUpForm from "./signUpForm.hbs";
import { InputChecked } from "../../../components/inputChecked";

interface passwordProps {
  events: {
    submit: (e: Event) => void;
  };
}

export class SignUpForm extends Block<passwordProps> {
  constructor(props: passwordProps) {
    super(props);
  }

  protected init(): void {
    this.children.email = new InputChecked({
        name: 'email',
        id: 'email',
        label: 'Почта',
        type: 'email',
    });

    this.children.login = new InputChecked({
        name: 'login',
        id: 'login',
        label: 'Логин',
        type: 'text',
    });

    this.children.first_name = new InputChecked({
        name: 'first_name',
        id: 'first_name',
        label: 'Имя',
        type: 'text',
    });

    this.children.second_name = new InputChecked({
        name: 'second_name',
        id: 'second_name',
        label: 'Фамилия',
        type: 'text',
    });

    this.children.phone = new InputChecked({
        name: 'phone',
        id: 'phone',
        label: 'Телефон',
        type: 'tel',
    });

    this.children.password = new InputChecked({
        name: 'password',
        id: 'password1',
        label: 'Пароль',
        type: 'text',
    });

    this.children.password_add = new InputChecked({
        name: 'password',
        id: 'password2',
        label: 'Пароль (ещё раз)',
        type: 'text',
    });
  }

  render() {
    return this.compile(signUpForm, { ...this.props });
  }
}
