import EmptyState from "./EmptyState";
import NoteCard from "./NoteCard";
import { useNotesStore } from "@/store/notesStore";

export default function NotesGrid() {
  const notes = useNotesStore((state) => state.notes);

  if (notes.length === 0) {
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
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
}