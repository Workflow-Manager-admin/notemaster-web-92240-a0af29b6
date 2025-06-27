import React from "react";

// PUBLIC_INTERFACE
/**
 * Main content area for displaying and editing a note.
 * @param {object} note - The currently selected note object.
 * @param {function} onChange - Callback when note content changes.
 */
function MainContent({ note, onChange }) {
  if (!note) return <div className="main-content">No note selected.</div>;

  return (
    <main className="main-content">
      <div className="note-title">{note.title}</div>
      <textarea
        className="note-editor"
        value={note.content}
        onChange={e => onChange(e.target.value)}
        aria-label="Edit note"
      />
    </main>
  );
}

export default MainContent;
