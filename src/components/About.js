import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>Meet our team...!!!</h2>

        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass
          name={"Paresh Malpure"}
          design={"Software Engineer"}
          location={"New York"}
          contact={"paresh08@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
