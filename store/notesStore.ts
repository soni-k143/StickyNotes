import { create } from "zustand";
import { Note } from "@/types/note";

interface NotesState {
  notes: Note[];

  addNote: (title: string, content: string) => void;
}

export const useNotesStore = create<NotesState>((set) => ({
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
}));