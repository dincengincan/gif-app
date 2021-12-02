import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { Container, StyledButton } from "./Nav.styles";

const Nav: FC = () => {
  const navigate = useNavigate();

  const handleRedirection = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <StyledButton onClick={() => handleRedirection("/")}>Home</StyledButton>
      <StyledButton onClick={() => handleRedirection("favourites")}>
        Favourites
      </StyledButton>
    </Container>
  );
};

export default Nav;
