import Block from '../../../utils/Block';
import user from '../../chats/user/user.hbs';
import '../../chats/user/user.css';

interface UserProps {
    name: string;
    fields: Array<{title: string, content: string}>;
    btns: boolean;
  }
  
export class User extends Block {
    constructor(props: UserProps) {
        super('div', props);
    }

    render() {
        return this.compile(user, this.props);
    }
}
