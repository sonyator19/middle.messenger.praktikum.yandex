import error from './error404.hbs';
import '../../modules/chats/error/error.css';
import Block from '../../utils/Block';

export class Error404Page extends Block {
    constructor() {
        super({});
    }

    render() {
        return this.compile(error, { ...this.props});
    }
}
