import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "Dummy Name",
        design: "Dummy Role",
        location: "Dummy Location",
        Contact: "Dummy Contact",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    this.timer = setInterval(() => {
      console.log("Interval is called...");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component is unmounted...");
  }

  render() {
    const { name, company, location, blog, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h4>Name: {name}</h4>
        <h4>Designation: {company}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: {blog}</h4>
      </div>
    );
  }
}

export default UserClass;
