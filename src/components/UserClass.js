import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, design, location, contact } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h3>Count : {count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h4>Name: {name}</h4>
        <h4>Designation: {design}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
