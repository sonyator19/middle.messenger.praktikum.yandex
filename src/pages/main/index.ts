import '../../styles/main.css';

import Block from "../../utils/Block";
import main from './main.hbs';
import { Link } from "../../components/link";
import { DialogList } from '../../components/chatsComponents/dialogsList';

export class MessengerPage extends Block {
    constructor() {
      super();
    }

    init() {
      this.children.dialogList = new DialogList({
        chats: this.props.chats,
      });

      this.children.link = new Link({
        to: '/settings',
        label: 'Профиль',
      });
    }

    render() {
        return this.compile(main, { ...this.props });
    }
}

