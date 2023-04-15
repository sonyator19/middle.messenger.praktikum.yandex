import Block from "../../../utils/Block";
import template from "./dialogue.hbs";

interface DialogProps {
  id: number;
  title: string;
  unread_count: number;
  events: {
    click: 
    (e: { target: 
        { id: number } 
      }) => void;
  };
}

export class Dialogue extends Block<DialogProps> {
  constructor(props: DialogProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
