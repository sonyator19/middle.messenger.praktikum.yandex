import Block from "../../../utils/Block";
import avatar from "./changeAvatar.hbs";

export class ChangeAvatar extends Block {
  constructor() {
    super({});
  }

  render() {
    return this.compile(avatar, { ...this.props });
  }
}
