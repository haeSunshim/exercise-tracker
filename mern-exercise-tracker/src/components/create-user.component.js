import React, { Component } from "react";
import axios from "axios";

export default class CreateUsers extends Component {
  constructor(props) {
    // need 'super' for a constructor in JS
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // in react, you create variable using 'state'
    this.state = {
      username: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);
    // CONNECT BACKEND AND FRONTEND BOOOM
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create Users component</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
