import Block from '../../utils/Block';
import template from './input.hbs';
import '../../modules/chats/form/form.css';

export interface InputProps {
  type: string;
  value: string;
  name: string;
  label: string;
  onFocus: (e?: Event) => void;
  onBlur: (e?: Event) => void;
  id?: string;
}

export class Input extends Block {
  constructor({
    type = 'text',
    name = '',
    value = '',
    label = '',
    onFocus = () => {},
    onBlur = () => {},
    id = ''
  }: InputProps) {
    super('input', {
      type,
      name,
      value,
      label,
      events: { focus: onFocus, blur: onBlur },
      id
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
