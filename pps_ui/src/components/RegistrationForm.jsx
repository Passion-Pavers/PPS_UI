const RegistrationForm = ({
  name,
  email,
  phoneNumber,
  password,
  role,
  handleNameChange,
  handleEmailChange,
  handlePhoneNumberChange,
  handlePasswordChange,
  handleRoleChange,
  handleRegistration,
  redirectToLogin,
}) => {
  return (
    <form onSubmit={handleRegistration}>
      <div>
        name
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleNameChange}
        />
      </div>
      <div>
        email
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleEmailChange}
        />
      </div>
      <div>
        phoneNumber
        <input
          type="text"
          value={phoneNumber}
          name="phoneNumber"
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="password"
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        role
        <input
          type="text"
          value={role}
          name="role"
          onChange={handleRoleChange}
        />
      </div>
      <button type="submit">Register</button>
      <h4>Already have account? Please Login</h4>
      <button onClick={redirectToLogin}>Login</button>
    </form>
  );
};

export default RegistrationForm;
