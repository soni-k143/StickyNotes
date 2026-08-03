"use client";

import { useState } from "react";

import AddNote from "@/components/AddNote";
import Header from "@/components/Header";
import NoteForm from "@/components/NoteForm";
import NotesGrid from "@/components/NotesGrid";
import { useNotesStore } from "@/store/notesStore";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [search, setSearch] = useState("");
  // Read the action from Zustand
  const addNote = useNotesStore((state) => state.addNote);
  const selectedNote = useNotesStore(
    (state) => state.selectedNote
  );

  const setSelectedNote = useNotesStore(
    (state) => state.setSelectedNote
  );
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <AddNote onClick={() => setIsFormOpen(true)} />
      <div className="mx-auto mt-6 max-w-7xl px-6">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>
      {/* Notice: NotesGrid no longer receives notes as props */}
      <NotesGrid search={search} />

      {(isFormOpen || selectedNote) && (
        <NoteForm
          onClose={() => {
            setIsFormOpen(false);
            setSelectedNote(null);
          }}
        />
      )}
    </main>
  );
}