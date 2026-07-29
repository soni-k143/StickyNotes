import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Note } from "@/types/note";

interface NotesState {
  notes: Note[];

  selectedNote: Note | null;

  addNote: (title: string, content: string) => void;

  updateNote: (
    id: string,
    title: string,
    content: string
  ) => void;

  deleteNote: (id: string) => void;

  setSelectedNote: (note: Note | null) => void;
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

      selectedNote: null,

      updateNote: (id, title, content) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? {
                  ...note,
                  title,
                  content,
                }
              : note
          ),
        }));
      },
      setSelectedNote: (note) => {
        set({
          selectedNote: note,
        });
      },
    }),

    {
      name: "sticky-notes-storage",
    }
  )
);