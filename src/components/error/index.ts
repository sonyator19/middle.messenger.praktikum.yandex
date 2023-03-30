import Block from '../../utils/Block';
import template from './error.hbs';

export class ErrorEl extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
