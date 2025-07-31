// src/components/StickyNote.jsx
import Draggable from "react-draggable";

const StickyNote = ({ note, onClick }) => {
  return (
    <Draggable>
      <div
        className="w-48 h-48 p-3 bg-yellow-200 rounded-lg shadow-lg cursor-pointer rotate-[2deg] transition hover:scale-105"
        onClick={() => onClick(note)}
      >
        <h3 className="font-bold text-sm mb-1 truncate">{note.title || 'Untitled'}</h3>
        <p className="text-xs overflow-hidden line-clamp-5">
          {note.summary || 'No summary available'}
        </p>
      </div>
    </Draggable>
  );
};

export default StickyNote;
