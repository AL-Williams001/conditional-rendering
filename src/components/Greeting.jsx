import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

const Greeting = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <LoggedIn /> : <LoggedOut />}</div>;
};

export default Greeting;
