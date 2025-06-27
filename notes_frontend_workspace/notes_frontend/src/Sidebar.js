import React from "react";

// PUBLIC_INTERFACE
/**
 * Sidebar for navigating notes.
 * @param {Array} notes - Array of note objects {id, title}
 * @param {number} selectedNoteId - ID of the currently selected note.
 * @param {Function} onSelect - Function to select a note.
 */
function Sidebar({ notes, selectedNoteId, onSelect }) {
  return (
    <aside className="kavia-sidebar">
      <div className="sidebar-title">Notes</div>
      <ul className="notes-list" role="listbox" aria-label="Notes List">
        {notes.map((note) => (
          <li
            key={note.id}
            className={`note-item${selectedNoteId === note.id ? " active" : ""}`}
            role="option"
            aria-selected={selectedNoteId === note.id}
            onClick={() => onSelect(note.id)}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                onSelect(note.id);
              }
            }}
          >
            {note.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
