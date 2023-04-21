import Block from '../../../utils/Block';
import template from './settingsInput.hbs';
import '../../../modules/chats/form/form.css';

export interface InputProps {
  type: string;
  value?: string;
  error?: string;
  name: string;
  label: string;
  id?: string;
}

export class SettingsInput extends Block<InputProps> {
  constructor({
    type = 'text',
    name = '',
    value = '',
    label = '',
    id = '',
  }: InputProps) {
    super({
      type,
      name,
      value,
      label,
      id,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
