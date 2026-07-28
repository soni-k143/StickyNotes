"use client";

import { useState } from "react";

interface NoteFormProps {
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}

export default function NoteForm({
  onClose,
  onSave,
}: NoteFormProps) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = () => {

    if (!title.trim()) return;

    onSave(title, content);

    setTitle("");
    setContent("");

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          New Sticky Note
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
            onClick={handleCreate}
            className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
          >
            Create Note
          </button>

        </div>

      </div>

    </div>
  );
}