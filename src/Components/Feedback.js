import React from "react";
import { useState } from "react";

const Feedback = () => {
  const [userData, setUserData] = useState({
    First_Name: " ",
    Last_Name: " ",
    Email: " ",
    Msg: " ",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const subbmit = async (event) => {
    event.preventDefault();

    const { First_Name, Last_Name, Email, Msg } = userData;

    if ((First_Name && Last_Name && Email && Msg) !== " ") {
      const res = await fetch(
        "https://react-feedback-news-default-rtdb.firebaseio.com/userFeedback.json",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },

          body: JSON.stringify({
            First_Name,
            Last_Name,
            Email,
            Msg,
          }),
        }
      );

      if (res) {
        setUserData({
          First_Name: " ",
          Last_Name: " ",
          Email: " ",
          Msg: " ",
        });
        alert("Thanks for feedback");
      } else {
        alert("Please fill correct data");
      }
    } else {
      alert("Please fill correct data");
    }
  };

  return (
    <div>
      <>
        <div className="containerz">
          <div className="col-12 col-lg-7">
            <div className="mar">
              <form method="POST">
                <fieldset>
                  <legend className="text-center">
                    <h2>
                      <b>Feedback</b>
                    </h2>
                  </legend>

                  <div class="mb-3">
                    <label for="fname"> First Name : </label>

                    <input
                      type="text"
                      name="First_Name"
                      id="fname"
                      className="form-control"
                      placeholder="Enter your first name"
                      value={userData.First_Name}
                      onChange={postUserData}
                    />
                  </div>
                  <br />
                  <br />

                  <label for="lname"> Last Name : </label>
                  <span>
                    <input
                      type="text"
                      name="Last_Name"
                      id="lname"
                      className="form-control"
                      placeholder="Enter your last name"
                      value={userData.Last_Name}
                      onChange={postUserData}
                    />
                  </span>

                  <br />
                  <br />

                  <label for="email"> Email : </label>
                  <span>
                    <input
                      type="Email"
                      name="Email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={userData.Email}
                      onChange={postUserData}
                    />
                  </span>

                  <br />
                  <br />

                  <label> Message : </label>
                  <span>
                    <textarea
                      rows="4"
                      cols="50"
                      name="Msg"
                      className="form-control"
                      placeholder="Enter your message"
                      value={userData.Msg}
                      onChange={postUserData}
                    ></textarea>
                  </span>

                  <br />
                  <br />

                  <div class="col-md-12 text-center">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={subbmit}
                    >
                      Subbmit
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Feedback;
