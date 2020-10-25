import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as AddIcon } from "../../add.svg";
import { ReactComponent as ClearIcon } from "../../clear.svg";
import { button as buttonClassName } from "../../styles";
import * as styles from "./styles";

const Input = ({ description, onChange, createNote, clearNote }) => (
  <div className={styles.inputContainer}>
    <button className={buttonClassName} onClick={clearNote}>
      <ClearIcon />
    </button>
    <textarea
      className={styles.textArea}
      value={description}
      onChange={onChange}
      placeholder="Add a note"
      autoFocus
    />
    <button className={buttonClassName} onClick={createNote}>
      <AddIcon />
    </button>
  </div>
);

Input.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  createNote: PropTypes.func.isRequired,
  clearNote: PropTypes.func.isRequired,
};

export default Input;
