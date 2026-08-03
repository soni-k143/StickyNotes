import EmptyState from "./EmptyState";
import NoteCard from "./NoteCard";
import { useNotesStore } from "@/store/notesStore";
import { useMemo } from "react";

interface NotesGridProps {
  search: string;
}

export default function NotesGrid({ search}: NotesGridProps){
  const notes = useNotesStore((state) => state.notes);
    const filteredNotes = useMemo(() => {
      const query = search.toLowerCase();

      return notes.filter((note) => {
        return (
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query)
        );
      });
    }, [notes, search]);

    const sortedNotes = useMemo(() => {
      return [...filteredNotes].sort((a, b) => {
        if (a.pinned === b.pinned) {
          return b.createdAt - a.createdAt;
        }

        return a.pinned ? -1 : 1;
      });
    }, [filteredNotes]);

    if (filteredNotes.length === 0) {
      return (
        <div className="mx-auto max-w-7xl px-6">
          <EmptyState />
        </div>
      );
    }

  return (
    <div
      className="
        mx-auto
        mt-10
        grid
        max-w-7xl
        grid-cols-1
        gap-6
        px-6
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {sortedNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
}