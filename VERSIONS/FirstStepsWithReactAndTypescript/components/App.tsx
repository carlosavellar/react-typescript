import React from "react";
import { User } from "./../model/Model";
import { AuthServices } from "./../services/AuthServices";
import { Login } from "./Login";

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthServices = new AuthServices();

  render() {
    return (
      <div>
        <Login authService={this.authService} />
        Space x
      </div>
    );
  }
}

export default App;
