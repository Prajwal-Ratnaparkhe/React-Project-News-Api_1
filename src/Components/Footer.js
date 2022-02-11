import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export const Footer = () => {
 
  return (
    <div> 
      <>
        <footer>
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="row  mt-5">
                  <div className="col-6 col-lg-3">
                    <h2>Company</h2>
                    <ul>
                    <a href="/about">About</a>
                    </ul>
                  </div>

                  <div className="col-6 col-lg-3">
                    <h2>Services</h2>
                    <ul>
                      
                    </ul>
                  </div>

                  <div className="col-6 col-lg-3">
                    <h2>Support</h2>
                    <ul>
                      <li style={{cursor: "pointer",margin:" 1rem 0",listStyle: "none"}}>
                        <a href="/feedback">Feedback</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-lg-3">
                    <h2>Follow us</h2>

                    <div className="row">
                      <div className="col-3 mx-auto">
                        <a
                          href="https://www.linkedin.com/in/prajwal-ratnaparkhe-55817620a/"
                          target="_blank"   rel="noreferrer"
                        >
                          <BsLinkedin size={42} />
                        </a>
                      </div>

                      <div className="col-3 mx-auto">
                        <a
                          href="https://instagram.com/prajwal_ratnaparkhe?utm_medium=copy_link "
                          target="_blank"    rel="noreferrer"
                        >
                          <BsInstagram size={42} />
                        </a>
                      </div>

                      <div className="col-3 mx-auto">
                        <a
                          href="https://www.facebook.com/prajwal.ratnaparkhe"
                          target="_blank"     rel="noreferrer"
                        >
                          <FaFacebook size={42} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="mt-5">
              <p className="main-hero-para text-center w-100">
                Copyright @ Prajwal Ratnaparkhe 2021. All rights reserved .
              </p>
            </div>

            <hr />
          </div>
        </footer>
      </>
    </div>
  );
};
