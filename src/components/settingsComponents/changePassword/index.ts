import Block from "../../../utils/Block";
import password from "./changePassword.hbs";
import { settingsField } from "../settingsForm";

interface passwordProps {
  events: {
    submit: (e: Event) => void;
  };
}

export class changePassword extends Block<passwordProps> {
  constructor(props: passwordProps) {
    super(props);
  }

  protected init(): void {
    this.children.oldPassword = new settingsField({
      label: 'Старый пароль',
      type: 'password',
      id: 'settings-password-old',
      name: 'oldPassword',
    });

    this.children.newPassword = new settingsField({
      label: 'Новый пароль',
      type: 'password',
      id: 'settings-password-new',
      name: 'newPassword',
    });

    this.children.newPasswordRepeat = new settingsField({
      label: 'Повторите новый пароль',
      type: 'password',
      name: 'newPasswordRepeat',
    });
  }

  render() {
    return this.compile(password, { ...this.props });
  }
}
