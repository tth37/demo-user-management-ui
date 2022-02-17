import { UserEntityWithToken } from "../api/interface/user";
import { store } from "../store";

class AuthService {
  constructor() {
    const str = localStorage.getItem("user");
    if (str !== null) {
      const userWithToken = JSON.parse(str) as UserEntityWithToken;
      this.currentUser = userWithToken;
    }
  }

  private currentUser?: UserEntityWithToken;

  loginUser(userWithToken: UserEntityWithToken) {
    const str = JSON.stringify(userWithToken);
    localStorage.setItem("user", str);
    this.currentUser = userWithToken;
    const { token, ...user } = userWithToken;
    store.setCurrentUser(user);
    store.setToken(token);
  }

  logoutUser() {
    localStorage.removeItem("user");
    this.currentUser = undefined;
    store.clearCurrentUser();
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

export const authService = new AuthService();
