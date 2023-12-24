import React from "react";
import logo from "../../assets/logo.svg";
import x from "../../assets/buttonX.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, XButton } from "./HeaderStyle";
import { goToLogin } from "../../routes/Coordinator";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/signup" ? (
        <Container>
          <div></div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <Button onClick={() => goToLogin(navigate)}>Entrar</Button>
        </Container>
      ) : (
        <Container>
          {location.pathname === "/posts" ? (
            
            <div></div>
          ) : (
            <XButton onClick={()=> navigate(-1)}><img src={x} alt="logo" /></XButton>
          )}
          <div>
            <img src={logo} alt="logo" />
          </div>
          <Button onClick={() => goToLogin(navigate)}>Logout</Button>
        </Container>
      )}
    </>
  );
};

export default Header;
