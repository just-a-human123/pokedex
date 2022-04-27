import { css } from "@emotion/css";

export const PokeCardStyle = css`
  width: 300px;
  border-radius: 50px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.75);
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: lightgrey;
  cursor: grab;
  &:hover {
    scale: 1.1;
    opacity: 0.9;
  }
`;

export const PokeDexStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
