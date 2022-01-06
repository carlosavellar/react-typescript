import { User } from "./../model/Model";

export class AuthServices {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "user" && password === "123") {
      return {
        userName: userName,
        email: "carlaun@gail.com",
      };
    }
  }
}
