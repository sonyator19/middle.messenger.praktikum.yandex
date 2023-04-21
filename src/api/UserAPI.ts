import BaseAPI from "./BaseAPI";

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

export default class UserAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  public changePassword(passwordData: PasswordData) {
    return this.http.put("/password", passwordData);
  }

  public changeProfile(userData: UserData) {
    return this.http.put("/profile", userData);
  }

  public changeAvatar(userData: FormData) {
    return this.http.put("/profile/avatar", userData);
  }

  public getProfile(id: number) {
    return this.http.get(`/${id}`);
  }
  
  create = undefined;
  read = undefined;
  delete = undefined;
  update = undefined;
}
