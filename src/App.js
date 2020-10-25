import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation
} from "./graphql/mutations";
import Notes from "./components/Notes";
import * as styles from "./styles";
import Input from "./components/Input";

const initialFormState = { description: "" };

const App = () => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(
      apiData.data.listNotes.items.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    );
  };

  const createNote = async () => {
    if (!formData.description) return;
    await API.graphql({
      query: createNoteMutation,
      variables: { input: formData }
    });
    setNotes([formData, ...notes]);
  };

  const deleteNote = async id => {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } }
    });
  };

  const onInputChange = event => {
    setFormData({ ...formData, description: event.target.value });
  };

  const clearNote = () => {
    setFormData(initialFormState);
  };

  return (
    <main className={styles.mainContainer}>
      <Input
        onChange={onInputChange}
        createNote={createNote}
        description={formData.description}
        clearNote={clearNote}
      />
      <Notes notes={notes} deleteNote={deleteNote} />
      <AmplifySignOut />
    </main>
  );
};

export default withAuthenticator(App);
