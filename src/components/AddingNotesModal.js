import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import { baseUrl } from "../config";

const AddingNotesModal = ({ wordId, notes }) => {
  const [notesInput, setNotesInput] = useState();
  const [editNotesInput, setEditNotesInput] = useState(notes);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const addNotesHandler = async (e) => {
    try {
      axios
        .patch(`${baseUrl}/word/${wordId}`, {
          Notizen: editNotesInput ? editNotesInput : notesInput,
        })
        .then((res) => {
          window.location.reload();
        });
    } catch (error) {
      console.log(" delete", error.message);
    }
  };

  return (
    <div>
      {!notes ? (
        <button
          onClick={onOpenModal}
          className="font-medium  bg-indigo-500  text-white px-2 py-1 rounded-md "
        >
          add notes
        </button>
      ) : (
        <button
          onClick={onOpenModal}
          className="font-medium bg-amber-500  text-white px-2 py-1 rounded-md "
        >
          edit notes
        </button>
      )}
      <Modal open={open} onClose={onCloseModal} center>
        {!notes ? (
          <textarea
            name="notes"
            placeholder="add notes"
            className="textarea "
            value={notesInput}
            onChange={(e) => setNotesInput(e.target.value)}
          ></textarea>
        ) : (
          <textarea
            name="notes"
            placeholder="add notes"
            className="textarea "
            value={editNotesInput}
            onChange={(x) => setEditNotesInput(x.target.value)}
          ></textarea>
        )}

        <button className="btn" onClick={addNotesHandler}>
          save
        </button>
      </Modal>
    </div>
  );
};

export default AddingNotesModal;
