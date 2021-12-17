import React from "react";

import styled from "styled-components";
import { Button } from "../styles";

function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
 
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
    
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;





export default Navbar;