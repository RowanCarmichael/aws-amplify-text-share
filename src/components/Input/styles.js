import { css } from "emotion";

export const inputContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  box-sizing: border-box;
  background-color: #ff9900;
  padding: 12px;
  width: 100%;
`;

export const textArea = css`
  font-family: inherit;
  width: fill-available;
  resize: none;
  border: none;
  font-size: 15px;
  height: 100px;
  max-width: 584px;
  padding: 8px;

  &:focus {
    outline: solid 1px black;
  }
`;
