import { css } from "emotion";

export const notesContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: overlay;
  padding: 12px;
  margin: 0;
  list-style-type: none;
`;

export const note = css`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  padding: 28px 12px;

  &:not(:last-of-type) {
    border-bottom: solid 1px whitesmoke;
  }
`;

export const description = expanded => css`
  word-break: break-word;
  white-space: pre-wrap;
  flex-grow: 1;
  margin: 2px 12px 0;
  font-size: 15px;

  ${!expanded &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `};
`;
