import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h2>Meet our team...!!!</h2>
      <User
        name={"Chetan Malpure"}
        design={"Software Developer"}
        location={"Los Angeles"}
        contact={"ckmalpure@gmail.com"}
      />
      <UserClass
        name={"Paresh Malpure"}
        design={"Software Engineer"}
        location={"New York"}
        contact={"paresh08@gmail.com"}
      />
    </div>
  );
};

export default About;
