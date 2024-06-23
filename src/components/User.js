const User = (props) => {
  const { name, design, location, contact } = props;

  return (
    <div className="user-card">
      <h4>Name: {name}</h4>
      <h4>Designation: {design}</h4>
      <h4>Location: {location}</h4>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
