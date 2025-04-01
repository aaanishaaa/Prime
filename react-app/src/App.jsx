import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    if (!name || !email) {
      alert("Please fill all the details");
    } else {
      setEmail(e.target.userEmail.value);
      setName(e.target.userName.value);
      setIsSubmitted(true);
    }
  };
  return (
    <>
      {IsSubmitted == true ? (
        <section>
          <Card name={name} email={email} />
        </section>
      ) : (
        <form onSubmit={handleSubmit}>
          <section>
            <div>
              <label> Enter your Name</label>
              <input
                name="userName"
                placeholder="Type your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label> Enter your Email</label>
              <input
                name="userEmail"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button>Submit</button>
          </section>
        </form>
      )}
    </>
  );
}

export default App;
