import store, { withStore } from "../../../utils/Store";
import Block from "../../../utils/Block";
import template from "./dialogsList.hbs";
import { Dialogue } from "../dialogue";
// import ChatsController from "../../../controllers/ChatsController";

interface DialogMiniInterface {
  avatar: null;
  created_by: number;
  id: number;
  last_message: null;
  title: string;
  unread_count: number;
}

interface DialogListProps {
  openModal?: boolean;
  dialogs: DialogMiniInterface[];
}

class DialogListBase extends Block<DialogListProps> {
  constructor(props: DialogListProps) {
    super(props);
  }

  private createChats(props: DialogListProps) {
    if (!props.dialogs || props.dialogs.length == 0) {
      const info = {
        avatar: null,
        created_by: 0,
        id: 0,
        last_message: "",
        title: "",
        unread_count: 0,
      };

      return new Dialogue({
        ...info,
        events: {
          click: (e: { target: { id: number } }) => {
            this.chooseChat(e);
          },
        },
      });
    }

    return props.dialogs.map((data) => {

      return new Dialogue({
        ...data,
        events: {
          click: (e: { target: { id: number } }) => {
            this.chooseChat(e);
          },
        },
      });
    });
  }

  chooseChat(e: { target: { id: number } }) {
    const currentDialogID = e.target.id;
    store.set("activeChatID", +currentDialogID);
  }

  // addChats() {
  //   this.children.modal.setProps({ class: "" });
  // }

  protected componentDidUpdate(
    oldProps: DialogListProps,
    newProps: DialogListProps
  ): boolean {
    // this.children.modal.setProps({
    //   openModal: newProps.openModal,
    // });

    this.children.dialogs = this.createChats(newProps);

    return true;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const withChats = withStore((state) => ({ dialogs: [...(state.dialogs || [])] }));

export const DialogList = withChats(DialogListBase);
