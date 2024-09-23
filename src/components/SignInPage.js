import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./SigninCss.css";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <div className="d-flex">
        <div className="left-side">
          <img src="https://www.freevector.com/uploads/vector/preview/12939/FreeVector-Travel-Background.jpg" />
        </div>

        <div className="center-container">
          <Card className="card">
            <Card.Body>
              <Card.Title className="title">Sign in</Card.Title>

              <div className="sign-details">
                <div>
                  <label>Email</label>
                  <input type="email"></input>
                </div>
                <div>
                  <label>UserName</label>
                  <input type="name"></input>
                </div>
                <div>
                  <label>Password</label>
                  <input type="password"></input>
                </div>
              </div>
              <Button variant="primary" className="bttn">
                Sing in
              </Button>
              <div>
                <Link>if alreday have account log in</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
