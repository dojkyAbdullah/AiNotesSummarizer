// src/components/NotebookPage.jsx
const NotebookPage = ({ note, pageNumber }) => {
  return (
    <div className="bg-white p-4 border border-gray-300">
      <h2 className="text-lg font-bold mb-2">{note.title}</h2>
      <p className="text-sm mb-4">{note.summary}</p>
      <p className="text-right text-xs text-gray-400">Page {pageNumber}</p>
    </div>
  );
};

export default NotebookPage;
// src/components/Notebook.jsx