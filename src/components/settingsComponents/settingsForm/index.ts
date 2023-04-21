import Block from '../../../utils/Block';
import template from './settingsForm.hbs';
import '../../../modules/chats/form/form.css';
import { SettingsInput } from '../settingsInput';

export interface InputProps {
  type: string;
  value?: string;
  name: string;
  label: string;
  id?: string;
}

export class settingsField extends Block<InputProps> {
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
    });
  }

  init() {
    this.children.input = new SettingsInput({
      label: this.props.label,
      name: this.props.name,
      type: this.props.type,
      value: this.props.value,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
