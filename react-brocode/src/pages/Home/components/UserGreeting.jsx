const UserGreeting = (props) => {
  const welcomeMessage = <p>Welcome, {props.name}</p>;
  const logInInfo = <p>Welcome guest, plz log in first!</p>;

  return props.isLoggedIn ? welcomeMessage : logInInfo;
};

export default UserGreeting;
