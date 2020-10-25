import React, { useState } from "react";
import PropTypes from "prop-types"
import { ReactComponent as CopyIcon } from "../../copy.svg";
import { ReactComponent as DeleteIcon } from "../../delete.svg";
import * as styles from "./styles";
import { button as buttonClassName } from "./../../styles";

const Note = ({ id, description, deleteNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const copyNote = () => {
    navigator.clipboard.writeText(description);
  };

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className={styles.note}>
      <button className={buttonClassName} onClick={() => deleteNote(id)}>
        <DeleteIcon />
      </button>
      <p
        className={styles.description(isExpanded)}
        onDoubleClick={copyNote}
        onClick={toggleIsExpanded}
      >
        {description}
      </p>
      <button className={buttonClassName} onClick={() => copyNote(description)}>
        <CopyIcon />
      </button>
    </li>
  );
};

export const NotePropType = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Note.propTypes = {
  ...NotePropType,
  deleteNote: PropTypes.func.isRequired,
};

export default Note;
