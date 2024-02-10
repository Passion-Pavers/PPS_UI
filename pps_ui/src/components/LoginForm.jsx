const LoginForm = ({
  userName,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleLogin,
  redirectToRegister,
}) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={userName}
          name="Username"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">login</button>
      <h4>Don't have account? Please Register</h4>
      <button onClick={redirectToRegister}>Register</button>
    </form>
  );
};

export default LoginForm;
