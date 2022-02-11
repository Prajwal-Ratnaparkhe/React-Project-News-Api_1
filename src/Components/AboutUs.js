import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div class="about-section">
          <h1>About Us </h1>
          <p>
            The comprehensive news portal covers all the latest developments on
            a real-time basis in the fields of Business, Entertainment, General,
            Health, Science , Sports , Tecchnology and even local city issues,
            offering you a complete perspective of your world. Analysis from
            expert and celebrity columnists give you unique insight into
            developments, helping you stay a step ahead. The website and its
            social handles also feature unique content .
          </p>
        </div>
        <hr />

        <h2 className="about-head">Behind the work</h2>
        <hr />

        <div className="container">
          <div
            style={{
              display: "flex",

              marginRight: "38%",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">
              {" "}
              Devloper & Owner{" "}
            </span >
          </div>

          <div class="about-card">
            <img
              src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
              class="about-card-img-top"
              alt="prajwal ratnaparkhe"
            />
            <div class="about-body">
              <p class="about-text my-3">
                My name is Prajwal Ratnaparkhe . I am currentry pursing B.tech
                degree in MGM's Jawaharlal Nehru Engineering College College in
                Aurangabad, Maharashtra .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
