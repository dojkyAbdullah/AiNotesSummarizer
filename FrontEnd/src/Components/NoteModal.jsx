// src/components/NoteModal.jsx
import { useState } from "react";

const NoteModal = ({ note, onClose, onUpdate, onDelete }) => {
  const [title, setTitle] = useState(note.title || "");
  const [text, setText] = useState(note.text || "");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 w-[400px] rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Note Details</h2>
        <label className="block text-sm font-medium">Title:</label>
        <input
          className="w-full border px-2 py-1 rounded mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block text-sm font-medium">Note:</label>
        <textarea
          className="w-full border px-2 py-1 rounded mb-2"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => onUpdate({ ...note, title, text })}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(note._id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
