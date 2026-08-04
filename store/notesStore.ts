import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Note } from "@/types/note";

interface NotesState {
  notes: Note[];

  selectedNote: Note | null;

  addNote:
    (
    title: string,
    content: string,
    color: string
    ) => void;

  updateNote: (
    id: string,
    title: string,
    content: string,
    color: string
  ) => void;

  deleteNote: (id: string) => void;

  setSelectedNote: (note: Note | null) => void;

  togglePin: (id: string) => void;
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set) => ({
      notes: [],

      addNote: (title, content, color) => {
        console.log("STORE RECEIVED:", color);

        const newNote = {
          id: crypto.randomUUID(),
          title,
          content,
          createdAt: Date.now(),
          pinned: false,
          color,
        };

        console.log("NEW NOTE:", newNote);

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

      updateNote: (
        id,
        title,
        content,
        color
      ) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? {
                  ...note,
                  title,
                  content,
                  color,
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

      togglePin: (id) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? {
                  ...note,
                  pinned: !note.pinned,
                }
              : note
          ),
        }));
      },
    }),

    {
      name: "sticky-notes-storage",
    }
  )
);