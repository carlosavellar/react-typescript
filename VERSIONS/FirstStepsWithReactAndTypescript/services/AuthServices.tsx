import { User } from "./../model/Model";

export class AuthServices {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "user" && password === "1234") {
      return {
        userName: userName,
        email: "carlos.avellar@gmail.com",
      };
    }
  }
}
