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
    <>
      {!notes ? (
        <button
          onClick={onOpenModal}
          className="font-medium border-2 border-indigo-500 px-2 py-1 rounded-md  text-slate-800"
        >
          add notes
        </button>
      ) : (
        <button
          onClick={onOpenModal}
          className="font-medium border-2 border-amber-500  px-2 py-1 rounded-md  text-slate-800"
        >
          edit notes
        </button>
      )}
      {open && (
        <Modal open onClose={onCloseModal} center>
          <div className="modal-container">
            {!notes ? (
              <textarea
                name="notes"
                placeholder="add notes"
                className="w-96 h-60 border-2  pl-6 pt-6 focus:outline-none"
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
              ></textarea>
            ) : (
              <textarea
                name="notes"
                placeholder="add notes"
                className="w-96 h-60 border-2 pl-6  pt-6 focus:outline-none "
                value={editNotesInput}
                onChange={(x) => setEditNotesInput(x.target.value)}
              ></textarea>
            )}
            <div>
              <button
                onClick={addNotesHandler}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3"
              >
                Save
              </button>
              <button
                onClick={onCloseModal}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddingNotesModal;
