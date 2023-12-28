import { useState } from "react";
import "./App.css";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Please enter both Firstname and Lastname");
      setIsSubmitted(false);
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      {isSubmitted ? (
        <div>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div>
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                placeholder="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                placeholder="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>

          <p>Full Name: {`${firstName} ${lastName}`}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              placeholder="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              placeholder="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
