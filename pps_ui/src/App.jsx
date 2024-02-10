import { useState, useEffect } from "react";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import loginService from "./services/login";
import ppAppsService from "./services/ppapps";
import PpHome from "./components/PpHome";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayRegistration, setDisplayRegistration] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const loginResponse = await loginService.login({
        userName,
        password,
      });
      const user = loginResponse?.result;
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      console.log("Login success- Token from login", user);
      //noteService.setToken(user.token)
      ppAppsService.setToken(user.token);
      setUser(user);
      setUserName("");
      setPassword("");
    } catch (exception) {
      setMessage("Wrong credentials");
      setError(true);
      setTimeout(() => {
        setMessage(null);
        setError(false);
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
    setDisplayLogin(true);
    setDisplayRegistration(false);
  };

  const handleRegistration = async (event) => {
    event.preventDefault();

    try {
      const registerResponse = await loginService.register({
        name,
        email,
        phoneNumber,
        password,
        role,
      });
      const success = registerResponse?.isSuccess;
      console.log("Registration success :", success);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setRole("");
      if (success) {
        setMessage("Registration Successful");
        setError(false);
        setTimeout(() => {
          setMessage(null);
          setError(false);
        }, 5000);
      }
    } catch (exception) {
      setMessage("Registration Failed");
      setError(true);
      setTimeout(() => {
        setMessage(null);
        setError(false);
      }, 5000);
    }
  };

  const redirectToRegister = () => {
    setDisplayRegistration(true);
    setDisplayLogin(false);
  };

  const redirectToLogin = () => {
    setDisplayRegistration(false);
    setDisplayLogin(true);
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      console.log("loggedUserJSON from localStorage", user);
      //noteService.setToken(user.token)
      ppAppsService.setToken(user.token);
    }
  }, []);

  // const addNote = (event) => {
  //   event.preventDefault()
  //   const noteObject = {
  //     content: newNote,
  //     important: Math.random() < 0.5,
  //   }
  //     noteService
  //     .create(noteObject)
  //       .then(returnedNote => {
  //       //setNotes(notes.concat(returnedNote))
  //       setNewNote('')
  //       getNotesEffect();
  //     })
  // }

  // const handleNoteChange = (event) => {
  //   setNewNote(event.target.value)
  // }

  // const toggleImportance = (id) => {
  //   const url = `http://localhost:3001/notes/${id}`
  //   const note = notes.find(n => n.id === id)
  //   const changedNote = { ...note, important: !note.important }

  //   noteService
  //   .update(id, changedNote)
  //     .then(returnedNote => {
  //     setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  //   })
  //   .catch(error => {
  //     setErrorMessage(
  //       `Note '${note.content}' was already removed from server`
  //     )
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //     setNotes(notes.filter(n => n.id !== id))
  //   })
  // }

  // const notesToShow = showAll
  //   ? notes
  //   : notes.filter(note => note.important)

  const logoutButton = () => <button onClick={handleLogout}>Logout</button>;

  return (
    <div>
      <h2>Passion Paver Services</h2>
      <Notification message={message} error={error} />
      {!user && displayLogin && (
        <LoginForm
          userName={userName}
          password={password}
          handleUsernameChange={({ target }) => setUserName(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleLogin={handleLogin}
          redirectToRegister={redirectToRegister}
        />
      )}
      {!user && displayRegistration && (
        <RegistrationForm
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          password={password}
          role={role}
          handleNameChange={({ target }) => setName(target.value)}
          handleEmailChange={({ target }) => setEmail(target.value)}
          handlePhoneNumberChange={({ target }) => setPhoneNumber(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleRoleChange={({ target }) => setRole(target.value)}
          handleRegistration={handleRegistration}
          redirectToLogin={redirectToLogin}
        />
      )}
      {user && (
        <div>
          <p>{user?.user?.name} logged in</p>
          <PpHome />
        </div>
      )}
      {user && logoutButton()}
      <Footer />
    </div>
  );
};

export default App;
