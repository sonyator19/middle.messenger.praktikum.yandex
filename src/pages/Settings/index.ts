import form from './settings.hbs';
import '../../modules/chats/user/user.css';
import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import { Button } from '../../components/button';
import UserController from '../../controllers/UserController';
import { changePassword } from '../../components/settingsComponents/changePassword';
import { ChangeDataSettings } from '../../components/settingsComponents/changeData';

interface SettingsProps {
  display_name: string;
  avatar: any;
  default: boolean;
  passwordChange: boolean;
  dataChange: boolean;
}

export class SettingsPage extends Block<SettingsProps> {
  constructor() {
    super({
      default: true,
      passwordChange: false,
      dataChange: true,
    });
  }

  init() {
    this.children.changePasswordTemplte = new changePassword ({
      events: {
        submit: (e: Event) => this.changePasswordFunc(e),
      },
    });

    this.children.changeDataTemplte = new ChangeDataSettings ({
      events: {
        submit: (e: Event) => this.changeDataFunc(e),
      },
    });

    this.children.changeDataBtn = new Button({
      label: 'Изменить данные',
      events: {
        click: () => this.editSettings(),
      },
    });

    this.children.changePasswordBtn = new Button({
      label: 'Изменить пароль',
      events: {
        click: () => this.logOut(),
      },
    });

    this.children.logOutBtn = new Button({
      label: 'Выйти',
      events: {
        click: () => this.logOut(),
      },
    });
  }

  actualSettings() {
    this.setProps({ default: true });
    this.setProps({ passwordChange: false });
    this.setProps({ dataChange: true });
  }

  changePasswordFunc(e: Event): void {
    e.preventDefault();
    const formData: any = Object.fromEntries(new FormData(e.target).entries());
    UserController.changePassword(formData);
    this.actualSettings();
  }

  changeDataFunc(e: Event): void {
    e.preventDefault();
    const formData: any = Object.fromEntries(new FormData(e.target).entries());
    UserController.changeProfile(formData);
    this.actualSettings();
  }

  logOut() {
    AuthController.logout();
  }

  editPassword(): void {
    this.setProps({ default: false });
    this.setProps({ passwordChange: true });
    this.setProps({ dataChange: false });
  }

  editSettings(): void {
    this.setProps({ default: false });
    this.setProps({ passwordChange: false });
    this.setProps({ dataChange: true });
  }

  render() {
    return this.compile(form, this.props);
  }
}
