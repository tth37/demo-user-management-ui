import { action, makeObservable, observable } from "mobx";
import { UserEntity } from "../api/interface/user";
import { authService } from "../service/authService";

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable token?: string;

  @action setToken(token: string) {
    this.token = token;
  }

  @observable currentUser?: UserEntity = authService.getCurrentUser();

  @action setCurrentUser(user: UserEntity) {
    this.currentUser = user;
  }

  @action clearCurrentUser() {
    this.currentUser = undefined;
  }
}

export const store = new Store();
