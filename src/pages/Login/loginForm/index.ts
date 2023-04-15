import Block from "../../../utils/Block";
import loginForm from "./loginForm.hbs";
import { InputChecked } from "../../../components/inputChecked";

interface ChangePasswordProps {
  events: {
    submit: (e: Event) => void;
  };
}

export class LoginForm extends Block<ChangePasswordProps> {
  constructor(props: ChangePasswordProps) {
    super(props);
  }

  protected init(): void {
    this.children.login = new InputChecked({
        name: 'login',
        label: 'Логин',
        type: 'text',
    });

    this.children.password = new InputChecked({
        name: 'password',
        label: 'Пароль',
        type: 'text',
    });
  }

  render() {
    return this.compile(loginForm, { ...this.props });
  }
}
