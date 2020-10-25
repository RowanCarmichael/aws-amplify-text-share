import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";
import Note, { NotePropType } from "./Note";

const Notes = ({ notes, deleteNote }) => (
  <ul className={styles.notesContainer}>
    {notes.map(note => (
      <Note
        key={note.id || note.description}
        {...note}
        deleteNote={deleteNote}
      />
    ))}
  </ul>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(NotePropType)),
  deleteNote: PropTypes.func.isRequired,
};

export default Notes;
