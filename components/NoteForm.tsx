"use client";

import { useNotesStore } from "@/store/notesStore";
import { useState } from "react";

interface NoteFormProps {
  onClose: () => void;
}

export default function NoteForm({
  onClose,
}: NoteFormProps) {

  const {
    selectedNote,
    addNote,
    updateNote,
    setSelectedNote,
  } = useNotesStore();
  const [title, setTitle] = useState(
    selectedNote?.title ?? ""
  );

  const [content, setContent] = useState(
    selectedNote?.content ?? ""
  );
  const isEditing = selectedNote !== null;
  const handleSave = () => {
    if (!title.trim()) return;

    if (isEditing) {
      updateNote(
        selectedNote.id,
        title,
        content
      );
    } else {
      addNote(title, content);
    }

    setSelectedNote(null);

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          {isEditing
            ? "Edit Note"
            : "New Sticky Note"}
        </h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mb-4 w-full rounded-lg border p-3"
        />

        <textarea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
          className="mb-6 w-full rounded-lg border p-3"
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
          >
            {isEditing
              ? "Save Changes"
              : "Create Note"}
          </button>

        </div>

      </div>

    </div>
  );
}