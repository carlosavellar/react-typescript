import React from "react";
import { User } from "../model/Model";
import { AuthServices } from "./../server/authServices";
import { Login } from "./Login";
interface AppState {
  user: User;
}

class App extends React.Component<{}, AppState> {
  private authService: AuthServices = new AuthServices();
  render() {
    return (
      <div className="App">
        <Login authService={this.authService} />
        App
      </div>
    );
  }
}

export default App;
