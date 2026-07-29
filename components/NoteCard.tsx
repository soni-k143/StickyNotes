"use client";

import { Trash2 } from "lucide-react";

import { Note } from "@/types/note";
import { useNotesStore } from "@/store/notesStore";
import { Pin, PinOff } from "lucide-react";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({
  note,
}: NoteCardProps) {
  const deleteNote = useNotesStore(
    (state) => state.deleteNote
  );

  const setSelectedNote = useNotesStore(
    (state) => state.setSelectedNote
  );

  const togglePin = useNotesStore(
    (state) => state.togglePin
  );
  return (
    <div
      onClick={() => setSelectedNote(note)}
      className="relative cursor-pointer rounded-xl bg-yellow-200 p-5 shadow-md transition hover:shadow-lg"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteNote(note.id);
        }}
        className="absolute right-3 top-3 rounded-md p-1 text-red-600 hover:bg-red-100"
      >
        <Trash2 size={18} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          togglePin(note.id);
        }}
        className="absolute right-12 top-3 rounded-md p-1 hover:bg-yellow-300"
        title={
          note.pinned
            ? "Unpin"
            : "Pin"
        }
      >
        {note.pinned ? (
          <PinOff size={18} />
        ) : (
          <Pin size={18} />
        )}
      </button>

      <h2 className="pr-8 text-xl font-bold">
        {note.title}
      </h2>

      <p className="mt-3 whitespace-pre-wrap break-words text-gray-700">
        {note.content}
      </p>
    </div>
  );
}