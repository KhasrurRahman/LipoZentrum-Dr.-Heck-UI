"use client";
import { useState } from "react";

const initialNotes = [
  { id: 1, text: "Patient responded well to initial treatment.", date: "2025-06-01" },
  { id: 2, text: "Allergy to penicillin noted.", date: "2025-06-10" },
  { id: 3, text: "Follow-up scheduled for next week.", date: "2025-06-15" },
];

const PatientNotes = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    setNotes([
      { id: Date.now(), text: newNote, date: new Date().toISOString().slice(0, 10) },
      ...notes,
    ]);
    setNewNote("");
  };

  return (
    <div className="mt-4 bg-white rounded-md p-4">
      <h1 className="text-xl font-semibold mb-4">All Notes / Remarks</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note..."
          className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lamaSky"
        />
        <button
          onClick={handleAddNote}
          className="px-4 py-2 bg-lamaSky text-white rounded-md hover:bg-lamaSky/80 transition"
        >
          Add
        </button>
      </div>
      <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-line max-h-40 overflow-y-auto">
        {notes.length === 0 ? (
          <div className="text-gray-400">No notes yet.</div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="mb-2">
              {note.text} <span className="text-xs text-gray-400">({note.date})</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PatientNotes;