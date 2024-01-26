import React from "react";
import logo from "../../assets/logo.svg";
import x from "../../assets/buttonX.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, XButton } from "./HeaderStyle";
import { goToFeed, goToLogin } from "../../routes/Coordinator";
import { deleteStorageItem } from "../../utils/storageManager";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    deleteStorageItem("token")
    goToLogin(navigate)
} 

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
          {location.pathname === "/" ? (
            
            <div></div>
          ) : (
            <XButton onClick={()=> goToFeed(navigate)}><img src={x} alt="logo" /></XButton>
          )}
          <div>
            <img src={logo} alt="logo" />
          </div>
          <Button onClick={logout}>Logout</Button>
        </Container>
      )}
    </>
  );
};

export default Header;
