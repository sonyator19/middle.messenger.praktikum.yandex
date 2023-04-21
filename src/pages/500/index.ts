import error from './error500.hbs';
import '../../modules/chats/error/error.css';
import Block from '../../utils/Block';

export class Error500Page extends Block {
    constructor() {
        super({});
    }

    render() {
        return this.compile(error, { ...this.props});
    }
}
