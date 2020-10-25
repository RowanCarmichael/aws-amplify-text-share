import { css } from "emotion";

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const button = css`
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
