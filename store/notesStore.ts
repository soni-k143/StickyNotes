import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Note } from "@/types/note";

interface NotesState {
  notes: Note[];

  addNote: (title: string, content: string) => void;

  deleteNote: (id: string) => void;
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set) => ({
      notes: [],

      addNote: (title, content) => {
        const newNote: Note = {
          id: crypto.randomUUID(),
          title,
          content,
          color: "#FDE68A",
          pinned: false,
          createdAt: Date.now(),
        };

        set((state) => ({
          notes: [...state.notes, newNote],
        }));
      },
      
      deleteNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        }));
      },
    }),
    {
      name: "sticky-notes-storage",
    }
  )
);