import Block from '../../utils/Block';
import template from './error.hbs';

export interface ErrorProps {
  text: string;
}

export class ErrorEl extends Block {
  constructor({
    text = ''
  }: ErrorProps) {
    super({ text });
  }
  
  render() {
    return this.compile(template, this.props);
  }
}
