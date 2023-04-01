import Block from '../../utils/Block';
import template from './input.hbs';
import '../../modules/chats/form/form.css';
import { Validate } from '../../utils/Validate';
import { Input } from '../input/index';
import { ErrorEl } from '../error';

export interface InputProps {
  type: string;
  value?: string;
  name: string;
  label: string;
  events?: any;
  id?: string;
}

export class InputChecked extends Block<InputProps> {
  constructor({
    type = '',
    name = '',
    value = '',
    label = '',
    id = ''
  }: InputProps) {
    super({
      type,
      name,
      value,
      label,
      id,
      events: {
        blur: (e: Event) => {
          const inputEl = e.target as HTMLInputElement;
          const errorsObj = Validate([
            {
              type: inputEl.type,
              value: inputEl.value,
            },
          ]);

          if (errorsObj[inputEl.type]) {
            this.children.error.setProps({text: errorsObj[inputEl.type]});
          } else {
            this.children.error.setProps({text: ''});
          }
        },
        focus: (e: Event) => {
          const inputEl = e.target as HTMLInputElement;
          const errorsObj = Validate([
            {
              type: inputEl.type,
              value: inputEl.value,
            },
          ]);
          if (errorsObj[inputEl.type]) {
            this.children.error.setProps({text: errorsObj[inputEl.type]});
          } else {
            this.children.error.setProps({text: ''});
          }
        },
      },
    });
  }

  init() {
    this.children.input = new Input({
      label: this.props.label,
      name: this.props.name,
      type: this.props.type,
      value: this.props.value,
      onFocus: this.props.events && this.props.events.focus,
      onBlur: this.props.events && this.props.events.blur,
    });

    this.children.error = new ErrorEl({
      text: ''
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
