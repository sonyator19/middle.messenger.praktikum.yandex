import Block from "../../../utils/Block";
import loginForm from "./loginForm.hbs";
import { InputChecked } from "../../../components/inputChecked";

interface passwordProps {
  events: {
    submit: (e: unknown) => void;
  };
}

export class LoginForm extends Block<passwordProps> {
  constructor(props: passwordProps) {
    super(props);
  }

  protected init(): void {
    this.children.login = new InputChecked({
      label: "Логин",
      type: "text",
      id: "login",
      name: "login",
    });

    this.children.password = new InputChecked({
      label: "Пароль",
      type: "password",
      id: "password",
      name: "password",
    });
  }

  render() {
    return this.compile(loginForm, { ...this.props });
  }
}
