import { action, makeObservable, observable } from "mobx";
import { UserEntity } from "../api/interface/user";
import { authService } from "../auth/authService";

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable token?: string = authService.getCurrentUser()?.token;

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
