"use client";

import { useState } from "react";

import AddNote from "@/components/AddNote";
import Header from "@/components/Header";
import NoteForm from "@/components/NoteForm";
import NotesGrid from "@/components/NotesGrid";
import { useNotesStore } from "@/store/notesStore";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Read the action from Zustand
  const addNote = useNotesStore((state) => state.addNote);

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <AddNote onClick={() => setIsFormOpen(true)} />

      {/* Notice: NotesGrid no longer receives notes as props */}
      <NotesGrid />

      {isFormOpen && (
        <NoteForm
          onClose={() => setIsFormOpen(false)}
          onSave={(title, content) => {
            addNote(title, content);
            setIsFormOpen(false);
          }}
        />
      )}
    </main>
  );
}