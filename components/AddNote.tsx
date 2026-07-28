"use client";

import { Plus } from "lucide-react";

interface AddNoteProps {
  onClick: () => void;
}

export default function AddNote({ onClick }: AddNoteProps) {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6">
      <button
        onClick={onClick}
        className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-yellow-500
          px-5
          py-3
          font-semibold
          text-white
          shadow-md
          transition
          hover:bg-yellow-600
          hover:shadow-lg
        "
      >
        <Plus size={20} />
        New Note
      </button>
    </div>
  );
}