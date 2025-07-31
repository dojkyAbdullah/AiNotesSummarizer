// src/components/Notebook.jsx
import HTMLFlipBook from "react-pageflip";
import NotebookPage from "./NotebookPage";

const Notebook = ({ notes }) => {
  return (
    <div className="flex justify-center my-10">
      <HTMLFlipBook width={300} height={400} className="shadow-xl">
        {notes.map((note, i) => (
          <NotebookPage key={note._id} note={note} pageNumber={i + 1} />
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default Notebook;
