const Login = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? "Welcome" : "Please log in"}</div>;
};

export default Login;
