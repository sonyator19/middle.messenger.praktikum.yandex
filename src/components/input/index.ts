import Block from '../../utils/Block';
import template from './input.hbs';
import '../../modules/chats/form/form.css';

export interface InputProps {
  type: string;
  value?: string;
  error?: string;
  name: string;
  label: string;
  events?: any;
  onFocus?: (e?: Event) => unknown;
  onBlur?: (e?: Event) => unknown;
  id?: string;
}

export class Input extends Block<InputProps> {
  constructor({
    type = 'text',
    name = '',
    value = '',
    error = '',
    label = '',
    id = '',
    onFocus = () => {},
    onBlur = () => {},
  }: InputProps) {
    super({
      type,
      name,
      value,
      error,
      label,
      id,
      events: { focus: onFocus, blur: onBlur }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
