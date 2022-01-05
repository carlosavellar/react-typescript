import React, { SyntheticEvent } from "react";
import { AuthServices } from "../services/AuthServices";

interface LoginProps {
  authService: AuthServices;
}

interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessful: boolean;
}

interface CustomElement {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState, {}> {
  state: LoginState = {
    userName: "",
    password: "",
    loginAttempted: false,
    loginSuccessful: false,
  };

  private setUsername(event: CustomElement) {
    this.setState({ userName: event.target.value });
    console.log(event.target.value);
  }
  private setPassword(event: CustomElement) {
    this.setState({ password: event.target.value });
  }

  private async onSubmitHandler(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({ loginAttempted: true });
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );
    if (result) {
      this.setState({ loginSuccessful: true });
    } else {
      this.setState({ loginSuccessful: false });
    }
  }

  render() {
    let loginMessage: any;
    if (this.state.loginAttempted) {
      if (this.state.loginSuccessful) {
        loginMessage = <div>Login was successful</div>;
      } else {
        loginMessage = <div style={{ color: "red" }}> Login Denied</div>;
      }
    }

    return (
      <div>
        <form onSubmit={(e) => this.onSubmitHandler(e)}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(e) => this.setUsername(e)}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setPassword(e)}
          />
          <input type="submit" value="Login" />
        </form>
        {loginMessage}
      </div>
    );
  }
}
