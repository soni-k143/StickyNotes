"use client";

import { Trash2 } from "lucide-react";

import { Note } from "@/types/note";
import { useNotesStore } from "@/store/notesStore";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const deleteNote = useNotesStore((state) => state.deleteNote);

  return (
    <div className="relative rounded-xl bg-yellow-200 p-5 shadow-md transition hover:shadow-lg">
      <button
        onClick={() => deleteNote(note.id)}
        className="absolute right-3 top-3 rounded-md p-1 text-red-600 transition hover:bg-red-100"
        title="Delete note"
      >
        <Trash2 size={18} />
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