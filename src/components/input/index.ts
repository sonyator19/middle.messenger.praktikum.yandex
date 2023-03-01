import Block from '../../utils/Block';
import template from './input.hbs';
import '../../chats/form/form.css';

interface InputProps {
  type: string;
  value: string;
  name: string;
  label: string;
  onFocus: (e?: InputEvent) => unknown;
  onBlur: (e?: InputEvent) => unknown;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
