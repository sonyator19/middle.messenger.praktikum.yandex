import Block from '../../utils/Block';
import template from './input.hbs';
import '../../modules/chats/form/form.css';
import { Validate } from '../../utils/Validate';
import { Input } from '../input/index';
import { ErrorEl } from '../error/index';

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
    type = 'text',
    name = '',
    value = '',
    label = '',
    id = ''
  }: InputProps) {
    super('div', {
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
              name: this.props.name,
              value: inputEl.value,
            },
          ]);
        
          if (errorsObj[this.props.name]) {
            this.children.error.setProps({ 
              text: errorsObj[this.props.name] 
            });
          }
        },
        focus: (e: Event) => {
          const inputEl = e.target as HTMLInputElement;        
          const errorsObj = Validate([
            {
              name: this.props.name,
              value: inputEl.value,
            },
          ]);
        
          if (errorsObj[this.props.name]) {
            this.children.error.setProps({ 
              text: errorsObj[this.props.name] 
            });
          }
        },
      }
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
  
    this.children.error = new ErrorEl();
  }

  render() {
    return this.compile(template, this.props);
  }
}
