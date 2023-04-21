import BaseAPI from "./BaseAPI";

interface Users {
  users: number[];
  chatId: number;
}

export interface PasswordData {
    oldPassword: string;
    newPassword: string;
}

export interface UserData {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

export default class ChatsAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  public getAllChats() {
    return this.http.get();
  }

  public create(chatsName: string) {
    return this.http.post("", { title: chatsName });
  }

  public addUserToChat(data: Users) {
    return this.http.put("/users", data);
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  delete = undefined;
  read = undefined;
  update = undefined;
}
