import Block from "../../../utils/Block";
import data from "./changeData.hbs";
import { withStore } from "../../../utils/Store";
import { settingsField } from "../settingsForm";
import { ChangeAvatar } from "../changeAvatar";

interface dataProps {
  events: {
    submit: (e: Event) => void;
  };
  email?: string;
  login?: string;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  phone?: string;
}

class ChangeData extends Block<dataProps> {
  constructor(props: dataProps) {
    super(props);
  }

  init() {
    // this.children.inputAvatar = new ChangeAvatar();

    this.children.email = new settingsField({
        label: 'Почта',
        type: 'email',
        id: 'email',
        name: 'email',
        value: this.props.email,
    });

    this.children.login = new settingsField({
      label: 'Логин',
      type: 'text',
      id: 'login',
      name: 'login',
      value: this.props.login,
    });

    this.children.name = new settingsField({
      label: 'Имя',
      type: 'text',
      id: 'first_name',
      name: 'first_name',
      value: this.props.first_name,
    });

    this.children.secondName = new settingsField({
      label: 'Фамилия',
      type: 'text',
      id: 'second_name',
      name: 'second_name',
      value: this.props.second_name,
    });

    this.children.displayName = new settingsField({
      label: 'Имя в чате',
      type: 'text',
      id: 'settings-display_name',
      name: 'display_name',
      value: this.props.display_name,
    });

    this.children.phone = new settingsField({
      label: 'Телефон',
      type: 'phone',
      id: 'phone',
      name: 'phone',
      value: this.props.phone,
    });
  }

  protected componentDidUpdate(newProps: any): boolean {
    for (const key in this.children) {
      const child = this.children[key];

      if (child instanceof settingsField) {
        child.setProps({
          disabled: newProps.disabled,
        });
      }
    }

    return true;
  }

  render() {
    return this.compile(data, { ...this.props });
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ChangeDataSettings = withUser(ChangeData);
