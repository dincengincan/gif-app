import styled from "styled-components";

export const GifListContainer = styled.div`
  padding: 0px 20px;

  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  fav: boolean;
}

export const FavButton = styled.button<Props>`
  background-color: ${({ fav }) => (fav ? "red" : "gray")};
  border: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ fav }) => (fav ? "pink" : "lightgray")};
  }
`;

export const GifContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: lightgray;

  padding: 20px;
  margin: 20px;
`;
