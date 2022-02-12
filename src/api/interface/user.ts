export interface UserEntity {
  id: number;
  name: string;
}

export interface UserEntityWithToken extends UserEntity {
  token: string;
}
