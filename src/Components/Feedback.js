import React from "react";
import { useState } from "react";
import { db } from "../firebase";

const Feedback = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault();
    setLoader(true);

    db.collection("reactNews")

      .add({
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
      })

      .then(() => {
        setLoader(false);
        alert("Thanks for feedback");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center  ">
          <div className="col-lg-8">
            <div className="feedbackcard ">
              <h1 style={{ textAlign: "center", marginTop: "40px" }}>
                Contact Us{" "}
              </h1>

              <form className="form" onSubmit={handleSubmit}>
                <label>First Name :</label>
                <input
                  placeholder="Enter Your First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />

                <label>Last Name :</label>
                <input
                  placeholder="Enter Your Last Name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />

                <label>Email :</label>
                <input
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>Message :</label>
                <textarea
                  placeholder="Enter Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <button
                  type="submit"
                  style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
